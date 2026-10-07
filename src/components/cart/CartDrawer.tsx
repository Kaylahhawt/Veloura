'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, Trash2, ShieldCheck, ArrowRight, Sparkles, Package } from 'lucide-react';

export function CartDrawer() {
  const {
    cart,
    subtotal,
    freeShippingThreshold,
    remainingForFreeShipping,
    freeShippingProgress,
    shippingFee,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#140812]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <aside className="w-screen sm:max-w-md bg-[#FAF4F2] shadow-2xl flex flex-col text-[#1F0D1B] border-l border-[#C5A059]/30">
          {/* Header */}
          <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-[#E8D6D4] flex items-center justify-between bg-white/80 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-xl tracking-wider text-[#1F0D1B] font-medium">Your Shopping Bag</span>
              <span className="text-[11px] bg-[#1F0D1B] text-[#F4E8D0] font-semibold px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
                {cart.reduce((total, i) => total + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-[#705260] hover:text-[#1F0D1B] hover:bg-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#FAF0ED] px-6 py-3.5 border-b border-[#E8D6D4]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              {remainingForFreeShipping > 0 ? (
                <span className="text-[#44223C] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  Add <strong className="text-[#A85A62] font-semibold">${remainingForFreeShipping.toFixed(2)}</strong> more for <strong>Free Discreet Delivery</strong>
                </span>
              ) : (
                <span className="text-[#2B6E44] flex items-center gap-1 font-semibold">
                  <Package className="w-3.5 h-3.5 text-[#C5A059]" />
                  Unlocked: Free Discreet Express Shipping!
                </span>
              )}
              <span className="text-[11px] text-[#A85A62] font-semibold">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-[#EADDD9] h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C5A059] via-[#E8D1A7] to-[#C5A059] transition-all duration-500 rounded-full shadow-sm"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-[#EFE5E2]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-white border border-[#C5A059]/30 flex items-center justify-center mb-4 text-[#C5A059] shadow-sm">
                  <Package className="w-8 h-8 opacity-80" />
                </div>
                <h3 className="font-serif text-lg text-[#1F0D1B] font-medium mb-1">Your bag is empty</h3>
                <p className="text-xs text-[#705260] max-w-xs mb-6 font-light">
                  Discover our sensual lingerie, sculptural wellness devices, and curated romance collections.
                </p>
                <button
                  onClick={closeCart}
                  className="px-7 py-3 bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 text-xs uppercase tracking-widest font-semibold rounded-full hover:scale-[1.01] transition-all shadow-md"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const itemPrice = item.variant.priceOverride ?? item.product.discountPrice ?? item.product.basePrice;
                return (
                  <div key={item.id} className="pt-4 flex gap-4">
                    {/* Item Thumbnail */}
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#F5ECE8] flex-shrink-0 border border-[#E8D6D4] shadow-xs">
                      <Image
                        src={item.product.images[0] || '/images/hero-lingerie.jpg'}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <Link
                            href={`/product/${item.product.slug}`}
                            onClick={closeCart}
                            className="text-xs font-serif font-medium text-[#1F0D1B] hover:text-[#C5A059] transition-colors line-clamp-2"
                          >
                            {item.product.title}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#997A85] hover:text-[#A85A62] transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Variant details */}
                        <div className="flex items-center gap-2 mt-1.5 text-[11px] text-[#7A5A6B]">
                          {item.variant.size && (
                            <span className="bg-white px-2 py-0.5 rounded-md border border-[#E8D6D4]">
                              Size: {item.variant.size}
                            </span>
                          )}
                          {item.variant.color && (
                            <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#E8D6D4]">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/10"
                                style={{ backgroundColor: item.variant.colorHex || '#2D1427' }}
                              />
                              {item.variant.color}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2 pt-1">
                        <div className="flex items-center border border-[#D9C4C2] rounded-full bg-white px-2.5 py-0.5 shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-[#7A5A6B] hover:text-[#1F0D1B] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold px-2 min-w-[20px] text-center text-[#1F0D1B]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-[#7A5A6B] hover:text-[#1F0D1B] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-serif font-bold text-[#1F0D1B]">
                            ${(itemPrice * item.quantity).toFixed(2)}
                          </span>
                          {item.quantity > 1 && (
                            <div className="text-[10px] text-[#8C6D7D]">
                              ${itemPrice.toFixed(2)} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#E8D6D4] bg-white/90 backdrop-blur-md space-y-3.5 safe-area-pb">
              {/* Discreet Guarantee Tag */}
              <div className="flex items-center gap-2.5 p-3 bg-[#FAF4F2] border border-[#C5A059]/30 rounded-xl text-[11px] text-[#553846]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>
                  <strong>Discreet Guarantee:</strong> Billed strictly as <strong>&apos;VL Retail&apos;</strong> in plain unbranded cartons.
                </span>
              </div>

              {/* Subtotal & Shipping summary */}
              <div className="space-y-1.5 text-xs text-[#553846]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1F0D1B] text-sm">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-[#2B6E44]">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discreet Packaging</span>
                  <span className="text-[#2B6E44] font-medium">Complimentary ($0.00)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFE5E2] flex justify-between items-baseline">
                <span className="font-serif text-sm font-semibold text-[#1F0D1B]">Estimated Total</span>
                <span className="font-serif text-xl font-bold text-[#1F0D1B]">
                  ${(subtotal + shippingFee).toFixed(2)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full py-3.5 bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs uppercase tracking-widest font-semibold rounded-full flex items-center justify-center gap-2 hover:scale-[1.01] shadow-xl shadow-[#1F0D1B]/20 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  Proceed to Discreet Checkout
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full py-2 text-center text-xs text-[#7A5A6B] hover:text-[#1F0D1B] font-medium transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
