import { NextRequest, NextResponse } from 'next/server';
import { isGoogleOAuthConfigured, getGoogleClientId } from '@/lib/auth/google';
import { isSupabaseConfigured } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const isGoogleConfigured = isGoogleOAuthConfigured();
  const clientId = getGoogleClientId();

  return NextResponse.json({
    googleConfigured: isGoogleConfigured,
    supabaseConfigured: isSupabaseConfigured,
    googleClientIdConfigured: Boolean(clientId && !clientId.includes('your-google-client-id')),
    callbackUrls: {
      directGoogleCallback: `${origin}/api/auth/google/callback`,
      supabaseGoogleCallback: `${origin}/auth/callback`,
    },
    message: isGoogleConfigured
      ? 'Google Cloud Console OAuth 2.0 is active and ready for live authentication.'
      : 'Google OAuth credentials missing or using placeholders in .env.local.',
  });
}
