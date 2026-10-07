import { NextRequest, NextResponse } from 'next/server';
import { initializeFlutterwaveTransaction } from '@/lib/payments/flutterwave';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, amount, currency, orderNumber, customerName, phoneNumber, redirectUrl } = body;

    if (!email || !amount || !orderNumber) {
      return NextResponse.json(
        { error: 'Email, amount, and orderNumber are required to initialize Flutterwave.' },
        { status: 400 }
      );
    }

    const result = await initializeFlutterwaveTransaction({
      email,
      amount: Number(amount),
      currency: currency || 'USD',
      orderNumber,
      customerName,
      phoneNumber,
      redirectUrl,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to initialize Flutterwave transaction.' },
        { status: 502 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('[API Flutterwave Init Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error initializing Flutterwave.' },
      { status: 500 }
    );
  }
}
