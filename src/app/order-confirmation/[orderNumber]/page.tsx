import React from 'react';
import { OrderConfirmationContent } from '@/components/order/OrderConfirmationContent';

export const metadata = {
  title: 'Order Confirmation & Discreet Receipt | Veloura',
  description: 'Thank you for your order with Veloura. Your discreet logistics and billing confirmation details.',
};

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderNumber: string }>;
}) {
  const { orderNumber } = await params;
  return <OrderConfirmationContent orderNumber={orderNumber} />;
}
