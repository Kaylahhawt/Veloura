import { NextRequest, NextResponse } from 'next/server';
import { verifyPaystackTransaction } from '@/lib/payments/paystack';
import { updateServerOrderStatus, fetchOrderFromServer } from '@/lib/database/orders';
import { sendMailgunEmail } from '@/lib/email/mailgun';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { reference, orderNumber } = body;

    if (!reference) {
      return NextResponse.json(
        { error: 'Transaction reference is required for verification.' },
        { status: 400 }
      );
    }

    const verification = await verifyPaystackTransaction(reference);

    if (!verification.success || verification.status !== 'success') {
      return NextResponse.json(
        {
          success: false,
          status: verification.status,
          error: verification.error || 'Payment verification failed or was abandoned.',
        },
        { status: 400 }
      );
    }

    // If orderNumber is provided, ensure status is marked as Processing and trigger confirmation email
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
          console.error('[Paystack Verify Email Error]', err);
        }
      }
    }

    return NextResponse.json({
      success: true,
      verification,
      message: 'Transaction successfully verified. Billed neutrally as VL Retail.',
    });
  } catch (error: any) {
    console.error('[API Paystack Verify Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error verifying Paystack payment.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const reference = req.nextUrl.searchParams.get('reference');
  if (!reference) {
    return NextResponse.json({ error: 'Missing reference query param.' }, { status: 400 });
  }

  const verification = await verifyPaystackTransaction(reference);
  return NextResponse.json(verification);
}
