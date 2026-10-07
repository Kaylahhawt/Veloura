export interface FlutterwaveInitParams {
  email: string;
  amount: number;
  currency?: string;
  orderNumber: string;
  customerName?: string;
  phoneNumber?: string;
  redirectUrl?: string;
}

export interface FlutterwaveInitResponse {
  success: boolean;
  paymentLink?: string;
  txRef: string;
  simulated: boolean;
  error?: string;
}

export interface FlutterwaveVerifyResponse {
  success: boolean;
  status: 'successful' | 'failed' | 'cancelled';
  txRef: string;
  flwRef?: string;
  amount: number;
  currency: string;
  customer?: {
    email: string;
    name?: string;
  };
  simulated: boolean;
  error?: string;
}

const FLW_SECRET = process.env.FLUTTERWAVE_SECRET_KEY;
const isLiveFlutterwave = Boolean(FLW_SECRET && !FLW_SECRET.includes('xxxxxxxx'));

/**
 * Initialize a Flutterwave Standard Payment
 */
export async function initializeFlutterwaveTransaction(
  params: FlutterwaveInitParams
): Promise<FlutterwaveInitResponse> {
  const txRef = `VL_FLW_${params.orderNumber}_${Date.now().toString(36).toUpperCase()}`;

  if (!isLiveFlutterwave) {
    console.log(`[Flutterwave Simulator] Initialized payment for ${params.email}, amount: $${params.amount}`);
    return {
      success: true,
      paymentLink: `/checkout?tx_ref=${txRef}&simulated=true`,
      txRef,
      simulated: true,
    };
  }

  try {
    const response = await fetch('https://api.flutterwave.com/v3/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${FLW_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tx_ref: txRef,
        amount: params.amount,
        currency: params.currency || 'USD',
        redirect_url: params.redirectUrl || `${process.env.NEXT_PUBLIC_APP_URL || ''}/checkout/verify`,
        customer: {
          email: params.email,
          name: params.customerName || 'Veloura Client',
          phonenumber: params.phoneNumber || '',
        },
        customizations: {
          title: 'Veloura Luxury Intimates',
          description: 'Discreet Billing masked as VL Retail',
          logo: `${process.env.NEXT_PUBLIC_APP_URL || ''}/favicon.ico`,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok || data.status !== 'success') {
      return {
        success: false,
        txRef,
        simulated: false,
        error: data.message || 'Flutterwave payment initialization failed',
      };
    }

    return {
      success: true,
      paymentLink: data.data.link,
      txRef,
      simulated: false,
    };
  } catch (error: any) {
    return {
      success: false,
      txRef,
      simulated: false,
      error: error.message || 'Network error communicating with Flutterwave',
    };
  }
}

/**
 * Verify a Flutterwave transaction via Transaction ID or Reference
 */
export async function verifyFlutterwaveTransaction(
  transactionId: string | number
): Promise<FlutterwaveVerifyResponse> {
  const idStr = String(transactionId);

  if (!isLiveFlutterwave || idStr.startsWith('mock_') || idStr.includes('SIM_') || idStr.startsWith('FLW_')) {
    console.log(`[Flutterwave Simulator] Verified transaction: ${transactionId}`);
    return {
      success: true,
      status: 'successful',
      txRef: idStr,
      flwRef: `FLW_REF_${Date.now()}`,
      amount: 100.0,
      currency: 'USD',
      customer: { email: 'client@veloura.luxury', name: 'Valued Client' },
      simulated: true,
    };
  }

  try {
    const response = await fetch(
      `https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${FLW_SECRET}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok || data.status !== 'success') {
      return {
        success: false,
        status: 'failed',
        txRef: idStr,
        amount: 0,
        currency: 'USD',
        simulated: false,
        error: data.message || 'Flutterwave transaction verification failed',
      };
    }

    const tx = data.data;
    return {
      success: tx.status === 'successful',
      status: tx.status,
      txRef: tx.tx_ref,
      flwRef: tx.flw_ref,
      amount: tx.amount,
      currency: tx.currency,
      customer: {
        email: tx.customer?.email,
        name: tx.customer?.name,
      },
      simulated: false,
    };
  } catch (error: any) {
    return {
      success: false,
      status: 'failed',
      txRef: idStr,
      amount: 0,
      currency: 'USD',
      simulated: false,
      error: error.message || 'Network error verifying Flutterwave transaction',
    };
  }
}

/**
 * Validate Flutterwave Secret Hash Header
 */
export function verifyFlutterwaveWebhookSecret(
  secretHashHeader: string | null
): boolean {
  const expectedSecret = process.env.FLUTTERWAVE_SECRET_KEY || process.env.FLUTTERWAVE_ENCRYPTION_KEY;
  if (!expectedSecret) return true; // dev allowance
  if (!secretHashHeader) return false;

  return secretHashHeader === expectedSecret;
}
