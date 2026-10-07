import { NextRequest, NextResponse } from 'next/server';
import { verifyFlutterwaveTransaction } from '@/lib/payments/flutterwave';
import { updateServerOrderStatus } from '@/lib/database/orders';
import { sendMailgunEmail } from '@/lib/email/mailgun';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { transactionId, orderNumber } = body;

    if (!transactionId) {
      return NextResponse.json(
        { error: 'Transaction ID or reference is required for verification.' },
        { status: 400 }
      );
    }

    const verification = await verifyFlutterwaveTransaction(transactionId);

    if (!verification.success || verification.status !== 'successful') {
      return NextResponse.json(
        {
          success: false,
          status: verification.status,
          error: verification.error || 'Payment verification failed or was cancelled.',
        },
        { status: 400 }
      );
    }

    if (orderNumber) {
      const order = await updateServerOrderStatus(orderNumber, 'Processing');
      if (order) {
        try {
          await sendMailgunEmail({
            to: order.shippingAddress.email,
            template: 'order_confirmation',
            order,
          });
        } catch (err) {
          console.error('[Flutterwave Verify Email Error]', err);
        }
      }
    }

    return NextResponse.json({
      success: true,
      verification,
      message: 'Transaction successfully verified. Billed neutrally as VL Retail.',
    });
  } catch (error: any) {
    console.error('[API Flutterwave Verify Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error verifying Flutterwave payment.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const transactionId =
    req.nextUrl.searchParams.get('transaction_id') ||
    req.nextUrl.searchParams.get('tx_ref');

  if (!transactionId) {
    return NextResponse.json(
      { error: 'Missing transaction_id or tx_ref query parameter.' },
      { status: 400 }
    );
  }

  const verification = await verifyFlutterwaveTransaction(transactionId);
  return NextResponse.json(verification);
}
