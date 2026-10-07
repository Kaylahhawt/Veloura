'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';
import { CATEGORIES } from '@/data/products';
import { SearchModal } from '@/components/search/SearchModal';
import { AuthModal } from '@/components/auth/AuthModal';
import {
  ShoppingBag,
  Search,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
  categorySlug?: string;
  hasDropdown?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { name: 'All Curations', href: '/shop' },
  { name: 'Lingerie', href: '/category/lingerie', categorySlug: 'lingerie', hasDropdown: true },
  { name: 'Sex Toys', href: '/category/sex-toys', categorySlug: 'sex-toys', hasDropdown: true },
  { name: 'Couples', href: '/category/couples', categorySlug: 'couples', hasDropdown: true },
  { name: 'Accessories', href: '/category/accessories', categorySlug: 'accessories', hasDropdown: true },
  { name: 'Gift Sets', href: '/category/gift-sets', categorySlug: 'gift-sets', hasDropdown: true },
  { name: 'Discreet Promise', href: '/discreet-policy' },
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileCategory(null);
    setHoveredCategory(null);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all">
        {/* Top Discreet Announcement Bar */}
        <div className="bg-[#2D1427] text-[#F4E8D0] px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs tracking-[0.16em] flex items-center justify-between border-b border-[#3D1F35] overflow-hidden">
          <div className="hidden md:flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Discreet Billing: Masked as <strong>&apos;VL Retail&apos;</strong></span>
          </div>

          <div className="mx-auto flex items-center justify-center gap-1.5 font-medium text-[9.5px] sm:text-xs text-center truncate px-2">
            <Sparkles className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">Complimentary Anonymous Shipping on orders over $100</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-[11px] text-[#D9A5A8] tracking-[0.14em]">
            <Link href="/discreet-policy" className="hover:text-white transition-colors">
              Discreet Policy
            </Link>
            <span>•</span>
            <Link href="/tracking" className="hover:text-white transition-colors">
              Discreet Track
            </Link>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#FDF9F8]/95 backdrop-blur-md shadow-md shadow-[#2D1427]/5 border-b border-[#E8D6D4] py-2 sm:py-2.5'
              : 'bg-[#FAF4F2]/95 backdrop-blur-sm border-b border-[#E8D6D4]/80 py-2.5 sm:py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              
              {/* 1. FAR LEFT: Mobile Hamburger & Logo */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 text-[#2D1427] hover:text-[#A85A62] transition-colors lg:hidden rounded-lg hover:bg-white/60"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                <Link href="/" className="flex flex-col items-start text-left group">
                  <span className="font-serif text-xl sm:text-2xl xl:text-3xl tracking-[0.28em] text-[#1F0D1B] font-normal block leading-none transition-colors group-hover:text-[#A85A62]">
                    VELOURA
                  </span>
                  <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.34em] text-[#C5A059] block mt-1.5 font-semibold leading-none text-left">
                    PARIS • HAUTE INTIMACY
                  </span>
                </Link>
              </div>

              {/* 2. MIDDLE: The 7 Menu options grouped together in their own frame */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="bg-white/85 backdrop-blur-md border border-[#E8D6D4] rounded-full px-2 xl:px-3 py-1 shadow-sm shadow-[#2D1427]/5 flex items-center gap-0.5 xl:gap-1">
                  {MENU_ITEMS.map((item) => {
                    const isActive = pathname === item.href || (item.categorySlug && pathname.includes(item.categorySlug));
                    const categoryData = item.categorySlug
                      ? CATEGORIES.find((c) => c.slug === item.categorySlug)
                      : null;

                    return (
                      <div
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => item.hasDropdown && setHoveredCategory(item.categorySlug || null)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <Link
                          href={item.href}
                          className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-1 ${
                            isActive
                              ? 'bg-[#FAF0ED] text-[#A85A62] font-semibold shadow-xs'
                              : 'text-[#44223C] hover:text-[#A85A62] hover:bg-[#FAF4F2]'
                          }`}
                        >
                          {item.name}
                          {item.hasDropdown && (
                            <ChevronDown className="w-3 h-3 text-[#9C7F8C] group-hover:rotate-180 transition-transform opacity-70" />
                          )}
                        </Link>

                        {/* Dropdown Menu for Categories */}
                        {item.hasDropdown && hoveredCategory === item.categorySlug && categoryData && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                            <div className="w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-[#E8D6D4] p-4 text-left">
                              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F5EAE6]">
                                <span className="text-[10px] uppercase tracking-wider text-[#A85A62] font-semibold">
                                  {categoryData.name} Edit
                                </span>
                                <span className="text-[10px] text-[#9C7F8C]">
                                  {categoryData.itemCount} Curations
                                </span>
                              </div>

                              <ul className="space-y-1 mb-3">
                                {categoryData.subcategories.map((sub) => (
                                  <li key={sub}>
                                    <Link
                                      href={`/category/${categoryData.slug}?sub=${encodeURIComponent(sub)}`}
                                      className="text-xs text-[#553846] hover:text-[#A85A62] hover:translate-x-1 transition-all block py-0.5 font-medium"
                                    >
                                      {sub}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              <div className="pt-2 border-t border-[#F5EAE6] flex justify-between items-center text-[10px]">
                                <span className="text-[#8C6D7D] line-clamp-1">{categoryData.description}</span>
                                <Link
                                  href={`/category/${categoryData.slug}`}
                                  className="text-[#A85A62] font-semibold hover:underline flex-shrink-0 ml-2"
                                >
                                  Explore All →
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. FAR RIGHT: Search bar, favorites icon, Account Icon and Cart grouped together */}
              <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                {/* Search Bar - Desktop/Tablet Pill */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="hidden sm:flex items-center gap-2 pl-3 pr-3.5 py-1.5 bg-white/85 hover:bg-white border border-[#E0D0CD] hover:border-[#A85A62] rounded-full text-xs text-[#705260] transition-all shadow-xs group"
                  aria-label="Search collection"
                >
                  <Search className="w-3.5 h-3.5 text-[#A85A62] group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] text-[#8C6D7D]">Search intimates...</span>
                </button>

                {/* Grouped Action Icons Container (Unified compact pill on mobile) */}
                <div className="flex items-center gap-0.5 sm:gap-1 bg-white/85 backdrop-blur-md border border-[#E8D6D4] rounded-full p-1 shadow-xs shadow-[#2D1427]/5">
                  {/* Mobile Search Button */}
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="sm:hidden p-1.5 text-[#2D1427] hover:text-[#A85A62] hover:bg-[#FAF4F2] rounded-full transition-all"
                    aria-label="Search collection"
                  >
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Favorites / Wishlist */}
                  <Link
                    href="/wishlist"
                    className="relative p-1.5 sm:p-2 text-[#2D1427] hover:text-[#A85A62] hover:bg-[#FAF4F2] rounded-full transition-all"
                    aria-label="Wishlist"
                  >
                    <Heart className="w-4 h-4" />
                    {wishlistCount > 0 && (
                      <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3.5 h-3.5 bg-[#A85A62] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  {/* Account */}
                  {isAuthenticated ? (
                    <Link
                      href="/account"
                      className="p-1.5 sm:px-2.5 text-[#2D1427] hover:text-[#A85A62] hover:bg-[#FAF4F2] rounded-full transition-all flex items-center gap-1.5"
                      aria-label="Customer Account"
                    >
                      <User className="w-4 h-4" />
                      <span className="hidden xl:inline text-xs font-medium text-[#2D1427]">
                        {user?.name.split(' ')[0]}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setAuthModalOpen(true)}
                      className="p-1.5 sm:p-2 text-[#2D1427] hover:text-[#A85A62] hover:bg-[#FAF4F2] rounded-full transition-all"
                      aria-label="Sign in"
                    >
                      <User className="w-4 h-4" />
                    </button>
                  )}

                  {/* Cart Drawer Button */}
                  <button
                    onClick={openCart}
                    className="relative p-1.5 sm:p-2 text-[#2D1427] hover:text-[#A85A62] hover:bg-[#FAF4F2] rounded-full transition-all flex items-center"
                    aria-label="Open shopping bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {itemCount > 0 && (
                      <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3.5 h-3.5 bg-[#2D1427] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">
                        {itemCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#E8D6D4] bg-[#FAF4F2] px-4 py-5 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
              {/* 7 Menu Items in Framed Style on Mobile with Accordions */}
              <div className="bg-white rounded-2xl border border-[#E8D6D4] p-2.5 shadow-xs divide-y divide-[#F5ECE8]">
                {MENU_ITEMS.map((item) => {
                  const hasDropdown = item.hasDropdown && Boolean(item.categorySlug);
                  const isExpanded = expandedMobileCategory === item.categorySlug;
                  const categoryData = item.categorySlug
                    ? CATEGORIES.find((c) => c.slug === item.categorySlug)
                    : null;

                  return (
                    <div key={item.name} className="py-1">
                      {hasDropdown ? (
                        <div>
                          <button
                            onClick={() =>
                              setExpandedMobileCategory(isExpanded ? null : item.categorySlug || null)
                            }
                            className={`w-full flex justify-between items-center px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors ${
                              isExpanded
                                ? 'bg-[#FAF0ED] text-[#A85A62]'
                                : 'text-[#2D1427] hover:bg-[#FAF0ED] hover:text-[#A85A62]'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {item.name}
                              {categoryData && (
                                <span className="text-[10px] text-[#9C7F8C] font-normal normal-case">
                                  ({categoryData.itemCount})
                                </span>
                              )}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#A85A62] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Accordion Subcategories Content */}
                          {isExpanded && categoryData && (
                            <div className="pl-4 pr-2 py-2 mt-1 space-y-1 bg-[#FAF4F2]/60 rounded-xl">
                              <Link
                                href={`/category/${categoryData.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between py-1.5 px-2 text-xs font-semibold text-[#A85A62] hover:underline"
                              >
                                <span>Explore All {categoryData.name}</span>
                                <span className="text-[10px]">→</span>
                              </Link>
                              {categoryData.subcategories.map((sub) => (
                                <Link
                                  key={sub}
                                  href={`/category/${categoryData.slug}?sub=${encodeURIComponent(sub)}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between py-1 px-2 text-xs text-[#553846] hover:text-[#A85A62] transition-colors rounded-lg hover:bg-white"
                                >
                                  <span>{sub}</span>
                                  <span className="text-[9px] text-[#B89CA8]">5 curations</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex justify-between items-center px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#2D1427] hover:bg-[#FAF0ED] hover:text-[#A85A62] transition-colors"
                        >
                          <span>{item.name}</span>
                          <span className="text-[10px] text-[#8C6D7D] font-normal">View →</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-2 border-t border-[#E8D6D4] grid grid-cols-3 gap-2 text-center text-xs text-[#705260] px-1">
                <Link
                  href="/discreet-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-white rounded-xl border border-[#E8D6D4] hover:text-[#2D1427] text-[11px] font-medium"
                >
                  Discreet Privacy
                </Link>
                <Link
                  href="/size-guide"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-white rounded-xl border border-[#E8D6D4] hover:text-[#2D1427] text-[11px] font-medium"
                >
                  Size Matrix
                </Link>
                <Link
                  href="/tracking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-white rounded-xl border border-[#E8D6D4] hover:text-[#2D1427] text-[11px] font-medium"
                >
                  Order Track
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Global Search & Auth Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
