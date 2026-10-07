'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Order } from '@/types';
import { Search, ShieldCheck, Package, Truck, CheckCircle2, Clock, MapPin } from 'lucide-react';

interface OrderTrackingContentProps {
  initialOrderNumber?: string;
}

export function OrderTrackingContent({ initialOrderNumber }: OrderTrackingContentProps) {
  const { orders } = useAuth();
  const [query, setQuery] = useState(initialOrderNumber || 'VL-84920');
  const [isSearching, setIsSearching] = useState(false);
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Initial lookup on mount or initialOrderNumber change
  React.useEffect(() => {
    const defaultOrder =
      orders.find(
        (o) =>
          o.orderNumber.toLowerCase() === query.trim().toLowerCase() ||
          o.id.toLowerCase() === query.trim().toLowerCase() ||
          o.trackingNumber.toLowerCase() === query.trim().toLowerCase()
      ) || orders[0];

    setActiveOrder(defaultOrder);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim();
    if (!cleanQuery) return;

    setIsSearching(true);
    setErrorMessage('');

    try {
      // 1. Try querying the server API
      const response = await fetch(`/api/orders/${encodeURIComponent(cleanQuery)}`);
      if (response.ok) {
        const data = await response.json();
        if (data.order) {
          setActiveOrder(data.order);
          setIsSearching(false);
          return;
        }
      }

      // 2. Fallback to client AuthContext orders
      const localMatch = orders.find(
        (o) =>
          o.orderNumber.toLowerCase() === cleanQuery.toLowerCase() ||
          o.id.toLowerCase() === cleanQuery.toLowerCase() ||
          o.trackingNumber.toLowerCase() === cleanQuery.toLowerCase()
      );

      if (localMatch) {
        setActiveOrder(localMatch);
      } else {
        setActiveOrder(null);
        setErrorMessage(`No discreet logistics record found matching '${cleanQuery}'. Please verify your order number or tracking code.`);
      }
    } catch {
      // If network fails, fallback to local
      const localMatch = orders.find(
        (o) =>
          o.orderNumber.toLowerCase() === cleanQuery.toLowerCase() ||
          o.id.toLowerCase() === cleanQuery.toLowerCase() ||
          o.trackingNumber.toLowerCase() === cleanQuery.toLowerCase()
      );
      if (localMatch) {
        setActiveOrder(localMatch);
      } else {
        setActiveOrder(null);
        setErrorMessage(`Unable to connect to logistics server. Please check your connection and try again.`);
      }
    } finally {
      setIsSearching(false);
    }
  };

  const currentOrder = activeOrder;

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-1">
            Logistics Discretion Portal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#2D1427]">
            Discreet Shipment Tracking
          </h1>
          <p className="text-xs sm:text-sm text-[#705260] mt-2 max-w-md mx-auto">
            Real-time status updates without disclosing private order contents to carriers or external recipients.
          </p>
        </div>

        {/* Search Bar for Order / Tracking # */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E8D6D4] shadow-sm mb-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#9C7F8C] absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order # (e.g. VL-84920) or Tracking code..."
                className="w-full pl-10 pr-4 py-3 bg-[#FAF4F2] border border-[#D9C4C2] rounded-2xl text-xs sm:text-sm text-[#2D1427] placeholder-[#9C7F8C] focus:outline-none focus:border-[#A85A62] font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 bg-[#2D1427] text-white text-xs uppercase tracking-wider font-semibold rounded-2xl hover:bg-[#44223C] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSearching ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                'Track Parcel'
              )}
            </button>
          </form>

          {errorMessage && (
            <p className="text-xs text-red-600 mt-3 font-medium bg-red-50 p-2.5 rounded-xl border border-red-200">
              {errorMessage}
            </p>
          )}
        </div>

        {/* Active Order Card */}
        {currentOrder ? (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-[#E8D6D4] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EFE5E2] gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl font-semibold text-[#2D1427]">
                      Order {currentOrder.orderNumber}
                    </h3>
                    <span className="px-3 py-0.5 bg-[#FAF0ED] text-[#A85A62] text-xs font-semibold rounded-full border border-[#E8D6D4]">
                      {currentOrder.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#705260] mt-1">
                    Carrier: <strong>{currentOrder.carrier}</strong> • Tracking Code: <strong className="font-mono text-[#2D1427]">{currentOrder.trackingNumber}</strong>
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C6D7D] block">
                    Estimated Discreet Arrival
                  </span>
                  <span className="font-serif text-base font-semibold text-[#2D1427]">
                    {currentOrder.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Progress Milestones */}
              <div className="pt-8">
                <div className="space-y-8 relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E8D6D4]">
                  {currentOrder.timeline.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className={`absolute -left-8 top-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          step.completed
                            ? 'border-[#2B6E44] bg-[#2B6E44] text-white'
                            : 'border-[#D9C4C2] bg-white text-[#9C7F8C]'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                      </div>

                      <div className="flex justify-between items-baseline">
                        <h4 className={`text-sm font-semibold ${step.completed ? 'text-[#2D1427]' : 'text-[#8C6D7D]'}`}>
                          {step.status}
                        </h4>
                        <span className="text-xs text-[#9C7F8C]">{step.timestamp}</span>
                      </div>
                      <p className="text-xs text-[#705260] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Security Assurance Box */}
              <div className="mt-8 p-4 bg-[#FAF0ED] rounded-2xl border border-[#E8D6D4] flex items-center gap-3 text-xs text-[#553846]">
                <ShieldCheck className="w-5 h-5 text-[#A85A62] flex-shrink-0" />
                <span>
                  <strong>Courier Protection Protocol:</strong> Package labels contain only logistics routing barcodes and recipient address. No item names or sensual brand logos are exposed on the carton.
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-12 text-center">
            <h3 className="font-serif text-lg font-medium text-[#2D1427] mb-1">
              No tracking record found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-xs text-[#705260] max-w-sm mx-auto mb-6">
              Please double check the order number or reference ID in your email confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
