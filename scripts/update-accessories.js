const fs = require('fs');
const path = require('path');

const accessoriesProducts = [
  // =========================================================================
  // STORAGE POUCHES (1 - 5)
  // =========================================================================
  {
    id: 'prod-acc-pch-01',
    title: 'Mulberry Silk Lingerie & Intimates Drawstring Pouch',
    slug: 'mulberry-silk-lingerie-intimates-drawstring-pouch',
    subtitle: 'Grade 6A 22 Momme Pure Silk Antimicrobial Travel Bag with Braided Cord',
    description: 'Handcrafted from heavyweight 22 Momme natural mulberry silk that protects delicate lace lingerie, corsets, and silicone intimate devices from friction, static, and dust. Features hand-knotted silk drawstring cords.',
    story: 'Designed as a sacred sanctuary for fine garments and intimate treasures, preserving delicate textures in pure silk embrace.',
    basePrice: 38.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Storage Pouches',
    images: ['/images/products/accessories/acc-pouch-1.jpg'],
    secondaryImage: '/images/products/accessories/acc-pouch-1.jpg',
    rating: 4.95,
    reviewCount: 42,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Silk Pouch', 'Mulberry Silk', 'Storage Bag', 'Travel Case', 'Discreet'],
    sensoryFeel: 'Lustrous, frictionless silk that glides like water in hand.',
    fabricCare: 'Hand wash in cold water with delicate silk wash. Lay flat to dry.',
    safetyCertifications: ['OEKO-TEX Certified Silk', 'Hypoallergenic', 'Dust-Proof'],
    intensityLevels: 'Protective Storage',
    materials: ['100% 22 Momme Mulberry Silk', 'Braided Silk Cord'],
    sizes: ['Medium (28cm x 18cm)'],
    colors: [
      { name: 'Pearl Ivory', hex: '#FFFBEB' },
      { name: 'Midnight Onyx', hex: '#111827' }
    ],
    variants: [
      {
        id: 'var-acc-pch-01-ivo',
        productId: 'prod-acc-pch-01',
        sku: 'VL-ACC-PCH-01-IVO',
        size: 'Medium',
        color: 'Pearl Ivory',
        colorHex: '#FFFBEB',
        material: 'Mulberry Silk',
        stockQuantity: 45
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-pch-02',
    title: 'Crushed Velvet Keepsake Toy Storage Pouch with Tassel Ribbon',
    slug: 'crushed-velvet-keepsake-toy-storage-pouch-tassel-ribbon',
    subtitle: 'Plush Italian Velvet with Satin Interior Lining & Gold Tassel Accents',
    description: 'A sumptuous bedside storage case tailored from heavyweight crushed velvet. The antimicrobial satin interior lining ensures devices remain pristine, clean, and scratch-free between uses.',
    story: 'Transform bedside storage into an artistic statement with deep velvet textures and opulent gold accents.',
    basePrice: 42.00,
    discountPrice: 35.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Storage Pouches',
    images: ['/images/products/accessories/acc-pouch-2.jpg'],
    secondaryImage: '/images/products/accessories/acc-pouch-2.jpg',
    rating: 4.93,
    reviewCount: 36,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Velvet Pouch', 'Satin Lining', 'Tassel Ribbon', 'Keepsake Case'],
    sensoryFeel: 'Deep, plush pile velvet with smooth cool satin interior lining.',
    fabricCare: 'Spot clean exterior with soft damp cloth.',
    safetyCertifications: ['Lint Free', 'Anti-Static Satin Lining', 'Non-Toxic Dye'],
    intensityLevels: 'Protective Storage',
    materials: ['Italian Crushed Velvet', 'Polyester Satin Lining', 'Gold Metallic Thread'],
    sizes: ['Large (32cm x 20cm)'],
    colors: [
      { name: 'Onyx Noir', hex: '#18181B' },
      { name: 'Burgundy Wine', hex: '#881337' }
    ],
    variants: [
      {
        id: 'var-acc-pch-02-onx',
        productId: 'prod-acc-pch-02',
        sku: 'VL-ACC-PCH-02-ONX',
        size: 'Large',
        color: 'Onyx Noir',
        colorHex: '#18181B',
        material: 'Velvet & Satin',
        stockQuantity: 38
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-pch-03',
    title: 'Vintage Rust Velvet Gate-Opening Vanity Clutch',
    slug: 'vintage-rust-velvet-gate-opening-vanity-clutch',
    subtitle: 'Antique Expandable Gate Top Closure with Burnished Brass Frame',
    description: 'Inspired by early 20th-century Parisian vanity reticules, this clutch features an accordion gate-top mechanism that opens wide for effortless access to bottles, massage oils, and intimate accessories.',
    story: 'An heirloom-quality vanity accessory blending antique mechanical ingenuity with sensual velvet elegance.',
    basePrice: 65.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Storage Pouches',
    images: ['/images/products/accessories/acc-pouch-3.jpg'],
    secondaryImage: '/images/products/accessories/acc-pouch-3.jpg',
    rating: 4.96,
    reviewCount: 29,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Vintage Clutch', 'Gate Closure', 'Rust Velvet', 'Vanity Bag'],
    sensoryFeel: 'Textured velvet with tactile click-expand brass hardware.',
    fabricCare: 'Keep in protective dust bag when traveling.',
    safetyCertifications: ['Solid Brass Hardware', 'Lead-Free Electroplate'],
    intensityLevels: 'Expandable Vanity Storage',
    materials: ['Heavyweight Rust Velvet', 'Antiqued Brass Alloy Gate Frame'],
    sizes: ['One Size (24cm x 16cm Expandable)'],
    colors: [
      { name: 'Terracotta Rust', hex: '#9A3412' }
    ],
    variants: [
      {
        id: 'var-acc-pch-03-rst',
        productId: 'prod-acc-pch-03',
        sku: 'VL-ACC-PCH-03-RST',
        size: 'One Size',
        color: 'Terracotta Rust',
        colorHex: '#9A3412',
        material: 'Velvet & Brass',
        stockQuantity: 20
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-pch-04',
    title: 'Tuscan Saddle Leather Structured Travel Keepsake Case',
    slug: 'tuscan-saddle-leather-structured-travel-keepsake-case',
    subtitle: 'Rigid Vegetable-Tanned Leather Case with Heavy Brass Zipper',
    description: 'A crush-proof, structured travel case crafted from 100% full-grain Tuscan saddle leather with reinforced sidewalls. Protects fragile glass wands, metal plugs, and luxury electronic devices in luggage.',
    story: 'Engineered for discerning globetrotters who demand uncompromising protection and bespoke leathercraft for their private collection.',
    basePrice: 95.00,
    discountPrice: 85.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Storage Pouches',
    images: ['/images/products/accessories/acc-pouch-4.jpg'],
    secondaryImage: '/images/products/accessories/acc-pouch-4.jpg',
    rating: 4.98,
    reviewCount: 47,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Leather Travel Case', 'Structured Case', 'Full Grain Leather', 'Crush Proof', 'Discreet'],
    sensoryFeel: 'Aromatic, rich full-grain leather with firm, protective structural integrity.',
    fabricCare: 'Treat with natural leather conditioner once per year.',
    safetyCertifications: ['Vegetable Tanned Leather', 'Heavy-Duty YKK Brass Hardware'],
    intensityLevels: 'Crush-Resistant Travel Armor',
    materials: ['Full-Grain Tuscan Saddle Leather', 'Suede Interior Lining', 'Solid Brass Zipper'],
    sizes: ['Travel Dimensions (22cm x 12cm x 6cm)'],
    colors: [
      { name: 'Cognac Saddle', hex: '#78350F' },
      { name: 'Obsidian Black', hex: '#0F172A' }
    ],
    variants: [
      {
        id: 'var-acc-pch-04-cog',
        productId: 'prod-acc-pch-04',
        sku: 'VL-ACC-PCH-04-COG',
        size: 'Travel',
        color: 'Cognac Saddle',
        colorHex: '#78350F',
        material: 'Tuscan Leather',
        stockQuantity: 24
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-pch-05',
    title: 'Bespoke Quilted Satin & Lace Evening Intimacy Clutch',
    slug: 'bespoke-quilted-satin-lace-evening-intimacy-clutch',
    subtitle: 'Duchess Satin with Chantilly Lace Overlay & Hidden Interior Compartments',
    description: 'Disguised as an exquisite couture evening clutch, this padded organizer conceals two velvet-lined device sleeves, an elastic loop for miniature droppers, and a concealed zipped pocket for discreet essentials.',
    story: 'Seamlessly transition from gala evenings to private bedroom rendezvous with complete aesthetic stealth.',
    basePrice: 72.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Storage Pouches',
    images: ['/images/products/accessories/acc-pouch-5.jpg'],
    secondaryImage: '/images/products/accessories/acc-pouch-5.jpg',
    rating: 4.91,
    reviewCount: 23,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Satin Clutch', 'Chantilly Lace', 'Concealed Organizer', 'Couture'],
    sensoryFeel: 'Quilted cloud softness with delicate floral Chantilly lace filigree.',
    fabricCare: 'Dry clean or spot clean gently with damp microfiber.',
    safetyCertifications: ['Hypoallergenic Fabrics', 'Discreet Non-Descript Exterior'],
    intensityLevels: 'Concealed Multi-Compartment Storage',
    materials: ['Duchess Satin', 'French Chantilly Lace', 'Magnetic Snap Closure'],
    sizes: ['One Size (26cm x 14cm)'],
    colors: [
      { name: 'Champagne & Black Lace', hex: '#1C1917' }
    ],
    variants: [
      {
        id: 'var-acc-pch-05-lac',
        productId: 'prod-acc-pch-05',
        sku: 'VL-ACC-PCH-05-LAC',
        size: 'One Size',
        color: 'Champagne & Black Lace',
        colorHex: '#1C1917',
        material: 'Duchess Satin & Lace',
        stockQuantity: 28
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // TOY CLEANERS (1 - 5)
  // =========================================================================
  {
    id: 'prod-acc-cln-01',
    title: 'Botanical Anti-Microbial Rapid Mist Cleansing Spray (150ml)',
    slug: 'botanical-anti-microbial-rapid-mist-cleansing-spray-150ml',
    subtitle: 'Tea Tree, Lavender & Peppermint Rapid Sanitizing Fine-Mist Atomizer',
    description: 'An alcohol-free, rinse-optional sanitizing spray formulated with Australian tea tree hydrosol and organic French lavender. Destroys 99.9% of bacteria within 60 seconds without degrading body-safe silicone, borosilicate glass, or stainless steel.',
    story: 'Effortless cleanliness meets spa-like aroma, keeping your pleasure collection impeccably fresh and sterile.',
    basePrice: 32.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Toy Cleaners',
    images: ['/images/products/accessories/acc-clean-1.jpg'],
    secondaryImage: '/images/products/accessories/acc-clean-1.jpg',
    rating: 4.97,
    reviewCount: 88,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Toy Cleaner', 'Mist Spray', 'Tea Tree', 'Alcohol Free', 'Silicone Safe'],
    sensoryFeel: 'Fine refreshing mist with a crisp, herbal lavender and tea tree bouquet.',
    fabricCare: 'Spray directly on device, let sit 60 seconds, wipe dry with clean cloth.',
    safetyCertifications: ['100% Silicone Safe', 'Alcohol & Paraben Free', 'Antibacterial 99.9%'],
    intensityLevels: 'Rapid 60-Second Sanitization',
    materials: ['Tea Tree Hydrosol', 'Lavender Distillate', 'Amber Glass Atomizer'],
    sizes: ['150ml / 5.1 fl oz'],
    colors: [
      { name: 'Amber Mist', hex: '#78350F' }
    ],
    variants: [
      {
        id: 'var-acc-cln-01-150',
        productId: 'prod-acc-cln-01',
        sku: 'VL-ACC-CLN-01-150',
        size: '150ml',
        color: 'Amber Mist',
        colorHex: '#78350F',
        material: 'Botanical Sanitizing Mist',
        stockQuantity: 65
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-cln-02',
    title: 'Pure Colloidal Silver Medical Hygiene Device Sanitizer (100ml)',
    slug: 'pure-colloidal-silver-medical-hygiene-device-sanitizer-100ml',
    subtitle: 'Hospital-Grade Bio-Active Silver Hydrosol Spray for Total Sterilization',
    description: 'Harnesses true bio-active colloidal silver ions to naturally neutralize microbial threats and biofilms. Completely odorless, neutral pH, and non-corrosive to delicate electronic charging ports and silicone coatings.',
    story: 'Pure clinical cleanliness without chemical sting, ensuring absolute peace of mind for sensitive bodies.',
    basePrice: 36.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Toy Cleaners',
    images: ['/images/products/accessories/acc-clean-2.jpg'],
    secondaryImage: '/images/products/accessories/acc-clean-2.jpg',
    rating: 4.94,
    reviewCount: 41,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Colloidal Silver', 'Medical Grade', 'Odorless', 'Bio-Active', 'Device Sanitizer'],
    sensoryFeel: 'Pure, refreshing water-light mist with zero fragrance or residue.',
    fabricCare: 'Spray thoroughly and allow to air dry naturally for maximum ionic protection.',
    safetyCertifications: ['USP Medical Grade Water', '99.99% Pure Silver', 'Non-Toxic'],
    intensityLevels: 'Ionic Antimicrobial Shield',
    materials: ['Bio-Active Silver Hydrosol', 'Frosted Spray Flacon'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Frosted Glass', hex: '#F3F4F6' }
    ],
    variants: [
      {
        id: 'var-acc-cln-02-100',
        productId: 'prod-acc-cln-02',
        sku: 'VL-ACC-CLN-02-100',
        size: '100ml',
        color: 'Frosted Glass',
        colorHex: '#F3F4F6',
        material: 'Colloidal Silver Solution',
        stockQuantity: 40
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-cln-03',
    title: 'Individually Wrapped Botanical Toy & Body Sanitizing Wipes (Box of 30)',
    slug: 'individually-wrapped-botanical-toy-body-sanitizing-wipes-30',
    subtitle: 'Biodegradable Bamboo Wipes Infused with Chamomile, Aloe & Chlorhexidine',
    description: 'Pocket-sized individually sealed wipes designed for fast, discreet cleaning before and after intimate moments. Formulated with soothing chamomile and antibacterial agents that clean toys and sensitive skin alike.',
    story: 'Travel-ready hygiene that slips invisibly into purses, pockets, and weekend bags for effortless cleanup anywhere.',
    basePrice: 28.00,
    discountPrice: 24.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Toy Cleaners',
    images: ['/images/products/accessories/acc-clean-3.jpg'],
    secondaryImage: '/images/products/accessories/acc-clean-3.jpg',
    rating: 4.96,
    reviewCount: 59,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Travel Wipes', 'Individually Sealed', 'Bamboo Fiber', 'Discreet Hygiene', 'Dual Use'],
    sensoryFeel: 'Ultra-soft, thick textured bamboo cloth saturated with soothing, non-sticky moisture.',
    fabricCare: 'Single-use biodegradable wipe. Dispose in bin; do not flush.',
    safetyCertifications: ['100% Biodegradable Bamboo', 'Hypoallergenic', 'pH 4.5 Balanced'],
    intensityLevels: 'Instant On-The-Go Hygiene',
    materials: ['Natural Bamboo Fiber', 'Chamomile Extract', 'Foil Seal Packet'],
    sizes: ['Box of 30 Sealed Packets'],
    colors: [
      { name: 'Minimalist White', hex: '#FFFFFF' }
    ],
    variants: [
      {
        id: 'var-acc-cln-03-bx',
        productId: 'prod-acc-cln-03',
        sku: 'VL-ACC-CLN-03-BX',
        size: '30 Packets',
        color: 'Minimalist White',
        colorHex: '#FFFFFF',
        material: 'Bamboo Wipes',
        stockQuantity: 80
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-cln-04',
    title: 'Gentle Tea Tree & Chamomile Foaming Cleanser Flacon (200ml)',
    slug: 'gentle-tea-tree-chamomile-foaming-cleanser-flacon-200ml',
    subtitle: 'Rich Cloud Foam Sanitizing Wash with Gentle Plant Surfactants',
    description: 'A cloud-like foaming cleanser pump that dispenses thick, velvety antibacterial bubbles. Lathers away silicone and water-based lubricants with ease while leaving materials supple and residue-free.',
    story: 'Turn device maintenance into a quick, satisfying ritual of sparkling renewal.',
    basePrice: 34.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Toy Cleaners',
    images: ['/images/products/accessories/acc-clean-4.jpg'],
    secondaryImage: '/images/products/accessories/acc-clean-4.jpg',
    rating: 4.92,
    reviewCount: 38,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Foam Cleanser', 'Pump Dispenser', 'Gentle Wash', 'Silicone Safe'],
    sensoryFeel: 'Airy, luxurious cloud foam that rinses cleanly without slippery residue.',
    fabricCare: 'Dispense 1-2 pumps onto damp device, lather for 30 seconds, rinse thoroughly.',
    safetyCertifications: ['Alcohol & Bleach Free', 'Safe on All Toy Materials', 'Vegan'],
    intensityLevels: 'Gentle Deep Foaming Clean',
    materials: ['Plant Glucosides', 'Chamomile Floral Water', 'Pump Bottle'],
    sizes: ['200ml / 6.8 fl oz'],
    colors: [
      { name: 'Amber Foamer', hex: '#B45309' }
    ],
    variants: [
      {
        id: 'var-acc-cln-04-200',
        productId: 'prod-acc-cln-04',
        sku: 'VL-ACC-CLN-04-200',
        size: '200ml',
        color: 'Amber Foamer',
        colorHex: '#B45309',
        material: 'Foaming Cleanser',
        stockQuantity: 52
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-cln-05',
    title: 'Crystal Atomizer Perfumed Botanical Toy Care Elixir (100ml)',
    slug: 'crystal-atomizer-perfumed-botanical-toy-care-elixir-100ml',
    subtitle: 'Antique Faceted Glass Flacon with Squeeze Bulb Atomizer',
    description: 'Combines medical-grade hygiene with antique dressing-table splendor. The vintage squeeze-bulb atomizer releases a micronized cloud of antimicrobial witch hazel, neroli, and silver ions to sanitize and lightly scent the boudoir.',
    story: 'Why should cleaning be sterile when it can be an enchanting ritual on your vanity?',
    basePrice: 48.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Toy Cleaners',
    images: ['/images/products/accessories/acc-clean-5.jpg'],
    secondaryImage: '/images/products/accessories/acc-clean-5.jpg',
    rating: 4.95,
    reviewCount: 27,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Crystal Atomizer', 'Vanity Flacon', 'Neroli Fragrance', 'Antique Luxury'],
    sensoryFeel: 'Micronized perfumed mist from a tactile vintage squeeze bulb.',
    fabricCare: 'Refillable flacon. Wipe exterior crystal with dry cloth.',
    safetyCertifications: ['Non-Aerosol', 'Skin-Safe Natural Hydrosols', 'Refillable Glass'],
    intensityLevels: 'Aromatic Micronized Sanitizing Mist',
    materials: ['Faceted Crystal Glass', 'Polished Brass Atomizer Bulb', 'Witch Hazel Hydrosol'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Crystal & Brass', hex: '#FDFBF7' }
    ],
    variants: [
      {
        id: 'var-acc-cln-05-cst',
        productId: 'prod-acc-cln-05',
        sku: 'VL-ACC-CLN-05-CST',
        size: '100ml',
        color: 'Crystal & Brass',
        colorHex: '#FDFBF7',
        material: 'Crystal & Botanical Hydrosol',
        stockQuantity: 22
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // BODY OILS (1 - 5)
  // =========================================================================
  {
    id: 'prod-acc-oil-01',
    title: 'Aura Pure Botanical Intimacy & Sensual Massage Elixir (100ml)',
    slug: 'aura-pure-botanical-intimacy-sensual-massage-elixir-100ml',
    subtitle: 'Cold-Pressed Sweet Almond, Golden Jojoba & Ylang Ylang Sensual Oil',
    description: 'Our signature whole-body massage nectar. Formulated with cold-pressed organic sweet almond, golden jojoba, and therapeutic Madagascar ylang ylang. Glides effortlessly across the skin, leaving a satin non-greasy sheen and delicate floral aroma.',
    story: 'Formulated to dissolve muscle tension and awaken cutaneous sensitivity during slow, passionate touch.',
    basePrice: 54.00,
    discountPrice: 46.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Body Oils',
    images: ['/images/products/accessories/acc-oil-1.jpg'],
    secondaryImage: '/images/products/accessories/acc-oil-1.jpg',
    rating: 4.98,
    reviewCount: 94,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Botanical Oil', 'Sensual Massage', 'Ylang Ylang', 'Jojoba', 'Best Seller'],
    sensoryFeel: 'Velvet slip that absorbs smoothly into skin without tacky residue or staining linens.',
    fabricCare: 'Warm several drops between palms before smoothing over partner’s body.',
    safetyCertifications: ['100% Plant Based', 'Non-Comedogenic', 'Cruelty Free', 'Dermatologist Tested'],
    intensityLevels: 'Full-Body Sensory Hydration',
    materials: ['Sweet Almond Oil', 'Golden Jojoba Seed Oil', 'Ylang Ylang Flower Oil', 'Amber Glass Flacon'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Amber Flacon', hex: '#92400E' }
    ],
    variants: [
      {
        id: 'var-acc-oil-01-100',
        productId: 'prod-acc-oil-01',
        sku: 'VL-ACC-OIL-01-100',
        size: '100ml',
        color: 'Amber Flacon',
        colorHex: '#92400E',
        material: 'Organic Body Oil',
        stockQuantity: 70
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-oil-02',
    title: 'Golden Sunlight Maracuja & Sweet Almond Radiance Body Oil (120ml)',
    slug: 'golden-sunlight-maracuja-sweet-almond-radiance-body-oil-120ml',
    subtitle: 'Illuminating Dry Oil with Vitamin C & Amazonian Maracuja Nectar',
    description: 'An illuminating dry body oil enriched with Amazonian passionfruit seed oil and antioxidant vitamin C. Absorbs in seconds, leaving skin with a lit-from-within golden radiance, silky touch, and tropical citrus notes.',
    story: 'Bottling the warmth of golden hour sunbeams falling across bare skin.',
    basePrice: 58.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Body Oils',
    images: ['/images/products/accessories/acc-oil-2.jpg'],
    secondaryImage: '/images/products/accessories/acc-oil-2.jpg',
    rating: 4.96,
    reviewCount: 46,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Dry Oil', 'Maracuja', 'Golden Radiance', 'Body Glow', 'Non Greasy'],
    sensoryFeel: 'Weightless dry oil finish that gives skin an irresistible satin glide.',
    fabricCare: 'Smooth across décolletage, shoulders, and legs for radiant glow.',
    safetyCertifications: ['Cold-Pressed Plant Oils', 'Mineral Oil Free', 'Paraben Free'],
    intensityLevels: 'Radiant Luminous Moisture',
    materials: ['Passionfruit Seed Oil', 'Almond Oil', 'Clear Glass Flacon'],
    sizes: ['120ml / 4.0 fl oz'],
    colors: [
      { name: 'Golden Nectar', hex: '#F59E0B' }
    ],
    variants: [
      {
        id: 'var-acc-oil-02-120',
        productId: 'prod-acc-oil-02',
        sku: 'VL-ACC-OIL-02-120',
        size: '120ml',
        color: 'Golden Nectar',
        colorHex: '#F59E0B',
        material: 'Botanical Dry Oil',
        stockQuantity: 42
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-oil-03',
    title: 'French Bourbon Vanilla & Mysore Sandalwood Sensual Perfume Oil (50ml)',
    slug: 'french-bourbon-vanilla-mysore-sandalwood-sensual-perfume-oil-50ml',
    subtitle: 'Artisanal Pulse-Point Perfume & Intimacy Oil in Luxury Keepsake Box',
    description: 'A decadent concentration of organic Madagascar vanilla planifolia infused in warm Indian Mysore sandalwood and fractionated coconut oil. Blends with personal skin chemistry to create an intoxicating, irresistible intimate scent.',
    story: 'Warm, sensual, and universally alluring, this perfume oil turns the neck, wrists, and collarbone into irresistible magnets.',
    basePrice: 68.00,
    discountPrice: 58.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Body Oils',
    images: ['/images/products/accessories/acc-oil-3.jpg'],
    secondaryImage: '/images/products/accessories/acc-oil-3.jpg',
    rating: 4.97,
    reviewCount: 52,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Perfume Oil', 'Bourbon Vanilla', 'Sandalwood', 'Pulse Point', 'Luxury Flacon'],
    sensoryFeel: 'Hypnotic, warm balsamic sweetness with smooth velvety dry-down.',
    fabricCare: 'Touch dropper wand to pulse points or mix with body cream.',
    safetyCertifications: ['Alcohol-Free Pure Oil', 'Phthalate Free', 'Long-Lasting 12hr Wear'],
    intensityLevels: 'Intoxicating Fragrance Projection',
    materials: ['Bourbon Vanilla Bean Extract', 'Sandalwood Oil', 'Art Deco Glass Flacon'],
    sizes: ['50ml / 1.7 fl oz'],
    colors: [
      { name: 'Vintage Flacon', hex: '#D97706' }
    ],
    variants: [
      {
        id: 'var-acc-oil-03-50m',
        productId: 'prod-acc-oil-03',
        sku: 'VL-ACC-OIL-03-50M',
        size: '50ml',
        color: 'Vintage Flacon',
        colorHex: '#D97706',
        material: 'Pure Perfume Oil',
        stockQuantity: 35
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-oil-04',
    title: 'Cold-Pressed Virgin Organic Golden Jojoba Massage Oil (100ml)',
    slug: 'cold-pressed-virgin-organic-golden-jojoba-massage-oil-100ml',
    subtitle: '100% Unrefined Pure Simmondsia Chinensis Seed Oil with Pump Cap',
    description: 'The purest single-ingredient botanical oil in our collection. Chemically identical to human skin sebum, golden jojoba absorbs effortlessly to hydrate sensitive intimate tissues without clogging pores or disrupting natural pH balance.',
    story: 'Pure minimalism for purists—one pristine desert botanical, cold-pressed to perfection.',
    basePrice: 42.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Body Oils',
    images: ['/images/products/accessories/acc-oil-4.jpg'],
    secondaryImage: '/images/products/accessories/acc-oil-4.jpg',
    rating: 4.93,
    reviewCount: 34,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Jojoba Oil', 'Single Ingredient', 'Virgin Organic', 'Pure Moisture', 'Hypoallergenic'],
    sensoryFeel: 'Clean, neutral glide that soothes irritated skin and leaves zero oily film.',
    fabricCare: 'Dispense 2-3 pumps for full body massage or targeted skin hydration.',
    safetyCertifications: ['USDA Organic Certified', '100% Unrefined', 'Zero Preservatives'],
    intensityLevels: 'Natural Restorative Moisture',
    materials: ['100% Pure Organic Jojoba Oil', 'UV Protective Bottle'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Golden Jojoba', hex: '#CA8A04' }
    ],
    variants: [
      {
        id: 'var-acc-oil-04-100',
        productId: 'prod-acc-oil-04',
        sku: 'VL-ACC-OIL-04-100',
        size: '100ml',
        color: 'Golden Jojoba',
        colorHex: '#CA8A04',
        material: 'Pure Jojoba Oil',
        stockQuantity: 50
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-oil-05',
    title: 'Damask Rose Petal & Neroli Blossom Intimate Glow Nectar (60ml)',
    slug: 'damask-rose-petal-neroli-blossom-intimate-glow-nectar-60ml',
    subtitle: 'Sensual Botanical Dropper Infused with Sun-Dried Rosebuds & Orange Blossom',
    description: 'Suspended with organic Turkish Damask rosebuds in a base of camellia seed oil, rosehip seed oil, and uplifting Italian neroli blossom. Imparts a romantic dewy sheen and delicate floral aroma across the entire body.',
    story: 'An homage to ancient bridal beauty baths, where lovers were annointed with fresh floral distillates.',
    basePrice: 52.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Body Oils',
    images: ['/images/products/accessories/acc-oil-5.jpg'],
    secondaryImage: '/images/products/accessories/acc-oil-5.jpg',
    rating: 4.95,
    reviewCount: 39,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Rose Oil', 'Neroli Blossom', 'Camellia Oil', 'Botanical Dropper', 'Sensual Nectar'],
    sensoryFeel: 'Silky, featherlight botanical nectar that melts warmly into skin.',
    fabricCare: 'Use glass pipette to dispense 3-5 drops directly onto chest and abdomen.',
    safetyCertifications: ['Real Botanical Infusion', 'Synthetic Dye Free', 'Non-Toxic'],
    intensityLevels: 'Romantic Floral Radiance',
    materials: ['Camellia Seed Oil', 'Rose Otto', 'Neroli Essential Oil', 'Amber Pipette Bottle'],
    sizes: ['60ml / 2.0 fl oz'],
    colors: [
      { name: 'Rose Amber', hex: '#BE185D' }
    ],
    variants: [
      {
        id: 'var-acc-oil-05-60m',
        productId: 'prod-acc-oil-05',
        sku: 'VL-ACC-OIL-05-60M',
        size: '60ml',
        color: 'Rose Amber',
        colorHex: '#BE185D',
        material: 'Rose & Neroli Nectar',
        stockQuantity: 36
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // LUBRICANTS (1 - 5)
  // =========================================================================
  {
    id: 'prod-acc-lub-01',
    title: 'Silken Touch Multi-Molecular Hyaluronic Water-Based Lubricant in Amber Pump (200ml)',
    slug: 'silken-touch-hyaluronic-water-based-lubricant-amber-pump-200ml',
    subtitle: 'Triple-Weight Hyaluronic Acid & Organic Aloe Vera in Glass Dispenser Flacon',
    description: 'Our award-winning daily intimate lubricant. Formulated with three molecular weights of hyaluronic acid that deliver sustained, frictionless cushion and hydration without stickiness. 100% condom and toy safe, rinsing cleanly with water.',
    story: 'Engineered to mirror the body’s most luxurious natural moisture, elevating touch into effortless glide.',
    basePrice: 44.00,
    discountPrice: 38.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Lubricants',
    images: ['/images/products/accessories/acc-lub-1.jpg'],
    secondaryImage: '/images/products/accessories/acc-lub-1.jpg',
    rating: 4.99,
    reviewCount: 112,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Hyaluronic Lubricant', 'Water Based', 'Toy Safe', 'Condom Compatible', 'Best Seller'],
    sensoryFeel: 'Weightless, ultra-slick moisture cushion that never gets sticky or tacky.',
    fabricCare: 'Dispense 1-2 pumps as needed. Reapply freely. Rinses effortlessly with warm water.',
    safetyCertifications: ['pH Balanced (3.8 - 4.2)', 'Toy Safe & Latex Safe', 'Glycerin Free', 'Paraben Free'],
    intensityLevels: 'Long-Lasting Frictionless Cushion',
    materials: ['Hyaluronic Acid', 'Aloe Leaf Juice', 'Amber Glass Pump Bottle'],
    sizes: ['200ml / 6.8 fl oz'],
    colors: [
      { name: 'Amber Glass Pump', hex: '#78350F' }
    ],
    variants: [
      {
        id: 'var-acc-lub-01-200',
        productId: 'prod-acc-lub-01',
        sku: 'VL-ACC-LUB-01-200',
        size: '200ml',
        color: 'Amber Glass Pump',
        colorHex: '#78350F',
        material: 'Hyaluronic Water-Based Formula',
        stockQuantity: 85
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-lub-02',
    title: 'Pure Organic Aloe Vera Soothing & Cooling Intimate Gel (250ml)',
    slug: 'pure-organic-aloe-vera-soothing-cooling-intimate-gel-250ml',
    subtitle: '98% Cold-Pressed Organic Aloe Barbadensis with Cucumber & Chamomile Extract',
    description: 'Formulated for ultra-sensitive skin prone to irritation or dryness. Provides a naturally soothing, cooling sensation with high-concentration organic aloe vera. Hypoallergenic, edible, and zero synthetic petrochemicals.',
    story: 'Cooling botanical comfort that calms delicate intimate tissue while providing luscious, gentle glide.',
    basePrice: 38.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Lubricants',
    images: ['/images/products/accessories/acc-lub-2.jpg'],
    secondaryImage: '/images/products/accessories/acc-lub-2.jpg',
    rating: 4.95,
    reviewCount: 64,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Aloe Vera', 'Sensitive Skin', 'Cooling Gel', 'Organic Intimate Gel', 'Edible'],
    sensoryFeel: 'Cooling, refreshing gel that leaves skin feeling calmed and hydrated.',
    fabricCare: 'Compatible with all latex, polyisoprene, and silicone devices.',
    safetyCertifications: ['98% Certified Organic Aloe', 'Petrochemical Free', 'Hypoallergenic'],
    intensityLevels: 'Calming Cooling Glide',
    materials: ['Organic Aloe Leaf Juice', 'Chamomile Extract', 'Cucumber Distillate'],
    sizes: ['250ml / 8.5 fl oz'],
    colors: [
      { name: 'Frosted Emerald', hex: '#059669' }
    ],
    variants: [
      {
        id: 'var-acc-lub-02-250',
        productId: 'prod-acc-lub-02',
        sku: 'VL-ACC-LUB-02-250',
        size: '250ml',
        color: 'Frosted Emerald',
        colorHex: '#059669',
        material: 'Organic Aloe Gel',
        stockQuantity: 60
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-lub-03',
    title: 'Platinum Medical-Grade Pure Silicone Long-Wear Glide (120ml)',
    slug: 'platinum-medical-grade-pure-silicone-long-wear-glide-120ml',
    subtitle: '100% Water-Resistant Ultra-Concentrated Formula for Shower & Prolonged Play',
    description: 'Crafted from premium medical-grade Dimethicone and Dimethiconol silicone blend. Will not absorb into the skin or evaporate, providing uninterrupted velvet slip that never breaks down—even underwater in baths, showers, or hot tubs.',
    story: 'For uninterrupted, passionate sessions where you never have to pause to reapply.',
    basePrice: 48.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Lubricants',
    images: ['/images/products/accessories/acc-lub-3.jpg'],
    secondaryImage: '/images/products/accessories/acc-lub-3.jpg',
    rating: 4.97,
    reviewCount: 78,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Silicone Lubricant', 'Waterproof', 'Shower Safe', 'Long Lasting', 'Medical Grade'],
    sensoryFeel: 'Velvet-soft, silky glide that persists continuously without getting tacky.',
    fabricCare: 'Water-resistant. Wash off with warm water and soap. Compatible with glass and metal toys; not for use with silicone toys.',
    safetyCertifications: ['100% Medical Grade Silicone', 'Latex Condom Compatible', 'Non-Absorbing'],
    intensityLevels: 'Endless Water-Resistant Slip',
    materials: ['Pure Dimethicone Blend', 'Precision Pump Bottle'],
    sizes: ['120ml / 4.0 fl oz'],
    colors: [
      { name: 'Sleek Smoke', hex: '#374151' }
    ],
    variants: [
      {
        id: 'var-acc-lub-03-120',
        productId: 'prod-acc-lub-03',
        sku: 'VL-ACC-LUB-03-120',
        size: '120ml',
        color: 'Sleek Smoke',
        colorHex: '#374151',
        material: 'Medical Silicone Glide',
        stockQuantity: 45
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-lub-04',
    title: 'Silk & Silicone Hybrid Luxury Moisturizing Intimate Fluid (150ml)',
    slug: 'silk-silicone-hybrid-luxury-moisturizing-intimate-fluid-150ml',
    subtitle: 'The Perfect Synergy of Water-Based Cleanliness and Silicone Endurance',
    description: 'Unites the effortless, easy-rinse cleanup of water-based lubricants with the long-lasting endurance of premium silicone. Formulated with hydrolyzed silk peptides for an exceptionally rich, creamy glide.',
    story: 'The ultimate compromise for lovers who crave the infinite slip of silicone and the refreshing rinse of water.',
    basePrice: 46.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Lubricants',
    images: ['/images/products/accessories/acc-lub-4.jpg'],
    secondaryImage: '/images/products/accessories/acc-lub-4.jpg',
    rating: 4.94,
    reviewCount: 43,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Hybrid Lubricant', 'Silk Peptides', 'Easy Rinse', 'Long Lasting', 'Creamy Glide'],
    sensoryFeel: 'Opulent, creamy emulsion that feels like liquid velvet on intimate skin.',
    fabricCare: 'Rinses easily with warm water and mild cleanser. Safe with condoms.',
    safetyCertifications: ['pH Balanced', 'Silk Peptide Enriched', 'Latex Compatible'],
    intensityLevels: 'Hybrid Extended Duration',
    materials: ['Hydrolyzed Silk Peptides', 'Silicone-Water Emulsion', 'Minimalist Bottle'],
    sizes: ['150ml / 5.1 fl oz'],
    colors: [
      { name: 'Opal Pearl', hex: '#F3F4F6' }
    ],
    variants: [
      {
        id: 'var-acc-lub-04-150',
        productId: 'prod-acc-lub-04',
        sku: 'VL-ACC-LUB-04-150',
        size: '150ml',
        color: 'Opal Pearl',
        colorHex: '#F3F4F6',
        material: 'Hybrid Silk Fluid',
        stockQuantity: 40
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-acc-lub-05',
    title: 'Sparkling Champagne & Wild Strawberry Organic Edible Flavored Glide (100ml)',
    slug: 'sparkling-champagne-wild-strawberry-organic-edible-flavored-glide-100ml',
    subtitle: 'Naturally Sweetened Gourmet Intimate Gel with French Strawberry Essence',
    description: 'A decadent water-based intimate lubricant flavored with natural organic strawberry distillate and subtle notes of vintage brut champagne. Naturally sweetened with plant stevia—zero sugar, zero artificial sweeteners, zero sticky mess.',
    story: 'Delight the palate during sensual oral foreplay with the effervescent romance of fresh strawberries and champagne.',
    basePrice: 36.00,
    discountPrice: 30.00,
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    categoryName: 'Accessories',
    subcategory: 'Lubricants',
    images: ['/images/products/accessories/acc-lub-5.jpg'],
    secondaryImage: '/images/products/accessories/acc-lub-5.jpg',
    rating: 4.96,
    reviewCount: 68,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Flavored Lube', 'Edible Lubricant', 'Champagne & Strawberry', 'Organic', 'Foreplay'],
    sensoryFeel: 'Smooth delicious glide with authentic sweet berry and bubbly wine taste.',
    fabricCare: '100% water soluble and safe to ingest. Zero sugar or yeast risk.',
    safetyCertifications: ['Sugar Free & Glycerin Free', 'Organic Food Grade Flavors', 'pH 4.0 Safe'],
    intensityLevels: 'Gourmet Sensual Oral Play',
    materials: ['Wild Strawberry Essence', 'Natural Stevia', 'Amber Glass Dispenser'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Rose Amber', hex: '#BE185D' }
    ],
    variants: [
      {
        id: 'var-acc-lub-05-100',
        productId: 'prod-acc-lub-05',
        sku: 'VL-ACC-LUB-05-100',
        size: '100ml',
        color: 'Rose Amber',
        colorHex: '#BE185D',
        material: 'Edible Organic Glide',
        stockQuantity: 55
      }
    ],
    discreetPackagingIncluded: true
  }
];

// Read current products
const currentFile = fs.readFileSync(path.join(__dirname, '../src/data/products.ts'), 'utf8');

// Parse current products
const pStart = currentFile.indexOf('export const PRODUCTS: Product[] = ');
const jsonStr = currentFile.slice(pStart + 'export const PRODUCTS: Product[] = '.length).trim().replace(/;$/, '');
const currentProducts = JSON.parse(jsonStr);

// Filter out old placeholder accessories products (prod-004, prod-008)
const remainingProducts = currentProducts.filter(p => p.categoryId !== 'cat-accessories');

// Assemble all products: lingerie (30) + wellness (25) + couples (20) + accessories (20) + remaining giftsets (1) = 96 total
const allProducts = [...remainingProducts, ...accessoriesProducts];

// Generate updated products.ts file content
const newContent = `import { Category, Product } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-lingerie',
    name: 'Lingerie',
    slug: 'lingerie',
    description: 'Bespoke silk, French Chantilly lace, sculpted bodysuits, and luxury babydolls tailored for divine elegance.',
    heroImage: '/images/hero-lingerie.jpg',
    itemCount: 30,
    subcategories: ['Bras', 'Panties', 'Bodysuits', 'Babydolls', 'Corsets', 'Shapewear'],
  },
  {
    id: 'cat-wellness',
    name: 'Sex Toys',
    slug: 'sex-toys',
    description: 'Sculptural adult intimacy wellness devices crafted from 100% body-safe medical silicone and champagne gold.',
    heroImage: '/images/wellness-toy.jpg',
    itemCount: 25,
    subcategories: ['Vibrators', 'Suction Toys', 'Dildos', 'Anal Toys', 'Essentials'],
  },
  {
    id: 'cat-couples',
    name: 'Couples',
    slug: 'couples',
    description: 'Curated sets for intimacy exploration, silk restraints, sensory candles, and synced dual-pleasure devices.',
    heroImage: '/images/couples-box.jpg',
    itemCount: 20,
    subcategories: ['Bondage & Restraints', 'Games', 'Couples Vibrators', 'Enhancement Oils'],
  },
  {
    id: 'cat-accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Sensory body oils, organic pH-balanced lubricants, velvet travel pouches, and botanical toy care.',
    heroImage: '/images/botanical-oil.jpg',
    itemCount: 20,
    subcategories: ['Storage Pouches', 'Toy Cleaners', 'Body Oils', 'Lubricants'],
  },
  {
    id: 'cat-giftsets',
    name: 'Gift Sets',
    slug: 'gift-sets',
    description: 'Exquisitely wrapped keepsake chests designed for bridal celebrations, romantic anniversaries, and date nights.',
    heroImage: '/images/couples-box.jpg',
    itemCount: 8,
    subcategories: ['Bride-to-Be Kits', 'Date Night Bundles', 'Curated Romance Boxes'],
  },
];

export const PRODUCTS: Product[] = ${JSON.stringify(allProducts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/products.ts'), newContent, 'utf8');
console.log('Successfully updated src/data/products.ts!');
console.log('Total products now:', allProducts.length);
const accessoriesCount = allProducts.filter(p => p.categoryId === 'cat-accessories').length;
console.log('Accessories (cat-accessories) count:', accessoriesCount);
