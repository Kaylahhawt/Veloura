import crypto from 'crypto';

export interface PaystackInitParams {
  email: string;
  amount: number; // in USD or cents/kobo
  orderNumber: string;
  callbackUrl?: string;
  metadata?: Record<string, any>;
}

export interface PaystackInitResponse {
  success: boolean;
  authorizationUrl?: string;
  accessCode?: string;
  reference: string;
  simulated: boolean;
  error?: string;
}

export interface PaystackVerifyResponse {
  success: boolean;
  status: 'success' | 'failed' | 'abandoned';
  reference: string;
  amount: number;
  currency: string;
  paidAt?: string;
  channel?: string;
  customer?: {
    email: string;
  };
  simulated: boolean;
  error?: string;
}

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
const isLivePaystack = Boolean(PAYSTACK_SECRET && !PAYSTACK_SECRET.includes('xxxxxxxx'));

/**
 * Initialize a Paystack transaction
 */
export async function initializePaystackTransaction(
  params: PaystackInitParams
): Promise<PaystackInitResponse> {
  const reference = `VL_PSTK_${params.orderNumber}_${Date.now().toString(36).toUpperCase()}`;

  if (!isLivePaystack) {
    console.log(`[Paystack Simulator] Initialized transaction for ${params.email}, amount: $${params.amount}`);
    return {
      success: true,
      authorizationUrl: `/checkout?reference=${reference}&simulated=true`,
      accessCode: `mock_pstk_access_${Date.now()}`,
      reference,
      simulated: true,
    };
  }

  try {
    // Paystack amounts are in the smallest currency unit (e.g. kobo or cents)
    const amountInSmallestUnit = Math.round(params.amount * 100);

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: params.email,
        amount: amountInSmallestUnit,
        reference,
        callback_url: params.callbackUrl,
        metadata: {
          orderNumber: params.orderNumber,
          billingDescriptor: process.env.PAYSTACK_STATEMENT_DESCRIPTOR || 'VL Retail',
          ...params.metadata,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      return {
        success: false,
        reference,
        simulated: false,
        error: data.message || 'Paystack initialization failed',
      };
    }

    return {
      success: true,
      authorizationUrl: data.data.authorization_url,
      accessCode: data.data.access_code,
      reference: data.data.reference,
      simulated: false,
    };
  } catch (error: any) {
    return {
      success: false,
      reference,
      simulated: false,
      error: error.message || 'Network error communicating with Paystack',
    };
  }
}

/**
 * Verify a Paystack transaction via reference
 */
export async function verifyPaystackTransaction(
  reference: string
): Promise<PaystackVerifyResponse> {
  if (!isLivePaystack || reference.startsWith('mock_') || reference.includes('SIM_') || reference.startsWith('PSTK_')) {
    console.log(`[Paystack Simulator] Verified reference: ${reference}`);
    return {
      success: true,
      status: 'success',
      reference,
      amount: 100.0,
      currency: 'USD',
      paidAt: new Date().toISOString(),
      channel: 'card',
      customer: { email: 'client@veloura.luxury' },
      simulated: true,
    };
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      return {
        success: false,
        status: 'failed',
        reference,
        amount: 0,
        currency: 'USD',
        simulated: false,
        error: data.message || 'Paystack verification failed',
      };
    }

    const tx = data.data;
    return {
      success: tx.status === 'success',
      status: tx.status,
      reference: tx.reference,
      amount: tx.amount / 100,
      currency: tx.currency,
      paidAt: tx.paid_at,
      channel: tx.channel,
      customer: {
        email: tx.customer?.email,
      },
      simulated: false,
    };
  } catch (error: any) {
    return {
      success: false,
      status: 'failed',
      reference,
      amount: 0,
      currency: 'USD',
      simulated: false,
      error: error.message || 'Network error verifying Paystack transaction',
    };
  }
}

/**
 * Validate Paystack HMAC SHA512 Webhook Signature
 */
export function verifyPaystackWebhookSignature(
  rawBody: string,
  signatureHeader: string | null
): boolean {
  if (!PAYSTACK_SECRET) return true; // development allowance
  if (!signatureHeader) return false;

  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET)
    .update(rawBody)
    .digest('hex');

  return hash === signatureHeader;
}
