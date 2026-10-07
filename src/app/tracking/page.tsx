'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { OrderTrackingContent } from '@/components/order/OrderTrackingContent';

function TrackingWrapper() {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get('order') || undefined;
  return <OrderTrackingContent initialOrderNumber={orderParam} />;
}

export default function TrackingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF4F2] p-12 text-center text-xs text-[#705260]">Loading logistics portal...</div>}>
      <TrackingWrapper />
    </Suspense>
  );
}
