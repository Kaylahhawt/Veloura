const fs = require('fs');
const path = require('path');

// 25 Luxury Wellness / Sex Toy Products (5 per subcategory)
const wellnessProducts = [
  // ==========================================
  // VIBRATORS (1 - 5)
  // ==========================================
  {
    id: 'prod-wel-vib-01',
    title: 'Séraphine Dual-Stimulation Rabbit Vibrator',
    slug: 'seraphine-dual-stimulation-rabbit-vibrator',
    subtitle: 'Simultaneous G-Spot & Clitoral Sonic Harmonics with 24K Gold Detailing',
    description: 'Sculpted from velvet-touch, hypoallergenic medical silicone and accented with 24K champagne gold detailing. Features dual independent high-torque whisper motors engineered for synchronized external pulsation and internal G-spot resonance with 10 vibrational wave frequencies.',
    story: 'Conceived as an exquisite art object on fine travertine stone, Séraphine brings graceful ergonomic balance and tailored dual-frequency arousal.',
    basePrice: 165.00,
    discountPrice: 145.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Vibrators',
    images: ['/images/products/wellness/vibrator-1.jpg'],
    secondaryImage: '/images/products/wellness/vibrator-1.jpg',
    rating: 4.97,
    reviewCount: 42,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Rabbit Vibrator', 'Dual Motor', 'G-Spot', 'Waterproof', 'Magnetic USB'],
    sensoryFeel: 'Velvet-soft, warmed body-temperature silicone with deep, rumbling low-frequency vibrations.',
    fabricCare: 'Wash with warm water and botanical toy cleaner. Store in protective velvet pouch.',
    safetyCertifications: ['Medical-Grade Silicone', 'FDA Compliant', '100% Phthalate & BPA Free', 'IPX8 Waterproof (Submersible up to 1m)'],
    intensityLevels: '10 Vibration Frequencies & 5 Dynamic Speeds',
    materials: ['Medical-Grade Silky Silicone', '24K Champagne Gold Electroplate', 'ABS Core'],
    sizes: ['One Size (19.8cm x 3.6cm)'],
    colors: [
      { name: 'Onyx Noir', hex: '#1C1917' },
      { name: 'Dusty Rose', hex: '#BE185D' },
      { name: 'Champagne Pearl', hex: '#D4AF37' }
    ],
    variants: [
      {
        id: 'var-wel-vib-01-onx',
        productId: 'prod-wel-vib-01',
        sku: 'VL-VIB-01-ONX',
        size: 'One Size',
        color: 'Onyx Noir',
        colorHex: '#1C1917',
        material: 'Medical-Grade Silicone & 24K Gold',
        stockQuantity: 18,
        powerType: 'Magnetic USB'
      },
      {
        id: 'var-wel-vib-01-ros',
        productId: 'prod-wel-vib-01',
        sku: 'VL-VIB-01-ROS',
        size: 'One Size',
        color: 'Dusty Rose',
        colorHex: '#BE185D',
        material: 'Medical-Grade Silicone & 24K Gold',
        stockQuantity: 14,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-vib-02',
    title: 'Élan Sculpted Curve Ergonomic Vibrator',
    slug: 'elan-sculpted-curve-ergonomic-vibrator',
    subtitle: 'Anatomically Contoured G-Spot Tip with Gift Presentation Casket',
    description: 'Precision-engineered curved form that follows natural body contours for pinpoint internal sensation. Features whisper-quiet micro-bearings, smooth silicone casing, and an intuitive tactile LED control pad housed in a luxury presentation box.',
    story: 'Designed in Paris to blend architectural minimalism with sensory intimacy, Élan feels like a seamless extension of touch.',
    basePrice: 135.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Vibrators',
    images: ['/images/products/wellness/vibrator-2.jpg'],
    secondaryImage: '/images/products/wellness/vibrator-2.jpg',
    rating: 4.93,
    reviewCount: 31,
    isFeatured: true,
    isNew: true,
    isBestseller: false,
    tags: ['Curved Vibrator', 'G-Spot', 'Whisper Quiet', 'Gift Box'],
    sensoryFeel: 'Satin-smooth glide with responsive, targeted vibrational focus at the angled tip.',
    fabricCare: 'Rinse with antibacterial toy cleanser and pat dry with lint-free microfiber.',
    safetyCertifications: ['Medical-Grade Silicone', 'CE Certified', 'RoHS Compliant', 'IPX7 Waterproof'],
    intensityLevels: '8 Rhythmic Patterns & 4 Variable Intensities',
    materials: ['Ultra-Silky Body Silicone', 'Brushed Rose Gold Accents'],
    sizes: ['One Size (17.5cm x 3.2cm)'],
    colors: [
      { name: 'Blush Orchid', hex: '#F472B6' },
      { name: 'Pearl Ivory', hex: '#FDFBF7' }
    ],
    variants: [
      {
        id: 'var-wel-vib-02-blu',
        productId: 'prod-wel-vib-02',
        sku: 'VL-VIB-02-BLU',
        size: 'One Size',
        color: 'Blush Orchid',
        colorHex: '#F472B6',
        material: 'Medical-Grade Silicone',
        stockQuantity: 22,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-vib-03',
    title: 'Lumina High-Precision Contoured Wand Vibrator',
    slug: 'lumina-high-precision-contoured-wand-vibrator',
    subtitle: 'Broad Surface Clitoral & Full-Body Acoustic Resonance Massager',
    description: 'Engineered with a weighted, silicone-cushioned vibrating head that delivers therapeutic low-pitch oscillations. Excellent for targeted clitoral stimulation, neck and shoulder tension release, and full-body sensory arousal.',
    story: 'Lumina bridges the divide between restorative muscle relaxation and intense sensual euphoria through balanced mass distribution and acoustic dampening.',
    basePrice: 150.00,
    discountPrice: 130.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Vibrators',
    images: ['/images/products/wellness/vibrator-3.jpg'],
    secondaryImage: '/images/products/wellness/vibrator-3.jpg',
    rating: 4.96,
    reviewCount: 54,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Wand Massager', 'Full Body', 'Clitoral Wand', 'Deep Resonance'],
    sensoryFeel: 'Heavy, penetrating thrum that resonates through tissue without surface buzzing.',
    fabricCare: 'Wipe head clean with damp cloth and gentle foaming cleanser. Store dry.',
    safetyCertifications: ['Body-Safe Silicone', 'FDA Medical Standard', 'IPX7 Waterproof Head'],
    intensityLevels: '12 Frequency Modes & Continuous Speed Scroll',
    materials: ['Medical-Grade Silicone', 'Reinforced Matte Alloy Core'],
    sizes: ['One Size (22cm x 4.5cm Head)'],
    colors: [
      { name: 'Midnight Violet', hex: '#4C1D95' },
      { name: 'Silken Pearl', hex: '#F3F4F6' }
    ],
    variants: [
      {
        id: 'var-wel-vib-03-vio',
        productId: 'prod-wel-vib-03',
        sku: 'VL-VIB-03-VIO',
        size: 'One Size',
        color: 'Midnight Violet',
        colorHex: '#4C1D95',
        material: 'Silicone & Alloy',
        stockQuantity: 15,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-vib-04',
    title: 'Aurelia Petite Fingertip Sculpted Velvet Massager',
    slug: 'aurelia-petite-fingertip-sculpted-velvet-massager',
    subtitle: 'Compact Ergonomic Teardrop Vibrator for Precision Touch',
    description: 'A discreet, palm-sized stimulator with an arched teardrop tip calibrated for pin-point clitoral and nipple stimulation. Fits effortlessly into travel bags and palm curves with virtually silent operation (<35dB).',
    story: 'Designed for effortless intimacy on the go or discreet bedside pleasure, Aurelia feels as organic and gentle as fingertip caresses.',
    basePrice: 85.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Vibrators',
    images: ['/images/products/wellness/vibrator-4.jpg'],
    secondaryImage: '/images/products/wellness/vibrator-4.jpg',
    rating: 4.88,
    reviewCount: 26,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Mini Vibrator', 'Fingertip Massager', 'Travel Friendly', 'Quiet'],
    sensoryFeel: 'Velvety light silicone with concentrated, precise tip tremors.',
    fabricCare: 'Wash with warm water and mild antibacterial soap. Air dry completely.',
    safetyCertifications: ['100% Body-Safe Silicone', 'RoHS Certified', 'IPX7 Waterproof'],
    intensityLevels: '6 Vibration Frequencies & 3 Speeds',
    materials: ['Velvet-Touch Silicone', 'Chrome Accent Ring'],
    sizes: ['Compact (9.2cm x 3.8cm)'],
    colors: [
      { name: 'Champagne Peach', hex: '#FDBA74' },
      { name: 'Velvet Plum', hex: '#701A75' }
    ],
    variants: [
      {
        id: 'var-wel-vib-04-pch',
        productId: 'prod-wel-vib-04',
        sku: 'VL-VIB-04-PCH',
        size: 'Compact',
        color: 'Champagne Peach',
        colorHex: '#FDBA74',
        material: 'Medical-Grade Silicone',
        stockQuantity: 28,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-vib-05',
    title: 'Symphony Multi-Wave Contoured Silicone Wand',
    slug: 'symphony-multi-wave-contoured-silicone-wand',
    subtitle: 'Dual-Ended Sensory Massager with Dynamic Waveform Motors',
    description: 'An elongated, flexible silicone pleasure wand boasting dual active extremities: a bulbous G-spot tip on one end and a textured external stimulation nozzle on the other. Powered by synchronized waveform harmonic motors.',
    story: 'Symphony orchestrates pleasure like a musical score, shifting effortlessly between gentle crests and deep rolling tides of stimulation.',
    basePrice: 155.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Vibrators',
    images: ['/images/products/wellness/vibrator-5.jpg'],
    secondaryImage: '/images/products/wellness/vibrator-5.jpg',
    rating: 4.92,
    reviewCount: 38,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Dual Ended', 'Waveform', 'Flexible Wand', 'Internal & External'],
    sensoryFeel: 'Flexible, yielding silicone with rhythmic swell-and-release internal sensation.',
    fabricCare: 'Clean thoroughly with warm water and sanitizing foam. Keep in satin pouch.',
    safetyCertifications: ['Medical-Grade Silicone', 'Latex & Phthalate Free', 'IPX8 Waterproof'],
    intensityLevels: '10 Wave Frequencies & 4 Motor Strengths',
    materials: ['Ultra-Silky Body Silicone', 'Flexible Polymer Core'],
    sizes: ['One Size (21.5cm x 3.4cm)'],
    colors: [
      { name: 'Emerald Jade', hex: '#065F46' },
      { name: 'Slate Charcoal', hex: '#374151' }
    ],
    variants: [
      {
        id: 'var-wel-vib-05-emr',
        productId: 'prod-wel-vib-05',
        sku: 'VL-VIB-05-EMR',
        size: 'One Size',
        color: 'Emerald Jade',
        colorHex: '#065F46',
        material: 'Medical Silicone',
        stockQuantity: 19,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },

  // ==========================================
  // SUCTION TOYS (1 - 5)
  // ==========================================
  {
    id: 'prod-wel-suc-01',
    title: 'Aéra Clitoral Air-Pulse Acoustic Pebble Stimulator',
    slug: 'aera-clitoral-air-pulse-acoustic-pebble-stimulator',
    subtitle: 'Touchless Air-Wave Pulsations for Deep Clitoral Resonance',
    description: 'Utilizes proprietary sonic pressure waves that stimulate the nerve endings of the clitoris without direct abrasive friction. Shaped like an ergonomic beach pebble with a plush silicone suction mouth and ultra-quiet operation (<30dB).',
    story: 'A revolution in female climax technology, Aéra creates a sensation akin to gentle oral suction and atmospheric pressure waves.',
    basePrice: 140.00,
    discountPrice: 125.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Suction Toys',
    images: ['/images/products/wellness/suction-1.jpg'],
    secondaryImage: '/images/products/wellness/suction-1.jpg',
    rating: 4.98,
    reviewCount: 67,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Air-Pulse', 'Sonic Suction', 'Touchless', 'Clitoral Sensation'],
    sensoryFeel: 'Pulsing air tides that lift and draw the clitoris without numbing or friction.',
    fabricCare: 'Remove silicone nozzle rim to wash separately with warm water and toy spray.',
    safetyCertifications: ['Medical-Grade Silicone', 'FDA Grade', 'IPX8 Waterproof Submersible'],
    intensityLevels: '11 Air-Pulse Pressure Levels',
    materials: ['Medical-Grade Soft Silicone', 'Champagne Metallic Trim'],
    sizes: ['One Size (11.8cm x 5.2cm)'],
    colors: [
      { name: 'Rosewater Pink', hex: '#FB7185' },
      { name: 'Bespoke Cream', hex: '#FFFBEB' }
    ],
    variants: [
      {
        id: 'var-wel-suc-01-rsw',
        productId: 'prod-wel-suc-01',
        sku: 'VL-SUC-01-RSW',
        size: 'One Size',
        color: 'Rosewater Pink',
        colorHex: '#FB7185',
        material: 'Medical-Grade Silicone',
        stockQuantity: 34,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-suc-02',
    title: 'Petal Ergonomic Clitoral Air-Wave Massager',
    slug: 'petal-ergonomic-clitoral-air-wave-massager',
    subtitle: 'Flared Contoured Mouthpiece with Dual Sonic Motor Systems',
    description: 'Designed with a gently flared, cupping silicone nozzle that cushions the labia while focusing pulsating air currents directly onto the clitoral glans. Features dual independent control for wave frequency and pulse depth.',
    story: 'Sculpted like an opening botanical petal, Petal envelops the most sensitive zones in a cocoon of pulsing warmth.',
    basePrice: 130.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Suction Toys',
    images: ['/images/products/wellness/suction-2.jpg'],
    secondaryImage: '/images/products/wellness/suction-2.jpg',
    rating: 4.94,
    reviewCount: 39,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Air-Wave', 'Petal Mouthpiece', 'Dual Control', 'Bath Safe'],
    sensoryFeel: 'Enveloping suction waves with a soft, cushioning silicone seal against intimate skin.',
    fabricCare: 'Rinse with warm water under running tap. Fully submersible for bath relaxation.',
    safetyCertifications: ['Silicone Body Safe', 'CE Certified', 'IPX8 Waterproof'],
    intensityLevels: '10 Sonic Wave Modes & 5 Pressure Strengths',
    materials: ['Hypoallergenic Silicone', 'Satin ABS Core'],
    sizes: ['One Size (13cm x 5.5cm)'],
    colors: [
      { name: 'Lilac Dusk', hex: '#C084FC' },
      { name: 'Coral Blossom', hex: '#F87171' }
    ],
    variants: [
      {
        id: 'var-wel-suc-02-llc',
        productId: 'prod-wel-suc-02',
        sku: 'VL-SUC-02-LLC',
        size: 'One Size',
        color: 'Lilac Dusk',
        colorHex: '#C084FC',
        material: 'Medical-Grade Silicone',
        stockQuantity: 21,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-suc-03',
    title: 'Solis Aerodynamic Sonic Pulse Stimulator',
    slug: 'solis-aerodynamic-sonic-pulse-stimulator',
    subtitle: 'Sculpted Minimalist Silhouette with Hydro-Pneumatic Chamber',
    description: 'Features a precision micro-chamber that creates rhythmic aerated vacuum waves. With streamlined curves in contemporary cyan silicone and a gilded gold base button, Solis delivers powerful, fast climaxes without sensory fatigue.',
    story: 'Solis takes inspiration from mid-century Nordic pottery, resulting in a display-worthy device that harbors unmatched pneumatic power.',
    basePrice: 125.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Suction Toys',
    images: ['/images/products/wellness/suction-3.jpg'],
    secondaryImage: '/images/products/wellness/suction-3.jpg',
    rating: 4.91,
    reviewCount: 28,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Sonic Pulse', 'Cyan Silicone', 'Nordic Design', 'Fast Climax'],
    sensoryFeel: 'Intense acoustic pulses creating a swelling, warm suction sensation.',
    fabricCare: 'Wash with gentle antibacterial foam; recharge magnetically.',
    safetyCertifications: ['Medical-Grade Silicone', 'FDA Registered', 'IPX7 Waterproof'],
    intensityLevels: '9 Acoustic Rhythm Settings',
    materials: ['Silky Liquid Silicone', '24K Electroplated Gold Accent'],
    sizes: ['One Size (12cm x 4.8cm)'],
    colors: [
      { name: 'Ocean Cyan', hex: '#06B6D4' },
      { name: 'Onyx Black', hex: '#111827' }
    ],
    variants: [
      {
        id: 'var-wel-suc-03-cyn',
        productId: 'prod-wel-suc-03',
        sku: 'VL-SUC-03-CYN',
        size: 'One Size',
        color: 'Ocean Cyan',
        colorHex: '#06B6D4',
        material: 'Medical Silicone',
        stockQuantity: 19,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-suc-04',
    title: 'Azure Acoustic Sonic Pulsation Stimulator',
    slug: 'azure-acoustic-sonic-pulsation-stimulator',
    subtitle: 'Deep Cobalt Liquid Silicone with Gentle Vacuum Waves',
    description: 'Engineered with deep-resonance acoustic transducers that translate low audio frequencies into undulating air currents. Encased in rich cobalt velvet silicone with a magnetic fast-charging interface.',
    story: 'Azure explores the science of auditory tactile stimulation, converting low acoustic waves into pure physical ecstasy.',
    basePrice: 135.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Suction Toys',
    images: ['/images/products/wellness/suction-4.jpg'],
    secondaryImage: '/images/products/wellness/suction-4.jpg',
    rating: 4.90,
    reviewCount: 22,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Cobalt Silicone', 'Acoustic Waves', 'Vacuum Rhythm', 'Waterproof'],
    sensoryFeel: 'Deep, undulating vacuum waves with silky soft labial contact.',
    fabricCare: 'Clean thoroughly with warm soapy water and air dry on a soft towel.',
    safetyCertifications: ['Phthalate Free', 'Medical Silicone', 'IPX8 Waterproof'],
    intensityLevels: '10 Pulse Patterns & 4 Pressure Modes',
    materials: ['Medical-Grade Liquid Silicone', 'Chrome Trim'],
    sizes: ['One Size (12.5cm x 5.0cm)'],
    colors: [
      { name: 'Cobalt Azure', hex: '#1D4ED8' }
    ],
    variants: [
      {
        id: 'var-wel-suc-04-cbl',
        productId: 'prod-wel-suc-04',
        sku: 'VL-SUC-04-CBL',
        size: 'One Size',
        color: 'Cobalt Azure',
        colorHex: '#1D4ED8',
        material: 'Liquid Silicone',
        stockQuantity: 17,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-suc-05',
    title: 'Aureole Rose Sculpted Air-Wave Stimulator',
    slug: 'aureole-rose-sculpted-air-wave-stimulator',
    subtitle: 'Artisanal Floral Aesthetic with Whisper-Quiet Suction Chamber',
    description: 'A discreet rose-blossom sculpted stimulator featuring a soft silicone petal cavity that fits over intimate contours. Conceals quiet yet astonishingly effective air-pulse motors beneath an innocent romantic exterior.',
    story: 'Disguised as a delicate rose bud resting peacefully on a vanity, Aureole is an enchanting secret pleasure companion.',
    basePrice: 110.00,
    discountPrice: 95.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Suction Toys',
    images: ['/images/products/wellness/suction-5.jpg'],
    secondaryImage: '/images/products/wellness/suction-5.jpg',
    rating: 4.95,
    reviewCount: 46,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Rose Toy', 'Air Suction', 'Discreet Design', 'Popular'],
    sensoryFeel: 'Soft, cupping suction with rapid fluttering air pulses that build to intense peaks.',
    fabricCare: 'Wash opening under warm water with toy cleanser. Submersible in bath.',
    safetyCertifications: ['100% Body-Safe Silicone', 'BPA Free', 'IPX8 Waterproof'],
    intensityLevels: '10 Suction Rhythms',
    materials: ['Soft Velvet Silicone', 'Gold Accent Base'],
    sizes: ['One Size (6.5cm x 6.5cm)'],
    colors: [
      { name: 'Scarlet Rose', hex: '#E11D48' },
      { name: 'Pale Blush', hex: '#FBCFE8' }
    ],
    variants: [
      {
        id: 'var-wel-suc-05-scr',
        productId: 'prod-wel-suc-05',
        sku: 'VL-SUC-05-SCR',
        size: 'One Size',
        color: 'Scarlet Rose',
        colorHex: '#E11D48',
        material: 'Velvet Silicone',
        stockQuantity: 36,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },

  // ==========================================
  // DILDOS (1 - 5)
  // ==========================================
  {
    id: 'prod-wel-dil-01',
    title: 'Sensiglass 24K Gold Leaf Hand-Blown Borosilicate Wand',
    slug: 'sensiglass-24k-gold-leaf-hand-blown-borosilicate-wand',
    subtitle: 'Artisanal Temperature-Responsive Glass with Real Floating Gold Flakes',
    description: 'Individually hand-blown from hypoallergenic, non-porous borosilicate glass infused with genuine 24K gold leaf flakes. Features dual curved bulbs for internal G-spot and P-spot precision. Completely temperature responsive—warm in warm water or chill on ice for sensory play.',
    story: 'Handcrafted by master glassblowers in Murano tradition, Sensiglass elevates sensual intimacy into high art on burgundy velvet.',
    basePrice: 180.00,
    discountPrice: 160.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Dildos',
    images: ['/images/products/wellness/dildo-1.jpg'],
    secondaryImage: '/images/products/wellness/dildo-1.jpg',
    rating: 4.99,
    reviewCount: 37,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Glass Wand', '24K Gold Leaf', 'Temperature Play', 'Hypoallergenic', 'Artisan'],
    sensoryFeel: 'Silky, ultra-smooth frictionless glass that warms to body heat and glides effortlessly with any lubricant.',
    fabricCare: 'Wash with antibacterial soap or sterilize with boiling water. Safe with all lubricants.',
    safetyCertifications: ['100% Borosilicate Glass', 'Medical Grade', 'Hypoallergenic & Non-Porous', 'Dishwasher & Boil Safe'],
    intensityLevels: 'Manual Ergonomic Control (Dual-Ended Curves)',
    materials: ['Hand-Blown Borosilicate Glass', 'Genuine 24K Gold Leaf Infusion'],
    sizes: ['One Size (20cm Length x 3.2cm Max Diameter)'],
    colors: [
      { name: 'Crystal & 24K Gold', hex: '#D4AF37' }
    ],
    variants: [
      {
        id: 'var-wel-dil-01-gld',
        productId: 'prod-wel-dil-01',
        sku: 'VL-DIL-01-GLD',
        size: 'One Size',
        color: 'Crystal & 24K Gold',
        colorHex: '#D4AF37',
        material: 'Borosilicate Glass & 24K Gold',
        stockQuantity: 12
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-dil-02',
    title: 'Aphrodite Sculpted Spiral Borosilicate Glass Wand',
    slug: 'aphrodite-sculpted-spiral-borosilicate-glass-wand',
    subtitle: 'Helical Textured Ribbing for Heightened Internal Sensation',
    description: 'An architectural clear glass pleasure wand boasting a continuous helical spiral along its shaft. The gentle twisting ridges stimulate nerve endings on every insertion and rotation, culminating in an ergonomic curved bulb for targeted G-spot pressure.',
    story: 'Named after the goddess of beauty, Aphrodite combines classical geometry with temperature-responsive physical luxury.',
    basePrice: 145.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Dildos',
    images: ['/images/products/wellness/dildo-2.jpg'],
    secondaryImage: '/images/products/wellness/dildo-2.jpg',
    rating: 4.93,
    reviewCount: 24,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Glass Dildo', 'Spiral Ribbed', 'G-Spot Curve', 'Temperature Play'],
    sensoryFeel: 'Frictionless, crisp glass with thrilling spiraled texture and firm, targeted fullness.',
    fabricCare: 'Compatible with water-based and silicone lubricants. Wash with warm water and soap.',
    safetyCertifications: ['Shatter-Resistant Borosilicate Glass', 'Non-Porous', 'Hypoallergenic'],
    intensityLevels: 'Manual Control',
    materials: ['Borosilicate Glass'],
    sizes: ['One Size (19cm Length x 3.0cm Diameter)'],
    colors: [
      { name: 'Pure Crystal Clear', hex: '#FFFFFF' }
    ],
    variants: [
      {
        id: 'var-wel-dil-02-clr',
        productId: 'prod-wel-dil-02',
        sku: 'VL-DIL-02-CLR',
        size: 'One Size',
        color: 'Pure Crystal Clear',
        colorHex: '#FFFFFF',
        material: 'Borosilicate Glass',
        stockQuantity: 16
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-dil-03',
    title: 'Nocturne Ribbed Obsidian Borosilicate Pleasure Probe',
    slug: 'nocturne-ribbed-obsidian-borosilicate-pleasure-probe',
    subtitle: 'Smoky Onyx Tinted Glass with Progressive Ridged Nodes',
    description: 'Blown from tinted dark obsidian borosilicate glass with progressive tiered ridges along its length. Its angled head focuses pressure directly against the G-spot while the handle provides a confident, ergonomic grip during self or partner play.',
    story: 'Nocturne evokes the mystery of midnight with deep smoky obsidian tones and uncompromising structural perfection.',
    basePrice: 155.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Dildos',
    images: ['/images/products/wellness/dildo-3.jpg'],
    secondaryImage: '/images/products/wellness/dildo-3.jpg',
    rating: 4.95,
    reviewCount: 29,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Obsidian Glass', 'Tiered Ridges', 'Dual Ended', 'Sensual'],
    sensoryFeel: 'Cool, weighty glass that warms deeply against skin with invigorating stepped ridges.',
    fabricCare: 'Rinse with warm water or soak in gentle antibacterial wash. Store in velvet wrap.',
    safetyCertifications: ['Medical-Grade Borosilicate', '100% Body-Safe', 'Phthalate Free'],
    intensityLevels: 'Manual Control',
    materials: ['Obsidian Borosilicate Glass'],
    sizes: ['One Size (21cm Length x 3.5cm Max Diameter)'],
    colors: [
      { name: 'Smoky Obsidian', hex: '#1F2937' }
    ],
    variants: [
      {
        id: 'var-wel-dil-03-obs',
        productId: 'prod-wel-dil-03',
        sku: 'VL-DIL-03-OBS',
        size: 'One Size',
        color: 'Smoky Obsidian',
        colorHex: '#1F2937',
        material: 'Obsidian Glass',
        stockQuantity: 14
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-dil-04',
    title: 'Pure Contour Medical-Grade Clear Silicone Pleasure Probe',
    slug: 'pure-contour-medical-grade-clear-silicone-pleasure-probe',
    subtitle: 'Crystalline Flexible Platinum Silicone with Dual Firmness Core',
    description: 'Molded from ultra-pure, translucent platinum-cured medical silicone. Possesses a flexible outer cushion over a firm inner core that delivers authentic, satisfying fullness and natural responsive give.',
    story: 'Crafted for those who crave the organic flex of silicone paired with the luminous, clean aesthetics of crystal.',
    basePrice: 120.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Dildos',
    images: ['/images/products/wellness/dildo-4.jpg'],
    secondaryImage: '/images/products/wellness/dildo-4.jpg',
    rating: 4.89,
    reviewCount: 19,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Clear Silicone', 'Dual Density', 'Platinum Cured', 'Flexible'],
    sensoryFeel: 'Supple, lifelike give on the outside with strong interior structural support.',
    fabricCare: 'Use exclusively with water-based lubricants. Wash with warm water and toy cleaner.',
    safetyCertifications: ['100% Platinum Silicone', 'FDA Grade', 'Latex & Phthalate Free'],
    intensityLevels: 'Manual Ergonomic Flexibility',
    materials: ['Platinum-Cured Clear Silicone'],
    sizes: ['One Size (18.5cm Length x 3.6cm Diameter)'],
    colors: [
      { name: 'Crystal Clear', hex: '#E0F2FE' }
    ],
    variants: [
      {
        id: 'var-wel-dil-04-clr',
        productId: 'prod-wel-dil-04',
        sku: 'VL-DIL-04-CLR',
        size: 'One Size',
        color: 'Crystal Clear',
        colorHex: '#E0F2FE',
        material: 'Platinum Silicone',
        stockQuantity: 20
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-dil-05',
    title: 'Celestia Hand-Blown Borosilicate Graduated Bead Wand',
    slug: 'celestia-hand-blown-borosilicate-graduated-bead-wand',
    subtitle: 'Sequenced Spherical Nodes for Thrilling Progressive Fullness',
    description: 'Sculpted with five seamlessly graduated glass spheres culminating in a flared comfort base. Each sphere smoothly expands in diameter, creating a rhythmic sensation of swelling fullness during movement.',
    story: 'Celestia mirrors the celestial alignment of planets, offering an unforgettable progression of sensations in crystal glass.',
    basePrice: 135.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Dildos',
    images: ['/images/products/wellness/dildo-5.jpg'],
    secondaryImage: '/images/products/wellness/dildo-5.jpg',
    rating: 4.94,
    reviewCount: 33,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Glass Beads', 'Graduated Spheres', 'Temperature Play', 'Flared Base'],
    sensoryFeel: 'Gliding, rhythmic pop of each sphere with delightful temperature sensitivity.',
    fabricCare: 'Compatible with all lubricants. Clean with warm water and soap or boil safe.',
    safetyCertifications: ['Medical-Grade Borosilicate', 'Non-Porous', 'Flared Safety Base'],
    intensityLevels: 'Manual Graduated Sensation',
    materials: ['Borosilicate Solid Glass'],
    sizes: ['One Size (18cm Length x 2.2cm to 3.8cm Graduated)'],
    colors: [
      { name: 'Crystal Glass', hex: '#F9FAFB' }
    ],
    variants: [
      {
        id: 'var-wel-dil-05-cst',
        productId: 'prod-wel-dil-05',
        sku: 'VL-DIL-05-CST',
        size: 'One Size',
        color: 'Crystal Glass',
        colorHex: '#F9FAFB',
        material: 'Borosilicate Glass',
        stockQuantity: 15
      }
    ],
    discreetPackagingIncluded: true
  },

  // ==========================================
  // ANAL TOYS (1 - 5)
  // ==========================================
  {
    id: 'prod-wel-anl-01',
    title: 'Sterling Mirror-Polished Surgical Stainless Steel Tapered Anchor Plug',
    slug: 'sterling-mirror-polished-surgical-stainless-steel-tapered-anchor-plug',
    subtitle: 'Weighted Medical Steel with Flared Ergonomic Base for Temperature Play',
    description: 'Forged from solid 316L surgical stainless steel and hand-buffed to a radiant mirror sheen. Features a slim tapered tip for effortless insertion, expanding to a satisfying neck and a wide flared anchor base designed for absolute safety and long-wear comfort.',
    story: 'Weighted and luxurious, Sterling delivers thrilling cool-to-warm temperature dynamics and intense sensory presence.',
    basePrice: 110.00,
    discountPrice: 95.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Anal Toys',
    images: ['/images/products/wellness/anal-1.jpg'],
    secondaryImage: '/images/products/wellness/anal-1.jpg',
    rating: 4.96,
    reviewCount: 45,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Steel Plug', 'Temperature Play', 'Weighted', 'Flared Base', 'Surgical Steel'],
    sensoryFeel: 'Heavy, firm, thrillingly cold initial touch that warms deeply to internal body temperature.',
    fabricCare: 'Wash with warm antibacterial soap or sterilize. Compatible with all lubricants.',
    safetyCertifications: ['316L Surgical Stainless Steel', '100% Non-Porous', 'Body Safe', 'Flared Anchor Base'],
    intensityLevels: 'Weighted Solid Sensation (280g)',
    materials: ['316L Surgical Stainless Steel'],
    sizes: ['Medium (8.5cm Length x 3.2cm Max Diameter)'],
    colors: [
      { name: 'Mirror Silver', hex: '#E5E7EB' }
    ],
    variants: [
      {
        id: 'var-wel-anl-01-slv',
        productId: 'prod-wel-anl-01',
        sku: 'VL-ANL-01-SLV',
        size: 'Medium',
        color: 'Mirror Silver',
        colorHex: '#E5E7EB',
        material: '316L Surgical Steel',
        stockQuantity: 24
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-anl-02',
    title: 'Bijoux Rose Cut Crystal Jewel-Base Chrome Plug',
    slug: 'bijoux-rose-cut-crystal-jewel-base-chrome-plug',
    subtitle: 'Brilliant Faceted Austrian Crystal Set in Mirror-Finish Chrome',
    description: 'A dazzling intimacy jewel combining a mirror-polished tapered steel body with an exquisite multi-faceted cut crystal embedded into the flared base. Glistens like fine jewelry while providing secure, comfortable wear.',
    story: 'Transform intimate moments into decadent romance with a radiant gemstone that captures every flicker of candlelight.',
    basePrice: 95.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Anal Toys',
    images: ['/images/products/wellness/anal-2.jpg'],
    secondaryImage: '/images/products/wellness/anal-2.jpg',
    rating: 4.93,
    reviewCount: 38,
    isFeatured: false,
    isNew: true,
    isBestseller: true,
    tags: ['Jewel Plug', 'Crystal Base', 'Sensual Aesthetic', 'Flared Base'],
    sensoryFeel: 'Smooth metallic glide with a comforting weighted feeling of fullness.',
    fabricCare: 'Wash gently with warm soapy water around jewel base. Dry with microfiber.',
    safetyCertifications: ['Body-Safe Alloy & Chrome Plating', 'Lead-Free Crystal', 'Flared Safety Base'],
    intensityLevels: 'Smooth Weighted Sensation',
    materials: ['Mirror Chrome Plated Alloy', 'Faceted Cut Crystal'],
    sizes: ['Small (7.2cm Length x 2.8cm Diameter)'],
    colors: [
      { name: 'Ruby Red Jewel', hex: '#991B1B' },
      { name: 'Diamond Clear Jewel', hex: '#FFFFFF' },
      { name: 'Sapphire Blue Jewel', hex: '#1E3A8A' }
    ],
    variants: [
      {
        id: 'var-wel-anl-02-rby',
        productId: 'prod-wel-anl-02',
        sku: 'VL-ANL-02-RBY',
        size: 'Small',
        color: 'Ruby Red Jewel',
        colorHex: '#991B1B',
        material: 'Chrome Alloy & Crystal',
        stockQuantity: 18
      },
      {
        id: 'var-wel-anl-02-dia',
        productId: 'prod-wel-anl-02',
        sku: 'VL-ANL-02-DIA',
        size: 'Small',
        color: 'Diamond Clear Jewel',
        colorHex: '#FFFFFF',
        material: 'Chrome Alloy & Crystal',
        stockQuantity: 15
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-anl-03',
    title: 'Apex Contoured Velvet-Touch Silicone P-Spot & Perineum Massager',
    slug: 'apex-contoured-velvet-touch-silicone-p-spot-perineum-massager',
    subtitle: 'Dual-Motor Anatomical Prostate & External Perineum Vibrator',
    description: 'Sculpted to match male anatomy with high-precision curvature that directly targets the prostate while simultaneously vibrating against the perineum. Two independently driven silent motors deliver deep, rumbling waveforms.',
    story: 'Engineered for breathtaking, hands-free male climax through targeted internal pressure and external frequency synchronization.',
    basePrice: 155.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Anal Toys',
    images: ['/images/products/wellness/anal-3.jpg'],
    secondaryImage: '/images/products/wellness/anal-3.jpg',
    rating: 4.97,
    reviewCount: 32,
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    tags: ['P-Spot', 'Prostate Massager', 'Dual Motor', 'Perineum Stimulator'],
    sensoryFeel: 'Velvet-soft, flexible silicone with deep resonant low-frequency vibrations.',
    fabricCare: 'Wash with antibacterial toy cleaner. Fully IPX8 waterproof.',
    safetyCertifications: ['Medical-Grade Silicone', 'Anatomical Flared Base', 'IPX8 Waterproof'],
    intensityLevels: '10 Vibration Frequencies & 5 Speeds',
    materials: ['Medical-Grade Silky Silicone', 'ABS Core'],
    sizes: ['One Size (13.5cm x 3.4cm Internal Reach)'],
    colors: [
      { name: 'Onyx Noir', hex: '#111827' },
      { name: 'Slate Teal', hex: '#0F766E' }
    ],
    variants: [
      {
        id: 'var-wel-anl-03-onx',
        productId: 'prod-wel-anl-03',
        sku: 'VL-ANL-03-ONX',
        size: 'One Size',
        color: 'Onyx Noir',
        colorHex: '#111827',
        material: 'Medical Silicone',
        stockQuantity: 20,
        powerType: 'Magnetic USB'
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-anl-04',
    title: 'Empress 24K Gold-Dipped Dual Weighted Kegel & Pelvic Spheres',
    slug: 'empress-24k-gold-dipped-dual-weighted-kegel-pelvic-spheres',
    subtitle: 'Kinetic Dynamic Internal Weights for Pelvic Floor Toning & Arousal',
    description: 'A pair of weighted, gleaming 24K gold-dipped spheres connected by a flexible retrieval cord. Each sphere contains an internal rolling kinetic ball that shifts subtly with body movement, triggering involuntary micro-contractions and heightened sensation.',
    story: 'Empress unites ancient pelvic strengthening traditions with the sumptuous splendor of pure gold craftsmanship.',
    basePrice: 125.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Anal Toys',
    images: ['/images/products/wellness/anal-4.jpg'],
    secondaryImage: '/images/products/wellness/anal-4.jpg',
    rating: 4.91,
    reviewCount: 27,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    tags: ['Kegel Balls', '24K Gold', 'Pelvic Floor', 'Kinetic Weight', 'Sensual Exercise'],
    sensoryFeel: 'Heavy, shifting internal kinetic vibrations that respond to walking and breathing.',
    fabricCare: 'Wash gently with warm soapy water. Polish with soft lint-free jewelry cloth.',
    safetyCertifications: ['Body-Safe Gold Electroplate', 'Surgical Core', 'Latex Free'],
    intensityLevels: 'Dynamic Kinetic Weight (95g Total)',
    materials: ['24K Gold Electroplate over Brass Core', 'Medical Silicone Cord'],
    sizes: ['One Size (3.4cm Sphere Diameter)'],
    colors: [
      { name: '24K Champagne Gold', hex: '#D4AF37' }
    ],
    variants: [
      {
        id: 'var-wel-anl-04-gld',
        productId: 'prod-wel-anl-04',
        sku: 'VL-ANL-04-GLD',
        size: 'One Size',
        color: '24K Champagne Gold',
        colorHex: '#D4AF37',
        material: '24K Gold Plated Brass & Silicone',
        stockQuantity: 16
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-anl-05',
    title: 'Jade Yoni Hand-Carved Natural Nephrite Jade Pelvic Training Eggs',
    slug: 'jade-yoni-hand-carved-natural-nephrite-jade-pelvic-training-eggs',
    subtitle: 'Trio of Authentic Certified Nephrite Jade Stones for Sensual Wellness',
    description: 'Carved from 100% natural, certified nephrite jade stone on silk lining. Includes three graduated sizes (Small, Medium, Large) drilled for secure organic retrieval floss. Revered for centuries in Eastern holistic wellness for pelvic tone, circulation, and grounding energy.',
    story: 'Mined from organic river jade deposits and polished by hand, each egg carries unique natural vein patterns of calming green energy.',
    basePrice: 130.00,
    discountPrice: 115.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Anal Toys',
    images: ['/images/products/wellness/anal-5.jpg'],
    secondaryImage: '/images/products/wellness/anal-5.jpg',
    rating: 4.94,
    reviewCount: 41,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Jade Egg', 'Yoni Stone', 'Nephrite Jade', 'Holistic Wellness', 'Pelvic Toning'],
    sensoryFeel: 'Cool, grounding, organic stone texture that absorbs body warmth and feels silky smooth.',
    fabricCare: 'Wash with gentle antibacterial wash and warm water. Clean retrieval hole with running water.',
    safetyCertifications: ['100% Certified Natural Nephrite Jade', 'Chemical & Dye Free', 'Non-Porous Mineral'],
    intensityLevels: 'Graduated Sizes for Progressive Strength',
    materials: ['Genuine Nephrite Jade Mineral', 'Unwaxed Silk Retrieval Floss'],
    sizes: ['3-Piece Set (S: 30x20mm, M: 40x25mm, L: 45x30mm)'],
    colors: [
      { name: 'Nephrite Emerald Green', hex: '#059669' }
    ],
    variants: [
      {
        id: 'var-wel-anl-05-grn',
        productId: 'prod-wel-anl-05',
        sku: 'VL-ANL-05-GRN',
        size: '3-Piece Set',
        color: 'Nephrite Emerald Green',
        colorHex: '#059669',
        material: 'Natural Nephrite Jade',
        stockQuantity: 22
      }
    ],
    discreetPackagingIncluded: true
  },

  // ==========================================
  // ESSENTIALS (1 - 5)
  // ==========================================
  {
    id: 'prod-wel-ess-01',
    title: 'Silken Touch Organic Hyaluronic Water-Based Intimate Serum',
    slug: 'silken-touch-organic-hyaluronic-water-based-intimate-serum',
    subtitle: 'Ultra-Pure Hyaluronic Acid & Aloe Vera in Amber Glass Pump Bottle (150ml)',
    description: 'An exceptionally smooth, velvety water-based intimate serum formulated with multi-molecular weight hyaluronic acid and certified organic aloe vera. Mimics natural body moisture without stickiness or residue, fully compatible with all silicone, glass, and metal toys.',
    story: 'Created by clean cosmetic chemists, Silken Touch provides hours of frictionless glide while deeply hydrating delicate intimate tissue.',
    basePrice: 42.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Essentials',
    images: ['/images/products/wellness/essential-1.jpg'],
    secondaryImage: '/images/products/wellness/essential-1.jpg',
    rating: 4.98,
    reviewCount: 78,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Hyaluronic Serum', 'Organic Lubricant', 'Water Based', 'Toy Safe', 'Hydrating'],
    sensoryFeel: 'Silky, non-sticky cushion that feels natural and hydrating on skin.',
    fabricCare: 'Store in cool, dry place away from direct sunlight.',
    safetyCertifications: ['100% Toy Safe', 'Paraben & Glycerin Free', 'pH Balanced (3.8 - 4.2)', 'Vegan & Cruelty Free'],
    intensityLevels: 'Long-Lasting Hydration Cushion',
    materials: ['Hyaluronic Acid', 'Organic Aloe Leaf Extract', 'Amber Glass Dispenser'],
    sizes: ['150ml / 5.1 fl oz'],
    colors: [
      { name: 'Amber Glass', hex: '#78350F' }
    ],
    variants: [
      {
        id: 'var-wel-ess-01-150',
        productId: 'prod-wel-ess-01',
        sku: 'VL-ESS-01-150',
        size: '150ml',
        color: 'Amber Glass',
        colorHex: '#78350F',
        material: 'Organic Intimate Serum',
        stockQuantity: 65
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-ess-02',
    title: 'Botanical Anti-Microbial Foaming Toy Cleanser',
    slug: 'botanical-anti-microbial-foaming-toy-cleanser',
    subtitle: 'Tea Tree & Chamomile Rapid Sanitizing Foam Dispenser (200ml)',
    description: 'A gentle, alcohol-free foaming wash specially formulated to sanitize silicone, glass, and steel intimate devices without degrading delicate materials. Enriched with natural tea tree and chamomile extracts to eliminate 99.9% of bacteria while maintaining skin neutrality.',
    story: 'Preserve the longevity of your luxury pleasure collection with our spa-grade botanical cleansing foam.',
    basePrice: 34.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Essentials',
    images: ['/images/products/wellness/essential-2.jpg'],
    secondaryImage: '/images/products/wellness/essential-2.jpg',
    rating: 4.94,
    reviewCount: 44,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    tags: ['Toy Cleaner', 'Anti-Microbial', 'Botanical Foam', 'Material Safe'],
    sensoryFeel: 'Airy, light foam with a delicate, clean scent of fresh chamomile and tea tree.',
    fabricCare: 'Dispense 1-2 pumps onto device, lather for 30 seconds, and rinse with warm water.',
    safetyCertifications: ['Alcohol Free', 'Silicone Safe', 'Dermatologist Tested', 'Non-Toxic'],
    intensityLevels: 'Rapid Sanitizing Formula',
    materials: ['Tea Tree Leaf Oil', 'Chamomile Extract', 'Eco Pump Dispenser'],
    sizes: ['200ml / 6.8 fl oz'],
    colors: [
      { name: 'Amber Foamer', hex: '#92400E' }
    ],
    variants: [
      {
        id: 'var-wel-ess-02-200',
        productId: 'prod-wel-ess-02',
        sku: 'VL-ESS-02-200',
        size: '200ml',
        color: 'Amber Foamer',
        colorHex: '#92400E',
        material: 'Botanical Foaming Solution',
        stockQuantity: 52
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-ess-03',
    title: 'Veloura Plush Velvet Keepsake Toy Storage & Travel Pouch',
    slug: 'veloura-plush-velvet-keepsake-toy-storage-travel-pouch',
    subtitle: 'Antimicrobial Satin-Lined Dustproof Keepsake Case with Silk Ribbon',
    description: 'Handcrafted from heavyweight midnight plush velvet with an antimicrobial satin interior lining that keeps luxury toys dust-free, discreetly hidden, and protected from scratches during travel or bedside storage.',
    story: 'Your intimate collection deserves a sanctuary as elegant and luxurious as the devices themselves.',
    basePrice: 38.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Essentials',
    images: ['/images/products/wellness/essential-3.jpg'],
    secondaryImage: '/images/products/wellness/essential-3.jpg',
    rating: 4.92,
    reviewCount: 30,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['Velvet Pouch', 'Storage Case', 'Travel Friendly', 'Discreet'],
    sensoryFeel: 'Deep, plush velvet exterior with featherlight, silky satin interior.',
    fabricCare: 'Hand wash in cold water with gentle silk detergent. Air dry flat.',
    safetyCertifications: ['Lint Free', 'Breathable Fabric', 'Dustproof Protection'],
    intensityLevels: 'Protective Storage',
    materials: ['Heavyweight Italian Velvet', 'Silk-Satin Lining', 'Braided Drawstring'],
    sizes: ['One Size (28cm x 16cm)'],
    colors: [
      { name: 'Midnight Onyx', hex: '#18181B' },
      { name: 'Burgundy Wine', hex: '#881337' }
    ],
    variants: [
      {
        id: 'var-wel-ess-03-onx',
        productId: 'prod-wel-ess-03',
        sku: 'VL-ESS-03-ONX',
        size: 'One Size',
        color: 'Midnight Onyx',
        colorHex: '#18181B',
        material: 'Italian Velvet & Silk',
        stockQuantity: 40
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-ess-04',
    title: 'Aethel Sandalwood & Amber Botanical Pouring Massage Candle',
    slug: 'aethel-sandalwood-amber-botanical-pouring-massage-candle',
    subtitle: 'Low-Melting Point Soybean & Jojoba Warm Body Oil with Ceramic Spout',
    description: 'Formulated with organic soybean wax, shea butter, sweet almond oil, and jojoba seed oil. Melts at body-safe temperatures (102°F / 39°C) into a decadent warm massage oil scented with notes of warm sandalwood, amber, and vanilla.',
    story: 'Lighting Aethel sets the mood with romantic candlelight before pouring warmly onto skin for decadent full-body intimacy.',
    basePrice: 55.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Essentials',
    images: ['/images/products/wellness/essential-4.jpg'],
    secondaryImage: '/images/products/wellness/essential-4.jpg',
    rating: 4.96,
    reviewCount: 51,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    tags: ['Massage Candle', 'Warm Body Oil', 'Sandalwood & Amber', 'Sensory Play'],
    sensoryFeel: 'Warm, golden, non-greasy oil that sinks into the skin leaving it radiant and deeply fragrant.',
    fabricCare: 'Trim lead-free cotton wick to 1/4 inch before each burn. Burn for 20-30 mins.',
    safetyCertifications: ['100% Natural Wax', 'Lead-Free Cotton Wick', 'Dermatologist Tested', 'Low Melting Temp'],
    intensityLevels: 'Sensory Warmth & Aromatic Ambience',
    materials: ['Soy Wax', 'Shea Butter', 'Jojoba Oil', 'Ceramic Pouring Crucible'],
    sizes: ['220g / 7.7 oz (40 Hour Burn Time)'],
    colors: [
      { name: 'Frosted Ceramic', hex: '#F3F4F6' }
    ],
    variants: [
      {
        id: 'var-wel-ess-04-220',
        productId: 'prod-wel-ess-04',
        sku: 'VL-ESS-04-220',
        size: '220g',
        color: 'Frosted Ceramic',
        colorHex: '#F3F4F6',
        material: 'Botanical Massage Wax',
        stockQuantity: 38
      }
    ],
    discreetPackagingIncluded: true
  },
  {
    id: 'prod-wel-ess-05',
    title: 'UV-C Deep Sanitizing & Velvet Storage Keepsake Chest',
    slug: 'uv-c-deep-sanitizing-velvet-storage-keepsake-chest',
    subtitle: '360° Ultraviolet-C Medical Disinfection Box with Magnetic Lock',
    description: 'A discreet, lockable bedside vanity chest equipped with hospital-grade UV-C LED sanitizing arrays. Destroys 99.99% of surface pathogens in a rapid 3-minute cycle with zero chemicals or moisture. Plugs into USB-C for whisper-quiet sterilization.',
    story: 'The ultimate luxury sanctuary for device care, uniting high-tech clinical disinfection with the discreet elegance of a designer jewelry box.',
    basePrice: 115.00,
    discountPrice: 99.00,
    categoryId: 'cat-wellness',
    categorySlug: 'sex-toys',
    categoryName: 'Sex Toys',
    subcategory: 'Essentials',
    images: ['/images/products/wellness/essential-5.jpg'],
    secondaryImage: '/images/products/wellness/essential-5.jpg',
    rating: 4.97,
    reviewCount: 35,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    tags: ['UV Sanitizer', 'Sterilizer Box', 'Keepsake Chest', 'Medical Clean'],
    sensoryFeel: 'Smooth matte exterior with mirrored reflective internal chamber and velvet tray.',
    fabricCare: 'Wipe exterior with dry cloth. Automatic safety shutoff when lid opens.',
    safetyCertifications: ['EPA Registered UV-C', 'CE Certified', 'FCC Compliant', 'Ozone Free'],
    intensityLevels: '3-Minute 360° UV-C Disinfection Cycle',
    materials: ['Matte ABS Shell', 'Mirror Quartz Chamber', 'Velvet Interior Liner'],
    sizes: ['One Size (24cm x 14cm x 8cm)'],
    colors: [
      { name: 'Onyx Black', hex: '#18181B' },
      { name: 'Ivory White', hex: '#F9FAFB' }
    ],
    variants: [
      {
        id: 'var-wel-ess-05-onx',
        productId: 'prod-wel-ess-05',
        sku: 'VL-ESS-05-ONX',
        size: 'One Size',
        color: 'Onyx Black',
        colorHex: '#18181B',
        material: 'UV-C Disinfection Chamber',
        stockQuantity: 18,
        powerType: 'Magnetic USB'
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

// Filter out old placeholder wellness products (prod-002, prod-006)
const remainingProducts = currentProducts.filter(p => p.categoryId !== 'cat-wellness');

// Assemble all products: lingerie (30) + wellness (25) + other remaining (4) = 59 total
const allProducts = [...remainingProducts, ...wellnessProducts];

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
    itemCount: 12,
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
const wellnessCount = allProducts.filter(p => p.categoryId === 'cat-wellness').length;
console.log('Sex Toys (cat-wellness) count:', wellnessCount);
