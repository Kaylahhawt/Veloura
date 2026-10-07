'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: 'Haute Lingerie Atelier',
    titlePrefix: 'Sensual Poetry in',
    titleEmphasis: 'Mulberry Silk & Lace',
    subtitle: 'Meticulously crafted in our Paris atelier. Sculpted with antique French Chantilly lace for intimate evenings and enduring allure.',
    image: '/images/hero-lingerie.jpg',
    primaryCtaText: 'Discover Lingerie',
    primaryCtaLink: '/category/lingerie',
    secondaryCtaText: 'The Balconette Edit',
    secondaryCtaLink: '/product/seraphine-underwire-balconette-lace-bra',
  },
  {
    id: 2,
    tag: 'Sensual Wellness Art',
    titlePrefix: 'Transcendence Through',
    titleEmphasis: 'Sculptural Stimulation',
    subtitle: 'Where organic ergonomics meet whisper acoustic resonance. 100% body-safe liquid silicone, sealed in champagne gold accents.',
    image: '/images/wellness-toy.jpg',
    primaryCtaText: 'Explore Wellness',
    primaryCtaLink: '/category/sex-toys',
    secondaryCtaText: 'Discover Stimulators',
    secondaryCtaLink: '/category/sex-toys?sub=Vibrators',
  },
  {
    id: 3,
    tag: 'Couples & Intimacy Rituals',
    titlePrefix: 'Curated Encounters for',
    titleEmphasis: 'Shared Surrender',
    subtitle: 'Weighted silk blindfolds, skin-melt warm botanical massage candles, and refined dual pleasure devices for deliberate romance.',
    image: '/images/couples-box.jpg',
    primaryCtaText: 'Shop Couples Sets',
    primaryCtaLink: '/category/couples',
    secondaryCtaText: 'Romantic Gift Chests',
    secondaryCtaLink: '/category/gift-sets',
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[82vh] sm:h-[90vh] min-h-[540px] sm:min-h-[620px] max-h-[880px] overflow-hidden bg-[#140812]">
      {/* Background Image Carousel with smooth crossfade and subtle Ken Burns drift */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={s.image}
            alt={s.titlePrefix + ' ' + s.titleEmphasis}
            fill
            priority={idx === 0}
            className="object-cover object-center filter brightness-[0.72] contrast-[1.05]"
            sizes="100vw"
          />
          {/* Velveteen sensual dark vignette and champagne gold rim glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140812] via-[#1F0D1B]/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140812]/95 via-[#140812]/50 to-transparent" />
          <div className="absolute -right-24 top-1/4 w-[520px] h-[520px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-22 z-10">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          {/* Top Haute Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/40 text-[#F4E8D0] text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-medium shadow-lg shadow-black/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 animate-pulse" />
            <span>{slide.tag}</span>
          </div>

          {/* Heading with Romantic Serif Italic Accent */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FAF4F2] leading-[1.25] sm:leading-[1.22] tracking-[0.015em]">
            <span>{slide.titlePrefix} </span>
            <span className="italic font-normal gold-foil-text block sm:inline">
              {slide.titleEmphasis}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#E2D4CF] leading-[1.85] tracking-[0.02em] max-w-xl font-light line-clamp-3 sm:line-clamp-none">
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={slide.primaryCtaLink}
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#F4E8D0] via-[#E8D1A7] to-[#C5A059] text-[#1F0D1B] text-xs uppercase tracking-[0.22em] font-bold rounded-full hover:shadow-[0_10px_35px_rgba(197,160,89,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group text-center border border-[#FAF4F2]/30"
            >
              {slide.primaryCtaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href={slide.secondaryCtaLink}
              className="px-6 sm:px-7 py-3.5 sm:py-4 bg-white/5 hover:bg-white/15 text-[#FAF4F2] backdrop-blur-xl border border-white/25 hover:border-[#C5A059]/60 text-xs uppercase tracking-[0.22em] font-medium rounded-full transition-all duration-300 text-center justify-center flex items-center hover:scale-[1.02]"
            >
              {slide.secondaryCtaText}
            </Link>
          </div>

          {/* Discreet Reassurance Pill */}
          <div className="pt-2 sm:pt-3 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#D9C4C2] leading-relaxed tracking-[0.015em] pr-32 sm:pr-0">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
            <span>Guaranteed anonymous packaging & discreet billing statement: <strong>VL Retail</strong></span>
          </div>
        </div>

        {/* Slide navigation controls - Glassmorphic Velvet Capsule */}
        <div className="absolute right-4 sm:right-10 bottom-4 sm:bottom-16 flex items-center gap-2 sm:gap-3 z-20 bg-black/45 backdrop-blur-xl border border-white/15 rounded-full p-1.5 sm:p-2 shadow-2xl">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#1F0D1B] text-white flex items-center justify-center transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <div className="flex gap-1.5 sm:gap-2 px-1">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentSlide ? 'w-6 sm:w-8 bg-gradient-to-r from-[#C5A059] to-[#F4E8D0]' : 'w-2 bg-white/35 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#1F0D1B] text-white flex items-center justify-center transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

