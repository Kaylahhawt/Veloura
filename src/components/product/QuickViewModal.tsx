'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, ProductVariant } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { X, Heart, ShieldCheck, Check, Sparkles, ArrowRight, Plus, Minus } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Set default variant when product opens
  React.useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setAddedAnimation(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const currentVariant = selectedVariant || product.variants[0];
  const price = currentVariant?.priceOverride ?? product.discountPrice ?? product.basePrice;
  const isOutOfStock = currentVariant ? currentVariant.stockQuantity <= 0 : false;
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!currentVariant || isOutOfStock) return;
    addItem(product, currentVariant, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#140812]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-3 sm:px-4 text-center flex items-center justify-center py-6 sm:py-10">
        <div className="relative inline-block w-full max-w-3xl text-left align-middle transition-all transform bg-[#FAF4F2] shadow-2xl rounded-3xl border border-[#C5A059]/40 overflow-hidden z-10 max-h-[92vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-[#1F0D1B]/80 hover:bg-[#1F0D1B] backdrop-blur-md text-[#F4E8D0] border border-[#C5A059]/40 transition-all shadow-md"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-[#C5A059]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Showcase */}
            <div className={`relative ${product.categorySlug === 'sex-toys' ? 'aspect-square min-h-[260px] sm:min-h-[320px] md:min-h-[380px]' : 'h-60 sm:h-72 md:h-full md:min-h-[380px]'} bg-[#F5ECE8] overflow-hidden`}>
              <Image
                src={product.images[0] || '/images/hero-lingerie.jpg'}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D1B]/30 via-transparent to-black/10 pointer-events-none" />
              {product.isNew && (
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md text-[#A85A62] text-[10px] uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full border border-[#E8D6D4] shadow-sm">
                  New Arrival
                </span>
              )}
            </div>

            {/* Product Meta & Variant Selection */}
            <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-[#A85A62] font-semibold mb-1.5">
                  {product.categoryName} <span className="text-[#C5A059]">•</span> {product.subcategory}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1F0D1B] leading-[1.28] tracking-[0.012em]">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mt-2.5 text-xs text-[#705260]">
                  <span className="text-[#C5A059] text-sm">★</span>
                  <span className="font-semibold text-[#1F0D1B]">{product.rating}</span>
                  <span className="text-[11px]">({product.reviewCount} verified reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-3.5">
                  <span className="text-xl font-serif font-bold text-[#1F0D1B] tracking-[0.02em]">
                    ${price.toFixed(2)}
                  </span>
                  {product.discountPrice && (
                    <span className="text-sm line-through text-[#9C7F8C]">
                      ${product.basePrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Sensory Feel Snippet */}
                <div className="my-4 p-3.5 bg-white/80 border border-[#E8D6D4] border-l-2 border-l-[#C5A059] rounded-xl text-xs text-[#553846] leading-[1.8] tracking-[0.015em]">
                  <span className="font-semibold text-[#1F0D1B] block mb-1">Sensory Signature:</span>
                  {product.sensoryFeel}
                </div>

                {/* Variant Options (Sizes / Colors) */}
                {product.variants.length > 1 && (
                  <div className="space-y-3 mb-4">
                    {/* Sizes if applicable */}
                    {product.sizes && product.sizes.length > 1 && (
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#705260] font-medium mb-1.5 flex justify-between">
                          <span>Select Size</span>
                          {currentVariant?.size && (
                            <span className="text-[#1F0D1B] font-semibold font-serif">{currentVariant.size}</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.variants.map((v) => {
                            if (!v.size) return null;
                            const isSelected = currentVariant?.id === v.id;
                            const isSoldOut = v.stockQuantity <= 0;
                            return (
                              <button
                                key={v.id}
                                disabled={isSoldOut}
                                onClick={() => setSelectedVariant(v)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-[#1F0D1B] to-[#2D1427] text-[#F4E8D0] border-[#C5A059] shadow-sm'
                                    : isSoldOut
                                    ? 'opacity-40 line-through bg-gray-100 border-gray-200 cursor-not-allowed'
                                    : 'bg-white text-[#44223C] border-[#D9C4C2] hover:border-[#C5A059]'
                                }`}
                              >
                                {v.size}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Colors if applicable */}
                    {product.colors && product.colors.length > 1 && (
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#705260] font-medium mb-1.5">
                          Color: <strong className="text-[#1F0D1B] font-serif">{currentVariant?.color || product.colors[0].name}</strong>
                        </div>
                        <div className="flex items-center gap-2">
                          {product.colors.map((c) => {
                            const isSelected = currentVariant?.color === c.name;
                            const matchingVariant = product.variants.find((v) => v.color === c.name);
                            return (
                              <button
                                key={c.name}
                                onClick={() => {
                                  if (matchingVariant) setSelectedVariant(matchingVariant);
                                }}
                                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                                  isSelected ? 'border-[#C5A059] scale-110 shadow-sm ring-1 ring-[#C5A059]/40' : 'border-transparent'
                                }`}
                              >
                                <span
                                  className="w-5 h-5 rounded-full border border-black/15"
                                  style={{ backgroundColor: c.hex }}
                                  title={c.name}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Stock Indicator */}
                <div className="text-xs mb-4">
                  {isOutOfStock ? (
                    <span className="text-red-600 font-medium">Currently Out of Stock</span>
                  ) : currentVariant && currentVariant.stockQuantity <= 5 ? (
                    <span className="text-amber-700 font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      Sensual demand: Only {currentVariant.stockQuantity} pieces left
                    </span>
                  ) : (
                    <span className="text-emerald-700 flex items-center gap-1 font-medium">
                      <Check className="w-3.5 h-3.5" /> In Stock & Ready for Discreet Dispatch
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#D9C4C2] rounded-full bg-white px-2.5 sm:px-3 py-2 flex-shrink-0 shadow-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-[#7A5A6B] hover:text-[#1F0D1B] p-0.5"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 sm:w-8 text-center text-xs font-semibold text-[#1F0D1B]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-[#7A5A6B] hover:text-[#1F0D1B] p-0.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                    className={`flex-1 py-3 px-3 sm:px-6 rounded-full text-[11px] sm:text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 ${
                      addedAnimation
                        ? 'bg-[#2B6E44] text-white shadow-md'
                        : isOutOfStock
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 hover:border-[#C5A059] shadow-lg shadow-[#1F0D1B]/20 hover:scale-[1.01]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4 text-[#F4E8D0]" /> Added to Bag!
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Add to Bag • ${(price * quantity).toFixed(2)}
                      </>
                    )}
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-3 bg-white border border-[#D9C4C2] hover:border-[#C5A059] rounded-full text-[#7A5A6B] hover:text-[#A85A62] transition-colors flex-shrink-0 shadow-sm"
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-[#A85A62] text-[#A85A62]' : ''}`} />
                  </button>
                </div>

                {/* PDP Full Details Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs pt-2 gap-2">
                  <div className="flex items-center gap-1.5 text-[#553846]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Discreet Plain Packaging</span>
                  </div>
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={onClose}
                    className="text-[#A85A62] hover:text-[#1F0D1B] font-semibold hover:underline flex items-center gap-1 transition-colors"
                  >
                    View Full Product Details <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
