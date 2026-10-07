'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { SlidersHorizontal, X, Search, RotateCcw, ChevronDown, Check, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  initialCategorySlug?: string;
  initialSubcategory?: string;
}

export function ProductCatalog({ initialCategorySlug, initialSubcategory }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategorySlug || 'all');
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    initialSubcategory ? [initialSubcategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(500);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Quick View state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // All available filter options extracted from dataset
  const allMaterials = ['Silk', 'Lace', 'Body-safe Silicone', 'Soy Candle', 'Amber Glass', 'Velvet'];
  const allSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '50ml / 1.7 fl oz', '100ml / 3.4 fl oz'];

  // Subcategories available based on selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return Array.from(new Set(PRODUCTS.map((p) => p.subcategory)));
    }
    const cat = CATEGORIES.find((c) => c.slug === selectedCategory);
    return cat ? cat.subcategories : [];
  }, [selectedCategory]);

  // Filtering and Sorting
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Subcategory filter
      if (
        selectedSubcategories.length > 0 &&
        !selectedSubcategories.includes(product.subcategory)
      ) {
        return false;
      }
      // Material filter
      if (
        selectedMaterials.length > 0 &&
        !selectedMaterials.some((m) => product.materials.includes(m))
      ) {
        return false;
      }
      // Size filter
      if (
        selectedSizes.length > 0 &&
        !selectedSizes.some((s) => product.sizes.includes(s))
      ) {
        return false;
      }
      // Price filter
      const price = product.discountPrice ?? product.basePrice;
      if (price > priceRange) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchCat = product.categoryName.toLowerCase().includes(q);
        const matchSub = product.subcategory.toLowerCase().includes(q);
        const matchTag = product.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchCat && !matchSub && !matchTag) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      const priceA = a.discountPrice ?? a.basePrice;
      const priceB = b.discountPrice ?? b.basePrice;

      switch (sortBy) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'featured':
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });
  }, [
    selectedCategory,
    selectedSubcategories,
    selectedMaterials,
    selectedSizes,
    priceRange,
    searchQuery,
    sortBy,
  ]);

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedSubcategories.length +
    selectedMaterials.length +
    selectedSizes.length +
    (priceRange < 500 ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategories([]);
    setSelectedMaterials([]);
    setSelectedSizes([]);
    setPriceRange(500);
    setSearchQuery('');
  };

  const toggleSubcategory = (sub: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
  };

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16 relative">
      {/* Subtle candlelight ambient glow */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-[#C5A059]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#A85A62]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Bar */}
        <div className="border-b border-[#E8D6D4] pb-8 mb-8">
          <span className="text-[10px] uppercase tracking-[0.34em] text-[#A85A62] font-semibold flex items-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Veloura Intimate Atelier
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F0D1B] leading-[1.26] sm:leading-[1.22] tracking-[0.012em]">
                {selectedCategory === 'all'
                  ? 'All Luxury Curations'
                  : CATEGORIES.find((c) => c.slug === selectedCategory)?.name || 'Collection'}
              </h1>
              <p className="text-xs sm:text-sm text-[#705260] mt-2 font-light leading-[1.7] tracking-[0.015em]">
                Presenting {filteredProducts.length} handcrafted intimate & wellness pieces
              </p>
            </div>

            {/* Top Search & Mobile Filter Toggle */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-60 md:w-72">
                <Search className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search intimate pieces..."
                  className="w-full pl-10 pr-8 py-2.5 bg-white/90 backdrop-blur-md border border-[#D9C4C2] rounded-full text-xs text-[#1F0D1B] placeholder-[#9C7F8C] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-[#9C7F8C] hover:text-[#1F0D1B]"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-[#D9C4C2] hover:border-[#C5A059] rounded-full text-xs font-semibold text-[#1F0D1B] shadow-sm transition-all"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Filters</span>
                  {activeFiltersCount > 0 && (
                    <span className="bg-[#1F0D1B] text-[#F4E8D0] text-[10px] px-1.5 py-0.2 rounded-full font-bold border border-[#C5A059]/40">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {/* Sort Selector */}
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full appearance-none bg-white/90 backdrop-blur-md border border-[#D9C4C2] hover:border-[#C5A059] rounded-full pl-4 pr-9 py-2.5 text-xs font-semibold text-[#1F0D1B] focus:outline-none focus:border-[#C5A059] cursor-pointer shadow-sm transition-all"
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="rating">Customer Ratings</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#C5A059] absolute right-3.5 top-3 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Active Filter Pills */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-[#EFE5E2]">
              <span className="text-[11px] uppercase tracking-wider text-[#705260] font-semibold mr-1">Active:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C5A059]/40 rounded-full text-[11px] text-[#1F0D1B] shadow-xs">
                  Category: {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory('all')}>
                    <X className="w-3 h-3 text-[#A85A62] hover:text-[#1F0D1B]" />
                  </button>
                </span>
              )}
              {selectedSubcategories.map((sub) => (
                <span
                  key={sub}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C5A059]/40 rounded-full text-[11px] text-[#1F0D1B] shadow-xs"
                >
                  {sub}
                  <button onClick={() => toggleSubcategory(sub)}>
                    <X className="w-3 h-3 text-[#A85A62] hover:text-[#1F0D1B]" />
                  </button>
                </span>
              ))}
              {selectedMaterials.map((mat) => (
                <span
                  key={mat}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C5A059]/40 rounded-full text-[11px] text-[#1F0D1B] shadow-xs"
                >
                  Material: {mat}
                  <button onClick={() => toggleMaterial(mat)}>
                    <X className="w-3 h-3 text-[#A85A62] hover:text-[#1F0D1B]" />
                  </button>
                </span>
              ))}
              {selectedSizes.map((sz) => (
                <span
                  key={sz}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C5A059]/40 rounded-full text-[11px] text-[#1F0D1B] shadow-xs"
                >
                  Size: {sz}
                  <button onClick={() => toggleSize(sz)}>
                    <X className="w-3 h-3 text-[#A85A62] hover:text-[#1F0D1B]" />
                  </button>
                </span>
              ))}
              {priceRange < 500 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C5A059]/40 rounded-full text-[11px] text-[#1F0D1B] shadow-xs">
                  Under ${priceRange}
                  <button onClick={() => setPriceRange(500)}>
                    <X className="w-3 h-3 text-[#A85A62] hover:text-[#1F0D1B]" />
                  </button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-[11px] text-[#A85A62] hover:text-[#1F0D1B] hover:underline flex items-center gap-1 font-semibold ml-2 transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Clear All
              </button>
            </div>
          )}
        </div>

        {/* Main Grid with Sidebar Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-[#E8D6D4] shadow-[0_10px_35px_-10px_rgba(45,20,39,0.06)] space-y-6 hover:border-[#C5A059]/40 transition-all duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE5E2]">
                <h3 className="font-serif text-base font-semibold text-[#1F0D1B]">Refine Curations</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#A85A62] hover:text-[#1F0D1B] hover:underline font-medium"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-2.5">
                  Category
                </label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubcategories([]);
                    }}
                    className={`w-full text-left text-xs px-3 py-2 rounded-xl font-medium transition-all flex justify-between items-center ${
                      selectedCategory === 'all'
                        ? 'bg-[#1F0D1B] text-[#F4E8D0] font-semibold border border-[#C5A059]/40 shadow-sm'
                        : 'text-[#553846] hover:bg-[#FAF4F2]'
                    }`}
                  >
                    <span>All Collections</span>
                    <span className={`text-[10px] ${selectedCategory === 'all' ? 'text-[#C5A059]' : 'text-[#9C7F8C]'}`}>({PRODUCTS.length})</span>
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.slug);
                        setSelectedSubcategories([]);
                      }}
                      className={`w-full text-left text-xs px-3 py-2 rounded-xl font-medium transition-all flex justify-between items-center ${
                        selectedCategory === cat.slug
                          ? 'bg-[#1F0D1B] text-[#F4E8D0] font-semibold border border-[#C5A059]/40 shadow-sm'
                          : 'text-[#553846] hover:bg-[#FAF4F2]'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] ${selectedCategory === cat.slug ? 'text-[#C5A059]' : 'text-[#9C7F8C]'}`}>({cat.itemCount})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategories (Multi-select) */}
              {availableSubcategories.length > 0 && (
                <div className="pt-4 border-t border-[#EFE5E2]">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-2.5">
                    Subcategory
                  </label>
                  <div className="space-y-1.5">
                    {availableSubcategories.map((sub) => {
                      const isChecked = selectedSubcategories.includes(sub);
                      return (
                        <label
                          key={sub}
                          className="flex items-center gap-2.5 text-xs text-[#553846] hover:text-[#1F0D1B] cursor-pointer py-1 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleSubcategory(sub)}
                            className="rounded border-[#D9C4C2] text-[#1F0D1B] focus:ring-0 accent-[#1F0D1B]"
                          />
                          <span className={isChecked ? 'font-semibold text-[#1F0D1B]' : ''}>{sub}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-[#EFE5E2]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D]">
                    Maximum Price
                  </label>
                  <span className="text-xs font-semibold text-[#1F0D1B] font-serif">${priceRange}</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="500"
                  step="5"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#C5A059] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#9C7F8C] mt-1">
                  <span>$25</span>
                  <span>$500+</span>
                </div>
              </div>

              {/* Materials Filter */}
              <div className="pt-4 border-t border-[#EFE5E2]">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-2.5">
                  Material
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {allMaterials.map((mat) => {
                    const isSelected = selectedMaterials.includes(mat);
                    return (
                      <button
                        key={mat}
                        onClick={() => toggleMaterial(mat)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#1F0D1B] to-[#2D1427] text-[#F4E8D0] border-[#C5A059] shadow-sm'
                            : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                        }`}
                      >
                        {mat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Filter */}
              <div className="pt-4 border-t border-[#EFE5E2]">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-2.5">
                  Size
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {allSizes.map((sz) => {
                    const isSelected = selectedSizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        onClick={() => toggleSize(sz)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#1F0D1B] to-[#2D1427] text-[#F4E8D0] border-[#C5A059] shadow-sm'
                            : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Cards Grid: 2-col mobile, 3-col on desktop within 4-col container */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#E8D6D4] p-12 text-center">
                <h3 className="font-serif text-lg font-medium text-[#2D1427] mb-1">
                  No creations match your filter criteria
                </h3>
                <p className="text-xs text-[#705260] max-w-sm mx-auto mb-6">
                  Try broadening your price slider, clearing material tags, or exploring another collection.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#44223C] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Mobile Filter Drawer / Slide-Over Sheet */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#140812]/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full w-full sm:max-w-md">
            <div className="w-full bg-[#FAF4F2] shadow-2xl flex flex-col text-[#1F0D1B]">
              {/* Header */}
              <div className="px-6 py-4 border-b border-[#E8D6D4] flex items-center justify-between bg-white/95 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#C5A059]" />
                  <span className="font-serif text-lg tracking-wider text-[#1F0D1B] font-medium">Refine Curations</span>
                  {activeFiltersCount > 0 && (
                    <span className="text-xs bg-[#1F0D1B] text-[#F4E8D0] font-semibold px-2 py-0.5 rounded-full border border-[#C5A059]/40">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 rounded-full text-[#705260] hover:text-[#1F0D1B] hover:bg-white transition-colors"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Filter Body */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6 divide-y divide-[#EFE5E2]">
                {/* Categories */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-3">
                    Collections
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedSubcategories([]);
                      }}
                      className={`text-left text-xs p-3 rounded-2xl font-medium border transition-all flex flex-col justify-between ${
                        selectedCategory === 'all'
                          ? 'bg-[#1F0D1B] text-[#F4E8D0] border-[#C5A059]/50 shadow-md'
                          : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                      }`}
                    >
                      <span className="font-semibold">All Collections</span>
                      <span className={`text-[10px] mt-1 ${selectedCategory === 'all' ? 'text-[#C5A059]' : 'text-[#9C7F8C]'}`}>
                        {PRODUCTS.length} pieces
                      </span>
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setSelectedSubcategories([]);
                        }}
                        className={`text-left text-xs p-3 rounded-2xl font-medium border transition-all flex flex-col justify-between ${
                          selectedCategory === cat.slug
                            ? 'bg-[#1F0D1B] text-[#F4E8D0] border-[#C5A059]/50 shadow-md'
                            : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                        }`}
                      >
                        <span className="font-semibold truncate">{cat.name}</span>
                        <span className={`text-[10px] mt-1 ${selectedCategory === cat.slug ? 'text-[#C5A059]' : 'text-[#9C7F8C]'}`}>
                          {cat.itemCount} pieces
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subcategories */}
                {availableSubcategories.length > 0 && (
                  <div className="pt-5">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D]">
                        Subcategories
                      </label>
                      {selectedSubcategories.length > 0 && (
                        <button
                          onClick={() => setSelectedSubcategories([])}
                          className="text-[11px] text-[#A85A62] hover:underline"
                        >
                          Clear ({selectedSubcategories.length})
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {availableSubcategories.map((sub) => {
                        const isChecked = selectedSubcategories.includes(sub);
                        return (
                          <button
                            key={sub}
                            onClick={() => toggleSubcategory(sub)}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                              isChecked
                                ? 'bg-[#1F0D1B] text-[#F4E8D0] border-[#C5A059] shadow-xs'
                                : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-[#C5A059]" />}
                            <span>{sub}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Price Range Slider */}
                <div className="pt-5">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D]">
                      Maximum Price
                    </label>
                    <span className="text-sm font-semibold text-[#1F0D1B] font-serif">${priceRange}</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="500"
                    step="5"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#9C7F8C] mt-1.5">
                    <span>$25</span>
                    <span>$500+</span>
                  </div>
                </div>

                {/* Materials */}
                <div className="pt-5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-2.5">
                    Material Composition
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allMaterials.map((mat) => {
                      const isSelected = selectedMaterials.includes(mat);
                      return (
                        <button
                          key={mat}
                          onClick={() => toggleMaterial(mat)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all flex items-center gap-1 ${
                            isSelected
                              ? 'bg-[#1F0D1B] text-[#F4E8D0] border-[#C5A059]'
                              : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-[#C5A059]" />}
                          <span>{mat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sizes */}
                <div className="pt-5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D7D] block mb-2.5">
                    Available Sizes
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((sz) => {
                      const isSelected = selectedSizes.includes(sz);
                      return (
                        <button
                          key={sz}
                          onClick={() => toggleSize(sz)}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                            isSelected
                              ? 'bg-[#1F0D1B] text-[#F4E8D0] border-[#C5A059]'
                              : 'bg-white text-[#553846] border-[#D9C4C2] hover:border-[#C5A059]'
                          }`}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sticky Drawer Footer with Action Buttons */}
              <div className="p-4 sm:p-5 border-t border-[#E8D6D4] bg-white/95 backdrop-blur-md flex items-center gap-3 safe-area-pb">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="py-3 px-4 border border-[#D9C4C2] text-[#705260] hover:text-[#1F0D1B] hover:border-[#C5A059] text-xs uppercase tracking-wider font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-3.5 px-5 bg-gradient-to-r from-[#1F0D1B] via-[#35152F] to-[#1F0D1B] text-[#F4E8D0] border border-[#C5A059]/40 text-xs uppercase tracking-widest font-semibold rounded-full hover:scale-[1.01] transition-all shadow-md text-center"
                >
                  Show {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

