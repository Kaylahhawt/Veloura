import { NextRequest, NextResponse } from 'next/server';
import { sendMailgunEmail, EmailTemplateType } from '@/lib/email/mailgun';
import { fetchOrderFromServer } from '@/lib/database/orders';
import { Order } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, template, orderNumber, order: providedOrder, trackingNumber } = body as {
      to: string;
      template: EmailTemplateType;
      orderNumber?: string;
      order?: Order;
      trackingNumber?: string;
    };

    if (!to || !template) {
      return NextResponse.json(
        { error: "Recipient email ('to') and email 'template' type are required." },
        { status: 400 }
      );
    }

    let orderData = providedOrder;

    if (!orderData && orderNumber) {
      const fetched = await fetchOrderFromServer(orderNumber);
      if (fetched) {
        orderData = fetched;
      }
    }

    // If still no order, construct a representative order for test previews
    if (!orderData) {
      orderData = {
        id: 'ord-preview',
        orderNumber: orderNumber || 'VL-84920',
        createdAt: new Date().toISOString(),
        status:
          template === 'delivery_delivered'
            ? 'Delivered'
            : template === 'out_for_delivery'
            ? 'Out for Delivery'
            : template === 'dispatch_notice'
            ? 'Dispatched'
            : 'Processing',
        subtotal: 200.7,
        shippingFee: 0.0,
        taxAmount: 0.0,
        discountAmount: 22.3,
        totalAmount: 200.7,
        paymentGateway: 'Paystack',
        paymentReference: 'PSTK_PREVIEW_84920',
        billingDescriptor: 'VL Retail',
        trackingNumber: trackingNumber || 'VLX-9048-2831-US',
        carrier: 'Veloura Discreet Logistics',
        estimatedDelivery: 'Tomorrow by 4:00 PM',
        shippingAddress: {
          fullName: 'Genevieve Vance',
          email: to,
          phone: '+1 (555) 389-1092',
          addressLine1: '742 Evergreen Terrace',
          city: 'New York',
          state: 'NY',
          postalCode: '10021',
          country: 'United States',
          discreetPackagingConsent: true,
        },
        items: [
          {
            id: 'item-preview-1',
            productId: 'prod-ling-bra-01',
            title: 'Séraphine Underwire Balconette Lace Bra',
            image: '/images/products/lingerie/bra-1.jpg',
            size: '34B',
            color: 'Midnight Noir',
            price: 105.0,
            quantity: 1,
          },
          {
            id: 'item-preview-2',
            productId: 'prod-acc-oil-01',
            title: 'Veloura Velvet Touch Botanical Massage Oil',
            image: '/images/products/accessories/acc-oil-1.jpg',
            price: 118.0,
            quantity: 1,
          },
        ],
        timeline: [],
      };
    }

    const result = await sendMailgunEmail({
      to,
      template,
      order: orderData,
      customerName: (body as any).customerName,
      trackingNumber: trackingNumber || orderData?.trackingNumber,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          error: result.error || 'Failed to dispatch email via Mailgun.',
          details: result,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      result,
      message: result.simulated
        ? 'Transactional email simulated successfully (configure MAILGUN_API_KEY for live delivery).'
        : 'Transactional email dispatched live via Mailgun.',
    });
  } catch (error: any) {
    console.error('[API Send Email Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error dispatching transactional email.' },
      { status: 500 }
    );
  }
}
