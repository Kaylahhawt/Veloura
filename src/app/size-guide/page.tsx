import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Luxury Lingerie Size Guide | Veloura',
  description: 'Veloura international size conversion matrix for luxury bodysuits, bras, panties, babydolls, and boned corsetry.',
};

export default function SizeGuidePage() {
  return (
    <div className="bg-[#FAF4F2] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-2">
            Perfect Fit Matrix
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2D1427]">
            Intimate Sizing Guide
          </h1>
          <p className="text-xs sm:text-sm text-[#705260] mt-3 max-w-xl mx-auto leading-relaxed">
            All Veloura silk garments and corsets are cut true to standard European couture specifications. Refer to our imperial and metric measurements below.
          </p>
        </div>

        {/* Bodysuits & Babydolls Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D6D4] p-4 sm:p-8 shadow-sm space-y-6 mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#2D1427]">
            Bodysuits, Babydolls & Chemises
          </h2>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs text-[#553846] whitespace-nowrap sm:whitespace-normal">
              <thead>
                <tr className="border-b border-[#EFE5E2] font-serif text-[#2D1427] font-semibold text-xs sm:text-sm">
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">US / CA</th>
                  <th className="py-3 px-4">UK / AU</th>
                  <th className="py-3 px-4">Bust (in / cm)</th>
                  <th className="py-3 px-4">Waist (in / cm)</th>
                  <th className="py-3 px-4">Hips (in / cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EAE6]">
                <tr>
                  <td className="py-3 px-4 font-bold text-[#A85A62]">XS</td>
                  <td className="py-3 px-4">0 - 2</td>
                  <td className="py-3 px-4">4 - 6</td>
                  <td className="py-3 px-4">31 - 32&quot; (78 - 82cm)</td>
                  <td className="py-3 px-4">24 - 25&quot; (60 - 64cm)</td>
                  <td className="py-3 px-4">33 - 35&quot; (84 - 89cm)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#A85A62]">S</td>
                  <td className="py-3 px-4">4 - 6</td>
                  <td className="py-3 px-4">8 - 10</td>
                  <td className="py-3 px-4">33 - 34&quot; (83 - 87cm)</td>
                  <td className="py-3 px-4">26 - 27&quot; (65 - 69cm)</td>
                  <td className="py-3 px-4">36 - 37&quot; (90 - 94cm)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#A85A62]">M</td>
                  <td className="py-3 px-4">8 - 10</td>
                  <td className="py-3 px-4">12 - 14</td>
                  <td className="py-3 px-4">35 - 36&quot; (88 - 92cm)</td>
                  <td className="py-3 px-4">28 - 29&quot; (70 - 74cm)</td>
                  <td className="py-3 px-4">38 - 39&quot; (95 - 99cm)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#A85A62]">L</td>
                  <td className="py-3 px-4">12 - 14</td>
                  <td className="py-3 px-4">16 - 18</td>
                  <td className="py-3 px-4">37 - 39&quot; (93 - 99cm)</td>
                  <td className="py-3 px-4">30 - 32&quot; (75 - 81cm)</td>
                  <td className="py-3 px-4">40 - 42&quot; (100 - 106cm)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#A85A62]">XL</td>
                  <td className="py-3 px-4">16</td>
                  <td className="py-3 px-4">20</td>
                  <td className="py-3 px-4">40 - 42&quot; (100 - 106cm)</td>
                  <td className="py-3 px-4">33 - 35&quot; (82 - 88cm)</td>
                  <td className="py-3 px-4">43 - 45&quot; (107 - 114cm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/category/lingerie"
            className="inline-block px-8 py-3.5 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#44223C] transition-colors"
          >
            Explore Lingerie Pieces
          </Link>
        </div>
      </div>
    </div>
  );
}
