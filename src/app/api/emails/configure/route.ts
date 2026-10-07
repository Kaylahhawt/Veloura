import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { apiKey, domain, host, from } = await req.json();

    if (!apiKey || !domain) {
      return NextResponse.json(
        { error: 'Both Mailgun API Key and Mailgun Domain are required.' },
        { status: 400 }
      );
    }

    const cleanApiKey = apiKey.trim();
    const cleanDomain = domain.trim();
    const cleanHost = host ? host.trim() : 'api.mailgun.net';
    const cleanFrom = from && from.trim() ? from.trim() : `Veloura Intimates Concierge <postmaster@${cleanDomain}>`;

    // Write / update .env.local
    const envPath = path.join(process.cwd(), '.env.local');
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    const lines = envContent.split('\n');
    let hasApiKey = false;
    let hasDomain = false;
    let hasHost = false;
    let hasFrom = false;

    const updatedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('MAILGUN_API_KEY=')) {
        hasApiKey = true;
        return `MAILGUN_API_KEY="${cleanApiKey}"`;
      }
      if (trimmed.startsWith('MAILGUN_DOMAIN=')) {
        hasDomain = true;
        return `MAILGUN_DOMAIN="${cleanDomain}"`;
      }
      if (trimmed.startsWith('MAILGUN_HOST=')) {
        hasHost = true;
        return `MAILGUN_HOST="${cleanHost}"`;
      }
      if (trimmed.startsWith('MAILGUN_FROM=')) {
        hasFrom = true;
        return `MAILGUN_FROM="${cleanFrom}"`;
      }
      return line;
    });

    if (!hasApiKey) updatedLines.push(`MAILGUN_API_KEY="${cleanApiKey}"`);
    if (!hasDomain) updatedLines.push(`MAILGUN_DOMAIN="${cleanDomain}"`);
    if (!hasHost) updatedLines.push(`MAILGUN_HOST="${cleanHost}"`);
    if (!hasFrom) updatedLines.push(`MAILGUN_FROM="${cleanFrom}"`);

    fs.writeFileSync(envPath, updatedLines.join('\n').trim() + '\n', 'utf8');

    // Update in-memory process environment variables
    process.env.MAILGUN_API_KEY = cleanApiKey;
    process.env.MAILGUN_DOMAIN = cleanDomain;
    process.env.MAILGUN_HOST = cleanHost;
    process.env.MAILGUN_FROM = cleanFrom;

    // Optional: test connection to Mailgun domains endpoint
    let testStatus = 'saved';
    let testMessage = 'Mailgun credentials saved to .env.local.';
    try {
      const authHeader = Buffer.from(`api:${cleanApiKey}`).toString('base64');
      const testRes = await fetch(`https://${cleanHost}/v3/domains/${cleanDomain}`, {
        headers: { Authorization: `Basic ${authHeader}` },
      });
      if (testRes.ok) {
        testStatus = 'verified';
        testMessage = 'Connected and verified successfully with Mailgun!';
      } else {
        const errorJson = await testRes.json().catch(() => ({}));
        testStatus = 'unverified';
        testMessage = errorJson.message || `Mailgun API returned HTTP ${testRes.status}`;
      }
    } catch (netErr: any) {
      testMessage = `Credentials saved, but Mailgun connectivity test timed out: ${netErr.message}`;
    }

    return NextResponse.json({
      success: true,
      message: 'Mailgun configuration saved successfully to .env.local.',
      testStatus,
      testMessage,
      domain: cleanDomain,
      isSandbox: cleanDomain.toLowerCase().includes('sandbox'),
    });
  } catch (error: any) {
    console.error('[Save Mailgun Config Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save Mailgun configuration.' },
      { status: 500 }
    );
  }
}
