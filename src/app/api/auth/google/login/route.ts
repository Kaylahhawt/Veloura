import { NextRequest, NextResponse } from 'next/server';
import { isGoogleOAuthConfigured, getGoogleOAuthUrl } from '@/lib/auth/google';

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const redirectUri = `${origin}/api/auth/google/callback`;
  const returnTo = req.nextUrl.searchParams.get('returnTo') || '/account';

  if (!isGoogleOAuthConfigured()) {
    // If not configured, redirect back to modal/page with informative parameter
    return NextResponse.redirect(
      new URL(`${returnTo}?auth_error=google_config_required`, req.url)
    );
  }

  try {
    const state = Buffer.from(JSON.stringify({ returnTo, timestamp: Date.now() })).toString('base64');
    const googleAuthUrl = getGoogleOAuthUrl(redirectUri, state);
    return NextResponse.redirect(googleAuthUrl);
  } catch (error: any) {
    console.error('[Google OAuth Init Error]', error);
    return NextResponse.redirect(
      new URL(`${returnTo}?auth_error=google_init_failed`, req.url)
    );
  }
}
