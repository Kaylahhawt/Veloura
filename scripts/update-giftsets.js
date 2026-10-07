const fs = require('fs');
const path = require('path');

const giftsetsProducts = [
  // =========================================================================
  // BRIDE-TO-BE KITS (1 - 5)
  // =========================================================================
  {
    id: 'prod-gft-brd-01',
    title: 'The Sovereign Bridal Keepsake Trousseau Chest',
    slug: 'sovereign-bridal-keepsake-trousseau-chest',
    subtitle: 'Silver Filigree Keepsake Chest with Ivory Silk Robe, Chantilly Bra & Garter',
    description: 'The pinnacle of bridal gifting. An heirloom-quality silver-filigree keepsake casket lined with rich ivory velvet. Contains our bespoke Chantilly lace balconette bra and brief set, pure 22 Momme silk robe, delicate lace garter with blue sapphire crystal, and Damask rose body nectar.',
    story: 'Preserving the sacred elegance of wedding night anticipation in a treasure chest destined to be cherished for lifetimes.',
    basePrice: 285.00,
    discountPrice: 250.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Bride-to-Be Kits',
    images: ['/images/products/giftsets/gift-bride-1.jpg'],
    secondaryImage: '/images/products/giftsets/gift-bride-1.jpg',
    rating: 4.99,
    reviewCount: 48,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Bridal Trousseau', 'Silver Filigree Chest', 'Wedding Gift', 'Silk Robe', 'Lace Bra Set'],
    sensoryFeel: 'Gossamer French lace and featherlight 22 Momme silk resting inside velvet cushions.',
    fabricCare: 'Dry clean silk garments. Clean chest with microfiber jewelry polishing cloth.',
    safetyCertifications: ['Grade 6A Mulberry Silk', 'Nickel-Free Silver Hardware', 'Handcrafted Filigree'],
    intensityLevels: 'Complete Bridal Luxury Ritual',
    materials: ['Mulberry Silk', 'Chantilly Lace', 'Silver Plated Filigree Chest', 'Velvet Interior'],
    sizes: ['Bespoke Trunk (38cm x 28cm x 15cm)'],
    colors: [
      { name: 'Bridal Ivory & Silver', hex: '#FDFBF7' }
    ],
    variants: [
      {
        id: 'var-gft-brd-01-slv',
        productId: 'prod-gft-brd-01',
        sku: 'VL-GFT-BRD-01-SLV',
        size: 'Deluxe Chest',
        color: 'Bridal Ivory & Silver',
        colorHex: '#FDFBF7',
        material: 'Silver Filigree & Silk',
        stockQuantity: 15
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-brd-02',
    title: "L'Amour Blanc Honeymoon Intimacy Suite Trunk",
    slug: 'l-amour-blanc-honeymoon-intimacy-suite-trunk',
    subtitle: 'White Lace Teddy, Pearlescent Couples Massager & Champagne Strawberry Glide',
    description: 'Curated specifically for romantic honeymoon suites. Includes our sheer white Chantilly lace plunge bodysuit, whisper-quiet pearlescent couples stimulator, organic sparkling champagne strawberry edible lubricant, and plush travel silk pouch.',
    story: 'An exquisite passport to honeymoon ecstasy, designed to ignite romance the moment bedroom doors lock.',
    basePrice: 195.00,
    discountPrice: 175.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Bride-to-Be Kits',
    images: ['/images/products/giftsets/gift-bride-2.jpg'],
    secondaryImage: '/images/products/giftsets/gift-bride-2.jpg',
    rating: 4.96,
    reviewCount: 39,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Honeymoon Gift', 'White Lace Teddy', 'Couples Toy', 'Champagne Glide', 'Gift Trunk'],
    sensoryFeel: 'Silky lace against skin paired with sweet champagne strawberry taste and sonic vibration.',
    fabricCare: 'Hand wash bodysuit in cold water; rinse toy with toy cleanser.',
    safetyCertifications: ['Medical Grade Silicone', 'Edible Food Grade Lubricant', 'IPX7 Waterproof'],
    intensityLevels: 'Honeymoon Sensory Suite',
    materials: ['French Lace', 'Medical Silicone', 'Amber Glass Dispenser', 'Luxury Keepsake Trunk'],
    sizes: ['One Size (Fits S-L Bodysuit)'],
    colors: [
      { name: 'Pure Honeymoon White', hex: '#FFFFFF' }
    ],
    variants: [
      {
        id: 'var-gft-brd-02-wht',
        productId: 'prod-gft-brd-02',
        sku: 'VL-GFT-BRD-02-WHT',
        size: 'One Size',
        color: 'Pure Honeymoon White',
        colorHex: '#FFFFFF',
        material: 'Lace, Silicone & Glass',
        stockQuantity: 22,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-brd-03',
    title: 'Something Blue Celestial Bridal Boudoir Gift Box',
    slug: 'something-blue-celestial-bridal-boudoir-gift-box',
    subtitle: 'Sky-Blue Silk Camisole, Sapphire Crystal Jewel Base Plug & Garter',
    description: 'A daring, decadent reimagining of the classic wedding day tradition. Features a pastel sky-blue 100% silk chemise, hand-sewn blue lace garter, mirror chrome plug with brilliant sapphire-cut jewel base, and botanical pulse oil.',
    story: 'Something old, something new, and an unforgettable secret in celestial sapphire blue.',
    basePrice: 165.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Bride-to-Be Kits',
    images: ['/images/products/giftsets/gift-bride-3.jpg'],
    secondaryImage: '/images/products/giftsets/gift-bride-3.jpg',
    rating: 4.93,
    reviewCount: 31,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Something Blue', 'Bridal Box', 'Sapphire Jewel Plug', 'Silk Chemise', 'Romantic'],
    sensoryFeel: 'Cool, smooth silk flowing over hips with the thrilling weighted chill of mirror chrome.',
    fabricCare: 'Hand wash silk; wash jewel plug with warm antibacterial soap.',
    safetyCertifications: ['Surgical Grade Chrome Alloy', 'Lead-Free Austrian Crystal', 'Flared Safety Base'],
    intensityLevels: 'Sensual Weighted Glamour',
    materials: ['Mulberry Silk', 'Chrome Plated Alloy', 'Faceted Crystal', 'Pastel Gift Box'],
    sizes: ['Medium Chemise / Small Jewel Plug'],
    colors: [
      { name: 'Celestial Sky Blue', hex: '#BAE6FD' }
    ],
    variants: [
      {
        id: 'var-gft-brd-03-blu',
        productId: 'prod-gft-brd-03',
        sku: 'VL-GFT-BRD-03-BLU',
        size: 'Medium Box',
        color: 'Celestial Sky Blue',
        colorHex: '#BAE6FD',
        material: 'Silk & Chrome',
        stockQuantity: 18
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-brd-04',
    title: 'Midnight Bachelorette Seduction & Secrets Casket',
    slug: 'midnight-bachelorette-seduction-secrets-casket',
    subtitle: 'Black Velvet Restraints, Gilded Dares Deck & Bourbon Vanilla Perfume Oil',
    description: 'The ultimate luxury bachelorette gift. Lined in midnight velvet with satin bow ribbon, this set includes crushed velvet wrist restraints, our Midnight Reverie 54-dare bedroom exploration card deck, and French bourbon vanilla perfume oil.',
    story: 'Given by bridesmaids with a knowing smile, providing the bride everything needed to thrill her lover.',
    basePrice: 145.00,
    discountPrice: 125.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Bride-to-Be Kits',
    images: ['/images/products/giftsets/gift-bride-4.jpg'],
    secondaryImage: '/images/products/giftsets/gift-bride-4.jpg',
    rating: 4.95,
    reviewCount: 44,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Bachelorette Gift', 'Velvet Cuffs', 'Bedroom Dares', 'Perfume Oil', 'Bridal Shower'],
    sensoryFeel: 'Sumptuous velvet cushioning paired with intoxicating warm vanilla scent.',
    fabricCare: 'Wipe cuffs clean with damp cloth; keep cards in protective casket.',
    safetyCertifications: ['Lead-Free Brass Hardware', 'Alcohol-Free Perfume Oil', 'Quick-Release Clasps'],
    intensityLevels: 'Erotic Exploration & Foreplay Play',
    materials: ['Italian Velvet', 'Brass Hardware', 'Gilded Cardstock', 'Vanilla Oil Flacon'],
    sizes: ['Keepsake Ribbon Box (30cm x 22cm x 8cm)'],
    colors: [
      { name: 'Midnight & Rose Gold', hex: '#1C1917' }
    ],
    variants: [
      {
        id: 'var-gft-brd-04-onx',
        productId: 'prod-gft-brd-04',
        sku: 'VL-GFT-BRD-04-ONX',
        size: 'One Size',
        color: 'Midnight & Rose Gold',
        colorHex: '#1C1917',
        material: 'Velvet, Brass & Glass',
        stockQuantity: 26
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-brd-05',
    title: 'The Empress Bridal Morning-After Silk & Glow Hamper',
    slug: 'the-empress-bridal-morning-after-silk-glow-hamper',
    subtitle: 'Silk Eye Mask, Sandalwood Pouring Massage Candle & Hyaluronic Intimate Elixir',
    description: 'Curated for the tranquil morning after the celebration. Includes a 22 Momme silk sleep mask, low-temperature pouring soybean and sandalwood massage candle in frosted ceramic, and our Silken Touch hyaluronic intimate serum.',
    story: 'Waking up together as newlyweds bathed in warm morning sunlight, soothing body and soul in decadent peace.',
    basePrice: 135.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Bride-to-Be Kits',
    images: ['/images/products/giftsets/gift-bride-5.jpg'],
    secondaryImage: '/images/products/giftsets/gift-bride-5.jpg',
    rating: 4.92,
    reviewCount: 28,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Morning After', 'Bridal Hamper', 'Silk Sleep Mask', 'Massage Candle', 'Hyaluronic Serum'],
    sensoryFeel: 'Pitch-black cooling silk over eyes with the warm, melted jojoba oil pouring smoothly on skin.',
    fabricCare: 'Hand wash silk mask; trim candle wick before burning.',
    safetyCertifications: ['100% Pure Mulberry Silk', 'Low Melting Temp Wax (39°C)', 'Paraben Free Serum'],
    intensityLevels: 'Restorative Post-Wedding Bliss',
    materials: ['Mulberry Silk', 'Natural Soy & Jojoba Wax', 'Amber Serum Bottle', 'Vintage Wooden Hamper'],
    sizes: ['Hamper Dimensions (32cm x 24cm x 10cm)'],
    colors: [
      { name: 'Warm Amber & Gold', hex: '#D97706' }
    ],
    variants: [
      {
        id: 'var-gft-brd-05-amb',
        productId: 'prod-gft-brd-05',
        sku: 'VL-GFT-BRD-05-AMB',
        size: 'Deluxe Hamper',
        color: 'Warm Amber & Gold',
        colorHex: '#D97706',
        material: 'Silk, Ceramic & Glass',
        stockQuantity: 20
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // DATE NIGHT BUNDLES (1 - 5)
  // =========================================================================
  {
    id: 'prod-gft-dnt-01',
    title: 'Sensual Candlelight & Silk Rendezvous Bundle',
    slug: 'sensual-candlelight-silk-rendezvous-bundle',
    subtitle: 'Aethel Pouring Massage Candle, Silk Blindfold & Intimate Whispers Deck',
    description: 'The definitive date night intimacy suite. Lighting the aromatic amber and sandalwood candle sets the atmosphere before melting into a warm pourable massage oil. Includes a padded black mulberry silk blindfold and the Intimate Whispers 100-card connection game.',
    story: 'Transform an ordinary evening into an unforgettable sensory sanctuary of touch, vulnerability, and candlelight.',
    basePrice: 125.00,
    discountPrice: 110.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Date Night Bundles',
    images: ['/images/products/giftsets/gift-date-1.jpg'],
    secondaryImage: '/images/products/giftsets/gift-date-1.jpg',
    rating: 4.98,
    reviewCount: 76,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Date Night', 'Massage Candle', 'Silk Blindfold', 'Couples Game', 'Best Seller'],
    sensoryFeel: 'Flickering warm candle glow, complete darkness from silk blindfold, and rich warm body oil.',
    fabricCare: 'Store cards in keepsake box; trim candle wick to 1/4 inch.',
    safetyCertifications: ['100% Natural Soy & Jojoba Wax', 'Lead-Free Wick', 'Grade 6A Mulberry Silk'],
    intensityLevels: 'Atmospheric Sensual Immersion',
    materials: ['Natural Wax in Ceramic Crucible', 'Mulberry Silk', 'Gilded Linen Cards'],
    sizes: ['Bundle Box (28cm x 20cm x 10cm)'],
    colors: [
      { name: 'Onyx & Champagne', hex: '#1C1917' }
    ],
    variants: [
      {
        id: 'var-gft-dnt-01-cpl',
        productId: 'prod-gft-dnt-01',
        sku: 'VL-GFT-DNT-01-CPL',
        size: 'Complete Set',
        color: 'Onyx & Champagne',
        colorHex: '#1C1917',
        material: 'Wax, Silk & Linen',
        stockQuantity: 45
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-dnt-02',
    title: 'Midnight Noir Bedroom Exploration Discovery Chest',
    slug: 'midnight-noir-bedroom-exploration-discovery-chest',
    subtitle: 'Leather Restraints, Warming Ginger Body Oil & Wireless Partner Bullet',
    description: 'Housed in a square black leather keepsake chest with brass latches. Contains our padded calfskin wrist cuffs, Golden Nectar warming ginger massage oil, and the Veloura Tango wireless precision bullet massager with RF remote.',
    story: 'For couples ready to venture beyond familiar boundaries and experience thrilling surrender together.',
    basePrice: 175.00,
    discountPrice: 155.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Date Night Bundles',
    images: ['/images/products/giftsets/gift-date-2.jpg'],
    secondaryImage: '/images/products/giftsets/gift-date-2.jpg',
    rating: 4.97,
    reviewCount: 53,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Exploration Kit', 'Leather Chest', 'Partner Bullet', 'Warming Oil', 'Restraints'],
    sensoryFeel: 'Velvet-lined leather holding wrists firmly while deep vibrations and radiant warmth spread.',
    fabricCare: 'Recharge bullet with magnetic USB; condition leather occasionally.',
    safetyCertifications: ['Medical Silicone', 'CE Certified Remote', 'Vegetable Tanned Leather'],
    intensityLevels: 'Erotic Power Exchange & Sonic Resonance',
    materials: ['Italian Leather Chest', 'Medical Silicone Bullet', 'Amber Glass Dispenser'],
    sizes: ['Leather Chest (24cm x 24cm x 12cm)'],
    colors: [
      { name: 'Midnight Noir', hex: '#111827' }
    ],
    variants: [
      {
        id: 'var-gft-dnt-02-onx',
        productId: 'prod-gft-dnt-02',
        sku: 'VL-GFT-DNT-02-ONX',
        size: 'One Size',
        color: 'Midnight Noir',
        colorHex: '#111827',
        material: 'Leather, Silicone & Glass',
        stockQuantity: 28,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-dnt-03',
    title: 'Champagne & Velvet Decadence Date Night Suite',
    slug: 'champagne-velvet-decadence-date-night-suite',
    subtitle: 'Jeweled Keepsake Casket with Edible Champagne Glide & 24K Gold Drops',
    description: 'An opulent golden jewel casket holding gourmet sparkling champagne strawberry edible glide, Aura 24K botanical tingling arousal drops, and crushed velvet handcuffs with gold hardware.',
    story: 'An indulgence of taste, touch, and visual decadence tailored for luxury anniversaries and Valentine’s celebrations.',
    basePrice: 160.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Date Night Bundles',
    images: ['/images/products/giftsets/gift-date-3.jpg'],
    secondaryImage: '/images/products/giftsets/gift-date-3.jpg',
    rating: 4.94,
    reviewCount: 37,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Decadence Suite', 'Champagne Glide', 'Gold Drops', 'Velvet Cuffs', 'Jewel Casket'],
    sensoryFeel: 'Delicious strawberry notes on lips and tongue, velvet softness on wrists, electric tingle.',
    fabricCare: 'Wipe casket clean with dry jewelry cloth.',
    safetyCertifications: ['Food Grade Organic Flavor', 'Latex Compatible', 'Nickel-Free Hardware'],
    intensityLevels: 'Multisensory Indulgence',
    materials: ['Crushed Italian Velvet', 'Amber Dropper', 'Gilded Filigree Casket'],
    sizes: ['Casket (26cm x 18cm x 10cm)'],
    colors: [
      { name: 'Champagne Gold & Velvet', hex: '#D4AF37' }
    ],
    variants: [
      {
        id: 'var-gft-dnt-03-gld',
        productId: 'prod-gft-dnt-03',
        sku: 'VL-GFT-DNT-03-GLD',
        size: 'Suite Set',
        color: 'Champagne Gold & Velvet',
        colorHex: '#D4AF37',
        material: 'Velvet & Gold Electroplate',
        stockQuantity: 24
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-dnt-04',
    title: 'The Tactile Odyssey Sensory Touch Kit',
    slug: 'the-tactile-odyssey-sensory-touch-kit',
    subtitle: 'Black Ostrich Feather Tickler, Seduction Metal Dice & Damask Rose Nectar',
    description: 'Focuses purely on the spectrum of physical touch: from the lightest flutter of genuine ostrich plumes to the weighted clink of metallic polyhedral decision dice and warming floral massage oil.',
    story: 'Awaken dormant senses and rediscover how deeply skin responds when sight is surrendered and touch is amplified.',
    basePrice: 115.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Date Night Bundles',
    images: ['/images/products/giftsets/gift-date-4.jpg'],
    secondaryImage: '/images/products/giftsets/gift-date-4.jpg',
    rating: 4.91,
    reviewCount: 32,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Sensory Touch', 'Feather Tickler', 'Metal Dice', 'Rose Nectar', 'Touch Play'],
    sensoryFeel: 'Gossamer feather shivers across the spine followed by rich warm rose oil glide.',
    fabricCare: 'Hang feather tickler to maintain plume volume.',
    safetyCertifications: ['Natural Sanitized Feathers', 'Lead-Free Cast Metal', 'Cold-Pressed Oils'],
    intensityLevels: 'Delicate to Moderate Tactile Tease',
    materials: ['Ostrich Feathers', 'Zinc Alloy Dice', 'Rose Petal Oil Flacon', 'Gold Foil Box'],
    sizes: ['Box (45cm x 16cm x 8cm)'],
    colors: [
      { name: 'Raven & Rose Gold', hex: '#0F172A' }
    ],
    variants: [
      {
        id: 'var-gft-dnt-04-rvn',
        productId: 'prod-gft-dnt-04',
        sku: 'VL-GFT-DNT-04-RVN',
        size: 'Kit',
        color: 'Raven & Rose Gold',
        colorHex: '#0F172A',
        material: 'Feathers, Metal & Oil',
        stockQuantity: 30
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-dnt-05',
    title: 'Couples Intercourse & Intimacy Harmony Box',
    slug: 'couples-intercourse-intimacy-harmony-box',
    subtitle: 'Harmonie C-Shaped Wearable Vibrator, Hyaluronic Serum & Satin Travel Case',
    description: 'Engineered for synchronized shared pleasure during lovemaking. Centers on the Harmonie flexible C-shaped wearable couple’s vibrator, accompanied by our Silken Touch hyaluronic intimate serum and a discreet quilted travel clutch.',
    story: 'Harmonize your climaxes with state-of-the-art dual stimulation technology in a minimalist designer case.',
    basePrice: 185.00,
    discountPrice: 165.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Date Night Bundles',
    images: ['/images/products/giftsets/gift-date-5.jpg'],
    secondaryImage: '/images/products/giftsets/gift-date-5.jpg',
    rating: 4.98,
    reviewCount: 61,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Couples Vibrator', 'Wearable Toy', 'Hyaluronic Lube', 'Shared Pleasure', 'Harmony Box'],
    sensoryFeel: 'Seamless anatomical hug of warm flexible silicone with limitless hydraulic glide.',
    fabricCare: 'Submersible IPX7 waterproof; charge with magnetic USB cord included.',
    safetyCertifications: ['FDA Medical Silicone', 'Triple-Weight Hyaluronic', 'Latex Safe'],
    intensityLevels: '10 Synchronized Vibration Harmonies',
    materials: ['Medical-Grade Silicone', 'Amber Pump Dispenser', 'Quilted Satin Clutch'],
    sizes: ['Designer Gift Box (25cm x 20cm x 8cm)'],
    colors: [
      { name: 'Plum & Noir', hex: '#581C87' }
    ],
    variants: [
      {
        id: 'var-gft-dnt-05-plm',
        productId: 'prod-gft-dnt-05',
        sku: 'VL-GFT-DNT-05-PLM',
        size: 'Complete Box',
        color: 'Plum & Noir',
        colorHex: '#581C87',
        material: 'Silicone & Glass',
        stockQuantity: 32,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // CURATED ROMANCE BOXES (1 - 5)
  // =========================================================================
  {
    id: 'prod-gft-box-01',
    title: 'Veloura Grand Keepsake Leather Trunk of Seduction',
    slug: 'veloura-grand-keepsake-leather-trunk-seduction',
    subtitle: 'The Collector’s 8-Piece Flagship Leather Trunk with 24K Gold Plated Hardware',
    description: 'The crowning jewel of the Veloura house. An opulent, lockable vintage-style leather trunk lined in crimson velvet. Contains Séraphine rabbit vibrator, Sensiglass 24K gold wand, mulberry silk blindfold, padded leather cuffs, botanical massage elixir, and connection cards.',
    story: 'The definitive intimate library for couples who celebrate pleasure with grand, unapologetic magnificence.',
    basePrice: 420.00,
    discountPrice: 380.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Curated Romance Boxes',
    images: ['/images/products/giftsets/gift-box-1.jpg'],
    secondaryImage: '/images/products/giftsets/gift-box-1.jpg',
    rating: 5.00,
    reviewCount: 34,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Grand Trunk', 'Flagship Collection', 'Lockable Trunk', '8-Piece Set', 'Ultra Luxury'],
    sensoryFeel: 'The weight of hand-stitched leather and velvet containing the ultimate spectrum of sensual sensations.',
    fabricCare: 'Condition leather trunk annually. Store devices in respective velvet compartments.',
    safetyCertifications: ['All Medical-Grade Devices', 'Lockable Brass Padlock & Keys', 'Hypoallergenic'],
    intensityLevels: 'Comprehensive Multi-Tiered Collection',
    materials: ['Full-Grain Calfskin Trunk', 'Crimson Italian Velvet', 'Solid Brass Closures'],
    sizes: ['Collector Trunk (42cm x 30cm x 18cm)'],
    colors: [
      { name: 'Onyx & Crimson Velvet', hex: '#18181B' }
    ],
    variants: [
      {
        id: 'var-gft-box-01-trn',
        productId: 'prod-gft-box-01',
        sku: 'VL-GFT-BOX-01-TRN',
        size: 'Master Trunk',
        color: 'Onyx & Crimson Velvet',
        colorHex: '#18181B',
        material: 'Full-Grain Leather & Velvet',
        stockQuantity: 10,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-box-02',
    title: 'The Golden Hour 24K Luxury Pleasure Casket',
    slug: 'the-golden-hour-24k-luxury-pleasure-casket',
    subtitle: 'Sensiglass 24K Gold Glass Wand, Empress Gold Pelvic Spheres & Shimmer Body Elixir',
    description: 'An ode to pure 24K gold. Includes our hand-blown borosilicate Sensiglass wand infused with 24K gold leaf, the Empress 24K gold-dipped dual pelvic spheres, and an illuminating golden jojoba body elixir in an amber casket.',
    story: 'Immerse in the eternal majesty of gold, transforming intimacy into an imperial indulgence.',
    basePrice: 310.00,
    discountPrice: 280.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Curated Romance Boxes',
    images: ['/images/products/giftsets/gift-box-2.jpg'],
    secondaryImage: '/images/products/giftsets/gift-box-2.jpg',
    rating: 4.98,
    reviewCount: 29,
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    tags: ['24K Gold Casket', 'Glass Wand', 'Kegel Balls', 'Golden Hour', 'Imperial Luxury'],
    sensoryFeel: 'Frictionless temperature-responsive glass and heavy shifting kinetic gold spheres.',
    fabricCare: 'Boil or wash wand with antibacterial soap; polish gold spheres with jewelry cloth.',
    safetyCertifications: ['100% Borosilicate Glass', 'Genuine 24K Gold Electroplate', 'Body Safe'],
    intensityLevels: 'Manual Precision & Kinetic Fullness',
    materials: ['Borosilicate Glass', '24K Gold Leaf', 'Brass-Cored Gold Spheres', 'Coffret Box'],
    sizes: ['Casket Dimensions (34cm x 22cm x 10cm)'],
    colors: [
      { name: 'Imperial 24K Gold', hex: '#D4AF37' }
    ],
    variants: [
      {
        id: 'var-gft-box-02-gld',
        productId: 'prod-gft-box-02',
        sku: 'VL-GFT-BOX-02-GLD',
        size: 'Deluxe Casket',
        color: 'Imperial 24K Gold',
        colorHex: '#D4AF37',
        material: 'Borosilicate Glass & 24K Gold',
        stockQuantity: 14
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-box-03',
    title: "Aphrodite's Bath & Bedchamber Ritual Box",
    slug: 'aphrodites-bath-bedchamber-ritual-box',
    subtitle: 'Himalayan Spikenard Bath Soak, Aphrodite Spiral Glass Wand & Damask Rose Nectar',
    description: 'Designed to turn an evening of bathing and lovemaking into an ancient temple ritual. Begins with spikenard bath milk, followed by full-body massage with Damask rose nectar, culminating in sensual play with the Aphrodite spiral glass wand.',
    story: 'Dedicated to the goddess of love, uniting warm aquatic relaxation with intoxicating botanical touch.',
    basePrice: 225.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Curated Romance Boxes',
    images: ['/images/products/giftsets/gift-box-3.jpg'],
    secondaryImage: '/images/products/giftsets/gift-box-3.jpg',
    rating: 4.96,
    reviewCount: 38,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Bath Ritual', 'Aphrodite Box', 'Spiral Glass Wand', 'Spikenard Elixir', 'Romantic Soak'],
    sensoryFeel: 'Enveloping warm floral water on skin, followed by cool-to-warm glass spiral ridges.',
    fabricCare: 'Wand is compatible with all lubricants and water temperature play.',
    safetyCertifications: ['Medical-Grade Borosilicate Glass', 'All Natural Essential Oils', 'Non-Toxic'],
    intensityLevels: 'Ritualistic Bath & Sensory Lovemaking',
    materials: ['Borosilicate Glass', 'Cold-Pressed Botanical Oils', 'Embossed Coffret'],
    sizes: ['Ritual Box (30cm x 24cm x 10cm)'],
    colors: [
      { name: 'Elysian Pearl & Rose', hex: '#FDFBF7' }
    ],
    variants: [
      {
        id: 'var-gft-box-03-ros',
        productId: 'prod-gft-box-03',
        sku: 'VL-GFT-BOX-03-ROS',
        size: 'Ritual Set',
        color: 'Elysian Pearl & Rose',
        colorHex: '#FDFBF7',
        material: 'Glass, Mineral & Oil',
        stockQuantity: 20
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-box-04',
    title: "The Lovers' Anniversary Keepsake Chest",
    slug: 'the-lovers-anniversary-keepsake-chest',
    subtitle: 'Artisanal Wooden Keepsake Chest with Custom Brass Plaque & Lovers’ Tarot',
    description: 'The ultimate milestone anniversary gift. Features a hand-carved mahogany-stained wooden chest with brass corners and an engravable plaque. Inside lies The Lovers’ Tarot deck, twin warming and tingling body oils, silk sash restraints, and amber candle.',
    story: 'Commemorating years of shared intimacy, devotion, and ongoing discovery with a chest that deepens with age.',
    basePrice: 210.00,
    discountPrice: 190.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Curated Romance Boxes',
    images: ['/images/products/giftsets/gift-box-4.jpg'],
    secondaryImage: '/images/products/giftsets/gift-box-4.jpg',
    rating: 4.97,
    reviewCount: 45,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Anniversary Gift', 'Wooden Chest', 'Lovers Tarot', 'Dual Oils', 'Milestone Romance'],
    sensoryFeel: 'Aromatic wood aroma opening to velvet lining and tactile gold foil tarot cards.',
    fabricCare: 'Dust wooden chest with dry cloth; burn candle in heat-safe area.',
    safetyCertifications: ['Solid Sustainable Wood', 'FSC Certified Cards', 'Pure Plant Wax'],
    intensityLevels: 'Emotional & Physical Deepening',
    materials: ['Solid Hardwood Chest', 'Solid Brass Fittings', 'Mulberry Silk', 'Art Tarot Cards'],
    sizes: ['Chest Dimensions (32cm x 22cm x 14cm)'],
    colors: [
      { name: 'Mahogany & Brass', hex: '#78350F' }
    ],
    variants: [
      {
        id: 'var-gft-box-04-mah',
        productId: 'prod-gft-box-04',
        sku: 'VL-GFT-BOX-04-MAH',
        size: 'Anniversary Chest',
        color: 'Mahogany & Brass',
        colorHex: '#78350F',
        material: 'Hardwood & Brass',
        stockQuantity: 25
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-gft-box-05',
    title: 'Nocturne Haute Couture Erotic Masterpiece Box',
    slug: 'nocturne-haute-couture-erotic-masterpiece-box',
    subtitle: 'Hand-Stitched Suede Flogger, Padded Leather Cuffs & Obsidian Glass Probe',
    description: 'Curated for devotees of refined power dynamics and sensory domination. Contains our Nocturne 32-fall suede and leather flogger, matching padded Tuscan cuffs, Aethel O-ring collar, and the ribbed obsidian glass pleasure probe.',
    story: 'An unyielding tribute to shadow play, where aesthetic elegance meets intense, resonant ecstasy.',
    basePrice: 295.00,
    discountPrice: 265.00,
    categoryId: 'cat-giftsets',
    categorySlug: 'gift-sets',
    categoryName: 'Gift Sets',
    subcategory: 'Curated Romance Boxes',
    images: ['/images/products/giftsets/gift-box-5.jpg'],
    secondaryImage: '/images/products/giftsets/gift-box-5.jpg',
    rating: 4.99,
    reviewCount: 37,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Masterpiece Box', 'Haute Couture', 'Suede Flogger', 'Obsidian Glass', 'BDSM Masterpiece'],
    sensoryFeel: 'Weight of dark obsidian glass, rhythmic warmth of suede thuds, secure leather hold.',
    fabricCare: 'Store leather implements conditioned and hung; wash glass probe with soap.',
    safetyCertifications: ['Top-Grain Tuscan Leather', 'Shatter-Resistant Borosilicate', 'Quick-Release Safety'],
    intensityLevels: 'Advanced Sensory Seduction & Impact',
    materials: ['Full-Grain Calfskin', 'Brushed Suede', 'Obsidian Borosilicate Glass', 'Matte Black Box'],
    sizes: ['Master Casket (40cm x 26cm x 12cm)'],
    colors: [
      { name: 'Onyx Noir & Obsidian', hex: '#0F172A' }
    ],
    variants: [
      {
        id: 'var-gft-box-05-obs',
        productId: 'prod-gft-box-05',
        sku: 'VL-GFT-BOX-05-OBS',
        size: 'Master Box',
        color: 'Onyx Noir & Obsidian',
        colorHex: '#0F172A',
        material: 'Leather, Suede & Glass',
        stockQuantity: 16
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

// Filter out old placeholder giftsets products (prod-007)
const remainingProducts = currentProducts.filter(p => p.categoryId !== 'cat-giftsets');

// Assemble all products: lingerie (30) + wellness (25) + couples (20) + accessories (20) + giftsets (15) = 110 total!
const allProducts = [...remainingProducts, ...giftsetsProducts];

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
    itemCount: 15,
    subcategories: ['Bride-to-Be Kits', 'Date Night Bundles', 'Curated Romance Boxes'],
  },
];

export const PRODUCTS: Product[] = ${JSON.stringify(allProducts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/products.ts'), newContent, 'utf8');
console.log('Successfully updated src/data/products.ts with complete catalog!');
console.log('Grand Total products now:', allProducts.length);
const giftsetsCount = allProducts.filter(p => p.categoryId === 'cat-giftsets').length;
console.log('Gift Sets (cat-giftsets) count:', giftsetsCount);
