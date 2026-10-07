import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.MAILGUN_API_KEY || '';
  const domain = process.env.MAILGUN_DOMAIN || '';
  const host = process.env.MAILGUN_HOST || 'api.mailgun.net';
  const from = process.env.MAILGUN_FROM || '';

  const isConfigured = Boolean(apiKey && domain && !apiKey.includes('xxxxxxxx'));
  const isSandbox = domain.toLowerCase().includes('sandbox');

  return NextResponse.json({
    configured: isConfigured,
    domain: domain ? (domain.length > 25 ? domain.substring(0, 12) + '...' + domain.slice(-6) : domain) : '',
    fullDomain: domain || '',
    host,
    from: from || `Veloura Concierge <postmaster@${domain || 'veloura.luxury'}>`,
    isSandbox,
  });
}
