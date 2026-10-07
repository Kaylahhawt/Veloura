'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { ArrowRight, Sparkles, Flame, Gift } from 'lucide-react';

type TabKey = 'bestsellers' | 'new-arrivals' | 'couples-sets';

export function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState<TabKey>('bestsellers');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const displayedProducts = useMemo(() => {
    switch (activeTab) {
      case 'bestsellers':
        return PRODUCTS.filter((p) => p.isBestseller);
      case 'new-arrivals':
        return PRODUCTS.filter((p) => p.isNew);
      case 'couples-sets':
        return PRODUCTS.filter((p) => p.categorySlug === 'couples' || p.categorySlug === 'gift-sets');
      default:
        return PRODUCTS;
    }
  }, [activeTab]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF4F2] via-white to-[#FAF4F2] relative overflow-hidden">
      {/* Ambient delicate gold glow */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[800px] h-[350px] bg-[#C5A059]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Tabs */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D6D4] text-[#A85A62] text-[10px] uppercase tracking-[0.32em] font-semibold mb-3.5">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            Veloura Private Selections
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F0D1B] leading-[1.26] sm:leading-[1.22] tracking-[0.012em]">
            Iconic Curations & <span className="italic font-normal gold-foil-text">Sculpted Desire</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#705260] mt-3.5 max-w-xl leading-[1.85] tracking-[0.015em] font-light">
            Indulge in benchmark French lace bodysuits, whisper-quiet sensual devices, and curated sets tailored for private elegance.
          </p>

          {/* Interactive Collection Switcher Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 p-1.5 bg-white/90 backdrop-blur-md border border-[#E8D6D4] rounded-full mt-8 sm:mt-10 shadow-sm max-w-full overflow-x-auto no-scrollbar whitespace-nowrap">
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all flex-shrink-0 ${
                activeTab === 'bestsellers'
                  ? 'bg-gradient-to-r from-[#2D1427] to-[#1F0D1B] text-[#F4E8D0] shadow-md border border-[#C5A059]/30'
                  : 'text-[#705260] hover:text-[#1F0D1B] hover:bg-[#FAF4F2]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#C5A059]" />
              Best Sellers
            </button>

            <button
              onClick={() => setActiveTab('new-arrivals')}
              className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all flex-shrink-0 ${
                activeTab === 'new-arrivals'
                  ? 'bg-gradient-to-r from-[#2D1427] to-[#1F0D1B] text-[#F4E8D0] shadow-md border border-[#C5A059]/30'
                  : 'text-[#705260] hover:text-[#1F0D1B] hover:bg-[#FAF4F2]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              New Arrivals
            </button>

            <button
              onClick={() => setActiveTab('couples-sets')}
              className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all flex-shrink-0 ${
                activeTab === 'couples-sets'
                  ? 'bg-gradient-to-r from-[#2D1427] to-[#1F0D1B] text-[#F4E8D0] shadow-md border border-[#C5A059]/30'
                  : 'text-[#705260] hover:text-[#1F0D1B] hover:bg-[#FAF4F2]'
              }`}
            >
              <Gift className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Couples Sets</span>
            </button>
          </div>
        </div>

        {/* 2-col Mobile / 4-col Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FAF4F2] border border-[#D9C4C2] rounded-full text-[11px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-[#2D1427] hover:bg-[#2D1427] hover:text-white hover:border-[#2D1427] transition-all shadow-sm group"
          >
            Explore Full Intimate Catalogue
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
