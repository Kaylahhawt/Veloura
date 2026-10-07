import { Category, Product } from '@/types';

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

export const PRODUCTS: Product[] = [
  {
    "id": "prod-ling-bra-01",
    "title": "Séraphine Underwire Balconette Lace Bra",
    "slug": "seraphine-underwire-balconette-lace-bra",
    "subtitle": "Calais Leavers Lace with 24K Gold Hardware",
    "description": "Sculptural balconette architectural cup design fashioned with antique Calais Leavers lace and fine sheer tulle. Delicately cradles the bust with soft microfiber sling support and nickel-free 24K dipped sliders.",
    "story": "Inspired by romantic Parisian architecture, Séraphine balances structured underwire contouring with gossamer-soft French lace.",
    "basePrice": 120,
    "discountPrice": 105,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bras",
    "images": [
      "/images/products/lingerie/bra-1.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bra-1.jpg",
    "rating": 4.95,
    "reviewCount": 34,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Balconette",
      "Lace Bra",
      "Leavers Lace",
      "Luxury Underwear"
    ],
    "sensoryFeel": "Featherlight non-stretch lace that provides supportive natural uplift without irritating sensitive skin.",
    "fabricCare": "85% Polyamide, 15% Elastane. Hand wash cold with delicate detergent, lay flat to dry.",
    "safetyCertifications": [
      "OEKO-TEX Standard 100 Certified",
      "Nickel-free Hardware"
    ],
    "materials": [
      "French Lace",
      "Sheer Tulle",
      "Gold-plated Hardware"
    ],
    "sizes": [
      "32B",
      "32C",
      "34B",
      "34C",
      "36C",
      "36D"
    ],
    "colors": [
      {
        "name": "Rose Quartz & Plum",
        "hex": "#C97A7E"
      },
      {
        "name": "Noir Intense",
        "hex": "#180F17"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bra-01-32b-rose",
        "productId": "prod-ling-bra-01",
        "sku": "VL-BRA-01-32B-RQ",
        "size": "32B",
        "color": "Rose Quartz & Plum",
        "colorHex": "#C97A7E",
        "stockQuantity": 8
      },
      {
        "id": "v-bra-01-34b-rose",
        "productId": "prod-ling-bra-01",
        "sku": "VL-BRA-01-34B-RQ",
        "size": "34B",
        "color": "Rose Quartz & Plum",
        "colorHex": "#C97A7E",
        "stockQuantity": 12
      },
      {
        "id": "v-bra-01-34c-rose",
        "productId": "prod-ling-bra-01",
        "sku": "VL-BRA-01-34C-RQ",
        "size": "34C",
        "color": "Rose Quartz & Plum",
        "colorHex": "#C97A7E",
        "stockQuantity": 10
      },
      {
        "id": "v-bra-01-34b-noir",
        "productId": "prod-ling-bra-01",
        "sku": "VL-BRA-01-34B-NR",
        "size": "34B",
        "color": "Noir Intense",
        "colorHex": "#180F17",
        "stockQuantity": 9
      },
      {
        "id": "v-bra-01-36c-noir",
        "productId": "prod-ling-bra-01",
        "sku": "VL-BRA-01-36C-NR",
        "size": "36C",
        "color": "Noir Intense",
        "colorHex": "#180F17",
        "stockQuantity": 6
      }
    ]
  },
  {
    "id": "prod-ling-bra-02",
    "title": "Nocturne Silk Satin Wireless Triangle Bralette",
    "slug": "nocturne-silk-satin-wireless-triangle-bralette",
    "subtitle": "Pure Mulberry Silk with Eyelash Scalloped Trim",
    "description": "Unstructured whisper-light triangle bralette crafted from fluid stretch mulberry silk. Offers natural contouring with an elasticated satin underband, adjustable cross-back straps, and an effortless swan-hook clasp.",
    "story": "Designed for intimate slow mornings and sensual lounging, Nocturne envelopes the body in pure cooling silk with zero wires.",
    "basePrice": 95,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bras",
    "images": [
      "/images/products/lingerie/bra-2.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bra-2.jpg",
    "rating": 4.88,
    "reviewCount": 29,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Bralette",
      "Wireless",
      "Mulberry Silk",
      "Loungewear"
    ],
    "sensoryFeel": "Silky smooth glide with gentle elastic hold that feels entirely weightless.",
    "fabricCare": "95% Pure Mulberry Silk, 5% Elastane. Hand wash cold with delicate silk detergent.",
    "safetyCertifications": [
      "Grade 6A Mulberry Silk",
      "OEKO-TEX Certified"
    ],
    "materials": [
      "Mulberry Silk",
      "Satin Elastic"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Champagne Glaze",
        "hex": "#F4E8D0"
      },
      {
        "name": "Plum Midnight",
        "hex": "#2D1427"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bra-02-s-chm",
        "productId": "prod-ling-bra-02",
        "sku": "VL-BRA-02-S-CH",
        "size": "S",
        "color": "Champagne Glaze",
        "colorHex": "#F4E8D0",
        "stockQuantity": 14
      },
      {
        "id": "v-bra-02-m-chm",
        "productId": "prod-ling-bra-02",
        "sku": "VL-BRA-02-M-CH",
        "size": "M",
        "color": "Champagne Glaze",
        "colorHex": "#F4E8D0",
        "stockQuantity": 11
      },
      {
        "id": "v-bra-02-s-plm",
        "productId": "prod-ling-bra-02",
        "sku": "VL-BRA-02-S-PL",
        "size": "S",
        "color": "Plum Midnight",
        "colorHex": "#2D1427",
        "stockQuantity": 8
      }
    ]
  },
  {
    "id": "prod-ling-bra-03",
    "title": "Ophélie Plunge Push-Up Floral Lace Bra",
    "slug": "ophelie-plunge-push-up-floral-lace-bra",
    "subtitle": "Deep V-Décolletage with Memory Cloud Padding",
    "description": "Engineered for plunging necklines, this sumptuous push-up bra features botanical French embroidery over ultra-soft memory cloud foam cups. Provides an uplifting silhouette without harsh constriction.",
    "story": "Tailored for captivating confidence, Ophélie sculpts an unforgettable curve beneath silk shirts and evening gowns.",
    "basePrice": 135,
    "discountPrice": 118,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bras",
    "images": [
      "/images/products/lingerie/bra-3.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bra-3.jpg",
    "rating": 4.91,
    "reviewCount": 42,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Push Up",
      "Plunge Bra",
      "French Embroidery",
      "Underwire"
    ],
    "sensoryFeel": "Cushioned contour cups that adapt to body warmth, accented with velvet-backed wing bands.",
    "fabricCare": "Hand wash cold with mild detergent; dry flat away from direct heat.",
    "safetyCertifications": [
      "OEKO-TEX Certified",
      "Nickel-free Fasteners"
    ],
    "materials": [
      "Botanical Lace",
      "Memory Foam",
      "Satin Wings"
    ],
    "sizes": [
      "32B",
      "32C",
      "34B",
      "34C",
      "34D",
      "36C"
    ],
    "colors": [
      {
        "name": "Deep Wine",
        "hex": "#4A1525"
      },
      {
        "name": "Alabaster Ivory",
        "hex": "#FAF8F5"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bra-03-32b-wine",
        "productId": "prod-ling-bra-03",
        "sku": "VL-BRA-03-32B-WN",
        "size": "32B",
        "color": "Deep Wine",
        "colorHex": "#4A1525",
        "stockQuantity": 7
      },
      {
        "id": "v-bra-03-34b-wine",
        "productId": "prod-ling-bra-03",
        "sku": "VL-BRA-03-34B-WN",
        "size": "34B",
        "color": "Deep Wine",
        "colorHex": "#4A1525",
        "stockQuantity": 15
      },
      {
        "id": "v-bra-03-34c-wine",
        "productId": "prod-ling-bra-03",
        "sku": "VL-BRA-03-34C-WN",
        "size": "34C",
        "color": "Deep Wine",
        "colorHex": "#4A1525",
        "stockQuantity": 11
      }
    ]
  },
  {
    "id": "prod-ling-bra-04",
    "title": "Luna Noir Strapless Boned Satin Corset Bra",
    "slug": "luna-noir-strapless-boned-satin-corset-bra",
    "subtitle": "Structured Molded Cups with Hook-and-Eye Front",
    "description": "A striking strapless corset bra crafted in luminous black duchess satin. Engineered with flexible internal support boning and front hook-and-eye closures, providing stay-up structure with effortless glamour.",
    "story": "Designed to peek through sheer shirts or accompany strapless gala dresses with regal confidence.",
    "basePrice": 140,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bras",
    "images": [
      "/images/products/lingerie/bra-4.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bra-4.jpg",
    "rating": 4.93,
    "reviewCount": 31,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Strapless Bra",
      "Corset Bra",
      "Duchess Satin",
      "Boning"
    ],
    "sensoryFeel": "Firm structural hug with smooth silk satin that feels luxurious against skin.",
    "fabricCare": "Spot clean or hand wash cold, lay flat to dry.",
    "safetyCertifications": [
      "OEKO-TEX Certified",
      "Nickel-free Clasps"
    ],
    "materials": [
      "Duchess Satin",
      "Spiral Boning",
      "Gold Hardware"
    ],
    "sizes": [
      "32B",
      "32C",
      "34B",
      "34C",
      "36C"
    ],
    "colors": [
      {
        "name": "Luna Noir",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bra-04-32b-noir",
        "productId": "prod-ling-bra-04",
        "sku": "VL-BRA-04-32B-LN",
        "size": "32B",
        "color": "Luna Noir",
        "colorHex": "#140812",
        "stockQuantity": 6
      },
      {
        "id": "v-bra-04-34b-noir",
        "productId": "prod-ling-bra-04",
        "sku": "VL-BRA-04-34B-LN",
        "size": "34B",
        "color": "Luna Noir",
        "colorHex": "#140812",
        "stockQuantity": 12
      },
      {
        "id": "v-bra-04-34c-noir",
        "productId": "prod-ling-bra-04",
        "sku": "VL-BRA-04-34C-LN",
        "size": "34C",
        "color": "Luna Noir",
        "colorHex": "#140812",
        "stockQuantity": 9
      }
    ]
  },
  {
    "id": "prod-ling-bra-05",
    "title": "Aria Sheer Illusion Geometric Mesh Bra",
    "slug": "aria-sheer-illusion-geometric-mesh-bra",
    "subtitle": "Unlined Architectural Mesh with Rose Gold Hardware",
    "description": "An airy, unlined underwire bra in soft mauve rose. Features architectural sheer embroidery across featherlight Italian mesh, framing natural curves with modern Parisian minimalism.",
    "story": "Pure featherweight luxury. Aria celebrates the unadorned female form with ethereal translucence.",
    "basePrice": 110,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bras",
    "images": [
      "/images/products/lingerie/bra-5.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bra-5.jpg",
    "rating": 4.89,
    "reviewCount": 26,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Sheer Bra",
      "Unlined",
      "Mesh Bra",
      "Modern Architecture"
    ],
    "sensoryFeel": "Weightless sheer tulle that feels nearly undetectable on the body.",
    "fabricCare": "Hand wash cold inside lingerie bag, air dry in shadow.",
    "safetyCertifications": [
      "OEKO-TEX Certified Italian Mesh",
      "Lead-Free Hardware"
    ],
    "materials": [
      "Italian Sheer Tulle",
      "Rose Gold Dipped Sliders"
    ],
    "sizes": [
      "32B",
      "34B",
      "34C",
      "36C"
    ],
    "colors": [
      {
        "name": "Mauve Rose",
        "hex": "#A85A62"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bra-05-32b-mve",
        "productId": "prod-ling-bra-05",
        "sku": "VL-BRA-05-32B-MV",
        "size": "32B",
        "color": "Mauve Rose",
        "colorHex": "#A85A62",
        "stockQuantity": 7
      },
      {
        "id": "v-bra-05-34b-mve",
        "productId": "prod-ling-bra-05",
        "sku": "VL-BRA-05-34B-MV",
        "size": "34B",
        "color": "Mauve Rose",
        "colorHex": "#A85A62",
        "stockQuantity": 14
      },
      {
        "id": "v-bra-05-34c-mve",
        "productId": "prod-ling-bra-05",
        "sku": "VL-BRA-05-34C-MV",
        "size": "34C",
        "color": "Mauve Rose",
        "colorHex": "#A85A62",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-pan-01",
    "title": "Céleste High-Waisted Plum Lace Brief",
    "slug": "celeste-high-waisted-plum-lace-brief",
    "subtitle": "Vintage Parisian Silhouette with Seamless Bonded Waist",
    "description": "High-rise briefs that celebrate retro glamour with contemporary ease. Crafted from sheer stretch floral lace with bonded waist hems for zero visible panty lines and a 100% organic bamboo cotton gusset.",
    "story": "Honoring golden-age vintage silhouettes, Céleste flatters natural waistlines with sheer luxury and effortless comfort.",
    "basePrice": 62,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Panties",
    "images": [
      "/images/products/lingerie/panty-1.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/panty-1.jpg",
    "rating": 4.87,
    "reviewCount": 38,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "High Waist",
      "Lace Brief",
      "Seamless Edge",
      "Sensual"
    ],
    "sensoryFeel": "Featherlight stretch lace that hugs curves gently without digging or rolling down.",
    "fabricCare": "Hand wash cold or delicate lingerie cycle.",
    "safetyCertifications": [
      "Organic Bamboo Cotton Lining",
      "OEKO-TEX Certified"
    ],
    "materials": [
      "Stretch French Lace",
      "Organic Bamboo Gusset"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Plum Velvet",
        "hex": "#2D1427"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-pan-01-s-plm",
        "productId": "prod-ling-pan-01",
        "sku": "VL-PAN-01-S-PL",
        "size": "S",
        "color": "Plum Velvet",
        "colorHex": "#2D1427",
        "stockQuantity": 18
      },
      {
        "id": "v-pan-01-m-plm",
        "productId": "prod-ling-pan-01",
        "sku": "VL-PAN-01-M-PL",
        "size": "M",
        "color": "Plum Velvet",
        "colorHex": "#2D1427",
        "stockQuantity": 14
      },
      {
        "id": "v-pan-01-l-plm",
        "productId": "prod-ling-pan-01",
        "sku": "VL-PAN-01-L-PL",
        "size": "L",
        "color": "Plum Velvet",
        "colorHex": "#2D1427",
        "stockQuantity": 9
      }
    ]
  },
  {
    "id": "prod-ling-pan-02",
    "title": "L'Amour Pure Silk French Cut Ribbon Knicker",
    "slug": "lamour-pure-silk-french-cut-ribbon-knicker",
    "subtitle": "100% 22 Momme Silk with Flutter Hem & Side Ties",
    "description": "An artisanal silk knicker cut on the bias to drape effortlessly over hips. Finished with flirty flutter leg openings, micro-elastic waistband, and delicate side ribbon ties.",
    "story": "Pure Parisian playfulness. Designed to pair with matching silk camisoles or worn during warm candlelit evenings.",
    "basePrice": 74,
    "discountPrice": 64,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Panties",
    "images": [
      "/images/products/lingerie/panty-2.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/panty-2.jpg",
    "rating": 4.93,
    "reviewCount": 27,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Silk Knicker",
      "French Cut",
      "Tie Side",
      "Mulberry Silk"
    ],
    "sensoryFeel": "Pure buttery fluid silk that skims thighs with total weightlessness.",
    "fabricCare": "100% 22 Momme Mulberry Silk. Hand wash cold with gentle silk detergent.",
    "safetyCertifications": [
      "Hypoallergenic Pure Silk",
      "OEKO-TEX Grade 6A"
    ],
    "materials": [
      "Mulberry Silk",
      "Silk Satin Ribbon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Soft Rose",
        "hex": "#C97A7E"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-pan-02-xs-rse",
        "productId": "prod-ling-pan-02",
        "sku": "VL-PAN-02-XS-RS",
        "size": "XS",
        "color": "Soft Rose",
        "colorHex": "#C97A7E",
        "stockQuantity": 7
      },
      {
        "id": "v-pan-02-s-rse",
        "productId": "prod-ling-pan-02",
        "sku": "VL-PAN-02-S-RS",
        "size": "S",
        "color": "Soft Rose",
        "colorHex": "#C97A7E",
        "stockQuantity": 15
      },
      {
        "id": "v-pan-02-m-rse",
        "productId": "prod-ling-pan-02",
        "sku": "VL-PAN-02-M-RS",
        "size": "M",
        "color": "Soft Rose",
        "colorHex": "#C97A7E",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-pan-03",
    "title": "Whisper Barely-There Illusion Tulle Thong",
    "slug": "whisper-barely-there-illusion-tulle-thong",
    "subtitle": "Minimalist String Thong with 18K Gold Micro-Rings",
    "description": "Minimalist sensuality defined. Super-fine Italian illusion tulle paired with an ultra-thin stretch cord waist and delicate 18K gold micro-rings. Virtually invisible under form-fitting evening wear.",
    "story": "Created for those who desire maximum invisibility with exquisite jewelry-like golden hardware.",
    "basePrice": 48,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Panties",
    "images": [
      "/images/products/lingerie/panty-3.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/panty-3.jpg",
    "rating": 4.85,
    "reviewCount": 45,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Thong",
      "Illusion Tulle",
      "Minimalist",
      "Invisible"
    ],
    "sensoryFeel": "Second-skin mesh that leaves no pressure marks and creates a completely seamless silhouette.",
    "fabricCare": "Hand wash cold in mild lather; lay flat on towel to dry.",
    "safetyCertifications": [
      "100% Breathable Cotton Gusset",
      "Lead-Free Gold Dipped Rings"
    ],
    "materials": [
      "Italian Illusion Tulle",
      "Gold-plated Micro Rings"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Noir",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-pan-03-s-nr",
        "productId": "prod-ling-pan-03",
        "sku": "VL-PAN-03-S-NR",
        "size": "S",
        "color": "Noir",
        "colorHex": "#140812",
        "stockQuantity": 20
      },
      {
        "id": "v-pan-03-m-nr",
        "productId": "prod-ling-pan-03",
        "sku": "VL-PAN-03-M-NR",
        "size": "M",
        "color": "Noir",
        "colorHex": "#140812",
        "stockQuantity": 16
      }
    ]
  },
  {
    "id": "prod-ling-pan-04",
    "title": "Étoile Scalloped Chantilly Lace Cheeky Boyshort",
    "slug": "etoile-scalloped-chantilly-lace-cheeky-boyshort",
    "subtitle": "Eyelash Floral Lace with Organic Bamboo Gusset",
    "description": "Soft, seductive French Chantilly lace boyshort in champagne ivory. Features scalloped eyelash floral lace edges that rest gently against the hips without digging in.",
    "story": "Combining relaxed coverage with Parisian romance, Étoile is the quintessential daily luxury undergarment.",
    "basePrice": 58,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Panties",
    "images": [
      "/images/products/lingerie/panty-4.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/panty-4.jpg",
    "rating": 4.9,
    "reviewCount": 32,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Boyshort",
      "Chantilly Lace",
      "Cheeky",
      "Ivory"
    ],
    "sensoryFeel": "Silky non-scratch stretch lace that feels like a whisper against skin.",
    "fabricCare": "Hand wash cold with gentle soap.",
    "safetyCertifications": [
      "OEKO-TEX Certified Lace",
      "Organic Bamboo Gusset"
    ],
    "materials": [
      "Chantilly Lace",
      "Bamboo Cotton"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Champagne Ivory",
        "hex": "#FDF9F8"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-pan-04-s-ivr",
        "productId": "prod-ling-pan-04",
        "sku": "VL-PAN-04-S-IV",
        "size": "S",
        "color": "Champagne Ivory",
        "colorHex": "#FDF9F8",
        "stockQuantity": 14
      },
      {
        "id": "v-pan-04-m-ivr",
        "productId": "prod-ling-pan-04",
        "sku": "VL-PAN-04-M-IV",
        "size": "M",
        "color": "Champagne Ivory",
        "colorHex": "#FDF9F8",
        "stockQuantity": 12
      }
    ]
  },
  {
    "id": "prod-ling-pan-05",
    "title": "Siren Multi-Strap Cutout Satin Thong",
    "slug": "siren-multi-strap-cutout-satin-thong",
    "subtitle": "Deep Plum Silk Satin with 24K Dipped Hardware",
    "description": "Intriguing architectural multi-strap hip architecture crafted from liquid duchess satin. Finished with 24K gold dipped ring adjusters that accentuate hip lines.",
    "story": "Bold, seductive, and sculpted for lovers of dramatic lingerie styling.",
    "basePrice": 54,
    "discountPrice": 46,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Panties",
    "images": [
      "/images/products/lingerie/panty-5.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/panty-5.jpg",
    "rating": 4.92,
    "reviewCount": 39,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Strappy Thong",
      "Cutout",
      "Silk Satin",
      "Gold Rings"
    ],
    "sensoryFeel": "Smooth stretch satin with adjustable tension for personalized hip comfort.",
    "fabricCare": "Hand wash cold, air dry.",
    "safetyCertifications": [
      "Nickel-free Gold Hardware",
      "100% Cotton Gusset"
    ],
    "materials": [
      "Duchess Satin",
      "Gold-plated Rings"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Royal Plum",
        "hex": "#2D1427"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-pan-05-s-plm",
        "productId": "prod-ling-pan-05",
        "sku": "VL-PAN-05-S-PL",
        "size": "S",
        "color": "Royal Plum",
        "colorHex": "#2D1427",
        "stockQuantity": 16
      },
      {
        "id": "v-pan-05-m-plm",
        "productId": "prod-ling-pan-05",
        "sku": "VL-PAN-05-M-PL",
        "size": "M",
        "color": "Royal Plum",
        "colorHex": "#2D1427",
        "stockQuantity": 11
      }
    ]
  },
  {
    "id": "prod-ling-bod-01",
    "title": "Veloura Plum & French Chantilly Lace Bodysuit",
    "slug": "veloura-plum-chantilly-lace-bodysuit",
    "subtitle": "Pure Mulberry Silk & Parisian Lace with Pearl Buttons",
    "description": "An alluring high-neck bodysuit meticulously tailored with French Chantilly lace panels and pure mulberry silk inserts. Features vintage-inspired front pearl buttons and a flattering underwire silhouette.",
    "story": "Designed in our Paris atelier, this piece celebrates vintage corsetry lines and fluid contemporary silk drape.",
    "basePrice": 185,
    "discountPrice": 165,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bodysuits",
    "images": [
      "/images/products/lingerie/bodysuit-1.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bodysuit-1.jpg",
    "rating": 4.98,
    "reviewCount": 38,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Silk",
      "Lace",
      "Bodysuit",
      "Couture",
      "Pearl Buttons"
    ],
    "sensoryFeel": "Featherlight silk against the skin with delicately soft, non-scratch scalloped lace embroidery.",
    "fabricCare": "92% Mulberry Silk, 8% Elastane with 100% French Chantilly lace. Hand wash cold.",
    "safetyCertifications": [
      "OEKO-TEX Standard 100 Certified",
      "Hypoallergenic Silk Thread",
      "Nickel-free Hardware"
    ],
    "materials": [
      "Silk",
      "Lace",
      "Freshwater Pearls"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Plum Noir & Blush",
        "hex": "#2D1427"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bod-01-s-plm",
        "productId": "prod-ling-bod-01",
        "sku": "VL-BOD-01-S-PL",
        "size": "S",
        "color": "Plum Noir & Blush",
        "colorHex": "#2D1427",
        "stockQuantity": 9
      },
      {
        "id": "v-bod-01-m-plm",
        "productId": "prod-ling-bod-01",
        "sku": "VL-BOD-01-M-PL",
        "size": "M",
        "color": "Plum Noir & Blush",
        "colorHex": "#2D1427",
        "stockQuantity": 14
      },
      {
        "id": "v-bod-01-l-plm",
        "productId": "prod-ling-bod-01",
        "sku": "VL-BOD-01-L-PL",
        "size": "L",
        "color": "Plum Noir & Blush",
        "colorHex": "#2D1427",
        "stockQuantity": 6
      }
    ]
  },
  {
    "id": "prod-ling-bod-02",
    "title": "Isolde Backless Velvet & Corded Lace Halter Bodysuit",
    "slug": "isolde-backless-velvet-corded-lace-halter-bodysuit",
    "subtitle": "Plunging Low Back with Crushed Silk Velvet Silhouette",
    "description": "A striking fusion of crushed stretch velvet and corded French floral lace. Showcases a dramatic plunging backline, halter hook neckband, and a snap gusset closure for effortless wear.",
    "story": "From seductive private rendezvous to sleek high-waisted evening trouser ensembles, Isolde commands attention.",
    "basePrice": 195,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bodysuits",
    "images": [
      "/images/products/lingerie/bodysuit-2.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bodysuit-2.jpg",
    "rating": 4.96,
    "reviewCount": 31,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Backless Bodysuit",
      "Velvet",
      "Halter",
      "Evening Wear"
    ],
    "sensoryFeel": "Opulent plush velvet texture balanced by open skin breathe and delicate scalloped lace edge.",
    "fabricCare": "Dry clean recommended or hand wash cold gently.",
    "safetyCertifications": [
      "OEKO-TEX Certified",
      "Nickel-free Snaps"
    ],
    "materials": [
      "Crushed Silk Velvet",
      "Corded French Lace"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Midnight Plum",
        "hex": "#240D20"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bod-02-s-plm",
        "productId": "prod-ling-bod-02",
        "sku": "VL-BOD-02-S-PL",
        "size": "S",
        "color": "Midnight Plum",
        "colorHex": "#240D20",
        "stockQuantity": 11
      },
      {
        "id": "v-bod-02-m-plm",
        "productId": "prod-ling-bod-02",
        "sku": "VL-BOD-02-M-PL",
        "size": "M",
        "color": "Midnight Plum",
        "colorHex": "#240D20",
        "stockQuantity": 9
      }
    ]
  },
  {
    "id": "prod-ling-bod-03",
    "title": "Geneviève Sheer Tattoo Floral Long-Sleeve Bodysuit",
    "slug": "genevieve-sheer-tattoo-floral-long-sleeve-bodysuit",
    "subtitle": "Second-Skin Botanical Embroidery on Italian Mesh",
    "description": "Designed to create the visual poetry of botanical ink resting upon bare skin. Featuring tailored high-neck silhouette, invisible rear zipper, and contouring panel work that sculpts the waistline.",
    "story": "Hand-sketched botanical embroidery patterns developed over six months in our atelier, translating fine art onto wearable couture.",
    "basePrice": 210,
    "discountPrice": 185,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bodysuits",
    "images": [
      "/images/products/lingerie/bodysuit-3.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bodysuit-3.jpg",
    "rating": 4.92,
    "reviewCount": 22,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Long Sleeve Bodysuit",
      "Tattoo Lace",
      "High Neck",
      "Couture"
    ],
    "sensoryFeel": "Silken ultra-elastic tulle that feels like a natural second epidermis with velvety embroidery.",
    "fabricCare": "Hand wash cold inside out, lay flat to dry in shadow.",
    "safetyCertifications": [
      "OEKO-TEX Certified Italian Mesh",
      "Hypoallergenic Thread"
    ],
    "materials": [
      "Italian Stretch Mesh",
      "Cotton-Viscose Embroidery"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Tattoo Noir",
        "hex": "#190E18"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bod-03-s-tn",
        "productId": "prod-ling-bod-03",
        "sku": "VL-BOD-03-S-TN",
        "size": "S",
        "color": "Tattoo Noir",
        "colorHex": "#190E18",
        "stockQuantity": 8
      },
      {
        "id": "v-bod-03-m-tn",
        "productId": "prod-ling-bod-03",
        "sku": "VL-BOD-03-M-TN",
        "size": "M",
        "color": "Tattoo Noir",
        "colorHex": "#190E18",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-bod-04",
    "title": "Chérie Plunge Strappy Silk Satin Bodysuit",
    "slug": "cherie-plunge-strappy-silk-satin-bodysuit",
    "subtitle": "Criss-Cross Strappy Back with Gold Swan Clasp",
    "description": "A sumptuous champagne silk satin bodysuit with plunging neckline and criss-cross strappy architectural backline. Accented with 18K gold ring adjusters and snap gusset closure.",
    "story": "Seamlessly elegant for bedroom romance or layered beneath tailored trousers.",
    "basePrice": 175,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bodysuits",
    "images": [
      "/images/products/lingerie/bodysuit-4.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bodysuit-4.jpg",
    "rating": 4.91,
    "reviewCount": 29,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Silk Bodysuit",
      "Strappy Back",
      "Champagne",
      "Luxury"
    ],
    "sensoryFeel": "Heavy fluid 22 Momme silk that slides like liquid across skin.",
    "fabricCare": "Hand wash cold with silk detergent.",
    "safetyCertifications": [
      "OEKO-TEX Grade 6A Silk"
    ],
    "materials": [
      "Mulberry Silk Satin",
      "Gold Hardware"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Champagne Satin",
        "hex": "#F4E8D0"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bod-04-s-chm",
        "productId": "prod-ling-bod-04",
        "sku": "VL-BOD-04-S-CH",
        "size": "S",
        "color": "Champagne Satin",
        "colorHex": "#F4E8D0",
        "stockQuantity": 12
      },
      {
        "id": "v-bod-04-m-chm",
        "productId": "prod-ling-bod-04",
        "sku": "VL-BOD-04-M-CH",
        "size": "M",
        "color": "Champagne Satin",
        "colorHex": "#F4E8D0",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-bod-05",
    "title": "Spectre Architectural High-Leg Mesh Bodysuit",
    "slug": "spectre-architectural-high-leg-mesh-bodysuit",
    "subtitle": "High-Neck Silhouette with Contoured Velvet Lines",
    "description": "Sculpted from breathable Italian power mesh in onyx noir with geometric black velvet contour ribbons that accentuate waist and bust proportions.",
    "story": "Futuristic sensuality meets haute lingerie. Spectre defines the modern avant-garde aesthetic.",
    "basePrice": 168,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Bodysuits",
    "images": [
      "/images/products/lingerie/bodysuit-5.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/bodysuit-5.jpg",
    "rating": 4.94,
    "reviewCount": 35,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "High-Leg",
      "Velvet Trim",
      "Mesh Bodysuit",
      "Avant-Garde"
    ],
    "sensoryFeel": "Cool breathable mesh with plush raised velvet piping.",
    "fabricCare": "Hand wash cold, line dry.",
    "safetyCertifications": [
      "Hypoallergenic Mesh",
      "OEKO-TEX Certified"
    ],
    "materials": [
      "Power Mesh",
      "Silk Velvet Piping"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Onyx Noir",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bod-05-s-onx",
        "productId": "prod-ling-bod-05",
        "sku": "VL-BOD-05-S-OX",
        "size": "S",
        "color": "Onyx Noir",
        "colorHex": "#140812",
        "stockQuantity": 9
      },
      {
        "id": "v-bod-05-m-onx",
        "productId": "prod-ling-bod-05",
        "sku": "VL-BOD-05-M-OX",
        "size": "M",
        "color": "Onyx Noir",
        "colorHex": "#140812",
        "stockQuantity": 8
      }
    ]
  },
  {
    "id": "prod-ling-bab-01",
    "title": "Aura Mulberry Silk Slip Babydoll & Whisper Thong",
    "slug": "aura-mulberry-silk-slip-babydoll-whisper-thong",
    "subtitle": "22 Momme Silk with Scalloped Eyelash Lace Cups",
    "description": "An ethereal nightwear ensemble cut on the bias from heavyweight 22 Momme champagne mulberry silk. Features micro-adjustable spaghetti straps, delicate French eyelash lace trim, and matching silk thong.",
    "story": "Sensual minimalism meets effortless bedroom luxury. Fluid silk glides softly with every movement.",
    "basePrice": 168,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Babydolls",
    "images": [
      "/images/products/lingerie/babydoll-1.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/babydoll-1.jpg",
    "rating": 4.98,
    "reviewCount": 42,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Silk",
      "Babydoll",
      "Lingerie",
      "Lace",
      "Nightgown"
    ],
    "sensoryFeel": "Pure fluid cooling silk with zero friction, enhancing natural skin radiance.",
    "fabricCare": "100% Grade 6A Mulberry Silk. Hand wash cold with pH-neutral silk soap.",
    "safetyCertifications": [
      "OEKO-TEX Certified Grade 6A",
      "Non-toxic Plant Dyes"
    ],
    "materials": [
      "Mulberry Silk",
      "Eyelash Lace"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Champagne Silk",
        "hex": "#F4E8D0"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bab-01-s-chm",
        "productId": "prod-ling-bab-01",
        "sku": "VL-BAB-01-S-CH",
        "size": "S",
        "color": "Champagne Silk",
        "colorHex": "#F4E8D0",
        "stockQuantity": 12
      },
      {
        "id": "v-bab-01-m-chm",
        "productId": "prod-ling-bab-01",
        "sku": "VL-BAB-01-M-CH",
        "size": "M",
        "color": "Champagne Silk",
        "colorHex": "#F4E8D0",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-bab-02",
    "title": "Vivienne Pleated Silk Chiffon Sunburst Babydoll",
    "slug": "vivienne-pleated-silk-chiffon-sunburst-babydoll",
    "subtitle": "Airy Accordion Pleats in Vintage Dusty Rose",
    "description": "A breathtaking boudoir piece with empire bustline and gossamer sunburst accordion pleats in vintage dusty rose silk chiffon. Floats lightly around the silhouette.",
    "story": "Pure cinematic romance. Vivienne cascades around the silhouette with mesmerizing fluid grace.",
    "basePrice": 220,
    "discountPrice": 195,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Babydolls",
    "images": [
      "/images/products/lingerie/babydoll-2.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/babydoll-2.jpg",
    "rating": 4.96,
    "reviewCount": 39,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Babydoll",
      "Silk Chiffon",
      "Pleated",
      "Boudoir"
    ],
    "sensoryFeel": "Whisper-light billow of pure silk chiffon that floats with every breath.",
    "fabricCare": "100% Pure Mulberry Silk Chiffon. Dry clean only.",
    "safetyCertifications": [
      "OEKO-TEX Certified Grade 6A Silk"
    ],
    "materials": [
      "Silk Chiffon",
      "Mulberry Silk Satin"
    ],
    "sizes": [
      "XS/S",
      "M/L"
    ],
    "colors": [
      {
        "name": "Dusty Rose",
        "hex": "#DDA5AA"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bab-02-xs-rs",
        "productId": "prod-ling-bab-02",
        "sku": "VL-BAB-02-XS-RS",
        "size": "XS/S",
        "color": "Dusty Rose",
        "colorHex": "#DDA5AA",
        "stockQuantity": 8
      },
      {
        "id": "v-bab-02-ml-rs",
        "productId": "prod-ling-bab-02",
        "sku": "VL-BAB-02-ML-RS",
        "size": "M/L",
        "color": "Dusty Rose",
        "colorHex": "#DDA5AA",
        "stockQuantity": 12
      }
    ]
  },
  {
    "id": "prod-ling-bab-03",
    "title": "Margaux Open-Front Sheer Flyaway Babydoll",
    "slug": "margaux-open-front-sheer-flyaway-babydoll",
    "subtitle": "French Lace Cups with Dramatic Front Ribbon Ties",
    "description": "Enticing open-front drape that reveals matching lingerie beneath. Features molded eyelash lace bralette cups, adjustable satin shoulder ties, and an airy flare cut.",
    "story": "Designed to tease and tantalize, Margaux combines soft innocence with unapologetic sensual drama.",
    "basePrice": 145,
    "discountPrice": 125,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Babydolls",
    "images": [
      "/images/products/lingerie/babydoll-3.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/babydoll-3.jpg",
    "rating": 4.89,
    "reviewCount": 33,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Flyaway Babydoll",
      "Eyelash Lace",
      "Open Front",
      "Sensual"
    ],
    "sensoryFeel": "Airy sheer body with velvety soft lace cups and smooth satin bow closures.",
    "fabricCare": "Hand wash cold with gentle soap, dry flat in towel.",
    "safetyCertifications": [
      "OEKO-TEX Certified Fabrics",
      "Nickel-free Ring Sliders"
    ],
    "materials": [
      "French Eyelash Lace",
      "Sheer Mesh",
      "Satin Ribbons"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Crimson Plum",
        "hex": "#401127"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bab-03-s-plm",
        "productId": "prod-ling-bab-03",
        "sku": "VL-BAB-03-S-PL",
        "size": "S",
        "color": "Crimson Plum",
        "colorHex": "#401127",
        "stockQuantity": 14
      },
      {
        "id": "v-bab-03-m-plm",
        "productId": "prod-ling-bab-03",
        "sku": "VL-BAB-03-M-PL",
        "size": "M",
        "color": "Crimson Plum",
        "colorHex": "#401127",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-bab-04",
    "title": "Colette Velvet Trim Empire Waist Silk Chemise",
    "slug": "colette-velvet-trim-empire-waist-silk-chemise",
    "subtitle": "Crushed Velvet Bustline with Scalloped Hemline Lace",
    "description": "A luxurious dusty rose silk slip nightgown accented with a plush crushed velvet bust cups and antique French lace at the hem. Perfect for serene evenings.",
    "story": "Inspired by early 20th-century Parisian salon loungewear.",
    "basePrice": 178,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Babydolls",
    "images": [
      "/images/products/lingerie/babydoll-4.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/babydoll-4.jpg",
    "rating": 4.93,
    "reviewCount": 28,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Velvet Chemise",
      "Empire Waist",
      "Silk Slip",
      "Rose"
    ],
    "sensoryFeel": "Buttery smooth silk with velvety warmth across the décolletage.",
    "fabricCare": "Hand wash cold or dry clean.",
    "safetyCertifications": [
      "OEKO-TEX Certified Silk & Velvet"
    ],
    "materials": [
      "Mulberry Silk",
      "Crushed Velvet",
      "Chantilly Lace"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Dusty Rose & Velvet",
        "hex": "#C97A7E"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bab-04-s-rse",
        "productId": "prod-ling-bab-04",
        "sku": "VL-BAB-04-S-RS",
        "size": "S",
        "color": "Dusty Rose & Velvet",
        "colorHex": "#C97A7E",
        "stockQuantity": 9
      },
      {
        "id": "v-bab-04-m-rse",
        "productId": "prod-ling-bab-04",
        "sku": "VL-BAB-04-M-RS",
        "size": "M",
        "color": "Dusty Rose & Velvet",
        "colorHex": "#C97A7E",
        "stockQuantity": 11
      }
    ]
  },
  {
    "id": "prod-ling-bab-05",
    "title": "Nocturne Tiered Lace Halter Babydoll",
    "slug": "nocturne-tiered-lace-halter-babydoll",
    "subtitle": "Gossamer Tiered Ruffled Lace with Satin Neck Bow",
    "description": "Drama meets elegance. Designed in tiers of sheer black Chantilly lace with an open backline framed by an opulent satin ribbon halter bow.",
    "story": "A showstopping boudoir statement crafted for unforgettable nights.",
    "basePrice": 155,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Babydolls",
    "images": [
      "/images/products/lingerie/babydoll-5.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/babydoll-5.jpg",
    "rating": 4.91,
    "reviewCount": 37,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Tiered Babydoll",
      "Halter Bow",
      "Black Lace",
      "Dramatic"
    ],
    "sensoryFeel": "Airy ruffled lace that swirls effortlessly around the body.",
    "fabricCare": "Hand wash cold with gentle soap.",
    "safetyCertifications": [
      "OEKO-TEX Certified"
    ],
    "materials": [
      "Chantilly Lace",
      "Satin Ribbon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Noir Onyx",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-bab-05-s-onx",
        "productId": "prod-ling-bab-05",
        "sku": "VL-BAB-05-S-OX",
        "size": "S",
        "color": "Noir Onyx",
        "colorHex": "#140812",
        "stockQuantity": 13
      },
      {
        "id": "v-bab-05-m-onx",
        "productId": "prod-ling-bab-05",
        "sku": "VL-BAB-05-M-OX",
        "size": "M",
        "color": "Noir Onyx",
        "colorHex": "#140812",
        "stockQuantity": 9
      }
    ]
  },
  {
    "id": "prod-ling-cor-01",
    "title": "Aurélia Boned Silk Brocade Underbust Corset",
    "slug": "aurelia-boned-silk-brocade-underbust-corset",
    "subtitle": "Spiral Steel Boning with Hand-Woven Floral Jacquard",
    "description": "Authentic waist-cinching heritage craftsmanship engineered for sublime posture and hourglass contours. Structured with 14 flexible spiral steel bones, front busk closure, and double-faced satin lacing at the spine.",
    "story": "A tribute to classical French corset-making ateliers, reimagined with flexible steel that moves organically with the body.",
    "basePrice": 225,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Corsets",
    "images": [
      "/images/products/lingerie/corset-1.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/corset-1.jpg",
    "rating": 4.97,
    "reviewCount": 46,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Underbust Corset",
      "Steel Boned",
      "Silk Jacquard",
      "Waist Cincher"
    ],
    "sensoryFeel": "Firm structural hug with supple internal cotton twill lining for comfortable breathability.",
    "fabricCare": "Spot clean or professional dry clean only. Do not machine wash.",
    "safetyCertifications": [
      "Flexible Medical Spiral Steel",
      "OEKO-TEX Certified Cotton Coutil"
    ],
    "materials": [
      "Silk Jacquard",
      "Cotton Coutil Lining",
      "Spiral Steel Bones"
    ],
    "sizes": [
      "22 in (XS)",
      "24 in (S)",
      "26 in (M)",
      "28 in (L)",
      "30 in (XL)"
    ],
    "colors": [
      {
        "name": "Champagne Gold Jacquard",
        "hex": "#C5A059"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-cor-01-22-gld",
        "productId": "prod-ling-cor-01",
        "sku": "VL-COR-01-22-GL",
        "size": "22 in (XS)",
        "color": "Champagne Gold Jacquard",
        "colorHex": "#C5A059",
        "stockQuantity": 5
      },
      {
        "id": "v-cor-01-24-gld",
        "productId": "prod-ling-cor-01",
        "sku": "VL-COR-01-24-GL",
        "size": "24 in (S)",
        "color": "Champagne Gold Jacquard",
        "colorHex": "#C5A059",
        "stockQuantity": 9
      },
      {
        "id": "v-cor-01-26-gld",
        "productId": "prod-ling-cor-01",
        "sku": "VL-COR-01-26-GL",
        "size": "26 in (M)",
        "color": "Champagne Gold Jacquard",
        "colorHex": "#C5A059",
        "stockQuantity": 11
      }
    ]
  },
  {
    "id": "prod-ling-cor-02",
    "title": "Delphine Duchess Satin Overbust Corset with Garters",
    "slug": "delphine-duchess-satin-overbust-corset-garters",
    "subtitle": "Sweetheart Neckline with 6 Detachable Garter Suspender Clasps",
    "description": "An iconic couture statement piece. Sculpted from heavyweight plum duchess satin with supportive internal boning, molded sweetheart neckline cups, and 6 detachable adjustable garter attachments.",
    "story": "Delphine embodies uncompromising luxury. Wear it as breathtaking boudoir couture or paired with a tuxedo blazer.",
    "basePrice": 255,
    "discountPrice": 220,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Corsets",
    "images": [
      "/images/products/lingerie/corset-2.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/corset-2.jpg",
    "rating": 4.94,
    "reviewCount": 37,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Overbust Corset",
      "Duchess Satin",
      "Garters Included",
      "Couture"
    ],
    "sensoryFeel": "Gleaming heavy silk satin that molds with regal firmness around the ribs and bust.",
    "fabricCare": "Professional dry clean only. Store flat or hung on padded hangers.",
    "safetyCertifications": [
      "OEKO-TEX Certified Satin",
      "Cast-metal Garter Grips"
    ],
    "materials": [
      "Duchess Satin",
      "Spiral Boning",
      "Metal Suspender Clips"
    ],
    "sizes": [
      "32B/C",
      "34B/C",
      "36C/D",
      "38C/D"
    ],
    "colors": [
      {
        "name": "Royal Plum",
        "hex": "#32122B"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-cor-02-32-plm",
        "productId": "prod-ling-cor-02",
        "sku": "VL-COR-02-32-PL",
        "size": "32B/C",
        "color": "Royal Plum",
        "colorHex": "#32122B",
        "stockQuantity": 6
      },
      {
        "id": "v-cor-02-34-plm",
        "productId": "prod-ling-cor-02",
        "sku": "VL-COR-02-34-PL",
        "size": "34B/C",
        "color": "Royal Plum",
        "colorHex": "#32122B",
        "stockQuantity": 10
      },
      {
        "id": "v-cor-02-36-plm",
        "productId": "prod-ling-cor-02",
        "sku": "VL-COR-02-36-PL",
        "size": "36C/D",
        "color": "Royal Plum",
        "colorHex": "#32122B",
        "stockQuantity": 8
      }
    ]
  },
  {
    "id": "prod-ling-cor-03",
    "title": "Serpentine Sheer Mesh Waist Cincher Corset",
    "slug": "serpentine-sheer-mesh-waist-cincher-corset",
    "subtitle": "Breathable Tension Mesh with Cushioned Velvet Boning",
    "description": "Modern waist-slimming architecture crafted from breathable high-tension power mesh. Velvet bone channels cushion against the body while delivering a firm, flattering contour under dresses or worn provocatively solo.",
    "story": "Engineered for the contemporary wardrobe, bringing historic wasp-waist proportions into featherlight modern ergonomics.",
    "basePrice": 155,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Corsets",
    "images": [
      "/images/products/lingerie/corset-3.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/corset-3.jpg",
    "rating": 4.86,
    "reviewCount": 28,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Waist Cincher",
      "Power Mesh",
      "Velvet Trim",
      "Modern Corsetry"
    ],
    "sensoryFeel": "Breathable tension mesh that cools the skin while providing confident, firm midsection sculpting.",
    "fabricCare": "Hand wash cold with gentle detergent, lay flat to dry away from sunlight.",
    "safetyCertifications": [
      "Latex-free Power Mesh",
      "OEKO-TEX Certified"
    ],
    "materials": [
      "High-Tension Mesh",
      "Crushed Velvet Trim",
      "Spring Steel Bones"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Onyx Night",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-cor-03-s-onx",
        "productId": "prod-ling-cor-03",
        "sku": "VL-COR-03-S-OX",
        "size": "S",
        "color": "Onyx Night",
        "colorHex": "#140812",
        "stockQuantity": 13
      },
      {
        "id": "v-cor-03-m-onx",
        "productId": "prod-ling-cor-03",
        "sku": "VL-COR-03-M-OX",
        "size": "M",
        "color": "Onyx Night",
        "colorHex": "#140812",
        "stockQuantity": 9
      }
    ]
  },
  {
    "id": "prod-ling-cor-04",
    "title": "Rosalie Victorian Floral Embroidered Lace-Up Corset",
    "slug": "rosalie-victorian-floral-embroidered-lace-up-corset",
    "subtitle": "Heritage Steel Boning with Delicate Satin Ribbon Spinal Lacing",
    "description": "A romantic masterpiece in ivory and blush rose floral threadwork. Features molded sweetheart bustline, steel front busk, and delicate satin ribbon lace-up back.",
    "story": "Crafted for timeless romance and romantic bedroom portraits.",
    "basePrice": 240,
    "discountPrice": 210,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Corsets",
    "images": [
      "/images/products/lingerie/corset-4.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/corset-4.jpg",
    "rating": 4.95,
    "reviewCount": 34,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Victorian Corset",
      "Lace-Up",
      "Floral Embroidery",
      "Rose Blush"
    ],
    "sensoryFeel": "Firm ergonomic posture support with soft breathable cotton lining.",
    "fabricCare": "Dry clean only.",
    "safetyCertifications": [
      "OEKO-TEX Certified",
      "Medical Grade Steel Bones"
    ],
    "materials": [
      "French Lace",
      "Satin Lacing",
      "Spiral Steel Bones"
    ],
    "sizes": [
      "22 in (XS)",
      "24 in (S)",
      "26 in (M)",
      "28 in (L)"
    ],
    "colors": [
      {
        "name": "Blush Rose & Ivory",
        "hex": "#E5C0C4"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-cor-04-24-rse",
        "productId": "prod-ling-cor-04",
        "sku": "VL-COR-04-24-RS",
        "size": "24 in (S)",
        "color": "Blush Rose & Ivory",
        "colorHex": "#E5C0C4",
        "stockQuantity": 8
      },
      {
        "id": "v-cor-04-26-rse",
        "productId": "prod-ling-cor-04",
        "sku": "VL-COR-04-26-RS",
        "size": "26 in (M)",
        "color": "Blush Rose & Ivory",
        "colorHex": "#E5C0C4",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-cor-05",
    "title": "Reine Velvet Boned Bustier Corset Top",
    "slug": "reine-velvet-boned-bustier-corset-top",
    "subtitle": "Sweetheart Neckline with Exposed Gold Zipper Back",
    "description": "Sculpted in rich black velvet with supportive boning channels and exposed gold zipper. Balances historic corsetry shape with sleek evening wear versatility.",
    "story": "Wear it solo for sultry evenings or styled with a tailored evening blazer.",
    "basePrice": 185,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Corsets",
    "images": [
      "/images/products/lingerie/corset-5.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/corset-5.jpg",
    "rating": 4.9,
    "reviewCount": 41,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Velvet Bustier",
      "Corset Top",
      "Boning",
      "Sweetheart"
    ],
    "sensoryFeel": "Plush velvet that feels divine against bare skin with confident contour hold.",
    "fabricCare": "Professional dry clean.",
    "safetyCertifications": [
      "OEKO-TEX Certified Velvet"
    ],
    "materials": [
      "Silk Velvet",
      "Gold Zipper",
      "Steel Boning"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Black Velvet",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-cor-05-s-blk",
        "productId": "prod-ling-cor-05",
        "sku": "VL-COR-05-S-BK",
        "size": "S",
        "color": "Black Velvet",
        "colorHex": "#140812",
        "stockQuantity": 12
      },
      {
        "id": "v-cor-05-m-blk",
        "productId": "prod-ling-cor-05",
        "sku": "VL-COR-05-M-BK",
        "size": "M",
        "color": "Black Velvet",
        "colorHex": "#140812",
        "stockQuantity": 11
      }
    ]
  },
  {
    "id": "prod-ling-shp-01",
    "title": "Sculpt & Grace Seamless High-Waisted Thigh Shaper",
    "slug": "sculpt-and-grace-seamless-high-waisted-thigh-shaper",
    "subtitle": "Targeted Graduated Compression & Anti-Roll Silicone Hem",
    "description": "Luxury sculpting re-imagined for all-day comfort. Features targeted graduated compression panels that smooth the tummy and thighs without pinching, finished with silk-soft microfiber and non-slip waist grip.",
    "story": "No rolling, no chafing, no suffocating squeeze. Sculpt & Grace delivers invisible silhouette enhancement under silk slips and sheath gowns.",
    "basePrice": 88,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Shapewear",
    "images": [
      "/images/products/lingerie/shapewear-1.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/shapewear-1.jpg",
    "rating": 4.95,
    "reviewCount": 63,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "High Waist Shaper",
      "Thigh Shaper",
      "Seamless",
      "Targeted Compression"
    ],
    "sensoryFeel": "Silky microfiber that glides seamlessly under clothes with an invisible flat-seam feel.",
    "fabricCare": "Machine wash delicate cold in mesh bag, air dry flat.",
    "safetyCertifications": [
      "Medical-Grade Grip Silicone",
      "Hypoallergenic Bamboo Gusset"
    ],
    "materials": [
      "Seamless Microfiber",
      "Stay-Put Silicone Ribbons"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "colors": [
      {
        "name": "Nude Sand",
        "hex": "#E4D0C5"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-shp-01-s-snd",
        "productId": "prod-ling-shp-01",
        "sku": "VL-SHP-01-S-SD",
        "size": "S",
        "color": "Nude Sand",
        "colorHex": "#E4D0C5",
        "stockQuantity": 22
      },
      {
        "id": "v-shp-01-m-snd",
        "productId": "prod-ling-shp-01",
        "sku": "VL-SHP-01-M-SD",
        "size": "M",
        "color": "Nude Sand",
        "colorHex": "#E4D0C5",
        "stockQuantity": 18
      },
      {
        "id": "v-shp-01-l-snd",
        "productId": "prod-ling-shp-01",
        "sku": "VL-SHP-01-L-SD",
        "size": "L",
        "color": "Nude Sand",
        "colorHex": "#E4D0C5",
        "stockQuantity": 15
      }
    ]
  },
  {
    "id": "prod-ling-shp-02",
    "title": "Silhouette Perfection Backless Open-Bust Shaper Slip",
    "slug": "silhouette-perfection-backless-open-bust-shaper-slip",
    "subtitle": "Wear-Your-Own-Bra Full Body Smoothing Undergarment",
    "description": "Engineered specifically to accompany gala gowns and evening wear. Low-back U-scoop enables deep backlines while the open-bust design lets you pair your favorite Veloura bra, sculpting the midriff and hips effortlessly.",
    "story": "Red carpet architecture for the discerning woman. Gives garments a fluid, ripple-free drape with total freedom of cup choice.",
    "basePrice": 115,
    "discountPrice": 98,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Shapewear",
    "images": [
      "/images/products/lingerie/shapewear-2.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/shapewear-2.jpg",
    "rating": 4.89,
    "reviewCount": 35,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Shaper Slip",
      "Open Bust",
      "Backless",
      "Evening Shapewear"
    ],
    "sensoryFeel": "Featherlight satin compression that sculpts waist and hips while staying completely cool.",
    "fabricCare": "Hand wash cold or gentle machine cycle, lay flat to dry.",
    "safetyCertifications": [
      "OEKO-TEX Certified Elastic Microfiber",
      "Anti-Static Coating"
    ],
    "materials": [
      "Cooling Nylon Elastane",
      "Bonded Edge Trims"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Cashmere Blush",
        "hex": "#F0D8D4"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-shp-02-s-blsh",
        "productId": "prod-ling-shp-02",
        "sku": "VL-SHP-02-S-BL",
        "size": "S",
        "color": "Cashmere Blush",
        "colorHex": "#F0D8D4",
        "stockQuantity": 14
      },
      {
        "id": "v-shp-02-m-blsh",
        "productId": "prod-ling-shp-02",
        "sku": "VL-SHP-02-M-BL",
        "size": "M",
        "color": "Cashmere Blush",
        "colorHex": "#F0D8D4",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-ling-shp-03",
    "title": "Empress Firm Control Waist-Sculpting Bodysuit",
    "slug": "empress-firm-control-waist-sculpting-bodysuit",
    "subtitle": "Bonded Abdomen Compression Panels & Wireless Contour Cups",
    "description": "Full-body sculpting perfection in onyx black. Features bonded multi-zone compression panels that lift the bust, contour the waistline, and smooth thighs with non-chafing bonded leg hems.",
    "story": "The gold standard in luxury shapewear, providing 360-degree smoothing with breathable microfiber.",
    "basePrice": 128,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Shapewear",
    "images": [
      "/images/products/lingerie/shapewear-3.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/shapewear-3.jpg",
    "rating": 4.96,
    "reviewCount": 52,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Sculpting Bodysuit",
      "Firm Control",
      "Black Shapewear",
      "Full Body"
    ],
    "sensoryFeel": "Firm yet ultra-flexible compression that breathes easily all evening.",
    "fabricCare": "Machine wash cold delicate, air dry.",
    "safetyCertifications": [
      "OEKO-TEX Standard 100",
      "Breathable Cotton Gusset"
    ],
    "materials": [
      "Bonded Compression Microfiber",
      "Stay-Flat Seams"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "colors": [
      {
        "name": "Onyx Noir",
        "hex": "#140812"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-shp-03-s-onx",
        "productId": "prod-ling-shp-03",
        "sku": "VL-SHP-03-S-OX",
        "size": "S",
        "color": "Onyx Noir",
        "colorHex": "#140812",
        "stockQuantity": 18
      },
      {
        "id": "v-shp-03-m-onx",
        "productId": "prod-ling-shp-03",
        "sku": "VL-SHP-03-M-OX",
        "size": "M",
        "color": "Onyx Noir",
        "colorHex": "#140812",
        "stockQuantity": 15
      }
    ]
  },
  {
    "id": "prod-ling-shp-04",
    "title": "Hourglass Tummy-Control High-Rise Sculpting Brief",
    "slug": "hourglass-tummy-control-high-rise-sculpting-brief",
    "subtitle": "Double-Layer Reinforced Core with Laser-Cut Seamless Edges",
    "description": "Designed specifically to target the lower abdomen and waist. Constructed with a double-layered high-tension core panel and laser-cut bonded leg edges that stay 100% invisible under trousers.",
    "story": "Essential daily contouring that never constricts.",
    "basePrice": 65,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Shapewear",
    "images": [
      "/images/products/lingerie/shapewear-4.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/shapewear-4.jpg",
    "rating": 4.88,
    "reviewCount": 44,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Sculpting Brief",
      "Tummy Control",
      "Laser Cut",
      "High Rise"
    ],
    "sensoryFeel": "Comfortable targeted firm hold across the tummy with soft natural drape over hips.",
    "fabricCare": "Hand wash cold or delicate cycle.",
    "safetyCertifications": [
      "OEKO-TEX Certified",
      "Organic Cotton Gusset"
    ],
    "materials": [
      "Power Microfiber",
      "Silicone Waist Grip"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Nude Sand",
        "hex": "#E4D0C5"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-shp-04-s-snd",
        "productId": "prod-ling-shp-04",
        "sku": "VL-SHP-04-S-SD",
        "size": "S",
        "color": "Nude Sand",
        "colorHex": "#E4D0C5",
        "stockQuantity": 16
      },
      {
        "id": "v-shp-04-m-snd",
        "productId": "prod-ling-shp-04",
        "sku": "VL-SHP-04-M-SD",
        "size": "M",
        "color": "Nude Sand",
        "colorHex": "#E4D0C5",
        "stockQuantity": 12
      }
    ]
  },
  {
    "id": "prod-ling-shp-05",
    "title": "LuxeForm Seamless Contouring Camisole Shaper",
    "slug": "luxeform-seamless-contouring-camisole-shaper",
    "subtitle": "Torso-Smoothing Microfiber with Non-Compressive Bust Zone",
    "description": "An essential smoothing camisole designed with graduated knit compression that tones the waistline, back, and stomach without flattening the natural bust curve.",
    "story": "The perfect foundation garment under blouses, silk knitwear, and suits.",
    "basePrice": 75,
    "discountPrice": 65,
    "categoryId": "cat-lingerie",
    "categorySlug": "lingerie",
    "categoryName": "Lingerie",
    "subcategory": "Shapewear",
    "images": [
      "/images/products/lingerie/shapewear-5.jpg"
    ],
    "secondaryImage": "/images/products/lingerie/shapewear-5.jpg",
    "rating": 4.9,
    "reviewCount": 38,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Shaping Camisole",
      "Seamless",
      "Torso Smoothing",
      "Comfortable"
    ],
    "sensoryFeel": "Silky knit with non-slip hem that prevents ride-up throughout the day.",
    "fabricCare": "Machine wash cold in wash bag, hang to dry.",
    "safetyCertifications": [
      "OEKO-TEX Certified Microfiber"
    ],
    "materials": [
      "Seamless Knit Elastane",
      "Anti-Ride Silicone Hem"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Cashmere Nude",
        "hex": "#F0D8D4"
      }
    ],
    "discreetPackagingIncluded": true,
    "variants": [
      {
        "id": "v-shp-05-s-csh",
        "productId": "prod-ling-shp-05",
        "sku": "VL-SHP-05-S-CS",
        "size": "S",
        "color": "Cashmere Nude",
        "colorHex": "#F0D8D4",
        "stockQuantity": 14
      },
      {
        "id": "v-shp-05-m-csh",
        "productId": "prod-ling-shp-05",
        "sku": "VL-SHP-05-M-CS",
        "size": "M",
        "color": "Cashmere Nude",
        "colorHex": "#F0D8D4",
        "stockQuantity": 10
      }
    ]
  },
  {
    "id": "prod-wel-vib-01",
    "title": "Séraphine Dual-Stimulation Rabbit Vibrator",
    "slug": "seraphine-dual-stimulation-rabbit-vibrator",
    "subtitle": "Simultaneous G-Spot & Clitoral Sonic Harmonics with 24K Gold Detailing",
    "description": "Sculpted from velvet-touch, hypoallergenic medical silicone and accented with 24K champagne gold detailing. Features dual independent high-torque whisper motors engineered for synchronized external pulsation and internal G-spot resonance with 10 vibrational wave frequencies.",
    "story": "Conceived as an exquisite art object on fine travertine stone, Séraphine brings graceful ergonomic balance and tailored dual-frequency arousal.",
    "basePrice": 165,
    "discountPrice": 145,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Vibrators",
    "images": [
      "/images/products/wellness/vibrator-1.jpg"
    ],
    "secondaryImage": "/images/products/wellness/vibrator-1.jpg",
    "rating": 4.97,
    "reviewCount": 42,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Rabbit Vibrator",
      "Dual Motor",
      "G-Spot",
      "Waterproof",
      "Magnetic USB"
    ],
    "sensoryFeel": "Velvet-soft, warmed body-temperature silicone with deep, rumbling low-frequency vibrations.",
    "fabricCare": "Wash with warm water and botanical toy cleaner. Store in protective velvet pouch.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "FDA Compliant",
      "100% Phthalate & BPA Free",
      "IPX8 Waterproof (Submersible up to 1m)"
    ],
    "intensityLevels": "10 Vibration Frequencies & 5 Dynamic Speeds",
    "materials": [
      "Medical-Grade Silky Silicone",
      "24K Champagne Gold Electroplate",
      "ABS Core"
    ],
    "sizes": [
      "One Size (19.8cm x 3.6cm)"
    ],
    "colors": [
      {
        "name": "Onyx Noir",
        "hex": "#1C1917"
      },
      {
        "name": "Dusty Rose",
        "hex": "#BE185D"
      },
      {
        "name": "Champagne Pearl",
        "hex": "#D4AF37"
      }
    ],
    "variants": [
      {
        "id": "var-wel-vib-01-onx",
        "productId": "prod-wel-vib-01",
        "sku": "VL-VIB-01-ONX",
        "size": "One Size",
        "color": "Onyx Noir",
        "colorHex": "#1C1917",
        "material": "Medical-Grade Silicone & 24K Gold",
        "stockQuantity": 18,
        "powerType": "Magnetic USB"
      },
      {
        "id": "var-wel-vib-01-ros",
        "productId": "prod-wel-vib-01",
        "sku": "VL-VIB-01-ROS",
        "size": "One Size",
        "color": "Dusty Rose",
        "colorHex": "#BE185D",
        "material": "Medical-Grade Silicone & 24K Gold",
        "stockQuantity": 14,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-vib-02",
    "title": "Élan Sculpted Curve Ergonomic Vibrator",
    "slug": "elan-sculpted-curve-ergonomic-vibrator",
    "subtitle": "Anatomically Contoured G-Spot Tip with Gift Presentation Casket",
    "description": "Precision-engineered curved form that follows natural body contours for pinpoint internal sensation. Features whisper-quiet micro-bearings, smooth silicone casing, and an intuitive tactile LED control pad housed in a luxury presentation box.",
    "story": "Designed in Paris to blend architectural minimalism with sensory intimacy, Élan feels like a seamless extension of touch.",
    "basePrice": 135,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Vibrators",
    "images": [
      "/images/products/wellness/vibrator-2.jpg"
    ],
    "secondaryImage": "/images/products/wellness/vibrator-2.jpg",
    "rating": 4.93,
    "reviewCount": 31,
    "isFeatured": true,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Curved Vibrator",
      "G-Spot",
      "Whisper Quiet",
      "Gift Box"
    ],
    "sensoryFeel": "Satin-smooth glide with responsive, targeted vibrational focus at the angled tip.",
    "fabricCare": "Rinse with antibacterial toy cleanser and pat dry with lint-free microfiber.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "CE Certified",
      "RoHS Compliant",
      "IPX7 Waterproof"
    ],
    "intensityLevels": "8 Rhythmic Patterns & 4 Variable Intensities",
    "materials": [
      "Ultra-Silky Body Silicone",
      "Brushed Rose Gold Accents"
    ],
    "sizes": [
      "One Size (17.5cm x 3.2cm)"
    ],
    "colors": [
      {
        "name": "Blush Orchid",
        "hex": "#F472B6"
      },
      {
        "name": "Pearl Ivory",
        "hex": "#FDFBF7"
      }
    ],
    "variants": [
      {
        "id": "var-wel-vib-02-blu",
        "productId": "prod-wel-vib-02",
        "sku": "VL-VIB-02-BLU",
        "size": "One Size",
        "color": "Blush Orchid",
        "colorHex": "#F472B6",
        "material": "Medical-Grade Silicone",
        "stockQuantity": 22,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-vib-03",
    "title": "Lumina High-Precision Contoured Wand Vibrator",
    "slug": "lumina-high-precision-contoured-wand-vibrator",
    "subtitle": "Broad Surface Clitoral & Full-Body Acoustic Resonance Massager",
    "description": "Engineered with a weighted, silicone-cushioned vibrating head that delivers therapeutic low-pitch oscillations. Excellent for targeted clitoral stimulation, neck and shoulder tension release, and full-body sensory arousal.",
    "story": "Lumina bridges the divide between restorative muscle relaxation and intense sensual euphoria through balanced mass distribution and acoustic dampening.",
    "basePrice": 150,
    "discountPrice": 130,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Vibrators",
    "images": [
      "/images/products/wellness/vibrator-3.jpg"
    ],
    "secondaryImage": "/images/products/wellness/vibrator-3.jpg",
    "rating": 4.96,
    "reviewCount": 54,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Wand Massager",
      "Full Body",
      "Clitoral Wand",
      "Deep Resonance"
    ],
    "sensoryFeel": "Heavy, penetrating thrum that resonates through tissue without surface buzzing.",
    "fabricCare": "Wipe head clean with damp cloth and gentle foaming cleanser. Store dry.",
    "safetyCertifications": [
      "Body-Safe Silicone",
      "FDA Medical Standard",
      "IPX7 Waterproof Head"
    ],
    "intensityLevels": "12 Frequency Modes & Continuous Speed Scroll",
    "materials": [
      "Medical-Grade Silicone",
      "Reinforced Matte Alloy Core"
    ],
    "sizes": [
      "One Size (22cm x 4.5cm Head)"
    ],
    "colors": [
      {
        "name": "Midnight Violet",
        "hex": "#4C1D95"
      },
      {
        "name": "Silken Pearl",
        "hex": "#F3F4F6"
      }
    ],
    "variants": [
      {
        "id": "var-wel-vib-03-vio",
        "productId": "prod-wel-vib-03",
        "sku": "VL-VIB-03-VIO",
        "size": "One Size",
        "color": "Midnight Violet",
        "colorHex": "#4C1D95",
        "material": "Silicone & Alloy",
        "stockQuantity": 15,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-vib-04",
    "title": "Aurelia Petite Fingertip Sculpted Velvet Massager",
    "slug": "aurelia-petite-fingertip-sculpted-velvet-massager",
    "subtitle": "Compact Ergonomic Teardrop Vibrator for Precision Touch",
    "description": "A discreet, palm-sized stimulator with an arched teardrop tip calibrated for pin-point clitoral and nipple stimulation. Fits effortlessly into travel bags and palm curves with virtually silent operation (<35dB).",
    "story": "Designed for effortless intimacy on the go or discreet bedside pleasure, Aurelia feels as organic and gentle as fingertip caresses.",
    "basePrice": 85,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Vibrators",
    "images": [
      "/images/products/wellness/vibrator-4.jpg"
    ],
    "secondaryImage": "/images/products/wellness/vibrator-4.jpg",
    "rating": 4.88,
    "reviewCount": 26,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Mini Vibrator",
      "Fingertip Massager",
      "Travel Friendly",
      "Quiet"
    ],
    "sensoryFeel": "Velvety light silicone with concentrated, precise tip tremors.",
    "fabricCare": "Wash with warm water and mild antibacterial soap. Air dry completely.",
    "safetyCertifications": [
      "100% Body-Safe Silicone",
      "RoHS Certified",
      "IPX7 Waterproof"
    ],
    "intensityLevels": "6 Vibration Frequencies & 3 Speeds",
    "materials": [
      "Velvet-Touch Silicone",
      "Chrome Accent Ring"
    ],
    "sizes": [
      "Compact (9.2cm x 3.8cm)"
    ],
    "colors": [
      {
        "name": "Champagne Peach",
        "hex": "#FDBA74"
      },
      {
        "name": "Velvet Plum",
        "hex": "#701A75"
      }
    ],
    "variants": [
      {
        "id": "var-wel-vib-04-pch",
        "productId": "prod-wel-vib-04",
        "sku": "VL-VIB-04-PCH",
        "size": "Compact",
        "color": "Champagne Peach",
        "colorHex": "#FDBA74",
        "material": "Medical-Grade Silicone",
        "stockQuantity": 28,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-vib-05",
    "title": "Symphony Multi-Wave Contoured Silicone Wand",
    "slug": "symphony-multi-wave-contoured-silicone-wand",
    "subtitle": "Dual-Ended Sensory Massager with Dynamic Waveform Motors",
    "description": "An elongated, flexible silicone pleasure wand boasting dual active extremities: a bulbous G-spot tip on one end and a textured external stimulation nozzle on the other. Powered by synchronized waveform harmonic motors.",
    "story": "Symphony orchestrates pleasure like a musical score, shifting effortlessly between gentle crests and deep rolling tides of stimulation.",
    "basePrice": 155,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Vibrators",
    "images": [
      "/images/products/wellness/vibrator-5.jpg"
    ],
    "secondaryImage": "/images/products/wellness/vibrator-5.jpg",
    "rating": 4.92,
    "reviewCount": 38,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Dual Ended",
      "Waveform",
      "Flexible Wand",
      "Internal & External"
    ],
    "sensoryFeel": "Flexible, yielding silicone with rhythmic swell-and-release internal sensation.",
    "fabricCare": "Clean thoroughly with warm water and sanitizing foam. Keep in satin pouch.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "Latex & Phthalate Free",
      "IPX8 Waterproof"
    ],
    "intensityLevels": "10 Wave Frequencies & 4 Motor Strengths",
    "materials": [
      "Ultra-Silky Body Silicone",
      "Flexible Polymer Core"
    ],
    "sizes": [
      "One Size (21.5cm x 3.4cm)"
    ],
    "colors": [
      {
        "name": "Emerald Jade",
        "hex": "#065F46"
      },
      {
        "name": "Slate Charcoal",
        "hex": "#374151"
      }
    ],
    "variants": [
      {
        "id": "var-wel-vib-05-emr",
        "productId": "prod-wel-vib-05",
        "sku": "VL-VIB-05-EMR",
        "size": "One Size",
        "color": "Emerald Jade",
        "colorHex": "#065F46",
        "material": "Medical Silicone",
        "stockQuantity": 19,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-suc-01",
    "title": "Aéra Clitoral Air-Pulse Acoustic Pebble Stimulator",
    "slug": "aera-clitoral-air-pulse-acoustic-pebble-stimulator",
    "subtitle": "Touchless Air-Wave Pulsations for Deep Clitoral Resonance",
    "description": "Utilizes proprietary sonic pressure waves that stimulate the nerve endings of the clitoris without direct abrasive friction. Shaped like an ergonomic beach pebble with a plush silicone suction mouth and ultra-quiet operation (<30dB).",
    "story": "A revolution in female climax technology, Aéra creates a sensation akin to gentle oral suction and atmospheric pressure waves.",
    "basePrice": 140,
    "discountPrice": 125,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Suction Toys",
    "images": [
      "/images/products/wellness/suction-1.jpg"
    ],
    "secondaryImage": "/images/products/wellness/suction-1.jpg",
    "rating": 4.98,
    "reviewCount": 67,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Air-Pulse",
      "Sonic Suction",
      "Touchless",
      "Clitoral Sensation"
    ],
    "sensoryFeel": "Pulsing air tides that lift and draw the clitoris without numbing or friction.",
    "fabricCare": "Remove silicone nozzle rim to wash separately with warm water and toy spray.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "FDA Grade",
      "IPX8 Waterproof Submersible"
    ],
    "intensityLevels": "11 Air-Pulse Pressure Levels",
    "materials": [
      "Medical-Grade Soft Silicone",
      "Champagne Metallic Trim"
    ],
    "sizes": [
      "One Size (11.8cm x 5.2cm)"
    ],
    "colors": [
      {
        "name": "Rosewater Pink",
        "hex": "#FB7185"
      },
      {
        "name": "Bespoke Cream",
        "hex": "#FFFBEB"
      }
    ],
    "variants": [
      {
        "id": "var-wel-suc-01-rsw",
        "productId": "prod-wel-suc-01",
        "sku": "VL-SUC-01-RSW",
        "size": "One Size",
        "color": "Rosewater Pink",
        "colorHex": "#FB7185",
        "material": "Medical-Grade Silicone",
        "stockQuantity": 34,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-suc-02",
    "title": "Petal Ergonomic Clitoral Air-Wave Massager",
    "slug": "petal-ergonomic-clitoral-air-wave-massager",
    "subtitle": "Flared Contoured Mouthpiece with Dual Sonic Motor Systems",
    "description": "Designed with a gently flared, cupping silicone nozzle that cushions the labia while focusing pulsating air currents directly onto the clitoral glans. Features dual independent control for wave frequency and pulse depth.",
    "story": "Sculpted like an opening botanical petal, Petal envelops the most sensitive zones in a cocoon of pulsing warmth.",
    "basePrice": 130,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Suction Toys",
    "images": [
      "/images/products/wellness/suction-2.jpg"
    ],
    "secondaryImage": "/images/products/wellness/suction-2.jpg",
    "rating": 4.94,
    "reviewCount": 39,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Air-Wave",
      "Petal Mouthpiece",
      "Dual Control",
      "Bath Safe"
    ],
    "sensoryFeel": "Enveloping suction waves with a soft, cushioning silicone seal against intimate skin.",
    "fabricCare": "Rinse with warm water under running tap. Fully submersible for bath relaxation.",
    "safetyCertifications": [
      "Silicone Body Safe",
      "CE Certified",
      "IPX8 Waterproof"
    ],
    "intensityLevels": "10 Sonic Wave Modes & 5 Pressure Strengths",
    "materials": [
      "Hypoallergenic Silicone",
      "Satin ABS Core"
    ],
    "sizes": [
      "One Size (13cm x 5.5cm)"
    ],
    "colors": [
      {
        "name": "Lilac Dusk",
        "hex": "#C084FC"
      },
      {
        "name": "Coral Blossom",
        "hex": "#F87171"
      }
    ],
    "variants": [
      {
        "id": "var-wel-suc-02-llc",
        "productId": "prod-wel-suc-02",
        "sku": "VL-SUC-02-LLC",
        "size": "One Size",
        "color": "Lilac Dusk",
        "colorHex": "#C084FC",
        "material": "Medical-Grade Silicone",
        "stockQuantity": 21,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-suc-03",
    "title": "Solis Aerodynamic Sonic Pulse Stimulator",
    "slug": "solis-aerodynamic-sonic-pulse-stimulator",
    "subtitle": "Sculpted Minimalist Silhouette with Hydro-Pneumatic Chamber",
    "description": "Features a precision micro-chamber that creates rhythmic aerated vacuum waves. With streamlined curves in contemporary cyan silicone and a gilded gold base button, Solis delivers powerful, fast climaxes without sensory fatigue.",
    "story": "Solis takes inspiration from mid-century Nordic pottery, resulting in a display-worthy device that harbors unmatched pneumatic power.",
    "basePrice": 125,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Suction Toys",
    "images": [
      "/images/products/wellness/suction-3.jpg"
    ],
    "secondaryImage": "/images/products/wellness/suction-3.jpg",
    "rating": 4.91,
    "reviewCount": 28,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Sonic Pulse",
      "Cyan Silicone",
      "Nordic Design",
      "Fast Climax"
    ],
    "sensoryFeel": "Intense acoustic pulses creating a swelling, warm suction sensation.",
    "fabricCare": "Wash with gentle antibacterial foam; recharge magnetically.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "FDA Registered",
      "IPX7 Waterproof"
    ],
    "intensityLevels": "9 Acoustic Rhythm Settings",
    "materials": [
      "Silky Liquid Silicone",
      "24K Electroplated Gold Accent"
    ],
    "sizes": [
      "One Size (12cm x 4.8cm)"
    ],
    "colors": [
      {
        "name": "Ocean Cyan",
        "hex": "#06B6D4"
      },
      {
        "name": "Onyx Black",
        "hex": "#111827"
      }
    ],
    "variants": [
      {
        "id": "var-wel-suc-03-cyn",
        "productId": "prod-wel-suc-03",
        "sku": "VL-SUC-03-CYN",
        "size": "One Size",
        "color": "Ocean Cyan",
        "colorHex": "#06B6D4",
        "material": "Medical Silicone",
        "stockQuantity": 19,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-suc-04",
    "title": "Azure Acoustic Sonic Pulsation Stimulator",
    "slug": "azure-acoustic-sonic-pulsation-stimulator",
    "subtitle": "Deep Cobalt Liquid Silicone with Gentle Vacuum Waves",
    "description": "Engineered with deep-resonance acoustic transducers that translate low audio frequencies into undulating air currents. Encased in rich cobalt velvet silicone with a magnetic fast-charging interface.",
    "story": "Azure explores the science of auditory tactile stimulation, converting low acoustic waves into pure physical ecstasy.",
    "basePrice": 135,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Suction Toys",
    "images": [
      "/images/products/wellness/suction-4.jpg"
    ],
    "secondaryImage": "/images/products/wellness/suction-4.jpg",
    "rating": 4.9,
    "reviewCount": 22,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Cobalt Silicone",
      "Acoustic Waves",
      "Vacuum Rhythm",
      "Waterproof"
    ],
    "sensoryFeel": "Deep, undulating vacuum waves with silky soft labial contact.",
    "fabricCare": "Clean thoroughly with warm soapy water and air dry on a soft towel.",
    "safetyCertifications": [
      "Phthalate Free",
      "Medical Silicone",
      "IPX8 Waterproof"
    ],
    "intensityLevels": "10 Pulse Patterns & 4 Pressure Modes",
    "materials": [
      "Medical-Grade Liquid Silicone",
      "Chrome Trim"
    ],
    "sizes": [
      "One Size (12.5cm x 5.0cm)"
    ],
    "colors": [
      {
        "name": "Cobalt Azure",
        "hex": "#1D4ED8"
      }
    ],
    "variants": [
      {
        "id": "var-wel-suc-04-cbl",
        "productId": "prod-wel-suc-04",
        "sku": "VL-SUC-04-CBL",
        "size": "One Size",
        "color": "Cobalt Azure",
        "colorHex": "#1D4ED8",
        "material": "Liquid Silicone",
        "stockQuantity": 17,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-suc-05",
    "title": "Aureole Rose Sculpted Air-Wave Stimulator",
    "slug": "aureole-rose-sculpted-air-wave-stimulator",
    "subtitle": "Artisanal Floral Aesthetic with Whisper-Quiet Suction Chamber",
    "description": "A discreet rose-blossom sculpted stimulator featuring a soft silicone petal cavity that fits over intimate contours. Conceals quiet yet astonishingly effective air-pulse motors beneath an innocent romantic exterior.",
    "story": "Disguised as a delicate rose bud resting peacefully on a vanity, Aureole is an enchanting secret pleasure companion.",
    "basePrice": 110,
    "discountPrice": 95,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Suction Toys",
    "images": [
      "/images/products/wellness/suction-5.jpg"
    ],
    "secondaryImage": "/images/products/wellness/suction-5.jpg",
    "rating": 4.95,
    "reviewCount": 46,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Rose Toy",
      "Air Suction",
      "Discreet Design",
      "Popular"
    ],
    "sensoryFeel": "Soft, cupping suction with rapid fluttering air pulses that build to intense peaks.",
    "fabricCare": "Wash opening under warm water with toy cleanser. Submersible in bath.",
    "safetyCertifications": [
      "100% Body-Safe Silicone",
      "BPA Free",
      "IPX8 Waterproof"
    ],
    "intensityLevels": "10 Suction Rhythms",
    "materials": [
      "Soft Velvet Silicone",
      "Gold Accent Base"
    ],
    "sizes": [
      "One Size (6.5cm x 6.5cm)"
    ],
    "colors": [
      {
        "name": "Scarlet Rose",
        "hex": "#E11D48"
      },
      {
        "name": "Pale Blush",
        "hex": "#FBCFE8"
      }
    ],
    "variants": [
      {
        "id": "var-wel-suc-05-scr",
        "productId": "prod-wel-suc-05",
        "sku": "VL-SUC-05-SCR",
        "size": "One Size",
        "color": "Scarlet Rose",
        "colorHex": "#E11D48",
        "material": "Velvet Silicone",
        "stockQuantity": 36,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-dil-01",
    "title": "Sensiglass 24K Gold Leaf Hand-Blown Borosilicate Wand",
    "slug": "sensiglass-24k-gold-leaf-hand-blown-borosilicate-wand",
    "subtitle": "Artisanal Temperature-Responsive Glass with Real Floating Gold Flakes",
    "description": "Individually hand-blown from hypoallergenic, non-porous borosilicate glass infused with genuine 24K gold leaf flakes. Features dual curved bulbs for internal G-spot and P-spot precision. Completely temperature responsive—warm in warm water or chill on ice for sensory play.",
    "story": "Handcrafted by master glassblowers in Murano tradition, Sensiglass elevates sensual intimacy into high art on burgundy velvet.",
    "basePrice": 180,
    "discountPrice": 160,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Dildos",
    "images": [
      "/images/products/wellness/dildo-1.jpg"
    ],
    "secondaryImage": "/images/products/wellness/dildo-1.jpg",
    "rating": 4.99,
    "reviewCount": 37,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Glass Wand",
      "24K Gold Leaf",
      "Temperature Play",
      "Hypoallergenic",
      "Artisan"
    ],
    "sensoryFeel": "Silky, ultra-smooth frictionless glass that warms to body heat and glides effortlessly with any lubricant.",
    "fabricCare": "Wash with antibacterial soap or sterilize with boiling water. Safe with all lubricants.",
    "safetyCertifications": [
      "100% Borosilicate Glass",
      "Medical Grade",
      "Hypoallergenic & Non-Porous",
      "Dishwasher & Boil Safe"
    ],
    "intensityLevels": "Manual Ergonomic Control (Dual-Ended Curves)",
    "materials": [
      "Hand-Blown Borosilicate Glass",
      "Genuine 24K Gold Leaf Infusion"
    ],
    "sizes": [
      "One Size (20cm Length x 3.2cm Max Diameter)"
    ],
    "colors": [
      {
        "name": "Crystal & 24K Gold",
        "hex": "#D4AF37"
      }
    ],
    "variants": [
      {
        "id": "var-wel-dil-01-gld",
        "productId": "prod-wel-dil-01",
        "sku": "VL-DIL-01-GLD",
        "size": "One Size",
        "color": "Crystal & 24K Gold",
        "colorHex": "#D4AF37",
        "material": "Borosilicate Glass & 24K Gold",
        "stockQuantity": 12
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-dil-02",
    "title": "Aphrodite Sculpted Spiral Borosilicate Glass Wand",
    "slug": "aphrodite-sculpted-spiral-borosilicate-glass-wand",
    "subtitle": "Helical Textured Ribbing for Heightened Internal Sensation",
    "description": "An architectural clear glass pleasure wand boasting a continuous helical spiral along its shaft. The gentle twisting ridges stimulate nerve endings on every insertion and rotation, culminating in an ergonomic curved bulb for targeted G-spot pressure.",
    "story": "Named after the goddess of beauty, Aphrodite combines classical geometry with temperature-responsive physical luxury.",
    "basePrice": 145,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Dildos",
    "images": [
      "/images/products/wellness/dildo-2.jpg"
    ],
    "secondaryImage": "/images/products/wellness/dildo-2.jpg",
    "rating": 4.93,
    "reviewCount": 24,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Glass Dildo",
      "Spiral Ribbed",
      "G-Spot Curve",
      "Temperature Play"
    ],
    "sensoryFeel": "Frictionless, crisp glass with thrilling spiraled texture and firm, targeted fullness.",
    "fabricCare": "Compatible with water-based and silicone lubricants. Wash with warm water and soap.",
    "safetyCertifications": [
      "Shatter-Resistant Borosilicate Glass",
      "Non-Porous",
      "Hypoallergenic"
    ],
    "intensityLevels": "Manual Control",
    "materials": [
      "Borosilicate Glass"
    ],
    "sizes": [
      "One Size (19cm Length x 3.0cm Diameter)"
    ],
    "colors": [
      {
        "name": "Pure Crystal Clear",
        "hex": "#FFFFFF"
      }
    ],
    "variants": [
      {
        "id": "var-wel-dil-02-clr",
        "productId": "prod-wel-dil-02",
        "sku": "VL-DIL-02-CLR",
        "size": "One Size",
        "color": "Pure Crystal Clear",
        "colorHex": "#FFFFFF",
        "material": "Borosilicate Glass",
        "stockQuantity": 16
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-dil-03",
    "title": "Nocturne Ribbed Obsidian Borosilicate Pleasure Probe",
    "slug": "nocturne-ribbed-obsidian-borosilicate-pleasure-probe",
    "subtitle": "Smoky Onyx Tinted Glass with Progressive Ridged Nodes",
    "description": "Blown from tinted dark obsidian borosilicate glass with progressive tiered ridges along its length. Its angled head focuses pressure directly against the G-spot while the handle provides a confident, ergonomic grip during self or partner play.",
    "story": "Nocturne evokes the mystery of midnight with deep smoky obsidian tones and uncompromising structural perfection.",
    "basePrice": 155,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Dildos",
    "images": [
      "/images/products/wellness/dildo-3.jpg"
    ],
    "secondaryImage": "/images/products/wellness/dildo-3.jpg",
    "rating": 4.95,
    "reviewCount": 29,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Obsidian Glass",
      "Tiered Ridges",
      "Dual Ended",
      "Sensual"
    ],
    "sensoryFeel": "Cool, weighty glass that warms deeply against skin with invigorating stepped ridges.",
    "fabricCare": "Rinse with warm water or soak in gentle antibacterial wash. Store in velvet wrap.",
    "safetyCertifications": [
      "Medical-Grade Borosilicate",
      "100% Body-Safe",
      "Phthalate Free"
    ],
    "intensityLevels": "Manual Control",
    "materials": [
      "Obsidian Borosilicate Glass"
    ],
    "sizes": [
      "One Size (21cm Length x 3.5cm Max Diameter)"
    ],
    "colors": [
      {
        "name": "Smoky Obsidian",
        "hex": "#1F2937"
      }
    ],
    "variants": [
      {
        "id": "var-wel-dil-03-obs",
        "productId": "prod-wel-dil-03",
        "sku": "VL-DIL-03-OBS",
        "size": "One Size",
        "color": "Smoky Obsidian",
        "colorHex": "#1F2937",
        "material": "Obsidian Glass",
        "stockQuantity": 14
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-dil-04",
    "title": "Pure Contour Medical-Grade Clear Silicone Pleasure Probe",
    "slug": "pure-contour-medical-grade-clear-silicone-pleasure-probe",
    "subtitle": "Crystalline Flexible Platinum Silicone with Dual Firmness Core",
    "description": "Molded from ultra-pure, translucent platinum-cured medical silicone. Possesses a flexible outer cushion over a firm inner core that delivers authentic, satisfying fullness and natural responsive give.",
    "story": "Crafted for those who crave the organic flex of silicone paired with the luminous, clean aesthetics of crystal.",
    "basePrice": 120,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Dildos",
    "images": [
      "/images/products/wellness/dildo-4.jpg"
    ],
    "secondaryImage": "/images/products/wellness/dildo-4.jpg",
    "rating": 4.89,
    "reviewCount": 19,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Clear Silicone",
      "Dual Density",
      "Platinum Cured",
      "Flexible"
    ],
    "sensoryFeel": "Supple, lifelike give on the outside with strong interior structural support.",
    "fabricCare": "Use exclusively with water-based lubricants. Wash with warm water and toy cleaner.",
    "safetyCertifications": [
      "100% Platinum Silicone",
      "FDA Grade",
      "Latex & Phthalate Free"
    ],
    "intensityLevels": "Manual Ergonomic Flexibility",
    "materials": [
      "Platinum-Cured Clear Silicone"
    ],
    "sizes": [
      "One Size (18.5cm Length x 3.6cm Diameter)"
    ],
    "colors": [
      {
        "name": "Crystal Clear",
        "hex": "#E0F2FE"
      }
    ],
    "variants": [
      {
        "id": "var-wel-dil-04-clr",
        "productId": "prod-wel-dil-04",
        "sku": "VL-DIL-04-CLR",
        "size": "One Size",
        "color": "Crystal Clear",
        "colorHex": "#E0F2FE",
        "material": "Platinum Silicone",
        "stockQuantity": 20
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-dil-05",
    "title": "Celestia Hand-Blown Borosilicate Graduated Bead Wand",
    "slug": "celestia-hand-blown-borosilicate-graduated-bead-wand",
    "subtitle": "Sequenced Spherical Nodes for Thrilling Progressive Fullness",
    "description": "Sculpted with five seamlessly graduated glass spheres culminating in a flared comfort base. Each sphere smoothly expands in diameter, creating a rhythmic sensation of swelling fullness during movement.",
    "story": "Celestia mirrors the celestial alignment of planets, offering an unforgettable progression of sensations in crystal glass.",
    "basePrice": 135,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Dildos",
    "images": [
      "/images/products/wellness/dildo-5.jpg"
    ],
    "secondaryImage": "/images/products/wellness/dildo-5.jpg",
    "rating": 4.94,
    "reviewCount": 33,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Glass Beads",
      "Graduated Spheres",
      "Temperature Play",
      "Flared Base"
    ],
    "sensoryFeel": "Gliding, rhythmic pop of each sphere with delightful temperature sensitivity.",
    "fabricCare": "Compatible with all lubricants. Clean with warm water and soap or boil safe.",
    "safetyCertifications": [
      "Medical-Grade Borosilicate",
      "Non-Porous",
      "Flared Safety Base"
    ],
    "intensityLevels": "Manual Graduated Sensation",
    "materials": [
      "Borosilicate Solid Glass"
    ],
    "sizes": [
      "One Size (18cm Length x 2.2cm to 3.8cm Graduated)"
    ],
    "colors": [
      {
        "name": "Crystal Glass",
        "hex": "#F9FAFB"
      }
    ],
    "variants": [
      {
        "id": "var-wel-dil-05-cst",
        "productId": "prod-wel-dil-05",
        "sku": "VL-DIL-05-CST",
        "size": "One Size",
        "color": "Crystal Glass",
        "colorHex": "#F9FAFB",
        "material": "Borosilicate Glass",
        "stockQuantity": 15
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-anl-01",
    "title": "Sterling Mirror-Polished Surgical Stainless Steel Tapered Anchor Plug",
    "slug": "sterling-mirror-polished-surgical-stainless-steel-tapered-anchor-plug",
    "subtitle": "Weighted Medical Steel with Flared Ergonomic Base for Temperature Play",
    "description": "Forged from solid 316L surgical stainless steel and hand-buffed to a radiant mirror sheen. Features a slim tapered tip for effortless insertion, expanding to a satisfying neck and a wide flared anchor base designed for absolute safety and long-wear comfort.",
    "story": "Weighted and luxurious, Sterling delivers thrilling cool-to-warm temperature dynamics and intense sensory presence.",
    "basePrice": 110,
    "discountPrice": 95,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Anal Toys",
    "images": [
      "/images/products/wellness/anal-1.jpg"
    ],
    "secondaryImage": "/images/products/wellness/anal-1.jpg",
    "rating": 4.96,
    "reviewCount": 45,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Steel Plug",
      "Temperature Play",
      "Weighted",
      "Flared Base",
      "Surgical Steel"
    ],
    "sensoryFeel": "Heavy, firm, thrillingly cold initial touch that warms deeply to internal body temperature.",
    "fabricCare": "Wash with warm antibacterial soap or sterilize. Compatible with all lubricants.",
    "safetyCertifications": [
      "316L Surgical Stainless Steel",
      "100% Non-Porous",
      "Body Safe",
      "Flared Anchor Base"
    ],
    "intensityLevels": "Weighted Solid Sensation (280g)",
    "materials": [
      "316L Surgical Stainless Steel"
    ],
    "sizes": [
      "Medium (8.5cm Length x 3.2cm Max Diameter)"
    ],
    "colors": [
      {
        "name": "Mirror Silver",
        "hex": "#E5E7EB"
      }
    ],
    "variants": [
      {
        "id": "var-wel-anl-01-slv",
        "productId": "prod-wel-anl-01",
        "sku": "VL-ANL-01-SLV",
        "size": "Medium",
        "color": "Mirror Silver",
        "colorHex": "#E5E7EB",
        "material": "316L Surgical Steel",
        "stockQuantity": 24
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-anl-02",
    "title": "Bijoux Rose Cut Crystal Jewel-Base Chrome Plug",
    "slug": "bijoux-rose-cut-crystal-jewel-base-chrome-plug",
    "subtitle": "Brilliant Faceted Austrian Crystal Set in Mirror-Finish Chrome",
    "description": "A dazzling intimacy jewel combining a mirror-polished tapered steel body with an exquisite multi-faceted cut crystal embedded into the flared base. Glistens like fine jewelry while providing secure, comfortable wear.",
    "story": "Transform intimate moments into decadent romance with a radiant gemstone that captures every flicker of candlelight.",
    "basePrice": 95,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Anal Toys",
    "images": [
      "/images/products/wellness/anal-2.jpg"
    ],
    "secondaryImage": "/images/products/wellness/anal-2.jpg",
    "rating": 4.93,
    "reviewCount": 38,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Jewel Plug",
      "Crystal Base",
      "Sensual Aesthetic",
      "Flared Base"
    ],
    "sensoryFeel": "Smooth metallic glide with a comforting weighted feeling of fullness.",
    "fabricCare": "Wash gently with warm soapy water around jewel base. Dry with microfiber.",
    "safetyCertifications": [
      "Body-Safe Alloy & Chrome Plating",
      "Lead-Free Crystal",
      "Flared Safety Base"
    ],
    "intensityLevels": "Smooth Weighted Sensation",
    "materials": [
      "Mirror Chrome Plated Alloy",
      "Faceted Cut Crystal"
    ],
    "sizes": [
      "Small (7.2cm Length x 2.8cm Diameter)"
    ],
    "colors": [
      {
        "name": "Ruby Red Jewel",
        "hex": "#991B1B"
      },
      {
        "name": "Diamond Clear Jewel",
        "hex": "#FFFFFF"
      },
      {
        "name": "Sapphire Blue Jewel",
        "hex": "#1E3A8A"
      }
    ],
    "variants": [
      {
        "id": "var-wel-anl-02-rby",
        "productId": "prod-wel-anl-02",
        "sku": "VL-ANL-02-RBY",
        "size": "Small",
        "color": "Ruby Red Jewel",
        "colorHex": "#991B1B",
        "material": "Chrome Alloy & Crystal",
        "stockQuantity": 18
      },
      {
        "id": "var-wel-anl-02-dia",
        "productId": "prod-wel-anl-02",
        "sku": "VL-ANL-02-DIA",
        "size": "Small",
        "color": "Diamond Clear Jewel",
        "colorHex": "#FFFFFF",
        "material": "Chrome Alloy & Crystal",
        "stockQuantity": 15
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-anl-03",
    "title": "Apex Contoured Velvet-Touch Silicone P-Spot & Perineum Massager",
    "slug": "apex-contoured-velvet-touch-silicone-p-spot-perineum-massager",
    "subtitle": "Dual-Motor Anatomical Prostate & External Perineum Vibrator",
    "description": "Sculpted to match male anatomy with high-precision curvature that directly targets the prostate while simultaneously vibrating against the perineum. Two independently driven silent motors deliver deep, rumbling waveforms.",
    "story": "Engineered for breathtaking, hands-free male climax through targeted internal pressure and external frequency synchronization.",
    "basePrice": 155,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Anal Toys",
    "images": [
      "/images/products/wellness/anal-3.jpg"
    ],
    "secondaryImage": "/images/products/wellness/anal-3.jpg",
    "rating": 4.97,
    "reviewCount": 32,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "P-Spot",
      "Prostate Massager",
      "Dual Motor",
      "Perineum Stimulator"
    ],
    "sensoryFeel": "Velvet-soft, flexible silicone with deep resonant low-frequency vibrations.",
    "fabricCare": "Wash with antibacterial toy cleaner. Fully IPX8 waterproof.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "Anatomical Flared Base",
      "IPX8 Waterproof"
    ],
    "intensityLevels": "10 Vibration Frequencies & 5 Speeds",
    "materials": [
      "Medical-Grade Silky Silicone",
      "ABS Core"
    ],
    "sizes": [
      "One Size (13.5cm x 3.4cm Internal Reach)"
    ],
    "colors": [
      {
        "name": "Onyx Noir",
        "hex": "#111827"
      },
      {
        "name": "Slate Teal",
        "hex": "#0F766E"
      }
    ],
    "variants": [
      {
        "id": "var-wel-anl-03-onx",
        "productId": "prod-wel-anl-03",
        "sku": "VL-ANL-03-ONX",
        "size": "One Size",
        "color": "Onyx Noir",
        "colorHex": "#111827",
        "material": "Medical Silicone",
        "stockQuantity": 20,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-anl-04",
    "title": "Empress 24K Gold-Dipped Dual Weighted Kegel & Pelvic Spheres",
    "slug": "empress-24k-gold-dipped-dual-weighted-kegel-pelvic-spheres",
    "subtitle": "Kinetic Dynamic Internal Weights for Pelvic Floor Toning & Arousal",
    "description": "A pair of weighted, gleaming 24K gold-dipped spheres connected by a flexible retrieval cord. Each sphere contains an internal rolling kinetic ball that shifts subtly with body movement, triggering involuntary micro-contractions and heightened sensation.",
    "story": "Empress unites ancient pelvic strengthening traditions with the sumptuous splendor of pure gold craftsmanship.",
    "basePrice": 125,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Anal Toys",
    "images": [
      "/images/products/wellness/anal-4.jpg"
    ],
    "secondaryImage": "/images/products/wellness/anal-4.jpg",
    "rating": 4.91,
    "reviewCount": 27,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Kegel Balls",
      "24K Gold",
      "Pelvic Floor",
      "Kinetic Weight",
      "Sensual Exercise"
    ],
    "sensoryFeel": "Heavy, shifting internal kinetic vibrations that respond to walking and breathing.",
    "fabricCare": "Wash gently with warm soapy water. Polish with soft lint-free jewelry cloth.",
    "safetyCertifications": [
      "Body-Safe Gold Electroplate",
      "Surgical Core",
      "Latex Free"
    ],
    "intensityLevels": "Dynamic Kinetic Weight (95g Total)",
    "materials": [
      "24K Gold Electroplate over Brass Core",
      "Medical Silicone Cord"
    ],
    "sizes": [
      "One Size (3.4cm Sphere Diameter)"
    ],
    "colors": [
      {
        "name": "24K Champagne Gold",
        "hex": "#D4AF37"
      }
    ],
    "variants": [
      {
        "id": "var-wel-anl-04-gld",
        "productId": "prod-wel-anl-04",
        "sku": "VL-ANL-04-GLD",
        "size": "One Size",
        "color": "24K Champagne Gold",
        "colorHex": "#D4AF37",
        "material": "24K Gold Plated Brass & Silicone",
        "stockQuantity": 16
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-anl-05",
    "title": "Jade Yoni Hand-Carved Natural Nephrite Jade Pelvic Training Eggs",
    "slug": "jade-yoni-hand-carved-natural-nephrite-jade-pelvic-training-eggs",
    "subtitle": "Trio of Authentic Certified Nephrite Jade Stones for Sensual Wellness",
    "description": "Carved from 100% natural, certified nephrite jade stone on silk lining. Includes three graduated sizes (Small, Medium, Large) drilled for secure organic retrieval floss. Revered for centuries in Eastern holistic wellness for pelvic tone, circulation, and grounding energy.",
    "story": "Mined from organic river jade deposits and polished by hand, each egg carries unique natural vein patterns of calming green energy.",
    "basePrice": 130,
    "discountPrice": 115,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Anal Toys",
    "images": [
      "/images/products/wellness/anal-5.jpg"
    ],
    "secondaryImage": "/images/products/wellness/anal-5.jpg",
    "rating": 4.94,
    "reviewCount": 41,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Jade Egg",
      "Yoni Stone",
      "Nephrite Jade",
      "Holistic Wellness",
      "Pelvic Toning"
    ],
    "sensoryFeel": "Cool, grounding, organic stone texture that absorbs body warmth and feels silky smooth.",
    "fabricCare": "Wash with gentle antibacterial wash and warm water. Clean retrieval hole with running water.",
    "safetyCertifications": [
      "100% Certified Natural Nephrite Jade",
      "Chemical & Dye Free",
      "Non-Porous Mineral"
    ],
    "intensityLevels": "Graduated Sizes for Progressive Strength",
    "materials": [
      "Genuine Nephrite Jade Mineral",
      "Unwaxed Silk Retrieval Floss"
    ],
    "sizes": [
      "3-Piece Set (S: 30x20mm, M: 40x25mm, L: 45x30mm)"
    ],
    "colors": [
      {
        "name": "Nephrite Emerald Green",
        "hex": "#059669"
      }
    ],
    "variants": [
      {
        "id": "var-wel-anl-05-grn",
        "productId": "prod-wel-anl-05",
        "sku": "VL-ANL-05-GRN",
        "size": "3-Piece Set",
        "color": "Nephrite Emerald Green",
        "colorHex": "#059669",
        "material": "Natural Nephrite Jade",
        "stockQuantity": 22
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-ess-01",
    "title": "Silken Touch Organic Hyaluronic Water-Based Intimate Serum",
    "slug": "silken-touch-organic-hyaluronic-water-based-intimate-serum",
    "subtitle": "Ultra-Pure Hyaluronic Acid & Aloe Vera in Amber Glass Pump Bottle (150ml)",
    "description": "An exceptionally smooth, velvety water-based intimate serum formulated with multi-molecular weight hyaluronic acid and certified organic aloe vera. Mimics natural body moisture without stickiness or residue, fully compatible with all silicone, glass, and metal toys.",
    "story": "Created by clean cosmetic chemists, Silken Touch provides hours of frictionless glide while deeply hydrating delicate intimate tissue.",
    "basePrice": 42,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Essentials",
    "images": [
      "/images/products/wellness/essential-1.jpg"
    ],
    "secondaryImage": "/images/products/wellness/essential-1.jpg",
    "rating": 4.98,
    "reviewCount": 78,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Hyaluronic Serum",
      "Organic Lubricant",
      "Water Based",
      "Toy Safe",
      "Hydrating"
    ],
    "sensoryFeel": "Silky, non-sticky cushion that feels natural and hydrating on skin.",
    "fabricCare": "Store in cool, dry place away from direct sunlight.",
    "safetyCertifications": [
      "100% Toy Safe",
      "Paraben & Glycerin Free",
      "pH Balanced (3.8 - 4.2)",
      "Vegan & Cruelty Free"
    ],
    "intensityLevels": "Long-Lasting Hydration Cushion",
    "materials": [
      "Hyaluronic Acid",
      "Organic Aloe Leaf Extract",
      "Amber Glass Dispenser"
    ],
    "sizes": [
      "150ml / 5.1 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Glass",
        "hex": "#78350F"
      }
    ],
    "variants": [
      {
        "id": "var-wel-ess-01-150",
        "productId": "prod-wel-ess-01",
        "sku": "VL-ESS-01-150",
        "size": "150ml",
        "color": "Amber Glass",
        "colorHex": "#78350F",
        "material": "Organic Intimate Serum",
        "stockQuantity": 65
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-ess-02",
    "title": "Botanical Anti-Microbial Foaming Toy Cleanser",
    "slug": "botanical-anti-microbial-foaming-toy-cleanser",
    "subtitle": "Tea Tree & Chamomile Rapid Sanitizing Foam Dispenser (200ml)",
    "description": "A gentle, alcohol-free foaming wash specially formulated to sanitize silicone, glass, and steel intimate devices without degrading delicate materials. Enriched with natural tea tree and chamomile extracts to eliminate 99.9% of bacteria while maintaining skin neutrality.",
    "story": "Preserve the longevity of your luxury pleasure collection with our spa-grade botanical cleansing foam.",
    "basePrice": 34,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Essentials",
    "images": [
      "/images/products/wellness/essential-2.jpg"
    ],
    "secondaryImage": "/images/products/wellness/essential-2.jpg",
    "rating": 4.94,
    "reviewCount": 44,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Toy Cleaner",
      "Anti-Microbial",
      "Botanical Foam",
      "Material Safe"
    ],
    "sensoryFeel": "Airy, light foam with a delicate, clean scent of fresh chamomile and tea tree.",
    "fabricCare": "Dispense 1-2 pumps onto device, lather for 30 seconds, and rinse with warm water.",
    "safetyCertifications": [
      "Alcohol Free",
      "Silicone Safe",
      "Dermatologist Tested",
      "Non-Toxic"
    ],
    "intensityLevels": "Rapid Sanitizing Formula",
    "materials": [
      "Tea Tree Leaf Oil",
      "Chamomile Extract",
      "Eco Pump Dispenser"
    ],
    "sizes": [
      "200ml / 6.8 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Foamer",
        "hex": "#92400E"
      }
    ],
    "variants": [
      {
        "id": "var-wel-ess-02-200",
        "productId": "prod-wel-ess-02",
        "sku": "VL-ESS-02-200",
        "size": "200ml",
        "color": "Amber Foamer",
        "colorHex": "#92400E",
        "material": "Botanical Foaming Solution",
        "stockQuantity": 52
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-ess-03",
    "title": "Veloura Plush Velvet Keepsake Toy Storage & Travel Pouch",
    "slug": "veloura-plush-velvet-keepsake-toy-storage-travel-pouch",
    "subtitle": "Antimicrobial Satin-Lined Dustproof Keepsake Case with Silk Ribbon",
    "description": "Handcrafted from heavyweight midnight plush velvet with an antimicrobial satin interior lining that keeps luxury toys dust-free, discreetly hidden, and protected from scratches during travel or bedside storage.",
    "story": "Your intimate collection deserves a sanctuary as elegant and luxurious as the devices themselves.",
    "basePrice": 38,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Essentials",
    "images": [
      "/images/products/wellness/essential-3.jpg"
    ],
    "secondaryImage": "/images/products/wellness/essential-3.jpg",
    "rating": 4.92,
    "reviewCount": 30,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Velvet Pouch",
      "Storage Case",
      "Travel Friendly",
      "Discreet"
    ],
    "sensoryFeel": "Deep, plush velvet exterior with featherlight, silky satin interior.",
    "fabricCare": "Hand wash in cold water with gentle silk detergent. Air dry flat.",
    "safetyCertifications": [
      "Lint Free",
      "Breathable Fabric",
      "Dustproof Protection"
    ],
    "intensityLevels": "Protective Storage",
    "materials": [
      "Heavyweight Italian Velvet",
      "Silk-Satin Lining",
      "Braided Drawstring"
    ],
    "sizes": [
      "One Size (28cm x 16cm)"
    ],
    "colors": [
      {
        "name": "Midnight Onyx",
        "hex": "#18181B"
      },
      {
        "name": "Burgundy Wine",
        "hex": "#881337"
      }
    ],
    "variants": [
      {
        "id": "var-wel-ess-03-onx",
        "productId": "prod-wel-ess-03",
        "sku": "VL-ESS-03-ONX",
        "size": "One Size",
        "color": "Midnight Onyx",
        "colorHex": "#18181B",
        "material": "Italian Velvet & Silk",
        "stockQuantity": 40
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-ess-04",
    "title": "Aethel Sandalwood & Amber Botanical Pouring Massage Candle",
    "slug": "aethel-sandalwood-amber-botanical-pouring-massage-candle",
    "subtitle": "Low-Melting Point Soybean & Jojoba Warm Body Oil with Ceramic Spout",
    "description": "Formulated with organic soybean wax, shea butter, sweet almond oil, and jojoba seed oil. Melts at body-safe temperatures (102°F / 39°C) into a decadent warm massage oil scented with notes of warm sandalwood, amber, and vanilla.",
    "story": "Lighting Aethel sets the mood with romantic candlelight before pouring warmly onto skin for decadent full-body intimacy.",
    "basePrice": 55,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Essentials",
    "images": [
      "/images/products/wellness/essential-4.jpg"
    ],
    "secondaryImage": "/images/products/wellness/essential-4.jpg",
    "rating": 4.96,
    "reviewCount": 51,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Massage Candle",
      "Warm Body Oil",
      "Sandalwood & Amber",
      "Sensory Play"
    ],
    "sensoryFeel": "Warm, golden, non-greasy oil that sinks into the skin leaving it radiant and deeply fragrant.",
    "fabricCare": "Trim lead-free cotton wick to 1/4 inch before each burn. Burn for 20-30 mins.",
    "safetyCertifications": [
      "100% Natural Wax",
      "Lead-Free Cotton Wick",
      "Dermatologist Tested",
      "Low Melting Temp"
    ],
    "intensityLevels": "Sensory Warmth & Aromatic Ambience",
    "materials": [
      "Soy Wax",
      "Shea Butter",
      "Jojoba Oil",
      "Ceramic Pouring Crucible"
    ],
    "sizes": [
      "220g / 7.7 oz (40 Hour Burn Time)"
    ],
    "colors": [
      {
        "name": "Frosted Ceramic",
        "hex": "#F3F4F6"
      }
    ],
    "variants": [
      {
        "id": "var-wel-ess-04-220",
        "productId": "prod-wel-ess-04",
        "sku": "VL-ESS-04-220",
        "size": "220g",
        "color": "Frosted Ceramic",
        "colorHex": "#F3F4F6",
        "material": "Botanical Massage Wax",
        "stockQuantity": 38
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-wel-ess-05",
    "title": "UV-C Deep Sanitizing & Velvet Storage Keepsake Chest",
    "slug": "uv-c-deep-sanitizing-velvet-storage-keepsake-chest",
    "subtitle": "360° Ultraviolet-C Medical Disinfection Box with Magnetic Lock",
    "description": "A discreet, lockable bedside vanity chest equipped with hospital-grade UV-C LED sanitizing arrays. Destroys 99.99% of surface pathogens in a rapid 3-minute cycle with zero chemicals or moisture. Plugs into USB-C for whisper-quiet sterilization.",
    "story": "The ultimate luxury sanctuary for device care, uniting high-tech clinical disinfection with the discreet elegance of a designer jewelry box.",
    "basePrice": 115,
    "discountPrice": 99,
    "categoryId": "cat-wellness",
    "categorySlug": "sex-toys",
    "categoryName": "Sex Toys",
    "subcategory": "Essentials",
    "images": [
      "/images/products/wellness/essential-5.jpg"
    ],
    "secondaryImage": "/images/products/wellness/essential-5.jpg",
    "rating": 4.97,
    "reviewCount": 35,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "UV Sanitizer",
      "Sterilizer Box",
      "Keepsake Chest",
      "Medical Clean"
    ],
    "sensoryFeel": "Smooth matte exterior with mirrored reflective internal chamber and velvet tray.",
    "fabricCare": "Wipe exterior with dry cloth. Automatic safety shutoff when lid opens.",
    "safetyCertifications": [
      "EPA Registered UV-C",
      "CE Certified",
      "FCC Compliant",
      "Ozone Free"
    ],
    "intensityLevels": "3-Minute 360° UV-C Disinfection Cycle",
    "materials": [
      "Matte ABS Shell",
      "Mirror Quartz Chamber",
      "Velvet Interior Liner"
    ],
    "sizes": [
      "One Size (24cm x 14cm x 8cm)"
    ],
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#18181B"
      },
      {
        "name": "Ivory White",
        "hex": "#F9FAFB"
      }
    ],
    "variants": [
      {
        "id": "var-wel-ess-05-onx",
        "productId": "prod-wel-ess-05",
        "sku": "VL-ESS-05-ONX",
        "size": "One Size",
        "color": "Onyx Black",
        "colorHex": "#18181B",
        "material": "UV-C Disinfection Chamber",
        "stockQuantity": 18,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-res-01",
    "title": "L'Ombre Mulberry Silk Padded Blindfold with Monogram Tie",
    "slug": "l-ombre-mulberry-silk-padded-blindfold-monogram-tie",
    "subtitle": "100% Grade 6A 22 Momme Mulberry Silk Sensory Deprivation Mask",
    "description": "Crafted from double-layered, cloud-soft 22 Momme mulberry silk with plush light-blocking interior padding. Features extra-long flowing silk sash ribbons for an adjustable, pressure-free tie that heightens auditory, tactile, and sensual anticipation.",
    "story": "Surrendering sight unlocks extraordinary depths of tactile awareness, allowing every whisper and caress to electrify the skin.",
    "basePrice": 48,
    "discountPrice": 42,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Bondage & Restraints",
    "images": [
      "/images/products/couples/silk-blindfold-1.jpg",
      "/images/products/couples/silk-blindfold-2.jpg"
    ],
    "secondaryImage": "/images/products/couples/silk-blindfold-2.jpg",
    "rating": 4.96,
    "reviewCount": 38,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Silk Blindfold",
      "Sensory Deprivation",
      "Mulberry Silk",
      "Couples Play",
      "Romance"
    ],
    "sensoryFeel": "Featherlight, cooling silk gliding against eyelids with complete pitch-black darkness.",
    "fabricCare": "Hand wash in cold water using silk-friendly detergent. Dry flat away from direct sunlight.",
    "safetyCertifications": [
      "OEKO-TEX Standard 100 Certified Silk",
      "Hypoallergenic",
      "Nickel-Free Hardware"
    ],
    "intensityLevels": "Complete Visual Sensory Deprivation",
    "materials": [
      "100% 22 Momme Mulberry Silk",
      "Plush Cotton Fluff Padding"
    ],
    "sizes": [
      "One Size (Adjustable Silk Ribbon Tie)"
    ],
    "colors": [
      {
        "name": "Midnight Noir",
        "hex": "#111827"
      },
      {
        "name": "Champagne Ivory",
        "hex": "#FEF3C7"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-res-01-noi",
        "productId": "prod-cpl-res-01",
        "sku": "VL-CPL-RES-01-NOI",
        "size": "One Size",
        "color": "Midnight Noir",
        "colorHex": "#111827",
        "material": "Mulberry Silk",
        "stockQuantity": 45
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-res-02",
    "title": "Veloura Heritage Padded Leather & Velvet Wrist Restraints",
    "slug": "veloura-heritage-padded-leather-velvet-wrist-restraints",
    "subtitle": "Full-Grain Tuscan Calfskin with Plush Velvet Lining and Solid Brass Hardware",
    "description": "Handcrafted from supple, vegetable-tanned Italian calfskin cushioned with deep crushed velvet lining to prevent chafing. Features heavy-duty nickel-plated brass buckles, twin D-rings, and a detachable quick-release connector swivel hook.",
    "story": "Designed to elevate surrender into pure luxury, these restraints combine reassuring physical security with decadent tactile softness.",
    "basePrice": 95,
    "discountPrice": 85,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Bondage & Restraints",
    "images": [
      "/images/products/couples/couples-restraint-2.jpg",
      "/images/products/couples/couples-restraint-2-alt.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-restraint-2-alt.jpg",
    "rating": 4.97,
    "reviewCount": 52,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Leather Cuffs",
      "Velvet Lining",
      "Wrist Restraints",
      "Brass Hardware",
      "Bondage"
    ],
    "sensoryFeel": "Heavy, reassuring firmness with ultra-soft plush velvet cushioning against delicate wrists.",
    "fabricCare": "Condition leather occasionally with beeswax leather cream; wipe velvet with dry brush.",
    "safetyCertifications": [
      "Vegetable Tanned Leather",
      "Lead-Free Brass Hardware",
      "Quick-Release Safety Clasps"
    ],
    "intensityLevels": "Medium to Heavy Restraint Security",
    "materials": [
      "Full-Grain Italian Calfskin",
      "Crushed Velvet Interior",
      "Solid Brass Plated Buckles"
    ],
    "sizes": [
      "Adjustable (15cm - 26cm Wrist Circumference)"
    ],
    "colors": [
      {
        "name": "Onyx & Gold",
        "hex": "#1C1917"
      },
      {
        "name": "Burgundy & Rose Gold",
        "hex": "#881337"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-res-02-onx",
        "productId": "prod-cpl-res-02",
        "sku": "VL-CPL-RES-02-ONX",
        "size": "Adjustable",
        "color": "Onyx & Gold",
        "colorHex": "#1C1917",
        "material": "Calfskin & Velvet",
        "stockQuantity": 28
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-res-03",
    "title": "Aethel O-Ring Leather Collar & Detachable Leash Harness",
    "slug": "aethel-o-ring-leather-collar-detachable-leash-harness",
    "subtitle": "Sculpted Collar with Polished 24K Gold-Dipped Central O-Ring & Matching Lead",
    "description": "An iconic silhouette in couture bondage, this collar is precision cut from smooth black saddle leather with burnished edges. Features an eye-catching 35mm central O-ring and includes a matching 110cm leather lead with a 360-degree swivel carabiner.",
    "story": "A symbol of devotion and sensual mastery, the Aethel Collar commands reverence in intimate play.",
    "basePrice": 88,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Bondage & Restraints",
    "images": [
      "/images/products/couples/couples-restraint-3.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-restraint-3.jpg",
    "rating": 4.93,
    "reviewCount": 31,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "O-Ring Collar",
      "Leather Lead",
      "Choker",
      "Sensual Harness",
      "Power Exchange"
    ],
    "sensoryFeel": "Sleek, firm leather that warms to the throat with cooling, weighted metallic hardware.",
    "fabricCare": "Wipe clean with a soft dry cloth. Store flat in velvet pouch.",
    "safetyCertifications": [
      "Body Safe Nickel-Free Electroplate",
      "Non-Toxic Vegetable Dye"
    ],
    "intensityLevels": "Erotic Guidance & Gentle Pull",
    "materials": [
      "Full-Grain Saddle Leather",
      "24K Gold Plated Alloy O-Ring",
      "Swivel Clip"
    ],
    "sizes": [
      "Adjustable Collar (32cm - 42cm Neck Size)"
    ],
    "colors": [
      {
        "name": "Noir & Polished Gold",
        "hex": "#111827"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-res-03-gld",
        "productId": "prod-cpl-res-03",
        "sku": "VL-CPL-RES-03-GLD",
        "size": "Adjustable",
        "color": "Noir & Polished Gold",
        "colorHex": "#111827",
        "material": "Saddle Leather & Alloy",
        "stockQuantity": 22
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-res-04",
    "title": "Sultana Genuine Black Ostrich Feather Sensory Tickler",
    "slug": "sultana-genuine-black-ostrich-feather-sensory-tickler",
    "subtitle": "Fluffy Hand-Selected Ostrich Plumes with Ribbed Satin Wand Handle",
    "description": "Engineered for tantalizing light-touch sensory teasers, this luxury tickler features voluminous, ethically harvested jet-black ostrich plumes mounted to an 18-inch satin-wrapped balance wand with a weighted brass pommel.",
    "story": "Awakening dormant nerve endings across the spine, inner thighs, and neck, the Sultana feather teaser turns gentle touches into electric shivers.",
    "basePrice": 52,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Bondage & Restraints",
    "images": [
      "/images/products/couples/couples-restraint-4.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-restraint-4.jpg",
    "rating": 4.94,
    "reviewCount": 29,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Feather Tickler",
      "Sensory Teaser",
      "Light Touch",
      "Foreplay",
      "Sensual"
    ],
    "sensoryFeel": "Ultra-light gossamer wisps that glide effortlessly across bare skin, sending goosebumps cascading.",
    "fabricCare": "Gently shake clean after use. Store upright or hanging.",
    "safetyCertifications": [
      "Ethically Sourced Natural Feathers",
      "Hypoallergenic Sanitized"
    ],
    "intensityLevels": "Ultra-Gentle Tactile Tease",
    "materials": [
      "Natural Ostrich Feathers",
      "Duchess Satin Ribbed Handle",
      "Brass Pommel"
    ],
    "sizes": [
      "Length: 45cm / 18 inches"
    ],
    "colors": [
      {
        "name": "Raven Black",
        "hex": "#0F172A"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-res-04-blk",
        "productId": "prod-cpl-res-04",
        "sku": "VL-CPL-RES-04-BLK",
        "size": "45cm",
        "color": "Raven Black",
        "colorHex": "#0F172A",
        "material": "Natural Ostrich Feathers & Satin",
        "stockQuantity": 34
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-res-05",
    "title": "Nocturne Hand-Stitched Suede & Calfskin Intimacy Flogger",
    "slug": "nocturne-hand-stitched-suede-calfskin-intimacy-flogger",
    "subtitle": "Dual-Texture 32-Fall Flogger with Braided Leather Handle & Wrist Loop",
    "description": "Crafted with 32 precision-cut falls blending velvety brushed suede and smooth calfskin for varied impact sensation. Balanced with a solid wood-core handle wrapped in diamond-braided leather and finished with a wrist lanyard.",
    "story": "From delicate, fluttering caresses to resonant, stinging thuds, Nocturne translates passion into rhythm and heat.",
    "basePrice": 110,
    "discountPrice": 95,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Bondage & Restraints",
    "images": [
      "/images/products/couples/couples-restraint-5.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-restraint-5.jpg",
    "rating": 4.98,
    "reviewCount": 44,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Leather Flogger",
      "Suede Falls",
      "Impact Play",
      "Sensual Thud",
      "BDSM Luxury"
    ],
    "sensoryFeel": "Suede falls deliver a warm, enveloping thud that flushes skin with tingling warmth without bruising.",
    "fabricCare": "Hang to air out. Brush suede falls occasionally with suede brush.",
    "safetyCertifications": [
      "100% Top-Grain Leather",
      "Reinforced Safety Lanyard"
    ],
    "intensityLevels": "Versatile (Light Sensory Stroking to Medium-Heavy Thud)",
    "materials": [
      "Italian Calfskin Leather",
      "Brushed Suede",
      "Solid Core Handle"
    ],
    "sizes": [
      "Total Length: 58cm / 23 inches (Falls: 40cm)"
    ],
    "colors": [
      {
        "name": "Midnight Onyx",
        "hex": "#18181B"
      },
      {
        "name": "Oxblood Crimson",
        "hex": "#7F1D1D"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-res-05-onx",
        "productId": "prod-cpl-res-05",
        "sku": "VL-CPL-RES-05-ONX",
        "size": "58cm",
        "color": "Midnight Onyx",
        "colorHex": "#18181B",
        "material": "Calfskin & Suede",
        "stockQuantity": 19
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-gam-01",
    "title": "Intimate Whispers Candlelit Connection Card Deck",
    "slug": "intimate-whispers-candlelit-connection-card-deck",
    "subtitle": "100 Deep Conversation, Vulnerability & Foreplay Prompt Cards",
    "description": "A curated deck of 100 gilded-edge questions and physical challenges structured across three intimacy levels: Deep Conversation, Sensual Spark, and Uninhibited Passion. Printed on heavyweight linen-finish cardstock in a gold-embossed keepsake casket.",
    "story": "Designed to turn a regular evening into an intoxicating journey of emotional openness, whispered secrets, and physical intimacy.",
    "basePrice": 45,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Games",
    "images": [
      "/images/products/couples/couples-game-1.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-game-1.jpg",
    "rating": 4.95,
    "reviewCount": 63,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Couples Game",
      "Intimacy Cards",
      "Conversation Starters",
      "Date Night",
      "Romance"
    ],
    "sensoryFeel": "Smooth textured linen cardstock with luxurious metallic gold foil gilded rims.",
    "fabricCare": "Store cards in gold foil keepsake casket.",
    "safetyCertifications": [
      "FSC Certified Sustainable Paper",
      "Soy-Based Inks"
    ],
    "intensityLevels": "3 Intimacy Levels (Emotional, Sensual, Erotic)",
    "materials": [
      "350gsm Linen Cardstock",
      "Gold Foil Leaf Trim",
      "Hardcover Keepsake Box"
    ],
    "sizes": [
      "100 Cards (9cm x 6.5cm)"
    ],
    "colors": [
      {
        "name": "Gold Foil Noir",
        "hex": "#1C1917"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-gam-01-dck",
        "productId": "prod-cpl-gam-01",
        "sku": "VL-CPL-GAM-01-DCK",
        "size": "100 Cards",
        "color": "Gold Foil Noir",
        "colorHex": "#1C1917",
        "material": "Linen Cardstock",
        "stockQuantity": 58
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-gam-02",
    "title": "Midnight Reverie Gilded Bedroom Fantasy Exploration Cards",
    "slug": "midnight-reverie-gilded-bedroom-fantasy-exploration-cards",
    "subtitle": "54 High-Stakes Dares, Roleplay Prompts & Touch Rituals",
    "description": "Each card offers an alluring dare, physical touch instruction, or roleplay scenario crafted by intimacy coaches. Features exquisite matte-black finishes, gilded metallic numerals, and numbered progressive intensity tiers.",
    "story": "Tear down inhibitions step by step with challenges that spark laughter, curiosity, and passionate surrender.",
    "basePrice": 42,
    "discountPrice": 36,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Games",
    "images": [
      "/images/products/couples/couples-game-2.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-game-2.jpg",
    "rating": 4.91,
    "reviewCount": 37,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Fantasy Deck",
      "Bedroom Dares",
      "Sensual Challenges",
      "Roleplay",
      "Couple Play"
    ],
    "sensoryFeel": "Velvet-soft touch coating on each card for effortless shuffling and dealing.",
    "fabricCare": "Keep in matching slipcase drawer.",
    "safetyCertifications": [
      "Acid-Free Cardstock",
      "Non-Toxic Coatings"
    ],
    "intensityLevels": "Tiered Challenges from Gentle Flirtation to Wild Fantasy",
    "materials": [
      "Velvet-Touch Cardstock",
      "Gilded Edge Foil"
    ],
    "sizes": [
      "54 Cards (Standard Poker Size 8.9cm x 6.4cm)"
    ],
    "colors": [
      {
        "name": "Onyx Black & Gold",
        "hex": "#111827"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-gam-02-onx",
        "productId": "prod-cpl-gam-02",
        "sku": "VL-CPL-GAM-02-ONX",
        "size": "54 Cards",
        "color": "Onyx Black & Gold",
        "colorHex": "#111827",
        "material": "Cardstock",
        "stockQuantity": 42
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-gam-03",
    "title": "Seduction Metal Polyhedral Intimacy Decision Dice Set",
    "slug": "seduction-metal-polyhedral-intimacy-decision-dice-set",
    "subtitle": "Weighted Solid Zinc-Alloy Action, Body Part & Duration Dice Trio in Velvet Box",
    "description": "Cast from heavy zinc alloy with polished mirror gold faces and crisp black enamel engravings. The three dice dictate: Action (Kiss, Caress, Lick, Bite, Massage, Tease), Anatomy (Lips, Neck, Breast, Thigh, Navel, Spine), and Duration (30s, 1m, 2m, 3m, 5m, Wildcard).",
    "story": "Leave your desires to fate with satisfyingly heavy dice that turn spontaneous touch into a thrilling erotic ritual.",
    "basePrice": 38,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Games",
    "images": [
      "/images/products/couples/couples-game-3.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-game-3.jpg",
    "rating": 4.96,
    "reviewCount": 49,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Metal Dice",
      "Erotic Dice",
      "Sensual Game",
      "Weighted Alloy",
      "Date Night"
    ],
    "sensoryFeel": "Heavy, satisfying clink of solid metal dice rolling across the nightstand.",
    "fabricCare": "Wipe with microfiber cloth. Keep in velvet-lined travel tin.",
    "safetyCertifications": [
      "Lead-Free Zinc Alloy",
      "Non-Toxic Enamel Fill"
    ],
    "intensityLevels": "Randomized Intimacy Combinations",
    "materials": [
      "Cast Zinc Alloy",
      "Mirror Gold Electroplate",
      "Enamel Filling"
    ],
    "sizes": [
      "3-Piece Set (20mm Dice)"
    ],
    "colors": [
      {
        "name": "Mirror Gold & Onyx",
        "hex": "#D4AF37"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-gam-03-gld",
        "productId": "prod-cpl-gam-03",
        "sku": "VL-CPL-GAM-03-GLD",
        "size": "3-Piece Set",
        "color": "Mirror Gold & Onyx",
        "colorHex": "#D4AF37",
        "material": "Zinc Alloy",
        "stockQuantity": 36
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-gam-04",
    "title": "Sensual Horizons Multi-Faceted Passion & Action Dice",
    "slug": "sensual-horizons-multi-faceted-passion-action-dice",
    "subtitle": "12-Sided Sculpted Intimacy Polyhedrals with Romantic Location & Position Engravings",
    "description": "A pair of D12 precision polyhedral dice made from pearlescent acrylic with gold ink carvings. One die suggests evocative settings and mood lighting, while the other guides touch, foreplay tempos, and uninhibited positions.",
    "story": "Break repetitive routines with 144 possible combinations that encourage adventurous exploration.",
    "basePrice": 32,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Games",
    "images": [
      "/images/products/couples/couples-game-4.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-game-4.jpg",
    "rating": 4.88,
    "reviewCount": 22,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "D12 Dice",
      "Polyhedral",
      "Erotic Exploration",
      "Fun",
      "Couples Challenge"
    ],
    "sensoryFeel": "Smooth rounded edges with shimmering pearlized luster that rolls cleanly.",
    "fabricCare": "Wash gently with warm soapy water if needed.",
    "safetyCertifications": [
      "BPA-Free Acrylic",
      "Non-Toxic Resin"
    ],
    "intensityLevels": "144 Unique Sensual Combinations",
    "materials": [
      "High-Density Pearlescent Acrylic",
      "Gold Infill Engraving"
    ],
    "sizes": [
      "2-Piece D12 Dice (22mm)"
    ],
    "colors": [
      {
        "name": "Pearl & Gold",
        "hex": "#FEF3C7"
      },
      {
        "name": "Obsidian & Gold",
        "hex": "#1E293B"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-gam-04-prl",
        "productId": "prod-cpl-gam-04",
        "sku": "VL-CPL-GAM-04-PRL",
        "size": "2-Piece Set",
        "color": "Pearl & Gold",
        "colorHex": "#FEF3C7",
        "material": "Pearlescent Acrylic",
        "stockQuantity": 40
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-gam-05",
    "title": "The Lovers' Tarot & Deep Intimacy Bonding Prompt Deck",
    "slug": "the-lovers-tarot-deep-intimacy-bonding-prompt-deck",
    "subtitle": "78 Artistically Illustrated Major & Minor Arcana Archetype Cards for Lovers",
    "description": "An esoteric love tarot system pairing classic Tarot archetypes (The Empress, The Hierophant, The Lovers) with evocative intimacy prompts, sensual rituals, and emotional healing exercises. Includes an opulent guidebook bound in ribbon.",
    "story": "Unravel the mysteries of your romantic destiny and discover unseen layers of soul connection under warm candlelight.",
    "basePrice": 55,
    "discountPrice": 48,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Games",
    "images": [
      "/images/products/couples/couples-game-5.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-game-5.jpg",
    "rating": 4.97,
    "reviewCount": 51,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Tarot Deck",
      "Lovers Tarot",
      "Spiritual Intimacy",
      "Couples Bonding",
      "Romantic Deck"
    ],
    "sensoryFeel": "Heft of 400gsm art cardstock with soft anti-scratch rose petal finish.",
    "fabricCare": "Store in magnetic closure presentation casket.",
    "safetyCertifications": [
      "FSC Certified Recycled Paper",
      "Eco-Friendly Plant Inks"
    ],
    "intensityLevels": "Spiritual, Emotional & Sensual Exploration",
    "materials": [
      "400gsm Heavy Cardstock",
      "Holographic Gold Foil Accents",
      "Cloth-Bound Guidebook"
    ],
    "sizes": [
      "78 Cards + 120-Page Guidebook (12cm x 7cm)"
    ],
    "colors": [
      {
        "name": "Celestial Gold",
        "hex": "#D97706"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-gam-05-cls",
        "productId": "prod-cpl-gam-05",
        "sku": "VL-CPL-GAM-05-CLS",
        "size": "78 Cards Set",
        "color": "Celestial Gold",
        "colorHex": "#D97706",
        "material": "Art Cardstock",
        "stockQuantity": 27
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-vib-01",
    "title": "Harmonie C-Shaped Shared Wearable Intercourse Vibrator",
    "slug": "harmonie-c-shaped-shared-wearable-intercourse-vibrator",
    "subtitle": "Hands-Free Flexible Dual-Motor Silicone Vibrator for Shared Stimulation",
    "description": "Sculpted in an anatomical C-curve designed to be worn during intercourse. The slim internal arm nestles inside against the G-spot while sharing space during penetration, while the external contoured pad presses against the clitoris, stimulating both partners simultaneously.",
    "story": "Engineered to synchronize climaxes, Harmonie bridges partner bodies in shared harmonic waves of pleasure.",
    "basePrice": 160,
    "discountPrice": 140,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Couples Vibrators",
    "images": [
      "/images/products/couples/couples-vibe-1.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-vibe-1.jpg",
    "rating": 4.97,
    "reviewCount": 74,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Couples Vibrator",
      "Wearable",
      "Hands Free",
      "Dual Motor",
      "Intercourse Vibrator"
    ],
    "sensoryFeel": "Velvet-touch flexible silicone that bends comfortably with body heat and movement.",
    "fabricCare": "Wash with antibacterial toy cleaner and warm water. Submersible IPX7 waterproof.",
    "safetyCertifications": [
      "Medical-Grade Silicone",
      "FDA Compliant",
      "IPX7 Waterproof",
      "Latex & Phthalate Free"
    ],
    "intensityLevels": "10 Synchronized Vibration Modes with Wireless Remote Control",
    "materials": [
      "Medical-Grade Silky Silicone",
      "Flexible Memory Alloy Spine"
    ],
    "sizes": [
      "One Size Fits Most (Flexible 7.5cm x 4.2cm)"
    ],
    "colors": [
      {
        "name": "Plum Noir",
        "hex": "#581C87"
      },
      {
        "name": "Blush Coral",
        "hex": "#F43F5E"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-vib-01-plm",
        "productId": "prod-cpl-vib-01",
        "sku": "VL-CPL-VIB-01-PLM",
        "size": "One Size",
        "color": "Plum Noir",
        "colorHex": "#581C87",
        "material": "Medical Silicone",
        "stockQuantity": 25,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-vib-02",
    "title": "Veloura Tango Wireless Precision Partner Bullet Massager",
    "slug": "veloura-tango-wireless-precision-partner-bullet-massager",
    "subtitle": "Deep Sonic Resonance Bullet with 15m Wireless RF Remote & Panty Clip",
    "description": "A discreet, powerhouse mini bullet encased in satin silicone. Packs astonishing low-frequency thrumming power into a compact 3-inch profile. Includes a magnetic undergarment clip and a pocket-sized wireless remote for teasing in public dining or private bedroom play.",
    "story": "Surrender control to your lover with an invisible companion that whispers secrets in pure vibration across a crowded room.",
    "basePrice": 98,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Couples Vibrators",
    "images": [
      "/images/products/couples/couples-vibe-2.jpg",
      "/images/products/couples/couples-vibe-2-alt.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-vibe-2-alt.jpg",
    "rating": 4.92,
    "reviewCount": 46,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Bullet Vibrator",
      "Wireless Remote",
      "Partner Control",
      "Panty Toy",
      "Quiet"
    ],
    "sensoryFeel": "Ultra-concentrated, rumbling vibrational focus with smooth satin glide.",
    "fabricCare": "Wash bullet with warm water and soap; keep remote dry.",
    "safetyCertifications": [
      "CE Certified",
      "Medical-Grade Body Safe Silicone",
      "IPX7 Waterproof"
    ],
    "intensityLevels": "8 Vibration Patterns & 4 Speed Intensities (Remote Controlled)",
    "materials": [
      "Liquid Silicone Coating",
      "ABS Core",
      "Gold Accent Button"
    ],
    "sizes": [
      "Compact Bullet (7.8cm x 2.2cm)"
    ],
    "colors": [
      {
        "name": "Sapphire Azure",
        "hex": "#2563EB"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#111827"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-vib-02-blu",
        "productId": "prod-cpl-vib-02",
        "sku": "VL-CPL-VIB-02-BLU",
        "size": "Compact",
        "color": "Sapphire Azure",
        "colorHex": "#2563EB",
        "material": "Liquid Silicone",
        "stockQuantity": 31,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-vib-03",
    "title": "Eros Velvet Silicone Vibrating Erection Ring for Couples",
    "slug": "eros-velvet-silicone-vibrating-erection-ring-couples",
    "subtitle": "Dual-Pleasure Constriction Band with Contoured Clitoral Stimulator Head",
    "description": "Engineered from ultra-stretchy, velvet-soft silicone that fits comfortably around the base of the penis. Maintains firmer, longer-lasting erections while its ribbed vibrating head buzzes directly against her clitoris with every thrust.",
    "story": "Heighten stamina and shared intimacy with a sleek, whisper-quiet device that intensifies every touch for both partners.",
    "basePrice": 75,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Couples Vibrators",
    "images": [
      "/images/products/couples/couples-vibe-3.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-vibe-3.jpg",
    "rating": 4.9,
    "reviewCount": 35,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Vibrating Cock Ring",
      "Couples Ring",
      "Stamina",
      "Clitoral Buzzer",
      "Stretch Silicone"
    ],
    "sensoryFeel": "Firm, comfortable constriction with energetic, tickling surface vibrations.",
    "fabricCare": "Wash with antibacterial soap after each use. Store dry.",
    "safetyCertifications": [
      "100% Body-Safe Stretch Silicone",
      "Hypoallergenic",
      "IPX8 Waterproof"
    ],
    "intensityLevels": "7 Vibration Rhythms & 3 Continuous Speeds",
    "materials": [
      "Medical-Grade Super-Stretch Silicone"
    ],
    "sizes": [
      "Flexible Universal Stretch (Inner Diameter 3.2cm)"
    ],
    "colors": [
      {
        "name": "Slate Teal",
        "hex": "#0D9488"
      },
      {
        "name": "Onyx Noir",
        "hex": "#1F2937"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-vib-03-tea",
        "productId": "prod-cpl-vib-03",
        "sku": "VL-CPL-VIB-03-TEA",
        "size": "Universal",
        "color": "Slate Teal",
        "colorHex": "#0D9488",
        "material": "Stretch Silicone",
        "stockQuantity": 38,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-vib-04",
    "title": "Symphonie Sculptural Dual Stimulation Partner Contour Wand",
    "slug": "symphonie-sculptural-dual-stimulation-partner-contour-wand",
    "subtitle": "Ergonomic Designer Silicone Massager with Twin Motor Synchrony",
    "description": "A masterpiece in pleasure engineering crafted with a sculptural, curved silhouette. Boasts twin high-torque motors placed at opposing ends to facilitate mutual massage, erogenous exploration, and shared positions.",
    "story": "Sculpted like modern art, Symphonie bridges the boundary between sculptural decor and profound physical connection.",
    "basePrice": 145,
    "discountPrice": 125,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Couples Vibrators",
    "images": [
      "/images/products/couples/couples-vibe-4.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-vibe-4.jpg",
    "rating": 4.95,
    "reviewCount": 42,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Designer Toy",
      "Partner Wand",
      "Sculptural",
      "Dual End",
      "Waterproof"
    ],
    "sensoryFeel": "Luxurious velvety matte silicone with deep, rumbling non-buzzy resonances.",
    "fabricCare": "Rinse with warm water and foam cleanser. Keep in velvet keepsake bag.",
    "safetyCertifications": [
      "Medical Silicone",
      "CE & RoHS Certified",
      "Submersible IPX8"
    ],
    "intensityLevels": "10 Wave Frequencies with Independent End Controls",
    "materials": [
      "Medical Silicone",
      "24K Gold Electroplated Base Ring"
    ],
    "sizes": [
      "One Size (19cm x 4.5cm)"
    ],
    "colors": [
      {
        "name": "Blush Rose",
        "hex": "#FB7185"
      },
      {
        "name": "Pure Onyx",
        "hex": "#18181B"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-vib-04-ros",
        "productId": "prod-cpl-vib-04",
        "sku": "VL-CPL-VIB-04-ROS",
        "size": "One Size",
        "color": "Blush Rose",
        "colorHex": "#FB7185",
        "material": "Medical Silicone",
        "stockQuantity": 20,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-vib-05",
    "title": "Duo Amour Ergonomic Clitoral & G-Spot Shared Harmony Massager",
    "slug": "duo-amour-ergonomic-clitoral-g-spot-shared-harmony-massager",
    "subtitle": "Contoured Curved Tip with Broad Stimulation Wings for Partner Intercourse",
    "description": "Designed with dual-winged contact pads that gently flank the labia while the arched tip targets the G-spot. Designed to fit flush against the body, allowing partners to embrace closely during sensual lovemaking without awkward positioning.",
    "story": "Duo Amour dissolves barriers between two lovers, amplifying the warmth and depth of skin-to-skin communion.",
    "basePrice": 130,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Couples Vibrators",
    "images": [
      "/images/products/couples/couples-vibe-5.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-vibe-5.jpg",
    "rating": 4.89,
    "reviewCount": 28,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Couples Massager",
      "Flanking Wings",
      "Whisper Quiet",
      "Intimacy"
    ],
    "sensoryFeel": "Gentle, enveloping silicone hug with continuous waves of deep vibration.",
    "fabricCare": "Submersible waterproof; clean with botanical toy spray.",
    "safetyCertifications": [
      "FDA Medical Grade Silicone",
      "IPX7 Waterproof"
    ],
    "intensityLevels": "9 Harmonic Rhythms",
    "materials": [
      "Medical-Grade Silicone",
      "Flexible Polymer Core"
    ],
    "sizes": [
      "One Size (14.5cm x 4cm)"
    ],
    "colors": [
      {
        "name": "Lavender Mist",
        "hex": "#A855F7"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-vib-05-lav",
        "productId": "prod-cpl-vib-05",
        "sku": "VL-CPL-VIB-05-LAV",
        "size": "One Size",
        "color": "Lavender Mist",
        "colorHex": "#A855F7",
        "material": "Medical Silicone",
        "stockQuantity": 24,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-oil-01",
    "title": "Aura Botanical Tingling Arousal Elixir in Amber Dropper (50ml)",
    "slug": "aura-botanical-tingling-arousal-elixir-amber-dropper",
    "subtitle": "Organic Peppermint, Cinnamon Bark & Damiana Infused Intimate Drops",
    "description": "A few warming drops applied to intimate zones awaken heightened sensitivity, natural lubrication, and a thrilling warm-to-cool tingling sensation. Handcrafted with organic jojoba, sweet almond oil, and cold-pressed botanical extracts in UV-protective amber glass.",
    "story": "Formulated to intensify blood flow and ignite spontaneous desire, Aura turns delicate touch into electric arousal.",
    "basePrice": 46,
    "discountPrice": 38,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Enhancement Oils",
    "images": [
      "/images/products/couples/couples-oil-1.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-oil-1.jpg",
    "rating": 4.98,
    "reviewCount": 84,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Arousal Oil",
      "Tingling Elixir",
      "Botanical Drops",
      "Amber Dropper",
      "Organic"
    ],
    "sensoryFeel": "Velvety golden oil that initiates an electric, pulsing warmth and cooling mint tingle.",
    "fabricCare": "Store in cool, dark place away from heat. Apply 2-3 drops to intimate zones.",
    "safetyCertifications": [
      "100% Certified Organic Ingredients",
      "Edible & Body-Safe",
      "Glycerin & Paraben Free"
    ],
    "intensityLevels": "Dynamic Warming-Cooling Waveform",
    "materials": [
      "Organic Golden Jojoba",
      "Damiana Leaf Extract",
      "Amber Glass Pipette Bottle"
    ],
    "sizes": [
      "50ml / 1.7 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Glass",
        "hex": "#92400E"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-oil-01-50m",
        "productId": "prod-cpl-oil-01",
        "sku": "VL-CPL-OIL-01-50M",
        "size": "50ml",
        "color": "Amber Glass",
        "colorHex": "#92400E",
        "material": "Organic Botanical Elixir",
        "stockQuantity": 62
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-oil-02",
    "title": "Golden Nectar Warming Sensual Intimacy Body Oil (100ml)",
    "slug": "golden-nectar-warming-sensual-intimacy-body-oil",
    "subtitle": "Therapeutic Warmth-Activating Passionfruit & Ginger Massage Elixir",
    "description": "Blended with cold-pressed maracuja passionfruit seed oil, warming ginger root extract, and vitamin E. Heats gently upon contact with skin and deepens in warmth during passionate massage or soft breath blowing.",
    "story": "Indulge in decadent full-body intimacy as golden botanical nectar melts tension and envelopes the senses in intoxicating warmth.",
    "basePrice": 58,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Enhancement Oils",
    "images": [
      "/images/products/couples/couples-oil-2.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-oil-2.jpg",
    "rating": 4.96,
    "reviewCount": 57,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Warming Body Oil",
      "Sensual Massage",
      "Ginger & Passionfruit",
      "Golden Nectar"
    ],
    "sensoryFeel": "Silk-like glide with a soothing, slow-release internal heat that responds to breath.",
    "fabricCare": "For external sensual massage and intimate skin. Rinse easily with warm water.",
    "safetyCertifications": [
      "100% Plant Derived",
      "Non-Greasy Rapid Absorption",
      "Dermatologist Tested"
    ],
    "intensityLevels": "Breath-Activated Gentle Radiant Heat",
    "materials": [
      "Cold-Pressed Maracuja Oil",
      "Ginger Root Extract",
      "Clear Glass Dispenser"
    ],
    "sizes": [
      "100ml / 3.4 fl oz"
    ],
    "colors": [
      {
        "name": "Golden Elixir",
        "hex": "#F59E0B"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-oil-02-100",
        "productId": "prod-cpl-oil-02",
        "sku": "VL-CPL-OIL-02-100",
        "size": "100ml",
        "color": "Golden Elixir",
        "colorHex": "#F59E0B",
        "material": "Botanical Warming Oil",
        "stockQuantity": 48
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-oil-03",
    "title": "Rose Sauvage Wild Damask Rose & Sandalwood Massage Drops (50ml)",
    "slug": "rose-sauvage-wild-damask-rose-sandalwood-massage-drops",
    "subtitle": "Pure Steam-Distilled Rose Otto & Mysore Sandalwood Sensual Perfume Oil",
    "description": "An exquisite aphrodisiac oil crafted with rare Turkish Damask rose otto and Mysore sandalwood in a meadowfoam seed oil base. Doubles as an intoxicating intimate pulse-point perfume and full-body sensory massage elixir.",
    "story": "Used for millennia by royalty to bewitch and entice, Rose Sauvage casts an unforgettable aura of romance and luxury.",
    "basePrice": 65,
    "discountPrice": 55,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Enhancement Oils",
    "images": [
      "/images/products/couples/couples-oil-3.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-oil-3.jpg",
    "rating": 4.94,
    "reviewCount": 39,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Rose Otto",
      "Sandalwood",
      "Aphrodisiac Oil",
      "Sensual Fragrance",
      "Pulse Point"
    ],
    "sensoryFeel": "Featherlight non-pore clogging oil that leaves skin luminous and intoxicatingly scented.",
    "fabricCare": "Dispense 3-4 drops onto pulse points or warm between palms for massage.",
    "safetyCertifications": [
      "Clean Botanical Formulation",
      "Synthetic Fragrance Free",
      "Cruelty Free"
    ],
    "intensityLevels": "Aromatic Sensual Seduction",
    "materials": [
      "Turkish Rose Otto",
      "Mysore Sandalwood Extract",
      "Amber Glass Dropper"
    ],
    "sizes": [
      "50ml / 1.7 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Pipette",
        "hex": "#B45309"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-oil-03-50m",
        "productId": "prod-cpl-oil-03",
        "sku": "VL-CPL-OIL-03-50M",
        "size": "50ml",
        "color": "Amber Pipette",
        "colorHex": "#B45309",
        "material": "Pure Rose & Sandalwood Oil",
        "stockQuantity": 30
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-oil-04",
    "title": "Himalayan Spikenard & Golden Jojoba Intimate Bath Elixir (100ml)",
    "slug": "himalayan-spikenard-golden-jojoba-intimate-bath-elixir",
    "subtitle": "Ancient Aphrodisiac Bath & Body Oil with Wax-Sealed Apothecary Flacon",
    "description": "Infused with rare Nepalese spikenard root, amber resin, and Moroccan argan oil. Disperses into warm bathwater to create a milk-soft moisturizing soak, or smoothed directly onto damp skin to leave a supple, velvet sheen.",
    "story": "Spikenard was prized in antiquity as the holy ointment of lovers, radiating a deeply grounding, hypnotic earthy sweetness.",
    "basePrice": 52,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Enhancement Oils",
    "images": [
      "/images/products/couples/couples-oil-4.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-oil-4.jpg",
    "rating": 4.92,
    "reviewCount": 26,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Bath Elixir",
      "Spikenard",
      "Apothecary Flacon",
      "Couples Bath",
      "Nourishing"
    ],
    "sensoryFeel": "Ultra-nourishing, rich bath hydration that envelopes the skin in velvet softness.",
    "fabricCare": "Pour two capfuls into running bath or apply directly to damp skin after bathing.",
    "safetyCertifications": [
      "Wild-Harvested Herbs",
      "Preservative Free",
      "Vegan"
    ],
    "intensityLevels": "Relaxing Sensory Grounding",
    "materials": [
      "Spikenard Essential Extract",
      "Cold-Pressed Argan Oil",
      "Wax-Sealed Flacon"
    ],
    "sizes": [
      "100ml / 3.4 fl oz"
    ],
    "colors": [
      {
        "name": "Vintage Apothecary",
        "hex": "#78350F"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-oil-04-100",
        "productId": "prod-cpl-oil-04",
        "sku": "VL-CPL-OIL-04-100",
        "size": "100ml",
        "color": "Vintage Apothecary",
        "colorHex": "#78350F",
        "material": "Spikenard & Argan Oil",
        "stockQuantity": 28
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-cpl-oil-05",
    "title": "Botanical Clitoral Arousal & Orgasm Amplification Drops (30ml)",
    "slug": "botanical-clitoral-arousal-orgasm-amplification-drops",
    "subtitle": "Targeted High-Potency Botanical Serum for Accelerated & Intensified Climax",
    "description": "A clinical-strength natural arousal serum enriched with l-arginine, ylang ylang, and organic peppermint leaf. Accelerates micro-circulation and enhances natural touch sensitivity within 90 seconds of application.",
    "story": "Specially developed to overcome arousal delays, these drops amplify nerve response for easier, more explosive climaxes.",
    "basePrice": 44,
    "categoryId": "cat-couples",
    "categorySlug": "couples",
    "categoryName": "Couples",
    "subcategory": "Enhancement Oils",
    "images": [
      "/images/products/couples/couples-oil-5.jpg"
    ],
    "secondaryImage": "/images/products/couples/couples-oil-5.jpg",
    "rating": 4.97,
    "reviewCount": 65,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "Orgasm Drops",
      "Amplification Serum",
      "Clitoral Sensitivity",
      "Fast Acting"
    ],
    "sensoryFeel": "Intense warming flutter that tingles and heightens every flutter of touch.",
    "fabricCare": "Apply 1-2 concentrated drops directly onto clitoris; massage gently.",
    "safetyCertifications": [
      "Latex Safe",
      "100% Body Safe",
      "OBGYN Tested",
      "pH 4.0 Balanced"
    ],
    "intensityLevels": "High-Potency Arousal Amplification",
    "materials": [
      "L-Arginine",
      "Ylang Ylang Extra",
      "Frosted Amber Dropper"
    ],
    "sizes": [
      "30ml / 1.0 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Dropper",
        "hex": "#92400E"
      }
    ],
    "variants": [
      {
        "id": "var-cpl-oil-05-30m",
        "productId": "prod-cpl-oil-05",
        "sku": "VL-CPL-OIL-05-30M",
        "size": "30ml",
        "color": "Amber Dropper",
        "colorHex": "#92400E",
        "material": "Concentrated Botanical Serum",
        "stockQuantity": 55
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-pch-01",
    "title": "Mulberry Silk Lingerie & Intimates Drawstring Pouch",
    "slug": "mulberry-silk-lingerie-intimates-drawstring-pouch",
    "subtitle": "Grade 6A 22 Momme Pure Silk Antimicrobial Travel Bag with Braided Cord",
    "description": "Handcrafted from heavyweight 22 Momme natural mulberry silk that protects delicate lace lingerie, corsets, and silicone intimate devices from friction, static, and dust. Features hand-knotted silk drawstring cords.",
    "story": "Designed as a sacred sanctuary for fine garments and intimate treasures, preserving delicate textures in pure silk embrace.",
    "basePrice": 38,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Storage Pouches",
    "images": [
      "/images/products/accessories/plush-velvet-drawstring-pouch-v2.jpg",
      "/images/products/accessories/plush-velvet-drawstring-pouch-v2-alt.jpg"
    ],
    "secondaryImage": "/images/products/accessories/plush-velvet-drawstring-pouch-v2-alt.jpg",
    "rating": 4.95,
    "reviewCount": 42,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Silk Pouch",
      "Mulberry Silk",
      "Storage Bag",
      "Travel Case",
      "Discreet"
    ],
    "sensoryFeel": "Lustrous, frictionless silk that glides like water in hand.",
    "fabricCare": "Hand wash in cold water with delicate silk wash. Lay flat to dry.",
    "safetyCertifications": [
      "OEKO-TEX Certified Silk",
      "Hypoallergenic",
      "Dust-Proof"
    ],
    "intensityLevels": "Protective Storage",
    "materials": [
      "100% 22 Momme Mulberry Silk",
      "Braided Silk Cord"
    ],
    "sizes": [
      "Medium (28cm x 18cm)"
    ],
    "colors": [
      {
        "name": "Pearl Ivory",
        "hex": "#FFFBEB"
      },
      {
        "name": "Midnight Onyx",
        "hex": "#111827"
      }
    ],
    "variants": [
      {
        "id": "var-acc-pch-01-ivo",
        "productId": "prod-acc-pch-01",
        "sku": "VL-ACC-PCH-01-IVO",
        "size": "Medium",
        "color": "Pearl Ivory",
        "colorHex": "#FFFBEB",
        "material": "Mulberry Silk",
        "stockQuantity": 45
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-pch-04",
    "title": "Tuscan Saddle Leather Structured Travel Keepsake Case",
    "slug": "tuscan-saddle-leather-structured-travel-keepsake-case",
    "subtitle": "Rigid Vegetable-Tanned Leather Case with Heavy Brass Zipper",
    "description": "A crush-proof, structured travel case crafted from 100% full-grain Tuscan saddle leather with reinforced sidewalls. Protects fragile glass wands, metal plugs, and luxury electronic devices in luggage.",
    "story": "Engineered for discerning globetrotters who demand uncompromising protection and bespoke leathercraft for their private collection.",
    "basePrice": 95,
    "discountPrice": 85,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Storage Pouches",
    "images": [
      "/images/products/accessories/saddle-leather-travel-case.jpg",
      "/images/products/accessories/saddle-leather-travel-case-alt.jpg"
    ],
    "secondaryImage": "/images/products/accessories/saddle-leather-travel-case-alt.jpg",
    "rating": 4.98,
    "reviewCount": 47,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Leather Travel Case",
      "Structured Case",
      "Full Grain Leather",
      "Crush Proof",
      "Discreet"
    ],
    "sensoryFeel": "Aromatic, rich full-grain leather with firm, protective structural integrity.",
    "fabricCare": "Treat with natural leather conditioner once per year.",
    "safetyCertifications": [
      "Vegetable Tanned Leather",
      "Heavy-Duty YKK Brass Hardware"
    ],
    "intensityLevels": "Crush-Resistant Travel Armor",
    "materials": [
      "Full-Grain Tuscan Saddle Leather",
      "Suede Interior Lining",
      "Solid Brass Zipper"
    ],
    "sizes": [
      "Travel Dimensions (22cm x 12cm x 6cm)"
    ],
    "colors": [
      {
        "name": "Cognac Saddle",
        "hex": "#78350F"
      },
      {
        "name": "Obsidian Black",
        "hex": "#0F172A"
      }
    ],
    "variants": [
      {
        "id": "var-acc-pch-04-cog",
        "productId": "prod-acc-pch-04",
        "sku": "VL-ACC-PCH-04-COG",
        "size": "Travel",
        "color": "Cognac Saddle",
        "colorHex": "#78350F",
        "material": "Tuscan Leather",
        "stockQuantity": 24
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-cln-01",
    "title": "Botanical Anti-Microbial Rapid Mist Cleansing Spray (150ml)",
    "slug": "botanical-anti-microbial-rapid-mist-cleansing-spray-150ml",
    "subtitle": "Tea Tree, Lavender & Peppermint Rapid Sanitizing Fine-Mist Atomizer",
    "description": "An alcohol-free, rinse-optional sanitizing spray formulated with Australian tea tree hydrosol and organic French lavender. Destroys 99.9% of bacteria within 60 seconds without degrading body-safe silicone, borosilicate glass, or stainless steel.",
    "story": "Effortless cleanliness meets spa-like aroma, keeping your pleasure collection impeccably fresh and sterile.",
    "basePrice": 32,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Toy Cleaners",
    "images": [
      "/images/products/accessories/botanical-cleansing-mist-spray.jpg",
      "/images/products/accessories/botanical-cleansing-mist-spray-alt.jpg"
    ],
    "secondaryImage": "/images/products/accessories/botanical-cleansing-mist-spray-alt.jpg",
    "rating": 4.97,
    "reviewCount": 88,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Toy Cleaner",
      "Mist Spray",
      "Tea Tree",
      "Alcohol Free",
      "Silicone Safe"
    ],
    "sensoryFeel": "Fine refreshing mist with a crisp, herbal lavender and tea tree bouquet.",
    "fabricCare": "Spray directly on device, let sit 60 seconds, wipe dry with clean cloth.",
    "safetyCertifications": [
      "100% Silicone Safe",
      "Alcohol & Paraben Free",
      "Antibacterial 99.9%"
    ],
    "intensityLevels": "Rapid 60-Second Sanitization",
    "materials": [
      "Tea Tree Hydrosol",
      "Lavender Distillate",
      "Amber Glass Atomizer"
    ],
    "sizes": [
      "150ml / 5.1 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Mist",
        "hex": "#78350F"
      }
    ],
    "variants": [
      {
        "id": "var-acc-cln-01-150",
        "productId": "prod-acc-cln-01",
        "sku": "VL-ACC-CLN-01-150",
        "size": "150ml",
        "color": "Amber Mist",
        "colorHex": "#78350F",
        "material": "Botanical Sanitizing Mist",
        "stockQuantity": 65
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-cln-03",
    "title": "Individually Wrapped Botanical Toy & Body Sanitizing Wipes (Box of 30)",
    "slug": "individually-wrapped-botanical-toy-body-sanitizing-wipes-30",
    "subtitle": "Biodegradable Bamboo Wipes Infused with Chamomile, Aloe & Chlorhexidine",
    "description": "Pocket-sized individually sealed wipes designed for fast, discreet cleaning before and after intimate moments. Formulated with soothing chamomile and antibacterial agents that clean toys and sensitive skin alike.",
    "story": "Travel-ready hygiene that slips invisibly into purses, pockets, and weekend bags for effortless cleanup anywhere.",
    "basePrice": 28,
    "discountPrice": 24,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Toy Cleaners",
    "images": [
      "/images/products/accessories/botanical-sanitizing-wipes-box.jpg",
      "/images/products/accessories/botanical-sanitizing-wipes-box-alt.jpg"
    ],
    "secondaryImage": "/images/products/accessories/botanical-sanitizing-wipes-box-alt.jpg",
    "rating": 4.96,
    "reviewCount": 59,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Travel Wipes",
      "Individually Sealed",
      "Bamboo Fiber",
      "Discreet Hygiene",
      "Dual Use"
    ],
    "sensoryFeel": "Ultra-soft, thick textured bamboo cloth saturated with soothing, non-sticky moisture.",
    "fabricCare": "Single-use biodegradable wipe. Dispose in bin; do not flush.",
    "safetyCertifications": [
      "100% Biodegradable Bamboo",
      "Hypoallergenic",
      "pH 4.5 Balanced"
    ],
    "intensityLevels": "Instant On-The-Go Hygiene",
    "materials": [
      "Natural Bamboo Fiber",
      "Chamomile Extract",
      "Foil Seal Packet"
    ],
    "sizes": [
      "Box of 30 Sealed Packets"
    ],
    "colors": [
      {
        "name": "Minimalist White",
        "hex": "#FFFFFF"
      }
    ],
    "variants": [
      {
        "id": "var-acc-cln-03-bx",
        "productId": "prod-acc-cln-03",
        "sku": "VL-ACC-CLN-03-BX",
        "size": "30 Packets",
        "color": "Minimalist White",
        "colorHex": "#FFFFFF",
        "material": "Bamboo Wipes",
        "stockQuantity": 80
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-oil-01",
    "title": "Aura Pure Botanical Intimacy & Sensual Massage Elixir (100ml)",
    "slug": "aura-pure-botanical-intimacy-sensual-massage-elixir-100ml",
    "subtitle": "Cold-Pressed Sweet Almond, Golden Jojoba & Ylang Ylang Sensual Oil",
    "description": "Our signature whole-body massage nectar. Formulated with cold-pressed organic sweet almond, golden jojoba, and therapeutic Madagascar ylang ylang. Glides effortlessly across the skin, leaving a satin non-greasy sheen and delicate floral aroma.",
    "story": "Formulated to dissolve muscle tension and awaken cutaneous sensitivity during slow, passionate touch.",
    "basePrice": 54,
    "discountPrice": 46,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Body Oils",
    "images": [
      "/images/products/accessories/acc-oil-1.jpg"
    ],
    "secondaryImage": "/images/products/accessories/acc-oil-1.jpg",
    "rating": 4.98,
    "reviewCount": 94,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Botanical Oil",
      "Sensual Massage",
      "Ylang Ylang",
      "Jojoba",
      "Best Seller"
    ],
    "sensoryFeel": "Velvet slip that absorbs smoothly into skin without tacky residue or staining linens.",
    "fabricCare": "Warm several drops between palms before smoothing over partner’s body.",
    "safetyCertifications": [
      "100% Plant Based",
      "Non-Comedogenic",
      "Cruelty Free",
      "Dermatologist Tested"
    ],
    "intensityLevels": "Full-Body Sensory Hydration",
    "materials": [
      "Sweet Almond Oil",
      "Golden Jojoba Seed Oil",
      "Ylang Ylang Flower Oil",
      "Amber Glass Flacon"
    ],
    "sizes": [
      "100ml / 3.4 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Flacon",
        "hex": "#92400E"
      }
    ],
    "variants": [
      {
        "id": "var-acc-oil-01-100",
        "productId": "prod-acc-oil-01",
        "sku": "VL-ACC-OIL-01-100",
        "size": "100ml",
        "color": "Amber Flacon",
        "colorHex": "#92400E",
        "material": "Organic Body Oil",
        "stockQuantity": 70
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-oil-03",
    "title": "French Bourbon Vanilla & Mysore Sandalwood Sensual Perfume Oil (50ml)",
    "slug": "french-bourbon-vanilla-mysore-sandalwood-sensual-perfume-oil-50ml",
    "subtitle": "Artisanal Pulse-Point Perfume & Intimacy Oil in Luxury Keepsake Box",
    "description": "A decadent concentration of organic Madagascar vanilla planifolia infused in warm Indian Mysore sandalwood and fractionated coconut oil. Blends with personal skin chemistry to create an intoxicating, irresistible intimate scent.",
    "story": "Warm, sensual, and universally alluring, this perfume oil turns the neck, wrists, and collarbone into irresistible magnets.",
    "basePrice": 68,
    "discountPrice": 58,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Body Oils",
    "images": [
      "/images/products/accessories/acc-oil-3.jpg"
    ],
    "secondaryImage": "/images/products/accessories/acc-oil-3.jpg",
    "rating": 4.97,
    "reviewCount": 52,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Perfume Oil",
      "Bourbon Vanilla",
      "Sandalwood",
      "Pulse Point",
      "Luxury Flacon"
    ],
    "sensoryFeel": "Hypnotic, warm balsamic sweetness with smooth velvety dry-down.",
    "fabricCare": "Touch dropper wand to pulse points or mix with body cream.",
    "safetyCertifications": [
      "Alcohol-Free Pure Oil",
      "Phthalate Free",
      "Long-Lasting 12hr Wear"
    ],
    "intensityLevels": "Intoxicating Fragrance Projection",
    "materials": [
      "Bourbon Vanilla Bean Extract",
      "Sandalwood Oil",
      "Art Deco Glass Flacon"
    ],
    "sizes": [
      "50ml / 1.7 fl oz"
    ],
    "colors": [
      {
        "name": "Vintage Flacon",
        "hex": "#D97706"
      }
    ],
    "variants": [
      {
        "id": "var-acc-oil-03-50m",
        "productId": "prod-acc-oil-03",
        "sku": "VL-ACC-OIL-03-50M",
        "size": "50ml",
        "color": "Vintage Flacon",
        "colorHex": "#D97706",
        "material": "Pure Perfume Oil",
        "stockQuantity": 35
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-oil-04",
    "title": "Cold-Pressed Virgin Organic Golden Jojoba Massage Oil (100ml)",
    "slug": "cold-pressed-virgin-organic-golden-jojoba-massage-oil-100ml",
    "subtitle": "100% Unrefined Pure Simmondsia Chinensis Seed Oil with Pump Cap",
    "description": "The purest single-ingredient botanical oil in our collection. Chemically identical to human skin sebum, golden jojoba absorbs effortlessly to hydrate sensitive intimate tissues without clogging pores or disrupting natural pH balance.",
    "story": "Pure minimalism for purists—one pristine desert botanical, cold-pressed to perfection.",
    "basePrice": 42,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Body Oils",
    "images": [
      "/images/products/accessories/acc-oil-4.jpg"
    ],
    "secondaryImage": "/images/products/accessories/acc-oil-4.jpg",
    "rating": 4.93,
    "reviewCount": 34,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Jojoba Oil",
      "Single Ingredient",
      "Virgin Organic",
      "Pure Moisture",
      "Hypoallergenic"
    ],
    "sensoryFeel": "Clean, neutral glide that soothes irritated skin and leaves zero oily film.",
    "fabricCare": "Dispense 2-3 pumps for full body massage or targeted skin hydration.",
    "safetyCertifications": [
      "USDA Organic Certified",
      "100% Unrefined",
      "Zero Preservatives"
    ],
    "intensityLevels": "Natural Restorative Moisture",
    "materials": [
      "100% Pure Organic Jojoba Oil",
      "UV Protective Bottle"
    ],
    "sizes": [
      "100ml / 3.4 fl oz"
    ],
    "colors": [
      {
        "name": "Golden Jojoba",
        "hex": "#CA8A04"
      }
    ],
    "variants": [
      {
        "id": "var-acc-oil-04-100",
        "productId": "prod-acc-oil-04",
        "sku": "VL-ACC-OIL-04-100",
        "size": "100ml",
        "color": "Golden Jojoba",
        "colorHex": "#CA8A04",
        "material": "Pure Jojoba Oil",
        "stockQuantity": 50
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-lub-01",
    "title": "Silken Touch Multi-Molecular Hyaluronic Water-Based Lubricant in Amber Pump (200ml)",
    "slug": "silken-touch-hyaluronic-water-based-lubricant-amber-pump-200ml",
    "subtitle": "Triple-Weight Hyaluronic Acid & Organic Aloe Vera in Glass Dispenser Flacon",
    "description": "Our award-winning daily intimate lubricant. Formulated with three molecular weights of hyaluronic acid that deliver sustained, frictionless cushion and hydration without stickiness. 100% condom and toy safe, rinsing cleanly with water.",
    "story": "Engineered to mirror the body’s most luxurious natural moisture, elevating touch into effortless glide.",
    "basePrice": 44,
    "discountPrice": 38,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Lubricants",
    "images": [
      "/images/products/accessories/silken-touch-hyaluronic-lube-amber-pump.jpg",
      "/images/products/accessories/silken-touch-hyaluronic-lube-amber-pump-detail.jpg"
    ],
    "secondaryImage": "/images/products/accessories/silken-touch-hyaluronic-lube-amber-pump-detail.jpg",
    "rating": 4.99,
    "reviewCount": 112,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Hyaluronic Lubricant",
      "Water Based",
      "Toy Safe",
      "Condom Compatible",
      "Best Seller"
    ],
    "sensoryFeel": "Weightless, ultra-slick moisture cushion that never gets sticky or tacky.",
    "fabricCare": "Dispense 1-2 pumps as needed. Reapply freely. Rinses effortlessly with warm water.",
    "safetyCertifications": [
      "pH Balanced (3.8 - 4.2)",
      "Toy Safe & Latex Safe",
      "Glycerin Free",
      "Paraben Free"
    ],
    "intensityLevels": "Long-Lasting Frictionless Cushion",
    "materials": [
      "Hyaluronic Acid",
      "Aloe Leaf Juice",
      "Amber Glass Pump Bottle"
    ],
    "sizes": [
      "200ml / 6.8 fl oz"
    ],
    "colors": [
      {
        "name": "Amber Glass Pump",
        "hex": "#78350F"
      }
    ],
    "variants": [
      {
        "id": "var-acc-lub-01-200",
        "productId": "prod-acc-lub-01",
        "sku": "VL-ACC-LUB-01-200",
        "size": "200ml",
        "color": "Amber Glass Pump",
        "colorHex": "#78350F",
        "material": "Hyaluronic Water-Based Formula",
        "stockQuantity": 85
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-acc-lub-05",
    "title": "Sparkling Champagne & Wild Strawberry Organic Edible Flavored Glide (100ml)",
    "slug": "sparkling-champagne-wild-strawberry-organic-edible-flavored-glide-100ml",
    "subtitle": "Naturally Sweetened Gourmet Intimate Gel with French Strawberry Essence",
    "description": "A decadent water-based intimate lubricant flavored with natural organic strawberry distillate and subtle notes of vintage brut champagne. Naturally sweetened with plant stevia—zero sugar, zero artificial sweeteners, zero sticky mess.",
    "story": "Delight the palate during sensual oral foreplay with the effervescent romance of fresh strawberries and champagne.",
    "basePrice": 36,
    "discountPrice": 30,
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Lubricants",
    "images": [
      "/images/products/accessories/acc-lub-5.jpg"
    ],
    "secondaryImage": "/images/products/accessories/acc-lub-5.jpg",
    "rating": 4.96,
    "reviewCount": 68,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Flavored Lube",
      "Edible Lubricant",
      "Champagne & Strawberry",
      "Organic",
      "Foreplay"
    ],
    "sensoryFeel": "Smooth delicious glide with authentic sweet berry and bubbly wine taste.",
    "fabricCare": "100% water soluble and safe to ingest. Zero sugar or yeast risk.",
    "safetyCertifications": [
      "Sugar Free & Glycerin Free",
      "Organic Food Grade Flavors",
      "pH 4.0 Safe"
    ],
    "intensityLevels": "Gourmet Sensual Oral Play",
    "materials": [
      "Wild Strawberry Essence",
      "Natural Stevia",
      "Amber Glass Dispenser"
    ],
    "sizes": [
      "100ml / 3.4 fl oz"
    ],
    "colors": [
      {
        "name": "Rose Amber",
        "hex": "#BE185D"
      }
    ],
    "variants": [
      {
        "id": "var-acc-lub-05-100",
        "productId": "prod-acc-lub-05",
        "sku": "VL-ACC-LUB-05-100",
        "size": "100ml",
        "color": "Rose Amber",
        "colorHex": "#BE185D",
        "material": "Edible Organic Glide",
        "stockQuantity": 55
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-brd-01",
    "title": "The Sovereign Bridal Keepsake Trousseau Chest",
    "slug": "sovereign-bridal-keepsake-trousseau-chest",
    "subtitle": "Silver Filigree Keepsake Chest with Ivory Silk Robe, Chantilly Bra & Garter",
    "description": "The pinnacle of bridal gifting. An heirloom-quality silver-filigree keepsake casket lined with rich ivory velvet. Contains our bespoke Chantilly lace balconette bra and brief set, pure 22 Momme silk robe, delicate lace garter with blue sapphire crystal, and Damask rose body nectar.",
    "story": "Preserving the sacred elegance of wedding night anticipation in a treasure chest destined to be cherished for lifetimes.",
    "basePrice": 285,
    "discountPrice": 250,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Bride-to-Be Kits",
    "images": [
      "/images/products/giftsets/gift-bride-1.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-bride-1.jpg",
    "rating": 4.99,
    "reviewCount": 48,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Bridal Trousseau",
      "Silver Filigree Chest",
      "Wedding Gift",
      "Silk Robe",
      "Lace Bra Set"
    ],
    "sensoryFeel": "Gossamer French lace and featherlight 22 Momme silk resting inside velvet cushions.",
    "fabricCare": "Dry clean silk garments. Clean chest with microfiber jewelry polishing cloth.",
    "safetyCertifications": [
      "Grade 6A Mulberry Silk",
      "Nickel-Free Silver Hardware",
      "Handcrafted Filigree"
    ],
    "intensityLevels": "Complete Bridal Luxury Ritual",
    "materials": [
      "Mulberry Silk",
      "Chantilly Lace",
      "Silver Plated Filigree Chest",
      "Velvet Interior"
    ],
    "sizes": [
      "Bespoke Trunk (38cm x 28cm x 15cm)"
    ],
    "colors": [
      {
        "name": "Bridal Ivory & Silver",
        "hex": "#FDFBF7"
      }
    ],
    "variants": [
      {
        "id": "var-gft-brd-01-slv",
        "productId": "prod-gft-brd-01",
        "sku": "VL-GFT-BRD-01-SLV",
        "size": "Deluxe Chest",
        "color": "Bridal Ivory & Silver",
        "colorHex": "#FDFBF7",
        "material": "Silver Filigree & Silk",
        "stockQuantity": 15
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-brd-02",
    "title": "L'Amour Blanc Honeymoon Intimacy Suite Trunk",
    "slug": "l-amour-blanc-honeymoon-intimacy-suite-trunk",
    "subtitle": "White Lace Teddy, Pearlescent Couples Massager & Champagne Strawberry Glide",
    "description": "Curated specifically for romantic honeymoon suites. Includes our sheer white Chantilly lace plunge bodysuit, whisper-quiet pearlescent couples stimulator, organic sparkling champagne strawberry edible lubricant, and plush travel silk pouch.",
    "story": "An exquisite passport to honeymoon ecstasy, designed to ignite romance the moment bedroom doors lock.",
    "basePrice": 195,
    "discountPrice": 175,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Bride-to-Be Kits",
    "images": [
      "/images/products/giftsets/gift-bride-2.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-bride-2.jpg",
    "rating": 4.96,
    "reviewCount": 39,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Honeymoon Gift",
      "White Lace Teddy",
      "Couples Toy",
      "Champagne Glide",
      "Gift Trunk"
    ],
    "sensoryFeel": "Silky lace against skin paired with sweet champagne strawberry taste and sonic vibration.",
    "fabricCare": "Hand wash bodysuit in cold water; rinse toy with toy cleanser.",
    "safetyCertifications": [
      "Medical Grade Silicone",
      "Edible Food Grade Lubricant",
      "IPX7 Waterproof"
    ],
    "intensityLevels": "Honeymoon Sensory Suite",
    "materials": [
      "French Lace",
      "Medical Silicone",
      "Amber Glass Dispenser",
      "Luxury Keepsake Trunk"
    ],
    "sizes": [
      "One Size (Fits S-L Bodysuit)"
    ],
    "colors": [
      {
        "name": "Pure Honeymoon White",
        "hex": "#FFFFFF"
      }
    ],
    "variants": [
      {
        "id": "var-gft-brd-02-wht",
        "productId": "prod-gft-brd-02",
        "sku": "VL-GFT-BRD-02-WHT",
        "size": "One Size",
        "color": "Pure Honeymoon White",
        "colorHex": "#FFFFFF",
        "material": "Lace, Silicone & Glass",
        "stockQuantity": 22,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-brd-03",
    "title": "Something Blue Celestial Bridal Boudoir Gift Box",
    "slug": "something-blue-celestial-bridal-boudoir-gift-box",
    "subtitle": "Sky-Blue Silk Camisole, Sapphire Crystal Jewel Base Plug & Garter",
    "description": "A daring, decadent reimagining of the classic wedding day tradition. Features a pastel sky-blue 100% silk chemise, hand-sewn blue lace garter, mirror chrome plug with brilliant sapphire-cut jewel base, and botanical pulse oil.",
    "story": "Something old, something new, and an unforgettable secret in celestial sapphire blue.",
    "basePrice": 165,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Bride-to-Be Kits",
    "images": [
      "/images/products/giftsets/gift-bride-3.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-bride-3.jpg",
    "rating": 4.93,
    "reviewCount": 31,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Something Blue",
      "Bridal Box",
      "Sapphire Jewel Plug",
      "Silk Chemise",
      "Romantic"
    ],
    "sensoryFeel": "Cool, smooth silk flowing over hips with the thrilling weighted chill of mirror chrome.",
    "fabricCare": "Hand wash silk; wash jewel plug with warm antibacterial soap.",
    "safetyCertifications": [
      "Surgical Grade Chrome Alloy",
      "Lead-Free Austrian Crystal",
      "Flared Safety Base"
    ],
    "intensityLevels": "Sensual Weighted Glamour",
    "materials": [
      "Mulberry Silk",
      "Chrome Plated Alloy",
      "Faceted Crystal",
      "Pastel Gift Box"
    ],
    "sizes": [
      "Medium Chemise / Small Jewel Plug"
    ],
    "colors": [
      {
        "name": "Celestial Sky Blue",
        "hex": "#BAE6FD"
      }
    ],
    "variants": [
      {
        "id": "var-gft-brd-03-blu",
        "productId": "prod-gft-brd-03",
        "sku": "VL-GFT-BRD-03-BLU",
        "size": "Medium Box",
        "color": "Celestial Sky Blue",
        "colorHex": "#BAE6FD",
        "material": "Silk & Chrome",
        "stockQuantity": 18
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-brd-04",
    "title": "Midnight Bachelorette Seduction & Secrets Casket",
    "slug": "midnight-bachelorette-seduction-secrets-casket",
    "subtitle": "Black Velvet Restraints, Gilded Dares Deck & Bourbon Vanilla Perfume Oil",
    "description": "The ultimate luxury bachelorette gift. Lined in midnight velvet with satin bow ribbon, this set includes crushed velvet wrist restraints, our Midnight Reverie 54-dare bedroom exploration card deck, and French bourbon vanilla perfume oil.",
    "story": "Given by bridesmaids with a knowing smile, providing the bride everything needed to thrill her lover.",
    "basePrice": 145,
    "discountPrice": 125,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Bride-to-Be Kits",
    "images": [
      "/images/products/giftsets/gift-bride-4.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-bride-4.jpg",
    "rating": 4.95,
    "reviewCount": 44,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Bachelorette Gift",
      "Velvet Cuffs",
      "Bedroom Dares",
      "Perfume Oil",
      "Bridal Shower"
    ],
    "sensoryFeel": "Sumptuous velvet cushioning paired with intoxicating warm vanilla scent.",
    "fabricCare": "Wipe cuffs clean with damp cloth; keep cards in protective casket.",
    "safetyCertifications": [
      "Lead-Free Brass Hardware",
      "Alcohol-Free Perfume Oil",
      "Quick-Release Clasps"
    ],
    "intensityLevels": "Erotic Exploration & Foreplay Play",
    "materials": [
      "Italian Velvet",
      "Brass Hardware",
      "Gilded Cardstock",
      "Vanilla Oil Flacon"
    ],
    "sizes": [
      "Keepsake Ribbon Box (30cm x 22cm x 8cm)"
    ],
    "colors": [
      {
        "name": "Midnight & Rose Gold",
        "hex": "#1C1917"
      }
    ],
    "variants": [
      {
        "id": "var-gft-brd-04-onx",
        "productId": "prod-gft-brd-04",
        "sku": "VL-GFT-BRD-04-ONX",
        "size": "One Size",
        "color": "Midnight & Rose Gold",
        "colorHex": "#1C1917",
        "material": "Velvet, Brass & Glass",
        "stockQuantity": 26
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-brd-05",
    "title": "The Empress Bridal Morning-After Silk & Glow Hamper",
    "slug": "the-empress-bridal-morning-after-silk-glow-hamper",
    "subtitle": "Silk Eye Mask, Sandalwood Pouring Massage Candle & Hyaluronic Intimate Elixir",
    "description": "Curated for the tranquil morning after the celebration. Includes a 22 Momme silk sleep mask, low-temperature pouring soybean and sandalwood massage candle in frosted ceramic, and our Silken Touch hyaluronic intimate serum.",
    "story": "Waking up together as newlyweds bathed in warm morning sunlight, soothing body and soul in decadent peace.",
    "basePrice": 135,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Bride-to-Be Kits",
    "images": [
      "/images/products/giftsets/gift-bride-5.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-bride-5.jpg",
    "rating": 4.92,
    "reviewCount": 28,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Morning After",
      "Bridal Hamper",
      "Silk Sleep Mask",
      "Massage Candle",
      "Hyaluronic Serum"
    ],
    "sensoryFeel": "Pitch-black cooling silk over eyes with the warm, melted jojoba oil pouring smoothly on skin.",
    "fabricCare": "Hand wash silk mask; trim candle wick before burning.",
    "safetyCertifications": [
      "100% Pure Mulberry Silk",
      "Low Melting Temp Wax (39°C)",
      "Paraben Free Serum"
    ],
    "intensityLevels": "Restorative Post-Wedding Bliss",
    "materials": [
      "Mulberry Silk",
      "Natural Soy & Jojoba Wax",
      "Amber Serum Bottle",
      "Vintage Wooden Hamper"
    ],
    "sizes": [
      "Hamper Dimensions (32cm x 24cm x 10cm)"
    ],
    "colors": [
      {
        "name": "Warm Amber & Gold",
        "hex": "#D97706"
      }
    ],
    "variants": [
      {
        "id": "var-gft-brd-05-amb",
        "productId": "prod-gft-brd-05",
        "sku": "VL-GFT-BRD-05-AMB",
        "size": "Deluxe Hamper",
        "color": "Warm Amber & Gold",
        "colorHex": "#D97706",
        "material": "Silk, Ceramic & Glass",
        "stockQuantity": 20
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-dnt-01",
    "title": "Sensual Candlelight & Silk Rendezvous Bundle",
    "slug": "sensual-candlelight-silk-rendezvous-bundle",
    "subtitle": "Aethel Pouring Massage Candle, Silk Blindfold & Intimate Whispers Deck",
    "description": "The definitive date night intimacy suite. Lighting the aromatic amber and sandalwood candle sets the atmosphere before melting into a warm pourable massage oil. Includes a padded black mulberry silk blindfold and the Intimate Whispers 100-card connection game.",
    "story": "Transform an ordinary evening into an unforgettable sensory sanctuary of touch, vulnerability, and candlelight.",
    "basePrice": 125,
    "discountPrice": 110,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Date Night Bundles",
    "images": [
      "/images/products/giftsets/gift-date-1.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-date-1.jpg",
    "rating": 4.98,
    "reviewCount": 76,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Date Night",
      "Massage Candle",
      "Silk Blindfold",
      "Couples Game",
      "Best Seller"
    ],
    "sensoryFeel": "Flickering warm candle glow, complete darkness from silk blindfold, and rich warm body oil.",
    "fabricCare": "Store cards in keepsake box; trim candle wick to 1/4 inch.",
    "safetyCertifications": [
      "100% Natural Soy & Jojoba Wax",
      "Lead-Free Wick",
      "Grade 6A Mulberry Silk"
    ],
    "intensityLevels": "Atmospheric Sensual Immersion",
    "materials": [
      "Natural Wax in Ceramic Crucible",
      "Mulberry Silk",
      "Gilded Linen Cards"
    ],
    "sizes": [
      "Bundle Box (28cm x 20cm x 10cm)"
    ],
    "colors": [
      {
        "name": "Onyx & Champagne",
        "hex": "#1C1917"
      }
    ],
    "variants": [
      {
        "id": "var-gft-dnt-01-cpl",
        "productId": "prod-gft-dnt-01",
        "sku": "VL-GFT-DNT-01-CPL",
        "size": "Complete Set",
        "color": "Onyx & Champagne",
        "colorHex": "#1C1917",
        "material": "Wax, Silk & Linen",
        "stockQuantity": 45
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-dnt-02",
    "title": "Midnight Noir Bedroom Exploration Discovery Chest",
    "slug": "midnight-noir-bedroom-exploration-discovery-chest",
    "subtitle": "Leather Restraints, Warming Ginger Body Oil & Wireless Partner Bullet",
    "description": "Housed in a square black leather keepsake chest with brass latches. Contains our padded calfskin wrist cuffs, Golden Nectar warming ginger massage oil, and the Veloura Tango wireless precision bullet massager with RF remote.",
    "story": "For couples ready to venture beyond familiar boundaries and experience thrilling surrender together.",
    "basePrice": 175,
    "discountPrice": 155,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Date Night Bundles",
    "images": [
      "/images/products/giftsets/gift-date-2.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-date-2.jpg",
    "rating": 4.97,
    "reviewCount": 53,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Exploration Kit",
      "Leather Chest",
      "Partner Bullet",
      "Warming Oil",
      "Restraints"
    ],
    "sensoryFeel": "Velvet-lined leather holding wrists firmly while deep vibrations and radiant warmth spread.",
    "fabricCare": "Recharge bullet with magnetic USB; condition leather occasionally.",
    "safetyCertifications": [
      "Medical Silicone",
      "CE Certified Remote",
      "Vegetable Tanned Leather"
    ],
    "intensityLevels": "Erotic Power Exchange & Sonic Resonance",
    "materials": [
      "Italian Leather Chest",
      "Medical Silicone Bullet",
      "Amber Glass Dispenser"
    ],
    "sizes": [
      "Leather Chest (24cm x 24cm x 12cm)"
    ],
    "colors": [
      {
        "name": "Midnight Noir",
        "hex": "#111827"
      }
    ],
    "variants": [
      {
        "id": "var-gft-dnt-02-onx",
        "productId": "prod-gft-dnt-02",
        "sku": "VL-GFT-DNT-02-ONX",
        "size": "One Size",
        "color": "Midnight Noir",
        "colorHex": "#111827",
        "material": "Leather, Silicone & Glass",
        "stockQuantity": 28,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-dnt-03",
    "title": "Champagne & Velvet Decadence Date Night Suite",
    "slug": "champagne-velvet-decadence-date-night-suite",
    "subtitle": "Jeweled Keepsake Casket with Edible Champagne Glide & 24K Gold Drops",
    "description": "An opulent golden jewel casket holding gourmet sparkling champagne strawberry edible glide, Aura 24K botanical tingling arousal drops, and crushed velvet handcuffs with gold hardware.",
    "story": "An indulgence of taste, touch, and visual decadence tailored for luxury anniversaries and Valentine’s celebrations.",
    "basePrice": 160,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Date Night Bundles",
    "images": [
      "/images/products/giftsets/gift-date-3.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-date-3.jpg",
    "rating": 4.94,
    "reviewCount": 37,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Decadence Suite",
      "Champagne Glide",
      "Gold Drops",
      "Velvet Cuffs",
      "Jewel Casket"
    ],
    "sensoryFeel": "Delicious strawberry notes on lips and tongue, velvet softness on wrists, electric tingle.",
    "fabricCare": "Wipe casket clean with dry jewelry cloth.",
    "safetyCertifications": [
      "Food Grade Organic Flavor",
      "Latex Compatible",
      "Nickel-Free Hardware"
    ],
    "intensityLevels": "Multisensory Indulgence",
    "materials": [
      "Crushed Italian Velvet",
      "Amber Dropper",
      "Gilded Filigree Casket"
    ],
    "sizes": [
      "Casket (26cm x 18cm x 10cm)"
    ],
    "colors": [
      {
        "name": "Champagne Gold & Velvet",
        "hex": "#D4AF37"
      }
    ],
    "variants": [
      {
        "id": "var-gft-dnt-03-gld",
        "productId": "prod-gft-dnt-03",
        "sku": "VL-GFT-DNT-03-GLD",
        "size": "Suite Set",
        "color": "Champagne Gold & Velvet",
        "colorHex": "#D4AF37",
        "material": "Velvet & Gold Electroplate",
        "stockQuantity": 24
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-dnt-04",
    "title": "The Tactile Odyssey Sensory Touch Kit",
    "slug": "the-tactile-odyssey-sensory-touch-kit",
    "subtitle": "Black Ostrich Feather Tickler, Seduction Metal Dice & Damask Rose Nectar",
    "description": "Focuses purely on the spectrum of physical touch: from the lightest flutter of genuine ostrich plumes to the weighted clink of metallic polyhedral decision dice and warming floral massage oil.",
    "story": "Awaken dormant senses and rediscover how deeply skin responds when sight is surrendered and touch is amplified.",
    "basePrice": 115,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Date Night Bundles",
    "images": [
      "/images/products/giftsets/gift-date-4.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-date-4.jpg",
    "rating": 4.91,
    "reviewCount": 32,
    "isFeatured": false,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "Sensory Touch",
      "Feather Tickler",
      "Metal Dice",
      "Rose Nectar",
      "Touch Play"
    ],
    "sensoryFeel": "Gossamer feather shivers across the spine followed by rich warm rose oil glide.",
    "fabricCare": "Hang feather tickler to maintain plume volume.",
    "safetyCertifications": [
      "Natural Sanitized Feathers",
      "Lead-Free Cast Metal",
      "Cold-Pressed Oils"
    ],
    "intensityLevels": "Delicate to Moderate Tactile Tease",
    "materials": [
      "Ostrich Feathers",
      "Zinc Alloy Dice",
      "Rose Petal Oil Flacon",
      "Gold Foil Box"
    ],
    "sizes": [
      "Box (45cm x 16cm x 8cm)"
    ],
    "colors": [
      {
        "name": "Raven & Rose Gold",
        "hex": "#0F172A"
      }
    ],
    "variants": [
      {
        "id": "var-gft-dnt-04-rvn",
        "productId": "prod-gft-dnt-04",
        "sku": "VL-GFT-DNT-04-RVN",
        "size": "Kit",
        "color": "Raven & Rose Gold",
        "colorHex": "#0F172A",
        "material": "Feathers, Metal & Oil",
        "stockQuantity": 30
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-dnt-05",
    "title": "Couples Intercourse & Intimacy Harmony Box",
    "slug": "couples-intercourse-intimacy-harmony-box",
    "subtitle": "Harmonie C-Shaped Wearable Vibrator, Hyaluronic Serum & Satin Travel Case",
    "description": "Engineered for synchronized shared pleasure during lovemaking. Centers on the Harmonie flexible C-shaped wearable couple’s vibrator, accompanied by our Silken Touch hyaluronic intimate serum and a discreet quilted travel clutch.",
    "story": "Harmonize your climaxes with state-of-the-art dual stimulation technology in a minimalist designer case.",
    "basePrice": 185,
    "discountPrice": 165,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Date Night Bundles",
    "images": [
      "/images/products/giftsets/gift-date-5.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-date-5.jpg",
    "rating": 4.98,
    "reviewCount": 61,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Couples Vibrator",
      "Wearable Toy",
      "Hyaluronic Lube",
      "Shared Pleasure",
      "Harmony Box"
    ],
    "sensoryFeel": "Seamless anatomical hug of warm flexible silicone with limitless hydraulic glide.",
    "fabricCare": "Submersible IPX7 waterproof; charge with magnetic USB cord included.",
    "safetyCertifications": [
      "FDA Medical Silicone",
      "Triple-Weight Hyaluronic",
      "Latex Safe"
    ],
    "intensityLevels": "10 Synchronized Vibration Harmonies",
    "materials": [
      "Medical-Grade Silicone",
      "Amber Pump Dispenser",
      "Quilted Satin Clutch"
    ],
    "sizes": [
      "Designer Gift Box (25cm x 20cm x 8cm)"
    ],
    "colors": [
      {
        "name": "Plum & Noir",
        "hex": "#581C87"
      }
    ],
    "variants": [
      {
        "id": "var-gft-dnt-05-plm",
        "productId": "prod-gft-dnt-05",
        "sku": "VL-GFT-DNT-05-PLM",
        "size": "Complete Box",
        "color": "Plum & Noir",
        "colorHex": "#581C87",
        "material": "Silicone & Glass",
        "stockQuantity": 32,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-box-01",
    "title": "Veloura Grand Keepsake Leather Trunk of Seduction",
    "slug": "veloura-grand-keepsake-leather-trunk-seduction",
    "subtitle": "The Collector’s 8-Piece Flagship Leather Trunk with 24K Gold Plated Hardware",
    "description": "The crowning jewel of the Veloura house. An opulent, lockable vintage-style leather trunk lined in crimson velvet. Contains Séraphine rabbit vibrator, Sensiglass 24K gold wand, mulberry silk blindfold, padded leather cuffs, botanical massage elixir, and connection cards.",
    "story": "The definitive intimate library for couples who celebrate pleasure with grand, unapologetic magnificence.",
    "basePrice": 420,
    "discountPrice": 380,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Curated Romance Boxes",
    "images": [
      "/images/products/giftsets/gift-box-1.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-box-1.jpg",
    "rating": 5,
    "reviewCount": 34,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Grand Trunk",
      "Flagship Collection",
      "Lockable Trunk",
      "8-Piece Set",
      "Ultra Luxury"
    ],
    "sensoryFeel": "The weight of hand-stitched leather and velvet containing the ultimate spectrum of sensual sensations.",
    "fabricCare": "Condition leather trunk annually. Store devices in respective velvet compartments.",
    "safetyCertifications": [
      "All Medical-Grade Devices",
      "Lockable Brass Padlock & Keys",
      "Hypoallergenic"
    ],
    "intensityLevels": "Comprehensive Multi-Tiered Collection",
    "materials": [
      "Full-Grain Calfskin Trunk",
      "Crimson Italian Velvet",
      "Solid Brass Closures"
    ],
    "sizes": [
      "Collector Trunk (42cm x 30cm x 18cm)"
    ],
    "colors": [
      {
        "name": "Onyx & Crimson Velvet",
        "hex": "#18181B"
      }
    ],
    "variants": [
      {
        "id": "var-gft-box-01-trn",
        "productId": "prod-gft-box-01",
        "sku": "VL-GFT-BOX-01-TRN",
        "size": "Master Trunk",
        "color": "Onyx & Crimson Velvet",
        "colorHex": "#18181B",
        "material": "Full-Grain Leather & Velvet",
        "stockQuantity": 10,
        "powerType": "Magnetic USB"
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-box-02",
    "title": "The Golden Hour 24K Luxury Pleasure Casket",
    "slug": "the-golden-hour-24k-luxury-pleasure-casket",
    "subtitle": "Sensiglass 24K Gold Glass Wand, Empress Gold Pelvic Spheres & Shimmer Body Elixir",
    "description": "An ode to pure 24K gold. Includes our hand-blown borosilicate Sensiglass wand infused with 24K gold leaf, the Empress 24K gold-dipped dual pelvic spheres, and an illuminating golden jojoba body elixir in an amber casket.",
    "story": "Immerse in the eternal majesty of gold, transforming intimacy into an imperial indulgence.",
    "basePrice": 310,
    "discountPrice": 280,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Curated Romance Boxes",
    "images": [
      "/images/products/giftsets/gift-box-2.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-box-2.jpg",
    "rating": 4.98,
    "reviewCount": 29,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "24K Gold Casket",
      "Glass Wand",
      "Kegel Balls",
      "Golden Hour",
      "Imperial Luxury"
    ],
    "sensoryFeel": "Frictionless temperature-responsive glass and heavy shifting kinetic gold spheres.",
    "fabricCare": "Boil or wash wand with antibacterial soap; polish gold spheres with jewelry cloth.",
    "safetyCertifications": [
      "100% Borosilicate Glass",
      "Genuine 24K Gold Electroplate",
      "Body Safe"
    ],
    "intensityLevels": "Manual Precision & Kinetic Fullness",
    "materials": [
      "Borosilicate Glass",
      "24K Gold Leaf",
      "Brass-Cored Gold Spheres",
      "Coffret Box"
    ],
    "sizes": [
      "Casket Dimensions (34cm x 22cm x 10cm)"
    ],
    "colors": [
      {
        "name": "Imperial 24K Gold",
        "hex": "#D4AF37"
      }
    ],
    "variants": [
      {
        "id": "var-gft-box-02-gld",
        "productId": "prod-gft-box-02",
        "sku": "VL-GFT-BOX-02-GLD",
        "size": "Deluxe Casket",
        "color": "Imperial 24K Gold",
        "colorHex": "#D4AF37",
        "material": "Borosilicate Glass & 24K Gold",
        "stockQuantity": 14
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-box-03",
    "title": "Aphrodite's Bath & Bedchamber Ritual Box",
    "slug": "aphrodites-bath-bedchamber-ritual-box",
    "subtitle": "Himalayan Spikenard Bath Soak, Aphrodite Spiral Glass Wand & Damask Rose Nectar",
    "description": "Designed to turn an evening of bathing and lovemaking into an ancient temple ritual. Begins with spikenard bath milk, followed by full-body massage with Damask rose nectar, culminating in sensual play with the Aphrodite spiral glass wand.",
    "story": "Dedicated to the goddess of love, uniting warm aquatic relaxation with intoxicating botanical touch.",
    "basePrice": 225,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Curated Romance Boxes",
    "images": [
      "/images/products/giftsets/gift-box-3.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-box-3.jpg",
    "rating": 4.96,
    "reviewCount": 38,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Bath Ritual",
      "Aphrodite Box",
      "Spiral Glass Wand",
      "Spikenard Elixir",
      "Romantic Soak"
    ],
    "sensoryFeel": "Enveloping warm floral water on skin, followed by cool-to-warm glass spiral ridges.",
    "fabricCare": "Wand is compatible with all lubricants and water temperature play.",
    "safetyCertifications": [
      "Medical-Grade Borosilicate Glass",
      "All Natural Essential Oils",
      "Non-Toxic"
    ],
    "intensityLevels": "Ritualistic Bath & Sensory Lovemaking",
    "materials": [
      "Borosilicate Glass",
      "Cold-Pressed Botanical Oils",
      "Embossed Coffret"
    ],
    "sizes": [
      "Ritual Box (30cm x 24cm x 10cm)"
    ],
    "colors": [
      {
        "name": "Elysian Pearl & Rose",
        "hex": "#FDFBF7"
      }
    ],
    "variants": [
      {
        "id": "var-gft-box-03-ros",
        "productId": "prod-gft-box-03",
        "sku": "VL-GFT-BOX-03-ROS",
        "size": "Ritual Set",
        "color": "Elysian Pearl & Rose",
        "colorHex": "#FDFBF7",
        "material": "Glass, Mineral & Oil",
        "stockQuantity": 20
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-box-04",
    "title": "The Lovers' Anniversary Keepsake Chest",
    "slug": "the-lovers-anniversary-keepsake-chest",
    "subtitle": "Artisanal Wooden Keepsake Chest with Custom Brass Plaque & Lovers’ Tarot",
    "description": "The ultimate milestone anniversary gift. Features a hand-carved mahogany-stained wooden chest with brass corners and an engravable plaque. Inside lies The Lovers’ Tarot deck, twin warming and tingling body oils, silk sash restraints, and amber candle.",
    "story": "Commemorating years of shared intimacy, devotion, and ongoing discovery with a chest that deepens with age.",
    "basePrice": 210,
    "discountPrice": 190,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Curated Romance Boxes",
    "images": [
      "/images/products/giftsets/gift-box-4.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-box-4.jpg",
    "rating": 4.97,
    "reviewCount": 45,
    "isFeatured": true,
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "Anniversary Gift",
      "Wooden Chest",
      "Lovers Tarot",
      "Dual Oils",
      "Milestone Romance"
    ],
    "sensoryFeel": "Aromatic wood aroma opening to velvet lining and tactile gold foil tarot cards.",
    "fabricCare": "Dust wooden chest with dry cloth; burn candle in heat-safe area.",
    "safetyCertifications": [
      "Solid Sustainable Wood",
      "FSC Certified Cards",
      "Pure Plant Wax"
    ],
    "intensityLevels": "Emotional & Physical Deepening",
    "materials": [
      "Solid Hardwood Chest",
      "Solid Brass Fittings",
      "Mulberry Silk",
      "Art Tarot Cards"
    ],
    "sizes": [
      "Chest Dimensions (32cm x 22cm x 14cm)"
    ],
    "colors": [
      {
        "name": "Mahogany & Brass",
        "hex": "#78350F"
      }
    ],
    "variants": [
      {
        "id": "var-gft-box-04-mah",
        "productId": "prod-gft-box-04",
        "sku": "VL-GFT-BOX-04-MAH",
        "size": "Anniversary Chest",
        "color": "Mahogany & Brass",
        "colorHex": "#78350F",
        "material": "Hardwood & Brass",
        "stockQuantity": 25
      }
    ],
    "discreetPackagingIncluded": true
  },
  {
    "id": "prod-gft-box-05",
    "title": "Nocturne Haute Couture Erotic Masterpiece Box",
    "slug": "nocturne-haute-couture-erotic-masterpiece-box",
    "subtitle": "Hand-Stitched Suede Flogger, Padded Leather Cuffs & Obsidian Glass Probe",
    "description": "Curated for devotees of refined power dynamics and sensory domination. Contains our Nocturne 32-fall suede and leather flogger, matching padded Tuscan cuffs, Aethel O-ring collar, and the ribbed obsidian glass pleasure probe.",
    "story": "An unyielding tribute to shadow play, where aesthetic elegance meets intense, resonant ecstasy.",
    "basePrice": 295,
    "discountPrice": 265,
    "categoryId": "cat-giftsets",
    "categorySlug": "gift-sets",
    "categoryName": "Gift Sets",
    "subcategory": "Curated Romance Boxes",
    "images": [
      "/images/products/giftsets/gift-box-5.jpg"
    ],
    "secondaryImage": "/images/products/giftsets/gift-box-5.jpg",
    "rating": 4.99,
    "reviewCount": 37,
    "isFeatured": false,
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "Masterpiece Box",
      "Haute Couture",
      "Suede Flogger",
      "Obsidian Glass",
      "BDSM Masterpiece"
    ],
    "sensoryFeel": "Weight of dark obsidian glass, rhythmic warmth of suede thuds, secure leather hold.",
    "fabricCare": "Store leather implements conditioned and hung; wash glass probe with soap.",
    "safetyCertifications": [
      "Top-Grain Tuscan Leather",
      "Shatter-Resistant Borosilicate",
      "Quick-Release Safety"
    ],
    "intensityLevels": "Advanced Sensory Seduction & Impact",
    "materials": [
      "Full-Grain Calfskin",
      "Brushed Suede",
      "Obsidian Borosilicate Glass",
      "Matte Black Box"
    ],
    "sizes": [
      "Master Casket (40cm x 26cm x 12cm)"
    ],
    "colors": [
      {
        "name": "Onyx Noir & Obsidian",
        "hex": "#0F172A"
      }
    ],
    "variants": [
      {
        "id": "var-gft-box-05-obs",
        "productId": "prod-gft-box-05",
        "sku": "VL-GFT-BOX-05-OBS",
        "size": "Master Box",
        "color": "Onyx Noir & Obsidian",
        "colorHex": "#0F172A",
        "material": "Leather, Suede & Glass",
        "stockQuantity": 16
      }
    ],
    "discreetPackagingIncluded": true
  }
];
