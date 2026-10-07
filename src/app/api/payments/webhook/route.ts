import { NextRequest, NextResponse } from 'next/server';
import { verifyPaystackWebhookSignature } from '@/lib/payments/paystack';
import { verifyFlutterwaveWebhookSecret } from '@/lib/payments/flutterwave';
import { updateServerOrderStatus, fetchOrderFromServer } from '@/lib/database/orders';
import { sendMailgunEmail } from '@/lib/email/mailgun';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const paystackSignature = req.headers.get('x-paystack-signature');
    const flutterwaveSecretHash = req.headers.get('verif-hash');

    let bodyJson: any = {};
    try {
      bodyJson = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload received.' }, { status: 400 });
    }

    // 1. Check if this is a Paystack Webhook
    if (paystackSignature) {
      const isValid = verifyPaystackWebhookSignature(rawBody, paystackSignature);
      if (!isValid) {
        console.warn('[Webhook Warning] Invalid Paystack signature received');
        return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 401 });
      }

      const event = bodyJson.event;
      const data = bodyJson.data;

      console.log(`[Paystack Webhook Received] Event: ${event}, Ref: ${data?.reference}`);

      if (event === 'charge.success') {
        const orderNumber = data.metadata?.orderNumber;
        const reference = data.reference;

        const targetIdentifier = orderNumber || reference;
        if (targetIdentifier) {
          const updatedOrder = await updateServerOrderStatus(targetIdentifier, 'Processing');
          if (updatedOrder) {
            await sendMailgunEmail({
              to: updatedOrder.shippingAddress.email,
              template: 'order_confirmation',
              order: updatedOrder,
            });
            console.log(`[Paystack Webhook] Order ${updatedOrder.orderNumber} confirmed & email dispatched.`);
          }
        }
      }

      return NextResponse.json({ status: 'ok', source: 'paystack' }, { status: 200 });
    }

    // 2. Check if this is a Flutterwave Webhook
    if (flutterwaveSecretHash || bodyJson.event?.startsWith('charge.completed')) {
      const isValid = verifyFlutterwaveWebhookSecret(flutterwaveSecretHash);
      if (!isValid) {
        console.warn('[Webhook Warning] Invalid Flutterwave verif-hash received');
        return NextResponse.json({ error: 'Invalid webhook secret hash.' }, { status: 401 });
      }

      const event = bodyJson.event;
      const data = bodyJson.data;

      console.log(`[Flutterwave Webhook Received] Event: ${event}, TxRef: ${data?.tx_ref}`);

      if (event === 'charge.completed' && data?.status === 'successful') {
        const txRef = data.tx_ref;
        if (txRef) {
          const updatedOrder = await updateServerOrderStatus(txRef, 'Processing');
          if (updatedOrder) {
            await sendMailgunEmail({
              to: updatedOrder.shippingAddress.email,
              template: 'order_confirmation',
              order: updatedOrder,
            });
            console.log(`[Flutterwave Webhook] Order ${updatedOrder.orderNumber} confirmed & email dispatched.`);
          }
        }
      }

      return NextResponse.json({ status: 'ok', source: 'flutterwave' }, { status: 200 });
    }

    // Default fallback acknowledgement for general test pings
    console.log('[General Webhook Ping Received]', bodyJson);
    return NextResponse.json({ status: 'ok', message: 'Webhook received' }, { status: 200 });
  } catch (error: any) {
    console.error('[API Webhook Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error processing payment webhook.' },
      { status: 500 }
    );
  }
}
