import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Package, Lock, Truck, EyeOff, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Discreet Shipping & Billing Guarantee | Veloura',
  description: 'Our uncompromising commitment to your privacy: 100% plain unmarked packaging, neutral billing statement masking as VL Retail, and secure courier handoff.',
};

export default function DiscreetPolicyPage() {
  return (
    <div className="bg-[#FAF4F2] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-2">
            The Veloura Privacy Standard
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2D1427]">
            Discreet Shipping & Billing Guarantee
          </h1>
          <p className="text-xs sm:text-sm text-[#705260] mt-3 max-w-xl mx-auto leading-relaxed">
            We understand that intimacy is entirely personal. We have engineered every facet of our logistics and payment infrastructure to ensure 100% absolute privacy.
          </p>
        </div>

        <div className="space-y-8">
          {/* Packaging Section */}
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-[#A85A62]">
              <Package className="w-6 h-6" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#2D1427]">
                1. 100% Anonymous Outer Packaging
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#553846] leading-relaxed">
              Every Veloura order leaves our fulfillment centers inside a plain brown or unbranded white recyclable shipping carton. There are no brand names, no sensual artwork, and no indications of intimacy apparel or adult wellness products anywhere on the exterior.
            </p>
            <ul className="space-y-2 text-xs text-[#705260] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2B6E44]" />
                Tamper-evident security tape that reveals if the carton was opened during transit.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2B6E44]" />
                Sender listed neutrally as &quot;VL Logistics Center&quot; or &quot;Fulfillment Partner VL&quot;.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2B6E44]" />
                Customs declarations for international parcels are categorized discreetly as &quot;Textile Garment&quot; or &quot;Novelty Silicone Accessory&quot;.
              </li>
            </ul>
          </div>

          {/* Billing Masking Section */}
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-[#A85A62]">
              <Lock className="w-6 h-6" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#2D1427]">
                2. Masked Financial Statements (VL Retail)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#553846] leading-relaxed">
              When you pay using our authorized gateways (Paystack or Flutterwave), the merchant name that appears on your credit card, debit card, or bank statement is strictly masked as:
            </p>
            <div className="p-4 bg-[#FAF0ED] border border-[#E8D6D4] rounded-2xl flex items-center justify-between text-xs sm:text-sm font-mono text-[#2D1427]">
              <span>Merchant Statement Descriptor:</span>
              <strong className="text-[#A85A62] text-base">VL RETAIL</strong>
            </div>
            <p className="text-xs text-[#705260]">
              Neither your bank teller, family members with access to joint accounts, nor external auditors will see references to lingerie or adult intimacy.
            </p>
          </div>

          {/* Courier Protocol */}
          <div className="bg-white rounded-3xl border border-[#E8D6D4] p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-[#A85A62]">
              <Truck className="w-6 h-6" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#2D1427]">
                3. Discreet Courier Delivery & Tracking
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#553846] leading-relaxed">
              Our courier partners receive only delivery routing coordinates and recipient contact numbers for dispatch SMS notifications. Drivers are completely unaware of the carton&apos;s contents. You may also specify safe place drop-off instructions at checkout.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-block px-8 py-3.5 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#44223C] transition-colors"
          >
            Shop with Confidence
          </Link>
        </div>
      </div>
    </div>
  );
}
