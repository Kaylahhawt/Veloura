'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import {
  CheckCircle2,
  Package,
  ShieldCheck,
  Truck,
  ArrowRight,
  Printer,
  Mail,
  Copy,
} from 'lucide-react';

interface OrderConfirmationContentProps {
  orderNumber: string;
}

export function OrderConfirmationContent({ orderNumber }: OrderConfirmationContentProps) {
  const { orders } = useAuth();
  const order = orders.find(
    (o) => o.orderNumber === orderNumber || o.id === orderNumber || o.orderNumber === `VL-${orderNumber}`
  ) || orders[0];

  if (!order) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-[#FAF4F2]">
        <h2 className="font-serif text-2xl font-medium text-[#2D1427]">Order Not Found</h2>
        <Link href="/" className="mt-4 text-xs font-semibold text-[#A85A62] underline">
          Return to Veloura Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card Header */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D6D4] p-6 sm:p-12 shadow-sm text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#FAF0ED] text-[#2B6E44] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-1">
            Order Confirmed & Sealed
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#2D1427]">
            Thank You, {order.shippingAddress.fullName.split(' ')[0]}
          </h1>
          <p className="text-xs sm:text-sm text-[#705260] mt-2 max-w-md mx-auto">
            Your private order <strong className="text-[#2D1427] font-mono">{order.orderNumber}</strong> has been authorized via {order.paymentGateway}. An itemized discreet confirmation was dispatched to <strong className="text-[#2D1427]">{order.shippingAddress.email}</strong>.
          </p>

          {/* Discreet Reassurance Badge */}
          <div className="mt-6 p-4 rounded-2xl bg-[#FAF0ED] border border-[#E8D6D4] max-w-xl mx-auto flex items-center justify-center gap-3 text-xs text-[#553846]">
            <ShieldCheck className="w-5 h-5 text-[#A85A62] flex-shrink-0" />
            <div className="text-left">
              <strong>Discreet Billing Guaranteed:</strong> Your statement will read <strong>&apos;{order.billingDescriptor}&apos;</strong>. The package will arrive in an anonymous plain box.
            </div>
          </div>
        </div>

        {/* Milestone Tracker & Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tracking Summary (2 cols) */}
          <div className="md:col-span-2 space-y-6">
            {/* Status Timeline */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D6D4] p-5 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#2D1427]">
                    Discreet Logistics Status
                  </h3>
                  <span className="text-xs text-[#705260]">
                    Tracking: <span className="font-mono text-[#2D1427]">{order.trackingNumber}</span>
                  </span>
                </div>
                <span className="px-3 py-1 bg-[#FAF0ED] text-[#A85A62] text-xs font-semibold rounded-full border border-[#E8D6D4]">
                  {order.status}
                </span>
              </div>

              {/* Progress Steps */}
              <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E8D6D4]">
                {order.timeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div
                      className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                        step.completed
                          ? 'border-[#2B6E44] bg-[#2B6E44]'
                          : 'border-[#D9C4C2]'
                      }`}
                    >
                      {step.completed && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>

                    <div className="flex justify-between items-baseline">
                      <h4 className={`text-xs font-semibold ${step.completed ? 'text-[#2D1427]' : 'text-[#8C6D7D]'}`}>
                        {step.status}
                      </h4>
                      <span className="text-[11px] text-[#9C7F8C]">{step.timestamp}</span>
                    </div>
                    <p className="text-xs text-[#705260] mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Items Purchased */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D6D4] p-5 sm:p-8 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-[#2D1427] mb-4 pb-3 border-b border-[#EFE5E2]">
                Items in This Discreet Order
              </h3>
              <div className="space-y-4 divide-y divide-[#F5EAE6]">
                {order.items.map((item) => (
                  <div key={item.id} className="pt-3 flex gap-4">
                    <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-[#FAF4F2] flex-shrink-0 border border-[#E8D6D4]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-[#2D1427]">
                        {item.title}
                      </h4>
                      <div className="text-xs text-[#705260] mt-0.5">
                        Qty: {item.quantity} {item.size && `• Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                      </div>
                      <div className="text-xs font-semibold text-[#2D1427] mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Destination & Invoice breakdown (1 col) */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D6D4] p-5 sm:p-6 shadow-sm space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] pb-2 border-b border-[#EFE5E2]">
                Shipping Address
              </h4>
              <div className="text-xs text-[#553846] space-y-1">
                <p className="font-semibold text-[#2D1427]">{order.shippingAddress.fullName}</p>
                <p>{order.shippingAddress.addressLine1}</p>
                {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                </p>
                <p>{order.shippingAddress.country}</p>
                <p className="pt-1 text-[#705260]">Tel: {order.shippingAddress.phone}</p>
              </div>

              <div className="pt-4 border-t border-[#EFE5E2]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] mb-2">
                  Payment Summary
                </h4>
                <div className="space-y-1.5 text-xs text-[#553846]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  {order.discountAmount > 0 && (
                    <div className="flex justify-between text-[#2B6E44]">
                      <span>Discount</span>
                      <span>-${order.discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Express Shipping</span>
                    <span>{order.shippingFee === 0 ? 'FREE' : `$${order.shippingFee.toFixed(2)}`}</span>
                  </div>
                  <div className="pt-2 border-t border-[#EFE5E2] flex justify-between font-serif font-bold text-sm text-[#2D1427]">
                    <span>Total Paid</span>
                    <span>${order.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2">
                <Link
                  href={`/tracking?order=${order.orderNumber}`}
                  className="w-full py-2.5 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#44223C] transition-colors"
                >
                  <Truck className="w-3.5 h-3.5" />
                  Live Discreet Tracking
                </Link>

                <Link
                  href="/email-preview"
                  className="w-full py-2.5 bg-white border border-[#D9C4C2] text-[#2D1427] text-xs uppercase tracking-wider font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#FAF4F2] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A85A62]" />
                  Preview Mailgun Templates
                </Link>

                <Link
                  href="/shop"
                  className="w-full py-2 text-center text-xs text-[#705260] hover:text-[#2D1427] block transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
