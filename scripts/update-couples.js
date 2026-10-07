const fs = require('fs');
const path = require('path');

const couplesProducts = [
  // =========================================================================
  // BONDAGE & RESTRAINTS (1 - 5)
  // =========================================================================
  {
    id: 'prod-cpl-res-01',
    title: "L'Ombre Mulberry Silk Padded Blindfold with Monogram Tie",
    slug: 'l-ombre-mulberry-silk-padded-blindfold-monogram-tie',
    subtitle: '100% Grade 6A 22 Momme Mulberry Silk Sensory Deprivation Mask',
    description: 'Crafted from double-layered, cloud-soft 22 Momme mulberry silk with plush light-blocking interior padding. Features extra-long flowing silk sash ribbons for an adjustable, pressure-free tie that heightens auditory, tactile, and sensual anticipation.',
    story: 'Surrendering sight unlocks extraordinary depths of tactile awareness, allowing every whisper and caress to electrify the skin.',
    basePrice: 48.00,
    discountPrice: 42.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Bondage & Restraints',
    images: ['/images/products/couples/couples-restraint-1.jpg'],
    secondaryImage: '/images/products/couples/couples-restraint-1.jpg',
    rating: 4.96,
    reviewCount: 38,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Silk Blindfold', 'Sensory Deprivation', 'Mulberry Silk', 'Couples Play', 'Romance'],
    sensoryFeel: 'Featherlight, cooling silk gliding against eyelids with complete pitch-black darkness.',
    fabricCare: 'Hand wash in cold water using silk-friendly detergent. Dry flat away from direct sunlight.',
    safetyCertifications: ['OEKO-TEX Standard 100 Certified Silk', 'Hypoallergenic', 'Nickel-Free Hardware'],
    intensityLevels: 'Complete Visual Sensory Deprivation',
    materials: ['100% 22 Momme Mulberry Silk', 'Plush Cotton Fluff Padding'],
    sizes: ['One Size (Adjustable Silk Ribbon Tie)'],
    colors: [
      { name: 'Midnight Noir', hex: '#111827' },
      { name: 'Champagne Ivory', hex: '#FEF3C7' }
    ],
    variants: [
      {
        id: 'var-cpl-res-01-noi',
        productId: 'prod-cpl-res-01',
        sku: 'VL-CPL-RES-01-NOI',
        size: 'One Size',
        color: 'Midnight Noir',
        colorHex: '#111827',
        material: 'Mulberry Silk',
        stockQuantity: 45
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-res-02',
    title: 'Veloura Heritage Padded Leather & Velvet Wrist Restraints',
    slug: 'veloura-heritage-padded-leather-velvet-wrist-restraints',
    subtitle: 'Full-Grain Tuscan Calfskin with Plush Velvet Lining and Solid Brass Hardware',
    description: 'Handcrafted from supple, vegetable-tanned Italian calfskin cushioned with deep crushed velvet lining to prevent chafing. Features heavy-duty nickel-plated brass buckles, twin D-rings, and a detachable quick-release connector swivel hook.',
    story: 'Designed to elevate surrender into pure luxury, these restraints combine reassuring physical security with decadent tactile softness.',
    basePrice: 95.00,
    discountPrice: 85.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Bondage & Restraints',
    images: ['/images/products/couples/couples-restraint-2.jpg'],
    secondaryImage: '/images/products/couples/couples-restraint-2.jpg',
    rating: 4.97,
    reviewCount: 52,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Leather Cuffs', 'Velvet Lining', 'Wrist Restraints', 'Brass Hardware', 'Bondage'],
    sensoryFeel: 'Heavy, reassuring firmness with ultra-soft plush velvet cushioning against delicate wrists.',
    fabricCare: 'Condition leather occasionally with beeswax leather cream; wipe velvet with dry brush.',
    safetyCertifications: ['Vegetable Tanned Leather', 'Lead-Free Brass Hardware', 'Quick-Release Safety Clasps'],
    intensityLevels: 'Medium to Heavy Restraint Security',
    materials: ['Full-Grain Italian Calfskin', 'Crushed Velvet Interior', 'Solid Brass Plated Buckles'],
    sizes: ['Adjustable (15cm - 26cm Wrist Circumference)'],
    colors: [
      { name: 'Onyx & Gold', hex: '#1C1917' },
      { name: 'Burgundy & Rose Gold', hex: '#881337' }
    ],
    variants: [
      {
        id: 'var-cpl-res-02-onx',
        productId: 'prod-cpl-res-02',
        sku: 'VL-CPL-RES-02-ONX',
        size: 'Adjustable',
        color: 'Onyx & Gold',
        colorHex: '#1C1917',
        material: 'Calfskin & Velvet',
        stockQuantity: 28
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-res-03',
    title: 'Aethel O-Ring Leather Collar & Detachable Leash Harness',
    slug: 'aethel-o-ring-leather-collar-detachable-leash-harness',
    subtitle: 'Sculpted Collar with Polished 24K Gold-Dipped Central O-Ring & Matching Lead',
    description: 'An iconic silhouette in couture bondage, this collar is precision cut from smooth black saddle leather with burnished edges. Features an eye-catching 35mm central O-ring and includes a matching 110cm leather lead with a 360-degree swivel carabiner.',
    story: 'A symbol of devotion and sensual mastery, the Aethel Collar commands reverence in intimate play.',
    basePrice: 88.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Bondage & Restraints',
    images: ['/images/products/couples/couples-restraint-3.jpg'],
    secondaryImage: '/images/products/couples/couples-restraint-3.jpg',
    rating: 4.93,
    reviewCount: 31,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['O-Ring Collar', 'Leather Lead', 'Choker', 'Sensual Harness', 'Power Exchange'],
    sensoryFeel: 'Sleek, firm leather that warms to the throat with cooling, weighted metallic hardware.',
    fabricCare: 'Wipe clean with a soft dry cloth. Store flat in velvet pouch.',
    safetyCertifications: ['Body Safe Nickel-Free Electroplate', 'Non-Toxic Vegetable Dye'],
    intensityLevels: 'Erotic Guidance & Gentle Pull',
    materials: ['Full-Grain Saddle Leather', '24K Gold Plated Alloy O-Ring', 'Swivel Clip'],
    sizes: ['Adjustable Collar (32cm - 42cm Neck Size)'],
    colors: [
      { name: 'Noir & Polished Gold', hex: '#111827' }
    ],
    variants: [
      {
        id: 'var-cpl-res-03-gld',
        productId: 'prod-cpl-res-03',
        sku: 'VL-CPL-RES-03-GLD',
        size: 'Adjustable',
        color: 'Noir & Polished Gold',
        colorHex: '#111827',
        material: 'Saddle Leather & Alloy',
        stockQuantity: 22
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-res-04',
    title: 'Sultana Genuine Black Ostrich Feather Sensory Tickler',
    slug: 'sultana-genuine-black-ostrich-feather-sensory-tickler',
    subtitle: 'Fluffy Hand-Selected Ostrich Plumes with Ribbed Satin Wand Handle',
    description: 'Engineered for tantalizing light-touch sensory teasers, this luxury tickler features voluminous, ethically harvested jet-black ostrich plumes mounted to an 18-inch satin-wrapped balance wand with a weighted brass pommel.',
    story: 'Awakening dormant nerve endings across the spine, inner thighs, and neck, the Sultana feather teaser turns gentle touches into electric shivers.',
    basePrice: 52.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Bondage & Restraints',
    images: ['/images/products/couples/couples-restraint-4.jpg'],
    secondaryImage: '/images/products/couples/couples-restraint-4.jpg',
    rating: 4.94,
    reviewCount: 29,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Feather Tickler', 'Sensory Teaser', 'Light Touch', 'Foreplay', 'Sensual'],
    sensoryFeel: 'Ultra-light gossamer wisps that glide effortlessly across bare skin, sending goosebumps cascading.',
    fabricCare: 'Gently shake clean after use. Store upright or hanging.',
    safetyCertifications: ['Ethically Sourced Natural Feathers', 'Hypoallergenic Sanitized'],
    intensityLevels: 'Ultra-Gentle Tactile Tease',
    materials: ['Natural Ostrich Feathers', 'Duchess Satin Ribbed Handle', 'Brass Pommel'],
    sizes: ['Length: 45cm / 18 inches'],
    colors: [
      { name: 'Raven Black', hex: '#0F172A' }
    ],
    variants: [
      {
        id: 'var-cpl-res-04-blk',
        productId: 'prod-cpl-res-04',
        sku: 'VL-CPL-RES-04-BLK',
        size: '45cm',
        color: 'Raven Black',
        colorHex: '#0F172A',
        material: 'Natural Ostrich Feathers & Satin',
        stockQuantity: 34
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-res-05',
    title: 'Nocturne Hand-Stitched Suede & Calfskin Intimacy Flogger',
    slug: 'nocturne-hand-stitched-suede-calfskin-intimacy-flogger',
    subtitle: 'Dual-Texture 32-Fall Flogger with Braided Leather Handle & Wrist Loop',
    description: 'Crafted with 32 precision-cut falls blending velvety brushed suede and smooth calfskin for varied impact sensation. Balanced with a solid wood-core handle wrapped in diamond-braided leather and finished with a wrist lanyard.',
    story: 'From delicate, fluttering caresses to resonant, stinging thuds, Nocturne translates passion into rhythm and heat.',
    basePrice: 110.00,
    discountPrice: 95.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Bondage & Restraints',
    images: ['/images/products/couples/couples-restraint-5.jpg'],
    secondaryImage: '/images/products/couples/couples-restraint-5.jpg',
    rating: 4.98,
    reviewCount: 44,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Leather Flogger', 'Suede Falls', 'Impact Play', 'Sensual Thud', 'BDSM Luxury'],
    sensoryFeel: 'Suede falls deliver a warm, enveloping thud that flushes skin with tingling warmth without bruising.',
    fabricCare: 'Hang to air out. Brush suede falls occasionally with suede brush.',
    safetyCertifications: ['100% Top-Grain Leather', 'Reinforced Safety Lanyard'],
    intensityLevels: 'Versatile (Light Sensory Stroking to Medium-Heavy Thud)',
    materials: ['Italian Calfskin Leather', 'Brushed Suede', 'Solid Core Handle'],
    sizes: ['Total Length: 58cm / 23 inches (Falls: 40cm)'],
    colors: [
      { name: 'Midnight Onyx', hex: '#18181B' },
      { name: 'Oxblood Crimson', hex: '#7F1D1D' }
    ],
    variants: [
      {
        id: 'var-cpl-res-05-onx',
        productId: 'prod-cpl-res-05',
        sku: 'VL-CPL-RES-05-ONX',
        size: '58cm',
        color: 'Midnight Onyx',
        colorHex: '#18181B',
        material: 'Calfskin & Suede',
        stockQuantity: 19
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // GAMES (1 - 5)
  // =========================================================================
  {
    id: 'prod-cpl-gam-01',
    title: 'Intimate Whispers Candlelit Connection Card Deck',
    slug: 'intimate-whispers-candlelit-connection-card-deck',
    subtitle: '100 Deep Conversation, Vulnerability & Foreplay Prompt Cards',
    description: 'A curated deck of 100 gilded-edge questions and physical challenges structured across three intimacy levels: Deep Conversation, Sensual Spark, and Uninhibited Passion. Printed on heavyweight linen-finish cardstock in a gold-embossed keepsake casket.',
    story: 'Designed to turn a regular evening into an intoxicating journey of emotional openness, whispered secrets, and physical intimacy.',
    basePrice: 45.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Games',
    images: ['/images/products/couples/couples-game-1.jpg'],
    secondaryImage: '/images/products/couples/couples-game-1.jpg',
    rating: 4.95,
    reviewCount: 63,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Couples Game', 'Intimacy Cards', 'Conversation Starters', 'Date Night', 'Romance'],
    sensoryFeel: 'Smooth textured linen cardstock with luxurious metallic gold foil gilded rims.',
    fabricCare: 'Store cards in gold foil keepsake casket.',
    safetyCertifications: ['FSC Certified Sustainable Paper', 'Soy-Based Inks'],
    intensityLevels: '3 Intimacy Levels (Emotional, Sensual, Erotic)',
    materials: ['350gsm Linen Cardstock', 'Gold Foil Leaf Trim', 'Hardcover Keepsake Box'],
    sizes: ['100 Cards (9cm x 6.5cm)'],
    colors: [
      { name: 'Gold Foil Noir', hex: '#1C1917' }
    ],
    variants: [
      {
        id: 'var-cpl-gam-01-dck',
        productId: 'prod-cpl-gam-01',
        sku: 'VL-CPL-GAM-01-DCK',
        size: '100 Cards',
        color: 'Gold Foil Noir',
        colorHex: '#1C1917',
        material: 'Linen Cardstock',
        stockQuantity: 58
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-gam-02',
    title: 'Midnight Reverie Gilded Bedroom Fantasy Exploration Cards',
    slug: 'midnight-reverie-gilded-bedroom-fantasy-exploration-cards',
    subtitle: '54 High-Stakes Dares, Roleplay Prompts & Touch Rituals',
    description: 'Each card offers an alluring dare, physical touch instruction, or roleplay scenario crafted by intimacy coaches. Features exquisite matte-black finishes, gilded metallic numerals, and numbered progressive intensity tiers.',
    story: 'Tear down inhibitions step by step with challenges that spark laughter, curiosity, and passionate surrender.',
    basePrice: 42.00,
    discountPrice: 36.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Games',
    images: ['/images/products/couples/couples-game-2.jpg'],
    secondaryImage: '/images/products/couples/couples-game-2.jpg',
    rating: 4.91,
    reviewCount: 37,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Fantasy Deck', 'Bedroom Dares', 'Sensual Challenges', 'Roleplay', 'Couple Play'],
    sensoryFeel: 'Velvet-soft touch coating on each card for effortless shuffling and dealing.',
    fabricCare: 'Keep in matching slipcase drawer.',
    safetyCertifications: ['Acid-Free Cardstock', 'Non-Toxic Coatings'],
    intensityLevels: 'Tiered Challenges from Gentle Flirtation to Wild Fantasy',
    materials: ['Velvet-Touch Cardstock', 'Gilded Edge Foil'],
    sizes: ['54 Cards (Standard Poker Size 8.9cm x 6.4cm)'],
    colors: [
      { name: 'Onyx Black & Gold', hex: '#111827' }
    ],
    variants: [
      {
        id: 'var-cpl-gam-02-onx',
        productId: 'prod-cpl-gam-02',
        sku: 'VL-CPL-GAM-02-ONX',
        size: '54 Cards',
        color: 'Onyx Black & Gold',
        colorHex: '#111827',
        material: 'Cardstock',
        stockQuantity: 42
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-gam-03',
    title: 'Seduction Metal Polyhedral Intimacy Decision Dice Set',
    slug: 'seduction-metal-polyhedral-intimacy-decision-dice-set',
    subtitle: 'Weighted Solid Zinc-Alloy Action, Body Part & Duration Dice Trio in Velvet Box',
    description: 'Cast from heavy zinc alloy with polished mirror gold faces and crisp black enamel engravings. The three dice dictate: Action (Kiss, Caress, Lick, Bite, Massage, Tease), Anatomy (Lips, Neck, Breast, Thigh, Navel, Spine), and Duration (30s, 1m, 2m, 3m, 5m, Wildcard).',
    story: 'Leave your desires to fate with satisfyingly heavy dice that turn spontaneous touch into a thrilling erotic ritual.',
    basePrice: 38.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Games',
    images: ['/images/products/couples/couples-game-3.jpg'],
    secondaryImage: '/images/products/couples/couples-game-3.jpg',
    rating: 4.96,
    reviewCount: 49,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Metal Dice', 'Erotic Dice', 'Sensual Game', 'Weighted Alloy', 'Date Night'],
    sensoryFeel: 'Heavy, satisfying clink of solid metal dice rolling across the nightstand.',
    fabricCare: 'Wipe with microfiber cloth. Keep in velvet-lined travel tin.',
    safetyCertifications: ['Lead-Free Zinc Alloy', 'Non-Toxic Enamel Fill'],
    intensityLevels: 'Randomized Intimacy Combinations',
    materials: ['Cast Zinc Alloy', 'Mirror Gold Electroplate', 'Enamel Filling'],
    sizes: ['3-Piece Set (20mm Dice)'],
    colors: [
      { name: 'Mirror Gold & Onyx', hex: '#D4AF37' }
    ],
    variants: [
      {
        id: 'var-cpl-gam-03-gld',
        productId: 'prod-cpl-gam-03',
        sku: 'VL-CPL-GAM-03-GLD',
        size: '3-Piece Set',
        color: 'Mirror Gold & Onyx',
        colorHex: '#D4AF37',
        material: 'Zinc Alloy',
        stockQuantity: 36
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-gam-04',
    title: 'Sensual Horizons Multi-Faceted Passion & Action Dice',
    slug: 'sensual-horizons-multi-faceted-passion-action-dice',
    subtitle: '12-Sided Sculpted Intimacy Polyhedrals with Romantic Location & Position Engravings',
    description: 'A pair of D12 precision polyhedral dice made from pearlescent acrylic with gold ink carvings. One die suggests evocative settings and mood lighting, while the other guides touch, foreplay tempos, and uninhibited positions.',
    story: 'Break repetitive routines with 144 possible combinations that encourage adventurous exploration.',
    basePrice: 32.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Games',
    images: ['/images/products/couples/couples-game-4.jpg'],
    secondaryImage: '/images/products/couples/couples-game-4.jpg',
    rating: 4.88,
    reviewCount: 22,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['D12 Dice', 'Polyhedral', 'Erotic Exploration', 'Fun', 'Couples Challenge'],
    sensoryFeel: 'Smooth rounded edges with shimmering pearlized luster that rolls cleanly.',
    fabricCare: 'Wash gently with warm soapy water if needed.',
    safetyCertifications: ['BPA-Free Acrylic', 'Non-Toxic Resin'],
    intensityLevels: '144 Unique Sensual Combinations',
    materials: ['High-Density Pearlescent Acrylic', 'Gold Infill Engraving'],
    sizes: ['2-Piece D12 Dice (22mm)'],
    colors: [
      { name: 'Pearl & Gold', hex: '#FEF3C7' },
      { name: 'Obsidian & Gold', hex: '#1E293B' }
    ],
    variants: [
      {
        id: 'var-cpl-gam-04-prl',
        productId: 'prod-cpl-gam-04',
        sku: 'VL-CPL-GAM-04-PRL',
        size: '2-Piece Set',
        color: 'Pearl & Gold',
        colorHex: '#FEF3C7',
        material: 'Pearlescent Acrylic',
        stockQuantity: 40
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-gam-05',
    title: "The Lovers' Tarot & Deep Intimacy Bonding Prompt Deck",
    slug: 'the-lovers-tarot-deep-intimacy-bonding-prompt-deck',
    subtitle: '78 Artistically Illustrated Major & Minor Arcana Archetype Cards for Lovers',
    description: 'An esoteric love tarot system pairing classic Tarot archetypes (The Empress, The Hierophant, The Lovers) with evocative intimacy prompts, sensual rituals, and emotional healing exercises. Includes an opulent guidebook bound in ribbon.',
    story: 'Unravel the mysteries of your romantic destiny and discover unseen layers of soul connection under warm candlelight.',
    basePrice: 55.00,
    discountPrice: 48.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Games',
    images: ['/images/products/couples/couples-game-5.jpg'],
    secondaryImage: '/images/products/couples/couples-game-5.jpg',
    rating: 4.97,
    reviewCount: 51,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Tarot Deck', 'Lovers Tarot', 'Spiritual Intimacy', 'Couples Bonding', 'Romantic Deck'],
    sensoryFeel: 'Heft of 400gsm art cardstock with soft anti-scratch rose petal finish.',
    fabricCare: 'Store in magnetic closure presentation casket.',
    safetyCertifications: ['FSC Certified Recycled Paper', 'Eco-Friendly Plant Inks'],
    intensityLevels: 'Spiritual, Emotional & Sensual Exploration',
    materials: ['400gsm Heavy Cardstock', 'Holographic Gold Foil Accents', 'Cloth-Bound Guidebook'],
    sizes: ['78 Cards + 120-Page Guidebook (12cm x 7cm)'],
    colors: [
      { name: 'Celestial Gold', hex: '#D97706' }
    ],
    variants: [
      {
        id: 'var-cpl-gam-05-cls',
        productId: 'prod-cpl-gam-05',
        sku: 'VL-CPL-GAM-05-CLS',
        size: '78 Cards Set',
        color: 'Celestial Gold',
        colorHex: '#D97706',
        material: 'Art Cardstock',
        stockQuantity: 27
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // COUPLES VIBRATORS (1 - 5)
  // =========================================================================
  {
    id: 'prod-cpl-vib-01',
    title: 'Harmonie C-Shaped Shared Wearable Intercourse Vibrator',
    slug: 'harmonie-c-shaped-shared-wearable-intercourse-vibrator',
    subtitle: 'Hands-Free Flexible Dual-Motor Silicone Vibrator for Shared Stimulation',
    description: 'Sculpted in an anatomical C-curve designed to be worn during intercourse. The slim internal arm nestles inside against the G-spot while sharing space during penetration, while the external contoured pad presses against the clitoris, stimulating both partners simultaneously.',
    story: 'Engineered to synchronize climaxes, Harmonie bridges partner bodies in shared harmonic waves of pleasure.',
    basePrice: 160.00,
    discountPrice: 140.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Couples Vibrators',
    images: ['/images/products/couples/couples-vibe-1.jpg'],
    secondaryImage: '/images/products/couples/couples-vibe-1.jpg',
    rating: 4.97,
    reviewCount: 74,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Couples Vibrator', 'Wearable', 'Hands Free', 'Dual Motor', 'Intercourse Vibrator'],
    sensoryFeel: 'Velvet-touch flexible silicone that bends comfortably with body heat and movement.',
    fabricCare: 'Wash with antibacterial toy cleaner and warm water. Submersible IPX7 waterproof.',
    safetyCertifications: ['Medical-Grade Silicone', 'FDA Compliant', 'IPX7 Waterproof', 'Latex & Phthalate Free'],
    intensityLevels: '10 Synchronized Vibration Modes with Wireless Remote Control',
    materials: ['Medical-Grade Silky Silicone', 'Flexible Memory Alloy Spine'],
    sizes: ['One Size Fits Most (Flexible 7.5cm x 4.2cm)'],
    colors: [
      { name: 'Plum Noir', hex: '#581C87' },
      { name: 'Blush Coral', hex: '#F43F5E' }
    ],
    variants: [
      {
        id: 'var-cpl-vib-01-plm',
        productId: 'prod-cpl-vib-01',
        sku: 'VL-CPL-VIB-01-PLM',
        size: 'One Size',
        color: 'Plum Noir',
        colorHex: '#581C87',
        material: 'Medical Silicone',
        stockQuantity: 25,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-vib-02',
    title: 'Veloura Tango Wireless Precision Partner Bullet Massager',
    slug: 'veloura-tango-wireless-precision-partner-bullet-massager',
    subtitle: 'Deep Sonic Resonance Bullet with 15m Wireless RF Remote & Panty Clip',
    description: 'A discreet, powerhouse mini bullet encased in satin silicone. Packs astonishing low-frequency thrumming power into a compact 3-inch profile. Includes a magnetic undergarment clip and a pocket-sized wireless remote for teasing in public dining or private bedroom play.',
    story: 'Surrender control to your lover with an invisible companion that whispers secrets in pure vibration across a crowded room.',
    basePrice: 98.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Couples Vibrators',
    images: ['/images/products/couples/couples-vibe-2.jpg'],
    secondaryImage: '/images/products/couples/couples-vibe-2.jpg',
    rating: 4.92,
    reviewCount: 46,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Bullet Vibrator', 'Wireless Remote', 'Partner Control', 'Panty Toy', 'Quiet'],
    sensoryFeel: 'Ultra-concentrated, rumbling vibrational focus with smooth satin glide.',
    fabricCare: 'Wash bullet with warm water and soap; keep remote dry.',
    safetyCertifications: ['CE Certified', 'Medical-Grade Body Safe Silicone', 'IPX7 Waterproof'],
    intensityLevels: '8 Vibration Patterns & 4 Speed Intensities (Remote Controlled)',
    materials: ['Liquid Silicone Coating', 'ABS Core', 'Gold Accent Button'],
    sizes: ['Compact Bullet (7.8cm x 2.2cm)'],
    colors: [
      { name: 'Sapphire Azure', hex: '#2563EB' },
      { name: 'Midnight Onyx', hex: '#111827' }
    ],
    variants: [
      {
        id: 'var-cpl-vib-02-blu',
        productId: 'prod-cpl-vib-02',
        sku: 'VL-CPL-VIB-02-BLU',
        size: 'Compact',
        color: 'Sapphire Azure',
        colorHex: '#2563EB',
        material: 'Liquid Silicone',
        stockQuantity: 31,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-vib-03',
    title: 'Eros Velvet Silicone Vibrating Erection Ring for Couples',
    slug: 'eros-velvet-silicone-vibrating-erection-ring-couples',
    subtitle: 'Dual-Pleasure Constriction Band with Contoured Clitoral Stimulator Head',
    description: 'Engineered from ultra-stretchy, velvet-soft silicone that fits comfortably around the base of the penis. Maintains firmer, longer-lasting erections while its ribbed vibrating head buzzes directly against her clitoris with every thrust.',
    story: 'Heighten stamina and shared intimacy with a sleek, whisper-quiet device that intensifies every touch for both partners.',
    basePrice: 75.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Couples Vibrators',
    images: ['/images/products/couples/couples-vibe-3.jpg'],
    secondaryImage: '/images/products/couples/couples-vibe-3.jpg',
    rating: 4.90,
    reviewCount: 35,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Vibrating Cock Ring', 'Couples Ring', 'Stamina', 'Clitoral Buzzer', 'Stretch Silicone'],
    sensoryFeel: 'Firm, comfortable constriction with energetic, tickling surface vibrations.',
    fabricCare: 'Wash with antibacterial soap after each use. Store dry.',
    safetyCertifications: ['100% Body-Safe Stretch Silicone', 'Hypoallergenic', 'IPX8 Waterproof'],
    intensityLevels: '7 Vibration Rhythms & 3 Continuous Speeds',
    materials: ['Medical-Grade Super-Stretch Silicone'],
    sizes: ['Flexible Universal Stretch (Inner Diameter 3.2cm)'],
    colors: [
      { name: 'Slate Teal', hex: '#0D9488' },
      { name: 'Onyx Noir', hex: '#1F2937' }
    ],
    variants: [
      {
        id: 'var-cpl-vib-03-tea',
        productId: 'prod-cpl-vib-03',
        sku: 'VL-CPL-VIB-03-TEA',
        size: 'Universal',
        color: 'Slate Teal',
        colorHex: '#0D9488',
        material: 'Stretch Silicone',
        stockQuantity: 38,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-vib-04',
    title: 'Symphonie Sculptural Dual Stimulation Partner Contour Wand',
    slug: 'symphonie-sculptural-dual-stimulation-partner-contour-wand',
    subtitle: 'Ergonomic Designer Silicone Massager with Twin Motor Synchrony',
    description: 'A masterpiece in pleasure engineering crafted with a sculptural, curved silhouette. Boasts twin high-torque motors placed at opposing ends to facilitate mutual massage, erogenous exploration, and shared positions.',
    story: 'Sculpted like modern art, Symphonie bridges the boundary between sculptural decor and profound physical connection.',
    basePrice: 145.00,
    discountPrice: 125.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Couples Vibrators',
    images: ['/images/products/couples/couples-vibe-4.jpg'],
    secondaryImage: '/images/products/couples/couples-vibe-4.jpg',
    rating: 4.95,
    reviewCount: 42,
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    tags: ['Designer Toy', 'Partner Wand', 'Sculptural', 'Dual End', 'Waterproof'],
    sensoryFeel: 'Luxurious velvety matte silicone with deep, rumbling non-buzzy resonances.',
    fabricCare: 'Rinse with warm water and foam cleanser. Keep in velvet keepsake bag.',
    safetyCertifications: ['Medical Silicone', 'CE & RoHS Certified', 'Submersible IPX8'],
    intensityLevels: '10 Wave Frequencies with Independent End Controls',
    materials: ['Medical Silicone', '24K Gold Electroplated Base Ring'],
    sizes: ['One Size (19cm x 4.5cm)'],
    colors: [
      { name: 'Blush Rose', hex: '#FB7185' },
      { name: 'Pure Onyx', hex: '#18181B' }
    ],
    variants: [
      {
        id: 'var-cpl-vib-04-ros',
        productId: 'prod-cpl-vib-04',
        sku: 'VL-CPL-VIB-04-ROS',
        size: 'One Size',
        color: 'Blush Rose',
        colorHex: '#FB7185',
        material: 'Medical Silicone',
        stockQuantity: 20,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-vib-05',
    title: 'Duo Amour Ergonomic Clitoral & G-Spot Shared Harmony Massager',
    slug: 'duo-amour-ergonomic-clitoral-g-spot-shared-harmony-massager',
    subtitle: 'Contoured Curved Tip with Broad Stimulation Wings for Partner Intercourse',
    description: 'Designed with dual-winged contact pads that gently flank the labia while the arched tip targets the G-spot. Designed to fit flush against the body, allowing partners to embrace closely during sensual lovemaking without awkward positioning.',
    story: 'Duo Amour dissolves barriers between two lovers, amplifying the warmth and depth of skin-to-skin communion.',
    basePrice: 130.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Couples Vibrators',
    images: ['/images/products/couples/couples-vibe-5.jpg'],
    secondaryImage: '/images/products/couples/couples-vibe-5.jpg',
    rating: 4.89,
    reviewCount: 28,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Couples Massager', 'Flanking Wings', 'Whisper Quiet', 'Intimacy'],
    sensoryFeel: 'Gentle, enveloping silicone hug with continuous waves of deep vibration.',
    fabricCare: 'Submersible waterproof; clean with botanical toy spray.',
    safetyCertifications: ['FDA Medical Grade Silicone', 'IPX7 Waterproof'],
    intensityLevels: '9 Harmonic Rhythms',
    materials: ['Medical-Grade Silicone', 'Flexible Polymer Core'],
    sizes: ['One Size (14.5cm x 4cm)'],
    colors: [
      { name: 'Lavender Mist', hex: '#A855F7' }
    ],
    variants: [
      {
        id: 'var-cpl-vib-05-lav',
        productId: 'prod-cpl-vib-05',
        sku: 'VL-CPL-VIB-05-LAV',
        size: 'One Size',
        color: 'Lavender Mist',
        colorHex: '#A855F7',
        material: 'Medical Silicone',
        stockQuantity: 24,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },

  // =========================================================================
  // ENHANCEMENT OILS (1 - 5)
  // =========================================================================
  {
    id: 'prod-cpl-oil-01',
    title: 'Aura Botanical Tingling Arousal Elixir in Amber Dropper (50ml)',
    slug: 'aura-botanical-tingling-arousal-elixir-amber-dropper',
    subtitle: 'Organic Peppermint, Cinnamon Bark & Damiana Infused Intimate Drops',
    description: 'A few warming drops applied to intimate zones awaken heightened sensitivity, natural lubrication, and a thrilling warm-to-cool tingling sensation. Handcrafted with organic jojoba, sweet almond oil, and cold-pressed botanical extracts in UV-protective amber glass.',
    story: 'Formulated to intensify blood flow and ignite spontaneous desire, Aura turns delicate touch into electric arousal.',
    basePrice: 46.00,
    discountPrice: 38.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Enhancement Oils',
    images: ['/images/products/couples/couples-oil-1.jpg'],
    secondaryImage: '/images/products/couples/couples-oil-1.jpg',
    rating: 4.98,
    reviewCount: 84,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Arousal Oil', 'Tingling Elixir', 'Botanical Drops', 'Amber Dropper', 'Organic'],
    sensoryFeel: 'Velvety golden oil that initiates an electric, pulsing warmth and cooling mint tingle.',
    fabricCare: 'Store in cool, dark place away from heat. Apply 2-3 drops to intimate zones.',
    safetyCertifications: ['100% Certified Organic Ingredients', 'Edible & Body-Safe', 'Glycerin & Paraben Free'],
    intensityLevels: 'Dynamic Warming-Cooling Waveform',
    materials: ['Organic Golden Jojoba', 'Damiana Leaf Extract', 'Amber Glass Pipette Bottle'],
    sizes: ['50ml / 1.7 fl oz'],
    colors: [
      { name: 'Amber Glass', hex: '#92400E' }
    ],
    variants: [
      {
        id: 'var-cpl-oil-01-50m',
        productId: 'prod-cpl-oil-01',
        sku: 'VL-CPL-OIL-01-50M',
        size: '50ml',
        color: 'Amber Glass',
        colorHex: '#92400E',
        material: 'Organic Botanical Elixir',
        stockQuantity: 62
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-oil-02',
    title: 'Golden Nectar Warming Sensual Intimacy Body Oil (100ml)',
    slug: 'golden-nectar-warming-sensual-intimacy-body-oil',
    subtitle: 'Therapeutic Warmth-Activating Passionfruit & Ginger Massage Elixir',
    description: 'Blended with cold-pressed maracuja passionfruit seed oil, warming ginger root extract, and vitamin E. Heats gently upon contact with skin and deepens in warmth during passionate massage or soft breath blowing.',
    story: 'Indulge in decadent full-body intimacy as golden botanical nectar melts tension and envelopes the senses in intoxicating warmth.',
    basePrice: 58.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Enhancement Oils',
    images: ['/images/products/couples/couples-oil-2.jpg'],
    secondaryImage: '/images/products/couples/couples-oil-2.jpg',
    rating: 4.96,
    reviewCount: 57,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Warming Body Oil', 'Sensual Massage', 'Ginger & Passionfruit', 'Golden Nectar'],
    sensoryFeel: 'Silk-like glide with a soothing, slow-release internal heat that responds to breath.',
    fabricCare: 'For external sensual massage and intimate skin. Rinse easily with warm water.',
    safetyCertifications: ['100% Plant Derived', 'Non-Greasy Rapid Absorption', 'Dermatologist Tested'],
    intensityLevels: 'Breath-Activated Gentle Radiant Heat',
    materials: ['Cold-Pressed Maracuja Oil', 'Ginger Root Extract', 'Clear Glass Dispenser'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Golden Elixir', hex: '#F59E0B' }
    ],
    variants: [
      {
        id: 'var-cpl-oil-02-100',
        productId: 'prod-cpl-oil-02',
        sku: 'VL-CPL-OIL-02-100',
        size: '100ml',
        color: 'Golden Elixir',
        colorHex: '#F59E0B',
        material: 'Botanical Warming Oil',
        stockQuantity: 48
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-oil-03',
    title: 'Rose Sauvage Wild Damask Rose & Sandalwood Massage Drops (50ml)',
    slug: 'rose-sauvage-wild-damask-rose-sandalwood-massage-drops',
    subtitle: 'Pure Steam-Distilled Rose Otto & Mysore Sandalwood Sensual Perfume Oil',
    description: 'An exquisite aphrodisiac oil crafted with rare Turkish Damask rose otto and Mysore sandalwood in a meadowfoam seed oil base. Doubles as an intoxicating intimate pulse-point perfume and full-body sensory massage elixir.',
    story: 'Used for millennia by royalty to bewitch and entice, Rose Sauvage casts an unforgettable aura of romance and luxury.',
    basePrice: 65.00,
    discountPrice: 55.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Enhancement Oils',
    images: ['/images/products/couples/couples-oil-3.jpg'],
    secondaryImage: '/images/products/couples/couples-oil-3.jpg',
    rating: 4.94,
    reviewCount: 39,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Rose Otto', 'Sandalwood', 'Aphrodisiac Oil', 'Sensual Fragrance', 'Pulse Point'],
    sensoryFeel: 'Featherlight non-pore clogging oil that leaves skin luminous and intoxicatingly scented.',
    fabricCare: 'Dispense 3-4 drops onto pulse points or warm between palms for massage.',
    safetyCertifications: ['Clean Botanical Formulation', 'Synthetic Fragrance Free', 'Cruelty Free'],
    intensityLevels: 'Aromatic Sensual Seduction',
    materials: ['Turkish Rose Otto', 'Mysore Sandalwood Extract', 'Amber Glass Dropper'],
    sizes: ['50ml / 1.7 fl oz'],
    colors: [
      { name: 'Amber Pipette', hex: '#B45309' }
    ],
    variants: [
      {
        id: 'var-cpl-oil-03-50m',
        productId: 'prod-cpl-oil-03',
        sku: 'VL-CPL-OIL-03-50M',
        size: '50ml',
        color: 'Amber Pipette',
        colorHex: '#B45309',
        material: 'Pure Rose & Sandalwood Oil',
        stockQuantity: 30
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-oil-04',
    title: 'Himalayan Spikenard & Golden Jojoba Intimate Bath Elixir (100ml)',
    slug: 'himalayan-spikenard-golden-jojoba-intimate-bath-elixir',
    subtitle: 'Ancient Aphrodisiac Bath & Body Oil with Wax-Sealed Apothecary Flacon',
    description: 'Infused with rare Nepalese spikenard root, amber resin, and Moroccan argan oil. Disperses into warm bathwater to create a milk-soft moisturizing soak, or smoothed directly onto damp skin to leave a supple, velvet sheen.',
    story: 'Spikenard was prized in antiquity as the holy ointment of lovers, radiating a deeply grounding, hypnotic earthy sweetness.',
    basePrice: 52.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Enhancement Oils',
    images: ['/images/products/couples/couples-oil-4.jpg'],
    secondaryImage: '/images/products/couples/couples-oil-4.jpg',
    rating: 4.92,
    reviewCount: 26,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Bath Elixir', 'Spikenard', 'Apothecary Flacon', 'Couples Bath', 'Nourishing'],
    sensoryFeel: 'Ultra-nourishing, rich bath hydration that envelopes the skin in velvet softness.',
    fabricCare: 'Pour two capfuls into running bath or apply directly to damp skin after bathing.',
    safetyCertifications: ['Wild-Harvested Herbs', 'Preservative Free', 'Vegan'],
    intensityLevels: 'Relaxing Sensory Grounding',
    materials: ['Spikenard Essential Extract', 'Cold-Pressed Argan Oil', 'Wax-Sealed Flacon'],
    sizes: ['100ml / 3.4 fl oz'],
    colors: [
      { name: 'Vintage Apothecary', hex: '#78350F' }
    ],
    variants: [
      {
        id: 'var-cpl-oil-04-100',
        productId: 'prod-cpl-oil-04',
        sku: 'VL-CPL-OIL-04-100',
        size: '100ml',
        color: 'Vintage Apothecary',
        colorHex: '#78350F',
        material: 'Spikenard & Argan Oil',
        stockQuantity: 28
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-cpl-oil-05',
    title: 'Botanical Clitoral Arousal & Orgasm Amplification Drops (30ml)',
    slug: 'botanical-clitoral-arousal-orgasm-amplification-drops',
    subtitle: 'Targeted High-Potency Botanical Serum for Accelerated & Intensified Climax',
    description: 'A clinical-strength natural arousal serum enriched with l-arginine, ylang ylang, and organic peppermint leaf. Accelerates micro-circulation and enhances natural touch sensitivity within 90 seconds of application.',
    story: 'Specially developed to overcome arousal delays, these drops amplify nerve response for easier, more explosive climaxes.',
    basePrice: 44.00,
    categoryId: 'cat-couples',
    categorySlug: 'couples',
    categoryName: 'Couples',
    subcategory: 'Enhancement Oils',
    images: ['/images/products/couples/couples-oil-5.jpg'],
    secondaryImage: '/images/products/couples/couples-oil-5.jpg',
    rating: 4.97,
    reviewCount: 65,
    isFeatured: false,
    isNew: true,
    isBestseller: true,
    tags: ['Orgasm Drops', 'Amplification Serum', 'Clitoral Sensitivity', 'Fast Acting'],
    sensoryFeel: 'Intense warming flutter that tingles and heightens every flutter of touch.',
    fabricCare: 'Apply 1-2 concentrated drops directly onto clitoris; massage gently.',
    safetyCertifications: ['Latex Safe', '100% Body Safe', 'OBGYN Tested', 'pH 4.0 Balanced'],
    intensityLevels: 'High-Potency Arousal Amplification',
    materials: ['L-Arginine', 'Ylang Ylang Extra', 'Frosted Amber Dropper'],
    sizes: ['30ml / 1.0 fl oz'],
    colors: [
      { name: 'Amber Dropper', hex: '#92400E' }
    ],
    variants: [
      {
        id: 'var-cpl-oil-05-30m',
        productId: 'prod-cpl-oil-05',
        sku: 'VL-CPL-OIL-05-30M',
        size: '30ml',
        color: 'Amber Dropper',
        colorHex: '#92400E',
        material: 'Concentrated Botanical Serum',
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

// Filter out old placeholder couples products (prod-003)
const remainingProducts = currentProducts.filter(p => p.categoryId !== 'cat-couples');

// Assemble all products: lingerie (30) + wellness (25) + couples (20) + other remaining (3) = 78 total
const allProducts = [...remainingProducts, ...couplesProducts];

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
    itemCount: 9,
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
const couplesCount = allProducts.filter(p => p.categoryId === 'cat-couples').length;
console.log('Couples (cat-couples) count:', couplesCount);
