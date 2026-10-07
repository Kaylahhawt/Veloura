'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/data/products';
import { ArrowUpRight } from 'lucide-react';

export function CategoryShowcase() {
  return (
    <section className="py-24 bg-[#FAF4F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8D6D4] text-[#A85A62] text-[10px] uppercase tracking-[0.28em] font-semibold mb-3">
              The Veloura Archives
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F0D1B] leading-tight">
              Curated Worlds of <span className="italic font-normal gold-foil-text">Private Desire</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#705260] max-w-md font-light leading-relaxed">
            From whispering French Chantilly lace to resonant touchless pulsators, explore sensual luxury categorized for your private moments.
          </p>
        </div>

        {/* Categories Grid (Asymmetric luxury layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Lingerie (Featured large card - 7 cols) */}
          <Link
            href={`/category/${CATEGORIES[0].slug}`}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden h-[340px] sm:h-[420px] lg:h-[460px] bg-[#EFE5E2] border border-[#E8D6D4]/80 hover:border-[#C5A059]/60 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={CATEGORIES[0].heroImage}
              alt={CATEGORIES[0].name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140812]/95 via-[#1F0D1B]/40 to-transparent" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-1">
                Silk & Lace Couture
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                    {CATEGORIES[0].name}
                  </h3>
                  <p className="text-xs text-[#E2D4CF] mt-1 line-clamp-1 max-w-sm font-light">
                    {CATEGORIES[0].description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#1F0D1B] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Sex Toys / Wellness (5 cols, matching height with Lingerie card) */}
          <Link
            href={`/category/${CATEGORIES[1].slug}`}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden h-[340px] sm:h-[420px] lg:h-[460px] bg-[#EFE5E2] border border-[#E8D6D4]/80 hover:border-[#C5A059]/60 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={CATEGORIES[1].heroImage}
              alt={CATEGORIES[1].name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140812]/95 via-[#1F0D1B]/40 to-transparent" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-1">
                Body-Safe Art Objects
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                    {CATEGORIES[1].name}
                  </h3>
                  <p className="text-xs text-[#E2D4CF] mt-1 line-clamp-1 font-light">
                    {CATEGORIES[1].description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#1F0D1B] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Couples (4 cols) */}
          <Link
            href={`/category/${CATEGORIES[2].slug}`}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE5E2] border border-[#E8D6D4]/80 hover:border-[#C5A059]/60 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={CATEGORIES[2].heroImage}
              alt={CATEGORIES[2].name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140812]/95 via-[#1F0D1B]/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-1">
                Shared Intimacy
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-medium">
                  {CATEGORIES[2].name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#1F0D1B] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Accessories (4 cols) */}
          <Link
            href={`/category/${CATEGORIES[3].slug}`}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE5E2] border border-[#E8D6D4]/80 hover:border-[#C5A059]/60 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={CATEGORIES[3].heroImage}
              alt={CATEGORIES[3].name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140812]/95 via-[#1F0D1B]/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-1">
                Botanicals & Elixirs
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-medium">
                  {CATEGORIES[3].name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#1F0D1B] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Gift Sets (4 cols) */}
          <Link
            href={`/category/${CATEGORIES[4].slug}`}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE5E2] border border-[#E8D6D4]/80 hover:border-[#C5A059]/60 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={CATEGORIES[4].heroImage}
              alt={CATEGORIES[4].name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140812]/95 via-[#1F0D1B]/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-1">
                Romantic Keepsakes
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-medium">
                  {CATEGORIES[4].name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#1F0D1B] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
