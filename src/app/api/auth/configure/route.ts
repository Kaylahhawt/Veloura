import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { googleClientId, googleClientSecret } = await req.json();

    if (!googleClientId || !googleClientSecret) {
      return NextResponse.json(
        { error: 'Both Google Client ID and Client Secret are required.' },
        { status: 400 }
      );
    }

    const envPath = path.join(process.cwd(), '.env.local');
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    const lines = envContent.split('\n');
    let hasClientId = false;
    let hasClientSecret = false;
    let hasNextPublic = false;

    const updatedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('GOOGLE_CLIENT_ID=')) {
        hasClientId = true;
        return `GOOGLE_CLIENT_ID="${googleClientId.trim()}"`;
      }
      if (trimmed.startsWith('GOOGLE_CLIENT_SECRET=')) {
        hasClientSecret = true;
        return `GOOGLE_CLIENT_SECRET="${googleClientSecret.trim()}"`;
      }
      if (trimmed.startsWith('NEXT_PUBLIC_GOOGLE_CLIENT_ID=')) {
        hasNextPublic = true;
        return `NEXT_PUBLIC_GOOGLE_CLIENT_ID="${googleClientId.trim()}"`;
      }
      return line;
    });

    if (!hasClientId) updatedLines.push(`GOOGLE_CLIENT_ID="${googleClientId.trim()}"`);
    if (!hasClientSecret) updatedLines.push(`GOOGLE_CLIENT_SECRET="${googleClientSecret.trim()}"`);
    if (!hasNextPublic) updatedLines.push(`NEXT_PUBLIC_GOOGLE_CLIENT_ID="${googleClientId.trim()}"`);

    fs.writeFileSync(envPath, updatedLines.join('\n').trim() + '\n', 'utf8');

    // Update in-memory process environment variables
    process.env.GOOGLE_CLIENT_ID = googleClientId.trim();
    process.env.GOOGLE_CLIENT_SECRET = googleClientSecret.trim();
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID = googleClientId.trim();

    return NextResponse.json({
      success: true,
      message: 'Google Cloud Console OAuth credentials saved successfully to .env.local',
    });
  } catch (error: any) {
    console.error('[Save Google Auth Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Failed to persist Google credentials.' },
      { status: 500 }
    );
  }
}
