'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchTitle = product.title.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.categoryName.toLowerCase().includes(q) || product.subcategory.toLowerCase().includes(q);
      const matchTags = product.tags.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchCat || matchTags;
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#140812]/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-3 sm:px-4 text-center flex items-start justify-center pt-8 sm:pt-20">
        <div className="relative inline-block w-full max-w-2xl text-left align-middle transition-all transform bg-[#FAF4F2] shadow-2xl rounded-2xl border border-[#E8D6D4] overflow-hidden z-10 max-h-[88vh] flex flex-col">
          {/* Search Header */}
          <div className="p-3.5 sm:p-6 border-b border-[#E8D6D4] bg-white flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#A85A62] flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search silk lingerie, stimulators, sets..."
              className="w-full bg-transparent text-xs sm:text-base text-[#2D1427] placeholder-[#9C7F8C] focus:outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-[#9C7F8C] hover:text-[#2D1427] px-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 sm:p-1.5 rounded-full text-[#7A5A6B] hover:bg-[#FAF0ED] flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Trending Suggestions */}
          {!query && (
            <div className="p-6 bg-[#FAF4F2]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8A6A7B] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Trending Curations
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Mulberry Silk Bodysuit',
                  'Élan Dual Stimulator',
                  'Sensual Massage Candle',
                  'Couples Romance Chest',
                  'Hyaluronic Organic Lubricant',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs bg-white border border-[#E0D0CD] text-[#44223C] hover:border-[#A85A62] hover:text-[#A85A62] px-3 py-1.5 rounded-full transition-colors font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-[#EFE5E2]">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="font-serif text-[#2D1427] text-base mb-1">No products found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-[#8A6A7B]">
                    Try searching for &quot;silk&quot;, &quot;vibrator&quot;, &quot;couples&quot;, or &quot;oil&quot;.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="text-xs text-[#8A6A7B] font-semibold mb-2">
                    Found {filteredProducts.length} matching curations
                  </div>
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-2 rounded-xl hover:bg-white transition-all group"
                    >
                      <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-[#EFE5E2] flex-shrink-0">
                        <Image
                          src={product.images[0] || '/images/hero-lingerie.jpg'}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#A85A62] font-semibold">
                          {product.categoryName} • {product.subcategory}
                        </span>
                        <h4 className="text-xs sm:text-sm font-serif font-medium text-[#2D1427] truncate group-hover:text-[#A85A62] transition-colors">
                          {product.title}
                        </h4>
                        <div className="text-xs font-semibold text-[#2D1427] mt-0.5">
                          ${(product.discountPrice ?? product.basePrice).toFixed(2)}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#9C7F8C] group-hover:text-[#2D1427] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
