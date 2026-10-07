import { Order, OrderStatus } from '@/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

// Global in-memory cache for orders (survives requests during server lifecycle)
const globalOrdersStore: Map<string, Order> = new Map();

// Seed initial demo orders so tracking always works out-of-the-box
const initialDemoOrder: Order = {
  id: 'ord-demo-01',
  orderNumber: 'VL-84920',
  createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  status: 'Processing',
  subtotal: 223.0,
  shippingFee: 0.0,
  taxAmount: 0.0,
  discountAmount: 22.3,
  totalAmount: 200.7,
  paymentGateway: 'Paystack',
  paymentReference: 'PSTK_VL_DEMO_84920',
  billingDescriptor: 'VL Retail',
  trackingNumber: 'VLX-9048-2831-US',
  carrier: 'Veloura Discreet Logistics',
  estimatedDelivery: 'Tomorrow, Oct 8 by 4:00 PM',
  shippingAddress: {
    fullName: 'Genevieve Vance',
    email: 'genevieve.vance@example.com',
    phone: '+1 (555) 389-1092',
    addressLine1: '742 Evergreen Terrace, Suite 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10021',
    country: 'United States',
    discreetPackagingConsent: true,
  },
  items: [
    {
      id: 'item-1',
      productId: 'prod-ling-bra-01',
      title: 'Séraphine Underwire Balconette Lace Bra',
      image: '/images/products/lingerie/bra-1.jpg',
      size: '34B',
      color: 'Midnight Noir',
      price: 105.0,
      quantity: 1,
    },
    {
      id: 'item-2',
      productId: 'prod-acc-oil-01',
      title: 'Veloura Velvet Touch Botanical Massage Oil',
      image: '/images/products/accessories/acc-oil-1.jpg',
      price: 118.0,
      quantity: 1,
    },
  ],
  timeline: [
    {
      status: 'Pending',
      label: 'Order Placed & Masked Payment Verified',
      description: 'Transaction authorized discreetly as VL Retail. Plain carton dispatched to packing station.',
      timestamp: 'Oct 5, 2:30 PM',
      completed: true,
    },
    {
      status: 'Processing',
      label: 'Inspected & Sealed in Unmarked Carton',
      description: 'Hand-checked for couture stitching & 100% medical silicone purity. Enclosed in plain box.',
      timestamp: 'Oct 6, 9:15 AM',
      completed: true,
    },
    {
      status: 'Dispatched',
      label: 'Transferred to Neutral Carrier Hub',
      description: 'Courier handed anonymous parcel. No mention of Veloura or intimacy contents on shipping manifesto.',
      timestamp: 'Oct 6, 4:45 PM',
      completed: false,
    },
    {
      status: 'Out for Delivery',
      label: 'Courier En Route to Destination',
      description: 'Discreet direct handoff scheduled.',
      timestamp: 'Expected Oct 8',
      completed: false,
    },
    {
      status: 'Delivered',
      label: 'Successfully Delivered',
      description: 'Delivered in plain, tamper-evident carton.',
      timestamp: 'Expected Oct 8',
      completed: false,
    },
  ],
};

globalOrdersStore.set(initialDemoOrder.orderNumber.toUpperCase(), initialDemoOrder);

/**
 * Persist an order to Supabase and the global store
 */
export async function saveOrderToServer(order: Order): Promise<{ success: boolean; error?: string }> {
  // Always update in-memory cache
  globalOrdersStore.set(order.orderNumber.toUpperCase(), order);
  globalOrdersStore.set(order.id, order);

  if (!isSupabaseConfigured || !supabase) {
    console.log(`[Orders DB] Saved order ${order.orderNumber} to in-memory store (Supabase not configured)`);
    return { success: true };
  }

  try {
    // 1. Insert master order row
    const { error: orderError } = await supabase.from('orders').insert({
      id: order.id.startsWith('ord-') ? undefined : order.id,
      order_number: order.orderNumber,
      status: order.status,
      total_amount: order.totalAmount,
      subtotal: order.subtotal,
      shipping_fee: order.shippingFee,
      tax_amount: order.taxAmount,
      discount_amount: order.discountAmount,
      payment_gateway: order.paymentGateway,
      payment_reference: order.paymentReference,
      billing_descriptor: order.billingDescriptor || 'VL Retail',
      shipping_address: order.shippingAddress,
      tracking_number: order.trackingNumber,
      carrier: order.carrier,
      estimated_delivery: order.estimatedDelivery,
      created_at: order.createdAt,
    });

    if (orderError) {
      console.warn('[Supabase Orders Warning] Could not insert order row:', orderError.message);
      return { success: true }; // gracefully return success since memory store has it
    }

    // 2. Insert order items
    const orderItemsRows = order.items.map((item) => ({
      product_id: item.productId,
      title: item.title,
      quantity: item.quantity,
      price_at_purchase: item.price,
    }));

    await supabase.from('order_items').insert(orderItemsRows);

    return { success: true };
  } catch (err: any) {
    console.error('[Supabase Orders Exception]', err);
    return { success: true };
  }
}

