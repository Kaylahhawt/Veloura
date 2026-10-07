'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, ProductVariant } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import {
  ShieldCheck,
  Package,
  Heart,
  Sparkles,
  Check,
  Plus,
  Minus,
  Maximize2,
  X,
  Lock,
  RotateCcw,
  Zap,
  ChevronRight,
} from 'lucide-react';

interface ProductDetailContentProps {
  product: Product;
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'sensory' | 'care' | 'safety' | 'discretion'>('sensory');
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const price = selectedVariant?.priceOverride ?? product.discountPrice ?? product.basePrice;
  const isOutOfStock = selectedVariant ? selectedVariant.stockQuantity <= 0 : false;

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addItem(product, selectedVariant, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-8 sm:py-14 pb-28 lg:pb-16 relative">
      {/* Ambient warm candlelight background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#A85A62]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs with French Haute Editorial Typography */}
        <nav className="text-[11px] uppercase tracking-[0.22em] text-[#8C6D7D] mb-6 sm:mb-8 flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="/" className="hover:text-[#1F0D1B] transition-colors">
            Atelier
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5A059]" />
          <Link href={`/category/${product.categorySlug}`} className="hover:text-[#1F0D1B] transition-colors">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5A059]" />
          <span className="text-[#1F0D1B] font-semibold truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Main Stage: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Gallery Component (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image with Zoom trigger & Satin Sheen Border */}
            <div className={`relative ${product.categorySlug === 'sex-toys' ? 'aspect-square' : 'aspect-[4/5]'} rounded-3xl overflow-hidden bg-[#F5ECE8] border border-[#E8D6D4]/90 shadow-[0_20px_50px_-15px_rgba(45,20,39,0.12)] group hover:border-[#C5A059]/40 transition-all duration-500`}>
              <Image
                src={product.images[selectedImageIndex] || '/images/hero-lingerie.jpg'}
                alt={product.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              {/* Ambient silk vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D1B]/25 via-transparent to-black/10 pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1F0D1B]/80 hover:bg-[#1F0D1B] backdrop-blur-md text-[#F4E8D0] border border-[#C5A059]/40 transition-all shadow-lg hover:scale-105"
                aria-label="Zoom image"
              >
                <Maximize2 className="w-4 h-4 text-[#C5A059]" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestseller && (
                  <span className="inline-flex items-center gap-1.5 bg-[#1F0D1B]/95 text-[#F4E8D0] text-[10px] uppercase tracking-[0.25em] font-semibold px-3.5 py-1.5 rounded-full border border-[#C5A059]/50 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    Bestseller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-white/95 backdrop-blur-md text-[#A85A62] text-[10px] uppercase tracking-[0.25em] font-semibold px-3.5 py-1.5 rounded-full border border-[#E8D6D4] shadow-sm">
                    New Season
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Selector Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative ${product.categorySlug === 'sex-toys' ? 'w-20 h-20' : 'w-20 h-24'} rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      idx === selectedImageIndex
                        ? 'border-[#C5A059] scale-105 shadow-md ring-2 ring-[#C5A059]/20'
                        : 'border-transparent opacity-70 hover:opacity-100 hover:border-[#E8D6D4]'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Variants Matrix (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#A85A62] font-semibold">
                  {product.categoryName} <span className="text-[#C5A059]">•</span> {product.subcategory}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#705260]">
                  <span className="text-[#C5A059] text-sm">★</span>
                  <span className="font-semibold text-[#1F0D1B]">{product.rating}</span>
                  <span className="text-[11px]">({product.reviewCount} verified reviews)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F0D1B] leading-[1.25] sm:leading-[1.22] tracking-[0.012em]">
                {product.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#705260] mt-2.5 font-light italic leading-[1.65] tracking-[0.015em]">
                {product.subtitle}
              </p>

              {/* Price & Savings */}
              <div className="flex items-baseline gap-3 my-4 sm:my-5">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1F0D1B] tracking-[0.02em]">
                  ${price.toFixed(2)}
                </span>
                {product.discountPrice && (
                  <span className="text-base line-through text-[#9C7F8C]">
                    ${product.basePrice.toFixed(2)}
                  </span>
                )}
                {product.discountPrice && (
                  <span className="text-xs bg-gradient-to-r from-[#FAF0ED] to-[#F5ECE8] text-[#9D4B53] font-semibold px-2.5 py-0.5 rounded-full border border-[#C5A059]/40 shadow-sm tracking-[0.05em]">
                    Save ${(product.basePrice - product.discountPrice).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description Snippet */}
              <p className="text-xs sm:text-sm text-[#553846] leading-[1.88] tracking-[0.015em] mb-6 font-light">
                {product.description}
              </p>

              {/* Variants Matrix */}
              <div className="space-y-4 pt-4 border-t border-[#E8D6D4]">
                {/* Size Matrix */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="uppercase tracking-wider font-semibold text-[#705260]">
                        Size: <strong className="text-[#1F0D1B] font-serif">{selectedVariant?.size || 'Standard'}</strong>
                      </span>
                      <Link href="/size-guide" className="text-[#A85A62] hover:text-[#1F0D1B] hover:underline font-medium text-[11px] uppercase tracking-wider">
                        Size Matrix Guide
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v) => {
                        if (!v.size) return null;
                        const isSelected = selectedVariant?.id === v.id;
                        const isSoldOut = v.stockQuantity <= 0;
                        return (
                          <button
                            key={v.id}
                            disabled={isSoldOut}
                            onClick={() => setSelectedVariant(v)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#1F0D1B] via-[#2D1427] to-[#1F0D1B] text-[#F4E8D0] border-[#C5A059] shadow-[0_4px_16px_rgba(31,13,27,0.25)] ring-1 ring-[#C5A059]/30'
                                : isSoldOut
                                ? 'opacity-40 line-through bg-gray-100 border-gray-200 cursor-not-allowed'
                                : 'bg-white text-[#44223C] border-[#D9C4C2] hover:border-[#C5A059] hover:bg-[#FAF4F2]'
                            }`}
                          >
                            {v.size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Color Matrix */}
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#705260] mb-2">
                      Color: <strong className="text-[#1F0D1B] font-serif">{selectedVariant?.color || product.colors[0].name}</strong>
                    </div>

                    <div className="flex items-center gap-3">
                      {product.colors.map((c) => {
                        const isSelected = selectedVariant?.color === c.name;
                        const matchingVariant = product.variants.find((v) => v.color === c.name);
                        return (
                          <button
                            key={c.name}
                            onClick={() => {
                              if (matchingVariant) setSelectedVariant(matchingVariant);
                            }}
                            className={`flex items-center gap-2 p-1.5 pr-3.5 rounded-full border transition-all ${
                              isSelected
                                ? 'border-[#C5A059] bg-white shadow-md ring-2 ring-[#C5A059]/25'
                                : 'border-[#E0D0CD] hover:border-[#C5A059]/60'
                            }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full border border-black/15 shadow-inner"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="text-xs text-[#1F0D1B] font-medium">{c.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Power Type if applicable */}
                {selectedVariant?.powerType && (
                  <div className="p-3 bg-white/80 border border-[#C5A059]/30 rounded-xl flex items-center gap-2 text-xs text-[#553846]">
                    <Zap className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                    <span>Power Architecture: <strong className="text-[#1F0D1B]">{selectedVariant.powerType}</strong> (Fast Contact Magnetic Cable Included)</span>
                  </div>
                )}

                {/* Real-time Inventory Badge */}
                <div className="text-xs pt-1">
                  {isOutOfStock ? (
                    <span className="text-red-600 font-medium">Currently unavailable in this variation</span>
                  ) : selectedVariant && selectedVariant.stockQuantity <= 5 ? (
                    <span className="text-amber-700 font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      Sensual demand: Only {selectedVariant.stockQuantity} pieces remaining in Paris atelier
                    </span>
                  ) : (
                    <span className="text-emerald-700 flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5" /> In Stock & Ready for Discreet Dispatch
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Stage */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#D9C4C2] rounded-full bg-white px-3 py-2.5 shadow-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-[#7A5A6B] hover:text-[#1F0D1B] transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center text-xs font-semibold text-[#1F0D1B]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-[#7A5A6B] hover:text-[#1F0D1B] transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Primary Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                    className={`flex-1 py-4 px-3 sm:px-8 rounded-full text-[11px] sm:text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${
                      addedToast
                        ? 'bg-[#2B6E44] text-white shadow-[#2B6E44]/20'
                        : isOutOfStock
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 hover:border-[#C5A059] shadow-[0_10px_25px_rgba(31,13,27,0.25)] hover:shadow-[0_14px_35px_rgba(31,13,27,0.35)] hover:scale-[1.01]'
                    }`}
                  >
                    {addedToast ? (
                      <>
                        <Check className="w-4 h-4 text-[#F4E8D0]" /> Added to Bag!
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                        Add to Bag • ${(price * quantity).toFixed(2)}
                      </>
                    )}
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-4 bg-white border border-[#D9C4C2] hover:border-[#C5A059] rounded-full text-[#7A5A6B] hover:text-[#A85A62] transition-all flex-shrink-0 shadow-sm"
                    aria-label="Toggle wishlist"
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-[#A85A62] text-[#A85A62]' : ''}`} />
                  </button>
                </div>

                {/* PRD Dedicated Reassurance Tag Placed Below Primary CTA */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C5A059]/30 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1F0D1B] tracking-[0.015em]">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                    <span>Discreet Packaging & Billed Privacy Guarantee</span>
                  </div>
                  <p className="text-[11px] text-[#705260] leading-[1.8] tracking-[0.015em]">
                    Shipped in a plain, unbranded exterior carton with zero mention of Veloura or intimacy products. Your bank statement displays neutrally as <strong>&apos;VL Retail&apos;</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Tab Navigation for Rich Specs */}
            <div className="mt-10 pt-8 border-t border-[#E8D6D4]">
              <div className="flex border-b border-[#E0D0CD] gap-4 sm:gap-6 text-xs font-semibold uppercase tracking-[0.2em] overflow-x-auto no-scrollbar whitespace-nowrap pb-0.5">
                <button
                  onClick={() => setActiveTab('sensory')}
                  className={`pb-2.5 border-b-2 transition-colors flex-shrink-0 ${
                    activeTab === 'sensory'
                      ? 'border-[#C5A059] text-[#1F0D1B] font-serif italic'
                      : 'border-transparent text-[#8C6D7D] hover:text-[#1F0D1B]'
                  }`}
                >
                  Sensory Feel
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2.5 border-b-2 transition-colors flex-shrink-0 ${
                    activeTab === 'care'
                      ? 'border-[#C5A059] text-[#1F0D1B] font-serif italic'
                      : 'border-transparent text-[#8C6D7D] hover:text-[#1F0D1B]'
                  }`}
                >
                  Fabric & Care
                </button>
                <button
                  onClick={() => setActiveTab('safety')}
                  className={`pb-2.5 border-b-2 transition-colors flex-shrink-0 ${
                    activeTab === 'safety'
                      ? 'border-[#C5A059] text-[#1F0D1B] font-serif italic'
                      : 'border-transparent text-[#8C6D7D] hover:text-[#1F0D1B]'
                  }`}
                >
                  Body Safety
                </button>
                <button
                  onClick={() => setActiveTab('discretion')}
                  className={`pb-2.5 border-b-2 transition-colors flex-shrink-0 ${
                    activeTab === 'discretion'
                      ? 'border-[#C5A059] text-[#1F0D1B] font-serif italic'
                      : 'border-transparent text-[#8C6D7D] hover:text-[#1F0D1B]'
                  }`}
                >
                  Discreet Delivery
                </button>
              </div>

              <div className="pt-4 text-xs text-[#553846] leading-[1.88] tracking-[0.015em]">
                {activeTab === 'sensory' && (
                  <p className="bg-white/60 p-4 rounded-xl border border-[#E8D6D4]/70 border-l-2 border-l-[#C5A059] leading-[1.88]">{product.sensoryFeel}</p>
                )}

                {activeTab === 'care' && (
                  <p className="bg-white/60 p-4 rounded-xl border border-[#E8D6D4]/70 border-l-2 border-l-[#C5A059] leading-[1.88]">{product.fabricCare || 'Spot clean or hand wash in cold water with gentle silk/silicone soap. Store away from direct sunlight.'}</p>
                )}

                {activeTab === 'safety' && (
                  <div className="bg-white/60 p-4 rounded-xl border border-[#E8D6D4]/70 border-l-2 border-l-[#C5A059]">
                    <ul className="space-y-2 list-disc list-inside leading-[1.8]">
                      {product.safetyCertifications.map((cert) => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'discretion' && (
                  <p className="bg-white/60 p-4 rounded-xl border border-[#E8D6D4]/70 border-l-2 border-l-[#C5A059] leading-[1.88]">
                    Every shipment is prepared inside tamper-evident sealed mailers enclosed in unmarked cartons. The courier has no visibility into contents, and sender address is listed as Logistics Partner VL Hub.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E8D6D4]">
            <div className="text-center mb-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-1">
                Harmonious Pairings
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#2D1427]">
                Complete Your Sensory Ritual
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-[#140812]/95 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/5] max-h-[85vh]">
            <Image
              src={product.images[selectedImageIndex] || '/images/hero-lingerie.jpg'}
              alt={product.title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}

      {/* Mobile Sticky Add to Bag Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FAF4F2]/95 backdrop-blur-xl border-t border-[#C5A059]/30 px-4 py-3 z-40 shadow-[0_-10px_30px_rgba(31,13,27,0.12)] flex items-center justify-between gap-3 safe-area-pb">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-11 h-12 rounded-xl overflow-hidden bg-[#F5ECE8] border border-[#E8D6D4] flex-shrink-0">
            <Image
              src={product.images[0] || '/images/hero-lingerie.jpg'}
              alt={product.title}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-serif font-medium text-[#1F0D1B] truncate">
              {product.title}
            </div>
            <div className="text-xs font-bold text-[#1F0D1B]">
              ${(price * quantity).toFixed(2)}
              {selectedVariant?.size && (
                <span className="text-[10px] text-[#8C6D7D] font-normal ml-1">
                  • {selectedVariant.size}
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`py-3 px-5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md flex-shrink-0 ${
            addedToast
              ? 'bg-[#2B6E44] text-white'
              : isOutOfStock
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 shadow-lg'
          }`}
        >
          {addedToast ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#F4E8D0]" /> Added!
            </>
          ) : (
            <>
              <Sparkles className="w-3 h-3 text-[#C5A059]" /> Add to Bag
            </>
          )}
        </button>
      </div>
    </div>
  );
}

