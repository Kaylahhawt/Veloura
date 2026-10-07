export interface GoogleUserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  googleSub: string;
}

export function getGoogleClientId(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    process.env.GOOGLE_CLIENT_ID ||
    undefined
  );
}

export function getGoogleClientSecret(): string | undefined {
  return process.env.GOOGLE_CLIENT_SECRET || undefined;
}

export function isGoogleOAuthConfigured(): boolean {
  const clientId = getGoogleClientId();
  const clientSecret = getGoogleClientSecret();

  if (!clientId || !clientSecret) return false;
  if (clientId.includes('your-google-client-id') || clientSecret.includes('your-google-client-secret')) {
    return false;
  }
  return true;
}

/**
 * Builds the official Google OAuth 2.0 authorization URL
 */
export function getGoogleOAuthUrl(redirectUri: string, state?: string): string {
  const clientId = getGoogleClientId();
  if (!clientId) {
    throw new Error('Google Client ID is not configured.');
  }

  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const options = {
    redirect_uri: redirectUri,
    client_id: clientId,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'select_account',
    scope: [
      'openid',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: state || 'veloura_oauth_state',
  };

  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
}

/**
 * Exchanges Google authorization code for access & ID tokens
 */
export async function exchangeGoogleCodeForTokens(
  code: string,
  redirectUri: string
): Promise<{ access_token: string; id_token?: string; expires_in: number }> {
  const clientId = getGoogleClientId();
  const clientSecret = getGoogleClientSecret();

  if (!clientId || !clientSecret) {
    throw new Error('Google OAuth credentials not configured in environment.');
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const data = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error_description || data.error || 'Failed to exchange authorization code with Google');
  }

  return data;
}

/**
 * Fetches user profile from Google's UserInfo API
 */
export async function getGoogleUserInfo(accessToken: string): Promise<GoogleUserProfile> {
  const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to retrieve user profile from Google.');
  }

  const data = await response.json();

  return {
    id: `usr-google-${data.sub.substring(0, 10)}`,
    name: data.name || data.given_name || 'Google User',
    email: data.email,
    avatarUrl: data.picture,
    googleSub: data.sub,
  };
}
