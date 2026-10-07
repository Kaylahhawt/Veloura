'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import {
  User,
  Package,
  MapPin,
  ShieldCheck,
  RotateCcw,
  Check,
  ExternalLink,
  Lock,
  LogOut,
} from 'lucide-react';

import { AuthModal } from '@/components/auth/AuthModal';

export function AccountPageContent() {
  const { user, orders, logout, loginWithGoogle } = useAuth();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'privacy'>('orders');
  const [reorderedId, setReorderedId] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleReorder = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;
    const variant = product.variants[0];
    addItem(product, variant, 1);
    setReorderedId(productId);
    setTimeout(() => setReorderedId(null), 2000);
  };

  if (!user) {
    return (
      <div className="bg-[#FAF4F2] min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#FAF0ED] text-[#A85A62] flex items-center justify-center mb-4">
          <User className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl font-medium text-[#2D1427] mb-2">
          Veloura Intimate Portal
        </h2>
        <p className="text-xs text-[#705260] max-w-sm mb-6">
          Sign in to view your discreet order history, track active parcels, and manage saved private shipping addresses.
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href="/api/auth/google/login?returnTo=/account"
            className="px-8 py-3.5 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#44223C] transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Sign In with Google
          </a>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="text-xs text-[#A85A62] hover:text-[#2D1427] transition-colors"
          >
            Or sign in with email
          </button>
        </div>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Profile Summary */}
        <div className="bg-white rounded-3xl border border-[#E8D6D4] p-6 sm:p-8 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#FAF0ED] border-2 border-[#D9A5A8] flex items-center justify-center text-xl font-serif font-bold text-[#2D1427]">
              {user.avatarUrl ? (
                <Image src={user.avatarUrl} alt={user.name} fill className="object-cover" />
              ) : (
                user.name.charAt(0)
              )}
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A85A62] font-semibold block">
                Privilege Member
              </span>
              <h1 className="font-serif text-2xl font-medium text-[#2D1427]">
                {user.name}
              </h1>
              <p className="text-xs text-[#705260]">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={logout}
              className="flex items-center gap-1.5 px-4 py-2 border border-[#D9C4C2] rounded-xl text-xs font-semibold text-[#705260] hover:text-[#2D1427] hover:bg-[#FAF4F2] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E8D6D4] gap-4 sm:gap-6 text-xs font-semibold uppercase tracking-wider mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 border-b-2 flex items-center gap-2 transition-colors flex-shrink-0 ${
              activeTab === 'orders'
                ? 'border-[#2D1427] text-[#2D1427]'
                : 'border-transparent text-[#8C6D7D] hover:text-[#2D1427]'
            }`}
          >
            <Package className="w-4 h-4" />
            Order History ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`pb-3 border-b-2 flex items-center gap-2 transition-colors flex-shrink-0 ${
              activeTab === 'addresses'
                ? 'border-[#2D1427] text-[#2D1427]'
                : 'border-transparent text-[#8C6D7D] hover:text-[#2D1427]'
            }`}
          >
            <MapPin className="w-4 h-4" />
            Address Book
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 border-b-2 flex items-center gap-2 transition-colors flex-shrink-0 ${
              activeTab === 'privacy'
                ? 'border-[#2D1427] text-[#2D1427]'
                : 'border-transparent text-[#8C6D7D] hover:text-[#2D1427]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Privacy & Masking
          </button>
        </div>

        {/* Tab 1: Order History */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="bg-white rounded-3xl border border-[#E8D6D4] p-12 text-center">
                <p className="text-sm text-[#705260]">No previous orders in your private archive.</p>
                <Link
                  href="/shop"
                  className="mt-4 inline-block px-6 py-2.5 bg-[#2D1427] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#44223C] transition-colors"
                >
                  Explore Collections
                </Link>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl border border-[#E8D6D4] p-6 sm:p-8 shadow-sm space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EFE5E2] gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A85A62] font-semibold">
                        Order #{order.orderNumber}
                      </span>
                      <div className="text-xs text-[#705260] mt-0.5">
                        Placed on {new Date(order.createdAt).toLocaleDateString()} • Billed as <strong>{order.billingDescriptor}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#FAF0ED] text-[#A85A62] text-xs font-semibold rounded-full border border-[#E8D6D4]">
                        {order.status}
                      </span>
                      <span className="font-serif text-lg font-bold text-[#2D1427]">
                        ${order.totalAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-4 divide-y divide-[#F5EAE6]">
                    {order.items.map((item) => (
                      <div key={item.id} className="pt-3 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-[#FAF4F2] flex-shrink-0 border border-[#E8D6D4]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <h4 className="font-serif text-sm font-semibold text-[#2D1427]">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#705260] mt-0.5">
                              Qty: {item.quantity} {item.size && `• Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                            </p>
                          </div>
                        </div>

                        {/* One-Click Reorder Button */}
                        <button
                          onClick={() => handleReorder(item.productId)}
                          className="flex items-center gap-1.5 px-3 py-1.5 border border-[#D9C4C2] rounded-xl text-xs font-semibold text-[#2D1427] hover:bg-[#FAF4F2] transition-colors"
                        >
                          {reorderedId === item.productId ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#2B6E44]" /> Added!
                            </>
                          ) : (
                            <>
                              <RotateCcw className="w-3.5 h-3.5 text-[#A85A62]" /> One-Click Reorder
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Tracking Link */}
                  <div className="pt-4 border-t border-[#EFE5E2] flex flex-col sm:flex-row items-center justify-between text-xs text-[#705260] gap-3">
                    <div>
                      Carrier: <strong>{order.carrier}</strong> (Tracking #{order.trackingNumber})
                    </div>
                    <Link
                      href={`/tracking?order=${order.orderNumber}`}
                      className="text-[#A85A62] font-semibold hover:underline flex items-center gap-1"
                    >
                      View Live Logistics Timeline <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Addresses */}
        {activeTab === 'addresses' && (
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#2D1427] pb-3 border-b border-[#EFE5E2]">
              Saved Shipping Destinations
            </h3>
            {user.savedAddresses.length === 0 ? (
              <p className="text-xs text-[#705260]">
                No addresses saved yet. Addresses are automatically saved upon your first checkout.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.savedAddresses.map((addr, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF4F2] border border-[#E8D6D4] text-xs text-[#553846] space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#A85A62] font-semibold block mb-1">
                      Primary Destination
                    </span>
                    <p className="font-semibold text-[#2D1427]">{addr.fullName}</p>
                    <p>{addr.addressLine1}</p>
                    <p>{addr.city}, {addr.state} {addr.postalCode}</p>
                    <p>{addr.country}</p>
                    <p className="pt-2 text-[#705260]">Discreet Packaging: <strong>Always Enabled</strong></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Privacy & Masking Settings */}
        {activeTab === 'privacy' && (
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-lg font-semibold text-[#2D1427] pb-3 border-b border-[#EFE5E2]">
              Confidentiality Configurations
            </h3>

            <div className="space-y-4 text-xs text-[#553846]">
              <div className="p-4 bg-[#FAF0ED] rounded-2xl border border-[#E8D6D4] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#A85A62] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D1427] block text-sm mb-1">
                    Financial Statement Protection (VL Retail)
                  </strong>
                  All card charges and bank transfers are routed through Paystack or Flutterwave under our neutral corporate registration <strong>&apos;VL Retail&apos;</strong>. No sensitive descriptors are ever visible to banking institutions.
                </div>
              </div>

              <div className="p-4 bg-[#FAF0ED] rounded-2xl border border-[#E8D6D4] flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#A85A62] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D1427] block text-sm mb-1">
                    Zero Social Footprint Guarantee
                  </strong>
                  Your purchase records and browsing activities are never synced with third-party social pixels or advertising networks.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
