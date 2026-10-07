import { NextRequest, NextResponse } from 'next/server';
import { exchangeGoogleCodeForTokens, getGoogleUserInfo } from '@/lib/auth/google';
import { sendMailgunEmail } from '@/lib/email/mailgun';

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const redirectUri = `${origin}/api/auth/google/callback`;
  const code = req.nextUrl.searchParams.get('code');
  const error = req.nextUrl.searchParams.get('error');
  const stateRaw = req.nextUrl.searchParams.get('state');

  let returnTo = '/account';
  if (stateRaw) {
    try {
      const parsed = JSON.parse(Buffer.from(stateRaw, 'base64').toString('utf-8'));
      if (parsed.returnTo) returnTo = parsed.returnTo;
    } catch {
      // ignore
    }
  }

  if (error) {
    console.warn('[Google OAuth Callback Error]', error);
    return NextResponse.redirect(new URL(`${returnTo}?auth_error=${encodeURIComponent(error)}`, req.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL(`${returnTo}?auth_error=missing_code`, req.url));
  }

  try {
    // 1. Exchange code for Google tokens
    const tokenData = await exchangeGoogleCodeForTokens(code, redirectUri);

    // 2. Fetch real Google user profile
    const googleProfile = await getGoogleUserInfo(tokenData.access_token);

    console.log(`[Google OAuth Success] Authenticated ${googleProfile.email} (${googleProfile.name})`);

    // 3. Create session payload
    const sessionPayload = {
      id: googleProfile.id,
      name: googleProfile.name,
      email: googleProfile.email,
      avatarUrl: googleProfile.avatarUrl,
      googleSub: googleProfile.googleSub,
      authProvider: 'google',
      savedAddresses: [
        {
          fullName: googleProfile.name,
          email: googleProfile.email,
          phone: '',
          addressLine1: '',
          city: '',
          state: '',
          postalCode: '',
          country: 'United States',
          discreetPackagingConsent: true,
        },
      ],
      loggedInAt: new Date().toISOString(),
    };

    // 4. Dispatch Welcome & Privilege Voucher transactional email
    try {
      await sendMailgunEmail({
        to: googleProfile.email,
        template: 'account_welcome',
        customerName: googleProfile.name,
      });
    } catch (err) {
      console.error('[Google Welcome Email Dispatch Error]', err);
    }

    // 5. Set session cookie and redirect to destination
    const response = NextResponse.redirect(new URL(`${returnTo}?auth_success=google`, req.url));

    response.cookies.set('veloura_session', JSON.stringify(sessionPayload), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (err: any) {
    console.error('[Google OAuth Exchange Exception]', err);
    return NextResponse.redirect(
      new URL(`${returnTo}?auth_error=${encodeURIComponent(err.message || 'oauth_exchange_failed')}`, req.url)
    );
  }
}
