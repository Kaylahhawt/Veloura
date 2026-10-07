import { NextRequest, NextResponse } from 'next/server';
import { initializePaystackTransaction } from '@/lib/payments/paystack';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, amount, orderNumber, callbackUrl, metadata } = body;

    if (!email || !amount || !orderNumber) {
      return NextResponse.json(
        { error: 'Email, amount, and orderNumber are required to initialize Paystack.' },
        { status: 400 }
      );
    }

    const result = await initializePaystackTransaction({
      email,
      amount: Number(amount),
      orderNumber,
      callbackUrl,
      metadata,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to initialize Paystack transaction.' },
        { status: 502 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('[API Paystack Init Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error initializing Paystack.' },
      { status: 500 }
    );
  }
}
