'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-1">
            Private Desires
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#2D1427]">
            Your Saved Wishlist
          </h1>
          <p className="text-xs sm:text-sm text-[#705260] mt-1.5">
            {wishlistProducts.length} intimate curations saved for your next ritual
          </p>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-12 text-center max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#FAF0ED] text-[#A85A62] flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#2D1427] mb-1">
              Your wishlist is empty
            </h3>
            <p className="text-xs text-[#705260] mb-6">
              Tap the heart icon on any bodysuit, wellness stimulator, or candle to save it here.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#44223C] transition-colors"
            >
              Explore Curations <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6">
            {wishlistProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