/**
 * Fetch order from Supabase or fallback store
 */
export async function fetchOrderFromServer(
  identifier: string
): Promise<Order | null> {
  const cleanId = identifier.trim().toUpperCase();

  // 1. Check in-memory store
  if (globalOrdersStore.has(cleanId)) {
    return globalOrdersStore.get(cleanId)!;
  }

  // Also check values for matches on orderNumber, id, or trackingNumber
  for (const ord of globalOrdersStore.values()) {
    if (
      ord.orderNumber.toUpperCase() === cleanId ||
      ord.id.toUpperCase() === cleanId ||
      ord.trackingNumber.toUpperCase() === cleanId
    ) {
      return ord;
    }
  }

  // 2. Query Supabase if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*)')
        .or(`order_number.eq.${cleanId},tracking_number.eq.${cleanId},payment_reference.eq.${cleanId}`)
        .single();

      if (data && !error) {
        const mappedOrder: Order = {
          id: data.id,
          orderNumber: data.order_number,
          createdAt: data.created_at,
          status: data.status as OrderStatus,
          subtotal: Number(data.subtotal),
          shippingFee: Number(data.shipping_fee),
          taxAmount: Number(data.tax_amount),
          discountAmount: Number(data.discount_amount),
          totalAmount: Number(data.total_amount),
          paymentGateway: data.payment_gateway,
          paymentReference: data.payment_reference,
          billingDescriptor: data.billing_descriptor || 'VL Retail',
          trackingNumber: data.tracking_number,
          carrier: data.carrier,
          estimatedDelivery: data.estimated_delivery,
          shippingAddress: data.shipping_address,
          items: (data.order_items || []).map((item: any) => ({
            id: item.id,
            productId: item.product_id,
            title: item.title,
            image: '/images/products/lingerie/bra-1.jpg',
            price: Number(item.price_at_purchase),
            quantity: item.quantity,
          })),
          timeline: buildTimelineForStatus(data.status as OrderStatus),
        };

        globalOrdersStore.set(mappedOrder.orderNumber.toUpperCase(), mappedOrder);
        return mappedOrder;
      }
    } catch (e) {
      console.error('[Supabase Fetch Error]', e);
    }
  }

  return null;
}

/**
 * Update order status
 */
export async function updateServerOrderStatus(
  orderNumber: string,
  newStatus: OrderStatus,
  trackingNumber?: string
): Promise<Order | null> {
  const existing = await fetchOrderFromServer(orderNumber);
  if (!existing) return null;

  const updated: Order = {
    ...existing,
    status: newStatus,
    trackingNumber: trackingNumber || existing.trackingNumber,
    timeline: buildTimelineForStatus(newStatus),
  };

  await saveOrderToServer(updated);
  return updated;
}

/**
 * Helper to build milestone timeline based on current status
 */
export function buildTimelineForStatus(status: OrderStatus) {
  const steps: OrderStatus[] = [
    'Pending',
    'Processing',
    'Dispatched',
    'Out for Delivery',
    'Delivered',
  ];
  const currentIndex = steps.indexOf(status);

  return [
    {
      status: 'Pending' as OrderStatus,
      label: 'Order Placed & Masked Payment Verified',
      description: 'Transaction authorized discreetly as VL Retail. Plain carton dispatched to packing station.',
      timestamp: 'Immediate',
      completed: currentIndex >= 0,
    },
    {
      status: 'Processing' as OrderStatus,
      label: 'Inspected & Sealed in Unmarked Carton',
      description: 'Hand-checked for couture stitching & 100% medical silicone purity. Enclosed in plain box.',
      timestamp: currentIndex >= 1 ? 'Within 2 hours' : 'Pending',
      completed: currentIndex >= 1,
    },
    {
      status: 'Dispatched' as OrderStatus,
      label: 'Transferred to Neutral Carrier Hub',
      description: 'Courier handed anonymous parcel. No mention of Veloura or intimacy contents on shipping manifesto.',
      timestamp: currentIndex >= 2 ? 'In Transit' : 'Pending',
      completed: currentIndex >= 2,
    },
    {
      status: 'Out for Delivery' as OrderStatus,
      label: 'Courier En Route to Destination',
      description: 'Discreet direct handoff scheduled.',
      timestamp: currentIndex >= 3 ? 'Today' : 'Pending',
      completed: currentIndex >= 3,
    },
    {
      status: 'Delivered' as OrderStatus,
      label: 'Successfully Delivered',
      description: 'Delivered in plain, tamper-evident carton.',
      timestamp: currentIndex >= 4 ? 'Completed' : 'Pending',
      completed: currentIndex >= 4,
    },
  ];
}
