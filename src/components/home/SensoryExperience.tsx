'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Heart, Feather, Droplets } from 'lucide-react';

export function SensoryExperience() {
  return (
    <section className="py-28 bg-[#FAF4F2] relative overflow-hidden">
      {/* Ambient warm gold candlelight glow */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/7 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Collage */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#E8D6D4] group">
              <Image
                src="/images/hero-lingerie.jpg"
                alt="Veloura Silk Sensory Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D1B]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Inset Card */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-8 w-60 sm:w-72 max-w-[calc(100%-1rem)] bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-[#C5A059]/30 shadow-[0_20px_45px_-10px_rgba(31,13,27,0.18)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF0ED] text-[#A85A62] border border-[#E8D6D4] flex items-center justify-center">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1F0D1B] tracking-[0.012em]">
                    100% Body-Safe Standard
                  </h4>
                  <span className="text-[10px] text-[#8C6D7D] tracking-[0.04em]">Silatouch Liquid Silicone</span>
                </div>
              </div>
              <p className="text-[11px] text-[#553846] leading-[1.75] tracking-[0.015em] font-light">
                Hypoallergenic, medical grade, and completely free of toxic phthalates or harmful softeners.
              </p>
            </div>
          </div>

          {/* Copy and Sensory Highlights */}
          <div className="space-y-6 sm:space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8D6D4] text-[#A85A62] text-[10px] uppercase tracking-[0.32em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Sensory Craftsmanship
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F0D1B] leading-[1.26] sm:leading-[1.22] tracking-[0.012em]">
              An Intimate Touch That <span className="italic font-normal gold-foil-text">Resonates</span>
            </h2>

            <p className="text-sm sm:text-[15px] text-[#705260] leading-[1.88] tracking-[0.015em] font-light">
              At Veloura, we believe intimacy is a deeply personal sanctuary. Every garment is cut from Grade 6A mulberry silk that caresses like liquid air; every pleasure device is sculpted with body-responsive contours and whisper-frequency acoustic chambers.
            </p>

            <div className="space-y-5 pt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8D6D4] flex items-center justify-center text-[#A85A62] shadow-xs flex-shrink-0">
                  <Feather className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1F0D1B] tracking-[0.012em]">
                    Zero Friction, Weightless Silk
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#705260] mt-1 font-light leading-[1.78] tracking-[0.015em]">
                    Mulberry silk woven at 22 Momme density maintains skin moisture while giving a cool, indulgent sensory drape.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8D6D4] flex items-center justify-center text-[#A85A62] shadow-xs flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1F0D1B] tracking-[0.012em]">
                    Quiet Acoustic Resonance
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#705260] mt-1 font-light leading-[1.78] tracking-[0.015em]">
                    Our motors hum under 40 decibels—quieter than a gentle whisper—ensuring serene, private pleasure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8D6D4] flex items-center justify-center text-[#A85A62] shadow-xs flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1F0D1B] tracking-[0.012em]">
                    Discreet Arrival & Billing
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#705260] mt-1 font-light leading-[1.78] tracking-[0.015em]">
                    Billed strictly as &apos;VL Retail&apos; on statements. Delivered in sealed anonymous cartons with zero logos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#2D1427] to-[#1F0D1B] text-[#F4E8D0] text-xs uppercase tracking-[0.24em] font-semibold rounded-full hover:shadow-[0_12px_35px_rgba(45,20,39,0.35)] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all duration-300 hover:scale-[1.02]"
              >
                Experience the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
