'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { ShippingAddress, Order, OrderStatus } from '@/types';
import {
  ShieldCheck,
  Lock,
  Package,
  CreditCard,
  Check,
  Sparkles,
  ArrowRight,
  Info,
  ChevronRight,
} from 'lucide-react';

export function CheckoutPageContent() {
  const router = useRouter();
  const { cart, subtotal, shippingFee, clearCart } = useCart();
  const { user, saveOrder, continueAsGuest } = useAuth();

  // Address State
  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    addressLine1: user?.savedAddresses[0]?.addressLine1 || '',
    addressLine2: user?.savedAddresses[0]?.addressLine2 || '',
    city: user?.savedAddresses[0]?.city || '',
    state: user?.savedAddresses[0]?.state || '',
    postalCode: user?.savedAddresses[0]?.postalCode || '',
    country: user?.savedAddresses[0]?.country || 'United States',
    discreetPackagingConsent: true,
    deliveryNotes: '',
  });

  // Payment Gateway State
  const [gateway, setGateway] = useState<'Paystack' | 'Flutterwave'>('Paystack');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  // Payment Processing Modal State
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'modal' | 'authorizing' | 'success'>('modal');

  // Calculate Totals
  const discountAmount = subtotal * (discountPercent / 100);
  const finalSubtotal = subtotal - discountAmount;
  const taxAmount = 0.0; // Included or zero for international luxury
  const totalAmount = finalSubtotal + shippingFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'VELOURA15' || code === 'LUXURY15') {
      setDiscountPercent(15);
      setCouponApplied(true);
      setCouponError('');
    } else if (code === 'VIP20') {
      setDiscountPercent(20);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid or expired privilege voucher.');
    }
  };

  const handleLaunchPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.addressLine1 || !formData.city) {
      alert('Please complete all required shipping fields.');
      return;
    }

    if (!user) {
      continueAsGuest(formData.email, formData.fullName);
    }

    setIsProcessingPayment(true);
    setPaymentStep('modal');
  };

  const handleConfirmSimulatedPayment = async () => {
    setPaymentStep('authorizing');

    try {
      const referenceId =
        gateway === 'Paystack'
          ? `PSTK_${Math.random().toString(36).substring(2, 10).toUpperCase()}`
          : `FLW_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

      // Call Veloura server API to validate prices, write to Supabase & dispatch Mailgun email
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map((item) => ({
            productId: item.product.id,
            variantId: item.variant.id,
            quantity: item.quantity,
            size: item.variant.size,
            color: item.variant.color,
          })),
          shippingAddress: formData,
          paymentGateway: gateway,
          paymentReference: referenceId,
          couponCode: couponApplied ? couponCode : undefined,
          discountPercent,
        }),
      });

      const data = await response.json();

      let finalOrder: Order;
      if (response.ok && data.order) {
        finalOrder = data.order;
      } else {
        // Resilient fallback order if offline
        const orderNumber = `VL-${Math.floor(10000 + Math.random() * 90000)}`;
        const orderId = `ord-${Date.now()}`;
        finalOrder = {
          id: orderId,
          orderNumber,
          createdAt: new Date().toISOString(),
          status: 'Processing' as OrderStatus,
          items: cart.map((item) => ({
            id: item.id,
            productId: item.product.id,
            title: item.product.title,
            image: item.product.images[0] || '/images/hero-lingerie.jpg',
            size: item.variant.size,
            color: item.variant.color,
            price: item.variant.priceOverride ?? item.product.discountPrice ?? item.product.basePrice,
            quantity: item.quantity,
          })),
          subtotal,
          shippingFee,
          taxAmount,
          discountAmount,
          totalAmount,
          paymentGateway: gateway,
          paymentReference: referenceId,
          billingDescriptor: 'VL Retail',
          shippingAddress: formData,
          carrier: 'Veloura Discreet Priority Courier',
          trackingNumber: `VLX-${Math.floor(1000 + Math.random() * 9000)}-${formData.country.substring(0, 2).toUpperCase()}`,
          estimatedDelivery: '3 to 5 Business Days',
          timeline: [
            {
              status: 'Pending',
              label: 'Payment Verified',
              timestamp: 'Just now',
              description: `Payment authorized via ${gateway} with descriptor 'VL Retail'`,
              completed: true,
            },
            {
              status: 'Processing',
              label: 'Packaging in Plain Box',
              timestamp: 'In preparation',
              description: 'Item curated into unmarked plain carton with security seal',
              completed: true,
            },
            {
              status: 'Dispatched',
              label: 'Neutral Transit Hub',
              timestamp: 'Upcoming',
              description: 'Handed to discreet courier dispatch',
              completed: false,
            },
            {
              status: 'Out for Delivery',
              label: 'Final Mile Delivery',
              timestamp: 'Upcoming',
              description: 'Direct confidential handoff to recipient',
              completed: false,
            },
            {
              status: 'Delivered',
              label: 'Delivered Under Plain Cover',
              timestamp: 'Upcoming',
              description: 'Delivered in confidential exterior packaging',
              completed: false,
            },
          ],
        };
      }

      setPaymentStep('success');
      saveOrder(finalOrder);
      clearCart();

      setTimeout(() => {
        setIsProcessingPayment(false);
        router.push(`/order-confirmation/${finalOrder.orderNumber}`);
      }, 1200);
    } catch (err) {
      console.error('[Checkout Exception]', err);
      setPaymentStep('success');
      setTimeout(() => {
        setIsProcessingPayment(false);
        router.push('/order-confirmation/VL-84920');
      }, 1200);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#FAF4F2] min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#FAF0ED] text-[#A85A62] flex items-center justify-center mb-4">
          <Package className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl font-medium text-[#2D1427] mb-2">
          Your shopping bag is empty
        </h2>
        <p className="text-xs text-[#705260] max-w-sm mb-6">
          Explore our intimate lingerie, wellness devices, and couples gift sets before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="px-8 py-3 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#44223C] transition-colors"
        >
          Discover Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16 relative">
      {/* Subtle ambient candlelight glow */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-[#C5A059]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#A85A62]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[10px] uppercase tracking-[0.32em] text-[#A85A62] font-semibold flex items-center justify-center sm:justify-start gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Private Atelier Fulfillment
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F0D1B] tracking-tight">
            Discreet Express Checkout
          </h1>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mt-2.5 text-[11px] sm:text-xs text-[#705260]">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
            <span>256-Bit SSL Encrypted • Anonymous Plain Packaging • Billed as: <strong className="text-[#1F0D1B]">VL Retail</strong></span>
          </div>
        </div>

        <form onSubmit={handleLaunchPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact, Address, Gateway (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Customer Contact */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E8D6D4] shadow-sm hover:border-[#C5A059]/30 transition-all space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE5E2]">
                <h3 className="font-serif text-lg font-medium text-[#1F0D1B] flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#1F0D1B] text-[#F4E8D0] text-xs font-serif border border-[#C5A059]/40 flex items-center justify-center">1</span>
                  Recipient Contact
                </h3>
                <span className="text-[11px] text-[#8C6D7D] uppercase tracking-wider">Confidential Dispatch</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Genevieve Laurent"
                    className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#1F0D1B] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Confidential Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="genevieve@example.com"
                    className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#1F0D1B] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Mobile Phone (For courier dispatch SMS only) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 392-8819"
                    className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#1F0D1B] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Destination */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E8D6D4] shadow-sm hover:border-[#C5A059]/30 transition-all space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE5E2]">
                <h3 className="font-serif text-lg font-medium text-[#1F0D1B] flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#1F0D1B] text-[#F4E8D0] text-xs font-serif border border-[#C5A059]/40 flex items-center justify-center">2</span>
                  Delivery Destination
                </h3>
                <span className="text-[11px] text-[#A85A62] font-medium">Discreet Packaging Standard</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.addressLine1}
                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                    placeholder="742 Evergreen Terrace, Suite 4B"
                    className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#A85A62]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Portland"
                      className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#A85A62]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                      State / Province *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Oregon"
                      className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#A85A62]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="97201"
                      className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#A85A62]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#A85A62]"
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Nigeria">Nigeria (Paystack & Flutterwave Direct)</option>
                    <option value="Ghana">Ghana</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                {/* Explicit Discreet Packaging Guarantee Checkbox */}
                <div className="p-4 bg-[#FAF0ED] border border-[#E8D6D4] rounded-2xl flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="discreetCheckbox"
                    checked={formData.discreetPackagingConsent}
                    onChange={(e) => setFormData({ ...formData, discreetPackagingConsent: e.target.checked })}
                    className="mt-1 rounded text-[#2D1427] focus:ring-0"
                  />
                  <label htmlFor="discreetCheckbox" className="text-xs text-[#553846] cursor-pointer">
                    <strong className="text-[#1F0D1B] block">Apply 100% Anonymous Exterior Packaging (Complimentary)</strong>
                    No logos, brand slogans, or description of intimate merchandise on outer carton. Return address listed neutrally as Logistics Center VL.
                  </label>
                </div>
              </div>
            </div>

            {/* Step 3: Dual Payment Gateway Selection */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E8D6D4] shadow-sm hover:border-[#C5A059]/30 transition-all space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE5E2]">
                <h3 className="font-serif text-lg font-medium text-[#1F0D1B] flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#1F0D1B] text-[#F4E8D0] text-xs font-serif border border-[#C5A059]/40 flex items-center justify-center">3</span>
                  Discreet Payment Gateway
                </h3>
                <span className="text-[11px] text-[#2B6E44] font-semibold flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#C5A059]" /> 256-Bit Encrypted
                </span>
              </div>

              {/* Discreet Descriptor Callout */}
              <div className="p-3.5 bg-[#FAF4F2] border border-[#C5A059]/30 rounded-2xl flex items-center gap-2.5 text-xs text-[#553846]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>
                  <strong>Statement Privacy:</strong> This charge will appear neutrally as <strong>&apos;VL Retail&apos;</strong> on your bank statement.
                </span>
              </div>

              {/* Gateway Choice Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Paystack */}
                <label
                  onClick={() => setGateway('Paystack')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    gateway === 'Paystack'
                      ? 'border-[#C5A059] bg-[#FAF4F2] shadow-md ring-1 ring-[#C5A059]/30'
                      : 'border-[#E0D0CD] hover:border-[#C5A059]/50 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-base font-semibold text-[#1F0D1B]">Paystack Direct</span>
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#C5A059]">
                      {gateway === 'Paystack' && <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-[#705260] leading-relaxed mb-3">
                    Cards (Visa, Mastercard, Verve), Bank Transfers, USSD & Apple Pay. Instant settlement.
                  </p>
                  <span className="text-[10px] text-[#2B6E44] font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Masked as &apos;VL Retail&apos;
                  </span>
                </label>

                {/* Flutterwave */}
                <label
                  onClick={() => setGateway('Flutterwave')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    gateway === 'Flutterwave'
                      ? 'border-[#C5A059] bg-[#FAF4F2] shadow-md ring-1 ring-[#C5A059]/30'
                      : 'border-[#E0D0CD] hover:border-[#C5A059]/50 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-base font-semibold text-[#1F0D1B]">Flutterwave Global</span>
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#C5A059]">
                      {gateway === 'Flutterwave' && <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-[#705260] leading-relaxed mb-3">
                    International Cards, Mobile Money, Barter, Wire, and multi-currency global billing.
                  </p>
                  <span className="text-[10px] text-[#2B6E44] font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Masked as &apos;Veloura Store&apos;
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs uppercase tracking-widest font-semibold rounded-full shadow-xl shadow-[#1F0D1B]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-[#C5A059]" />
                  Proceed to Pay via {gateway} (${totalAmount.toFixed(2)})
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E8D6D4] shadow-sm space-y-6 lg:sticky lg:top-28 hover:border-[#C5A059]/30 transition-all">
              <h3 className="font-serif text-lg font-medium text-[#1F0D1B] pb-3 border-b border-[#EFE5E2]">
                Order Summary ({cart.reduce((t, i) => t + i.quantity, 0)} Items)
              </h3>

              {/* Itemized List */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-2 divide-y divide-[#F5EAE6]">
                {cart.map((item) => {
                  const itemPrice = item.variant.priceOverride ?? item.product.discountPrice ?? item.product.basePrice;
                  return (
                    <div key={item.id} className="pt-3 flex gap-3.5">
                      <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-[#FAF4F2] flex-shrink-0 border border-[#E8D6D4]">
                        <Image
                          src={item.product.images[0] || '/images/hero-lingerie.jpg'}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-xs font-medium text-[#1F0D1B] truncate">
                          {item.product.title}
                        </h4>
                        <div className="text-[10px] text-[#705260] mt-0.5">
                          Qty: {item.quantity} {item.variant.size && `• Size: ${item.variant.size}`} {item.variant.color && `• Color: ${item.variant.color}`}
                        </div>
                        <div className="text-xs font-semibold text-[#1F0D1B] mt-1 font-serif">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Privilege Voucher Input */}
              <div className="pt-4 border-t border-[#EFE5E2]">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#705260] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  Privilege Voucher Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="e.g. VELOURA15"
                    className="flex-1 px-3.5 py-2.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#1F0D1B] uppercase placeholder-normal focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2.5 bg-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#2D1427] transition-all"
                  >
                    Apply
                  </button>
                </div>

                {couponApplied && (
                  <p className="text-xs text-[#2B6E44] font-medium mt-1.5 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> {discountPercent}% Privilege Discount Applied!
                  </p>
                )}
                {couponError && (
                  <p className="text-xs text-red-600 mt-1.5">{couponError}</p>
                )}
              </div>

              {/* Total Calculation breakdown */}
              <div className="space-y-2 text-xs text-[#553846] pt-4 border-t border-[#EFE5E2]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1F0D1B]">${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2B6E44] font-medium">
                    <span>Privilege Voucher ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Express Discreet Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-[#2B6E44]">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>Discreet Anonymous Packaging</span>
                  <span className="text-[#2B6E44] font-medium">Complimentary ($0.00)</span>
                </div>

                <div className="pt-3 border-t border-[#EFE5E2] flex justify-between items-baseline">
                  <span className="font-serif text-base font-semibold text-[#1F0D1B]">Total</span>
                  <span className="font-serif text-2xl font-bold text-[#1F0D1B]">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Simulated Payment Gateway Modal (Paystack / Flutterwave) */}
      {isProcessingPayment && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#140812]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Modal Header Branded by Selected Gateway */}
            <div
              className={`p-6 text-white text-center ${
                gateway === 'Paystack' ? 'bg-[#0BA4DB]' : 'bg-[#F5A623]'
              }`}
            >
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 block mb-1">
                {gateway} Secure Checkout
              </span>
              <h3 className="font-sans text-xl font-bold">
                Pay ${(totalAmount).toFixed(2)}
              </h3>
              <p className="text-xs opacity-90 mt-1">
                Merchant Statement: <strong>VL Retail</strong>
              </p>
            </div>

            {/* Gateway Body */}
            <div className="p-6 space-y-5">
              {paymentStep === 'modal' && (
                <>
                  <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <p>
                      <strong>Authorized Transaction:</strong> You are authorizing payment of ${(totalAmount).toFixed(2)} for confidential items with neutral statement descriptor.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <CreditCard className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          readOnly
                          value="•••• •••• •••• 4242 (Simulated Auth)"
                          className="w-full pl-9 pr-3 py-2.5 bg-gray-100 border border-gray-300 rounded-xl text-xs font-mono text-gray-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="12/28"
                          className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-xl text-xs text-gray-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="•••"
                          className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-xl text-xs text-gray-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsProcessingPayment(false)}
                      className="flex-1 py-3 border border-gray-300 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmSimulatedPayment}
                      className={`flex-1 py-3 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors ${
                        gateway === 'Paystack' ? 'bg-[#0BA4DB] hover:bg-[#098bb9]' : 'bg-[#F5A623] hover:bg-[#d48c17]'
                      }`}
                    >
                      Authorize Payment
                    </button>
                  </div>
                </>
              )}

              {paymentStep === 'authorizing' && (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 border-4 border-[#2D1427] border-t-transparent rounded-full animate-spin mx-auto" />
                  <h4 className="font-serif text-lg font-semibold text-[#2D1427]">
                    Authorizing with {gateway}...
                  </h4>
                  <p className="text-xs text-gray-500">
                    Applying discreet billing token &apos;VL Retail&apos;
                  </p>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-gray-900">
                    Payment Approved!
                  </h4>
                  <p className="text-xs text-gray-500">
                    Generating discreet invoice and redirecting to tracking portal...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
