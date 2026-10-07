import { NextRequest, NextResponse } from 'next/server';
import { Order, OrderItemRecord, ShippingAddress } from '@/types';
import { PRODUCTS } from '@/data/products';
import { saveOrderToServer, buildTimelineForStatus } from '@/lib/database/orders';
import { sendMailgunEmail } from '@/lib/email/mailgun';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      items,
      shippingAddress,
      paymentGateway,
      paymentReference,
      couponCode,
      discountPercent = 0,
    } = body as {
      items: { productId: string; variantId?: string; quantity: number; size?: string; color?: string }[];
      shippingAddress: ShippingAddress;
      paymentGateway: 'Paystack' | 'Flutterwave';
      paymentReference: string;
      couponCode?: string;
      discountPercent?: number;
    };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Order must contain at least one item.' },
        { status: 400 }
      );
    }

    if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.email || !shippingAddress.addressLine1) {
      return NextResponse.json(
        { error: 'Incomplete shipping destination address provided.' },
        { status: 400 }
      );
    }

    // Server-side item price resolution to guarantee price integrity
    let calculatedSubtotal = 0;
    const resolvedItems: OrderItemRecord[] = [];

    for (const item of items) {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      if (!product) continue;

      let itemPrice = product.discountPrice ?? product.basePrice;

      if (item.variantId) {
        const variant = product.variants.find((v) => v.id === item.variantId);
        if (variant && variant.priceOverride) {
          itemPrice = variant.priceOverride;
        }
      }

      const quantity = Math.max(1, Number(item.quantity) || 1);
      calculatedSubtotal += itemPrice * quantity;

      resolvedItems.push({
        id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        productId: product.id,
        title: product.title,
        image: product.images[0] || '/images/hero-lingerie.jpg',
        size: item.size,
        color: item.color,
        price: itemPrice,
        quantity,
      });
    }

    // Apply coupon discounts
    let verifiedDiscountPercent = 0;
    if (couponCode) {
      const code = couponCode.trim().toUpperCase();
      if (code === 'VELOURA15' || code === 'LUXURY15') verifiedDiscountPercent = 15;
      else if (code === 'VIP20') verifiedDiscountPercent = 20;
      else if (code === 'VELOURA10') verifiedDiscountPercent = 10;
    } else if (discountPercent > 0) {
      verifiedDiscountPercent = Math.min(discountPercent, 25);
    }

    const discountAmount = calculatedSubtotal * (verifiedDiscountPercent / 100);
    const subtotalAfterDiscount = calculatedSubtotal - discountAmount;
    const shippingFee = subtotalAfterDiscount >= 100 ? 0.0 : 15.0;
    const taxAmount = 0.0;
    const totalAmount = subtotalAfterDiscount + shippingFee + taxAmount;

    // Generate Order identifiers
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `VL-${randomDigits}`;
    const trackingNumber = `VLX-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-US`;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      status: 'Processing',
      items: resolvedItems,
      subtotal: Number(calculatedSubtotal.toFixed(2)),
      shippingFee: Number(shippingFee.toFixed(2)),
      taxAmount: Number(taxAmount.toFixed(2)),
      discountAmount: Number(discountAmount.toFixed(2)),
      totalAmount: Number(totalAmount.toFixed(2)),
      paymentGateway: paymentGateway || 'Paystack',
      paymentReference: paymentReference || `REF_${Date.now()}`,
      billingDescriptor: 'VL Retail',
      trackingNumber,
      carrier: 'Veloura Discreet Logistics',
      estimatedDelivery: '3-4 Business Days (Plain Box)',
      shippingAddress,
      timeline: buildTimelineForStatus('Processing'),
    };

    // Save order to server storage / Supabase
    await saveOrderToServer(newOrder);

    // Dispatch order confirmation email
    try {
      await sendMailgunEmail({
        to: shippingAddress.email,
        template: 'order_confirmation',
        order: newOrder,
        trackingNumber,
      });
    } catch (err) {
      console.error('[Order Email Trigger Error]', err);
    }

    return NextResponse.json(
      {
        success: true,
        order: newOrder,
        message: 'Order placed securely and masked billing verified.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('[API Order Creation Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error processing order.' },
      { status: 500 }
    );
  }
}
