'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Package, Check, ArrowRight, HeartHandshake, Sparkles } from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-[#140812] via-[#1A0B17] to-[#1F0D1B] text-[#FAF4F2] pt-16 pb-12 border-t border-[#C5A059]/20 relative overflow-hidden">
      {/* 4-Pillar Discreet Trust Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-[#1F0D1B] via-[#2D1427] to-[#1F0D1B] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-10 w-72 h-72 bg-[#A85A62]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C5A059] font-semibold flex items-center justify-center gap-1.5 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                The Veloura Privacy Promise
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF4F2] leading-[1.26] sm:leading-[1.22] tracking-[0.012em]">
                Absolute Discretion <span className="italic font-normal font-serif text-[#F4E8D0]">Guaranteed</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#D9C4C2] mt-3 leading-[1.85] tracking-[0.015em] font-light">
                We safeguard your intimacy at every step. From the moment you browse to the moment you open your parcel, your privacy is our sacred standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="bg-white/[0.04] border border-[#C5A059]/25 hover:border-[#C5A059]/50 transition-all duration-300 rounded-2xl p-6 sm:p-7 backdrop-blur-md">
                <div className="w-11 h-11 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4 mx-auto md:mx-0 shadow-inner">
                  <Package className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#FAF4F2] mb-2 leading-[1.35] tracking-[0.015em]">
                  100% Unmarked Outer Boxes
                </h4>
                <p className="text-xs text-[#D9C4C2] leading-[1.8] tracking-[0.015em] font-light">
                  Shipped in plain, high-grade recyclable brown or white cartons. Zero intimate references, zero provocative logos, zero product hints.
                </p>
              </div>

              <div className="bg-white/[0.04] border border-[#C5A059]/25 hover:border-[#C5A059]/50 transition-all duration-300 rounded-2xl p-6 sm:p-7 backdrop-blur-md">
                <div className="w-11 h-11 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4 mx-auto md:mx-0 shadow-inner">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#FAF4F2] mb-2 leading-[1.35] tracking-[0.015em]">
                  Masked Billing Statement
                </h4>
                <p className="text-xs text-[#D9C4C2] leading-[1.8] tracking-[0.015em] font-light">
                  Your bank or credit card transaction appears neutrally as <strong className="text-[#F4E8D0] font-medium">&apos;VL Retail&apos;</strong> or <strong className="text-[#F4E8D0] font-medium">&apos;Veloura Store&apos;</strong>. Full financial discretion.
                </p>
              </div>

              <div className="bg-white/[0.04] border border-[#C5A059]/25 hover:border-[#C5A059]/50 transition-all duration-300 rounded-2xl p-6 sm:p-7 backdrop-blur-md">
                <div className="w-11 h-11 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4 mx-auto md:mx-0 shadow-inner">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#FAF4F2] mb-2 leading-[1.35] tracking-[0.015em]">
                  Medical-Grade & Sensory Safe
                </h4>
                <p className="text-xs text-[#D9C4C2] leading-[1.8] tracking-[0.015em] font-light">
                  Every material is 100% body-safe liquid silicone, pure mulberry silk, or dermatologically certified botanicals. Free of phthalates & BPA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl tracking-[0.28em] text-[#FAF4F2] font-semibold block group-hover:text-[#F4E8D0] transition-colors">
                VELOURA
              </span>
              <span className="text-[9px] uppercase tracking-[0.38em] text-[#C5A059] block -mt-0.5">
                PARIS • HAUTE INTIMACY
              </span>
            </Link>
            <p className="text-xs text-[#D9C4C2] max-w-sm leading-[1.85] tracking-[0.015em] font-light">
              Curated luxury lingerie, sculptural intimacy wellness, and romantic rituals. Crafted for the modern sensualist who demands visual sophistication and uncompromising privacy.
            </p>

            {/* Newsletter Box */}
            <div className="pt-2">
              <span className="text-xs font-medium text-[#FAF4F2] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Join the Private Salon (15% Off Your First Order)
              </span>
              {newsletterSubscribed ? (
                <div className="p-3 bg-white/10 border border-[#C5A059]/40 rounded-xl text-xs text-[#F4E8D0] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059]" />
                  <span>Welcome to Veloura. Your private voucher code is <strong>VELOURA15</strong>.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter confidential email..."
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/20 rounded-xl text-xs text-white placeholder-[#B89CA8] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-gradient-to-r from-[#F4E8D0] via-[#E8D1A7] to-[#C5A059] text-[#1F0D1B] text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-1 shadow-sm"
                  >
                    Join
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column: Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9C4C2] leading-[1.6]">
              <li>
                <Link href="/category/lingerie" className="hover:text-white transition-colors">
                  Haute Lingerie
                </Link>
              </li>
              <li>
                <Link href="/category/sex-toys" className="hover:text-white transition-colors">
                  Sensual Wellness & Toys
                </Link>
              </li>
              <li>
                <Link href="/category/couples" className="hover:text-white transition-colors">
                  Couples & Restraints
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="hover:text-white transition-colors">
                  Botanical Oils & Care
                </Link>
              </li>
              <li>
                <Link href="/category/gift-sets" className="hover:text-white transition-colors">
                  Bridal & Keepsake Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Trust & Discretion */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-4">
              Privacy & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9C4C2] leading-[1.6]">
              <li>
                <Link href="/discreet-policy" className="hover:text-white transition-colors">
                  Discreet Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/billing-masking" className="hover:text-white transition-colors">
                  Billing Masking (VL Retail)
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors">
                  Lingerie Size Matrix
                </Link>
              </li>
              <li>
                <Link href="/body-safe-standards" className="hover:text-white transition-colors">
                  Body-Safe Silicones
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="hover:text-white transition-colors">
                  Track Your Package
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Customer Care */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A059] mb-4">
              Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#D9C4C2]">
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Member Portal
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-white transition-colors">
                  Order History & Invoices
                </Link>
              </li>
              <li>
                <span className="text-[#9C7F8C] block">Direct Concierge:</span>
                <span className="text-[#FAF4F2] font-mono text-[11px]">concierge@veloura.luxury</span>
              </li>
              <li>
                <span className="text-[#9C7F8C] block">Confidential Hours:</span>
                <span className="text-[11px]">Mon - Sat: 9am - 8pm GMT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#9C7F8C] gap-4">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Veloura Luxury Intimates. All rights reserved. 18+ adult age verified.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Sale
            </Link>
            <Link href="/discreet-policy" className="hover:text-white transition-colors">
              Discreet Guarantees
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
