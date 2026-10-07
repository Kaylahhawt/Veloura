'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useWishlist } from '@/context/WishlistContext';
import { Heart, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const primaryImg = product.images[0] || '/images/hero-lingerie.jpg';
  const secondaryImg = product.secondaryImage || product.images[1] || primaryImg;

  const isToy = product.categorySlug === 'sex-toys' || product.categoryId === 'cat-wellness';

  return (
    <div
      className="group relative flex flex-col bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-[#E8D6D4]/80 hover:border-[#C5A059]/50 hover:shadow-[0_20px_45px_-12px_rgba(45,20,39,0.14)] transition-all duration-500 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <div className={`relative ${isToy ? 'aspect-square' : 'aspect-[3/4]'} w-full overflow-hidden bg-[#F7EDE8]`}>
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={isHovered ? secondaryImg : primaryImg}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Subtle satin sheen vignette on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D1B]/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isBestseller && (
            <span className="bg-[#1F0D1B]/95 text-[#F4E8D0] text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-medium px-2 py-0.5 rounded-full border border-[#C5A059]/40 shadow-xs flex items-center gap-1 backdrop-blur-sm">
              <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-white/95 backdrop-blur-md text-[#A85A62] text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-semibold px-2 py-0.5 rounded-full border border-[#E8D6D4] shadow-xs">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-[#E8D6D4]/60 flex items-center justify-center text-[#705260] hover:text-[#A85A62] shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
              inWishlist ? 'fill-[#A85A62] text-[#A85A62]' : ''
            }`}
          />
        </button>

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
            <button
              onClick={() => onQuickView(product)}
              className="w-full py-2.5 bg-white/95 hover:bg-[#1F0D1B] hover:text-[#F4E8D0] hover:border-[#C5A059]/50 text-[#1F0D1B] text-[11px] uppercase tracking-[0.2em] font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-lg border border-[#E8D6D4]"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Subcategory with delicate gold dot */}
          <div className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.24em] text-[#A85A62] font-semibold mb-1.5 truncate flex items-center gap-1">
            <span>{product.categoryName}</span>
            <span className="text-[#C5A059]">•</span>
            <span>{product.subcategory}</span>
          </div>

          {/* Title */}
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-[13px] sm:text-[15px] font-medium text-[#1F0D1B] group-hover:text-[#A85A62] transition-colors line-clamp-1 leading-[1.38] tracking-[0.015em]">
              {product.title}
            </h3>
          </Link>

          {/* Subtitle / short nuance */}
          <p className="text-[9.5px] sm:text-[11px] text-[#705260] font-light line-clamp-1 mt-1 leading-[1.65] tracking-[0.012em]">
            {product.subtitle}
          </p>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1 sm:gap-1.5 mt-2 overflow-hidden">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-black/15 flex-shrink-0"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              <span className="text-[8.5px] sm:text-[10px] text-[#9C7F8C] ml-1 truncate">
                {product.colors.length} {product.colors.length === 1 ? 'shade' : 'shades'}
              </span>
            </div>
          )}
        </div>

        {/* Price & Rating */}
        <div className="mt-2.5 pt-2 sm:mt-3 sm:pt-3 border-t border-[#F5EAE6] flex items-center justify-between gap-1">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-xs sm:text-base font-serif font-bold text-[#1F0D1B] tracking-[0.02em]">
              ${(product.discountPrice ?? product.basePrice).toFixed(2)}
            </span>
            {product.discountPrice && (
              <span className="text-[9px] sm:text-xs line-through text-[#9C7F8C]">
                ${product.basePrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px] text-[#705260] flex-shrink-0">
            <span className="text-[#C5A059] text-xs">★</span>
            <span className="font-semibold text-[#1F0D1B]">{product.rating}</span>
            <span className="text-[#9C7F8C] text-[9px]">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
