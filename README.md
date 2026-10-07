# Veloura | Luxury Intimate Wear & Adult Wellness E-Commerce

Veloura is a high-fashion, direct-to-consumer (D2C) e-commerce web platform specializing in female intimate wear, French lace lingerie, luxury lifestyle accessories, and body-safe adult wellness products. Built with soft, sensual, and luxurious aesthetics, high-trust checkout flows, and discreet shopping guarantees.

---

## 💎 Features Implemented (PRD Compliant)

### Module 1: Brand Experience, Search & Discovery
- **Editorial Hero Banner:** Full-bleed visual slider featuring high-fashion photography and seasonal collection highlights.
- **Featured Collections Tabs:** Seamless toggle between `Best Sellers`, `New Arrivals`, and `Curated Couples Sets`.
- **4-Pillar Discreet Trust Guarantee:**
  - 100% Unmarked Anonymous Exterior Packaging (Plain recyclable cartons, zero sensitive logos).
  - Masked Financial Statements (Billed neutrally as **'VL Retail'**).
  - 100% Body-Safe Medical Silicone & Mulberry Silk Certifications.
  - Tamper-Evident Courier Delivery & Handoff.
- **5-Category Mega-Navigation:**
  1. *Lingerie* (Bras, Panties, Bodysuits, Babydolls, Corsets, Shapewear)
  2. *Sex Toys* (Vibrators, Suction Toys, Dildos, Anal Toys, Essentials)
  3. *Couples* (Bondage & Restraints, Games, Couples Vibrators, Enhancement Oils)
  4. *Accessories* (Storage Pouches, Toy Cleaners, Body Oils, Lubricants)
  5. *Gift Sets* (Bride-to-Be Kits, Date Night Bundles, Curated Romance Boxes)
- **Predictive Instant Search:** Auto-completing search modal querying titles, descriptions, and category taxonomies.
- **Filtering & Sorting Engine:** Dynamic price slider, multi-select subcategories, material filters (Silk, Lace, Silicone), size matrix, and 5 sorting options.
- **Quick View Modal Dialog:** Rapid preview of product details, variant selection, and direct add-to-bag without navigating away.

### Module 2: Product Detail & Cart Management
- **Product Details Page (PDP):**
  - High-res image gallery with interactive thumbnail selector and full-screen zoom preview.
  - Rich descriptions: Fabric composition, sensory feel, care instructions, and safety certifications (phthalate-free, IPX8 waterproof, 100% body-safe liquid silicone).
  - Dedicated discreet packaging reassurance banner positioned immediately below the primary CTA button.
- **Product Variants Matrix:** Dynamic selection across sizes, colors, and power types with real-time inventory checks.
- **Slide-Over Cart Drawer:**
  - Interactive subtotal and dynamic progress bar for the $100 free express shipping threshold.
  - Quantity adjustments, variant options, and instant item removal.
  - Cart persistence via `localStorage` and Supabase sync readiness.

### Module 3: Authentication, Customer Account & Discreet Checkout
- **Authentication:** Google OAuth 2.0 simulation, native password authentication, and Guest Checkout option.
- **Customer Account Portal:** Personal profile overview, address book management, order history, and privacy settings.
- **Express Checkout Engine:**
  - Validated shipping address form with explicit anonymous packaging confirmation.
  - Dual Payment Gateway Selector:
    - **Paystack:** Cards, Bank Transfers, USSD, and Mobile Money.
    - **Flutterwave:** Cards, Mobile Money, and Barter.
    - Realistic gateway simulation modal with actual gateway branding and instant token authorization.
  - Privilege Voucher discount engine (e.g. `VELOURA15` for 15% off).

### Module 4: Order Lifecycle & Transactional Communication
- **Order Confirmation & Invoicing:** Complete order receipt with masked billing statement notice (`VL Retail`).
- **Live Discreet Logistics Tracking:** Milestone progress timeline (`Pending` -> `Processing` -> `Dispatched` -> `Out for Delivery` -> `Delivered`).
- **Mailgun Transactional Email Engine:** Interactive visual preview and live API dispatch for all 4 notification templates:
  - *Order Confirmation Email*
  - *Dispatch Notification Email*
  - *Out for Delivery Real-Time Alert*
  - *Delivered & Product Care Guide Email*

### Module 5: Backend API Routes & Webhook Integration
- **Order Management API:**
  - `POST /api/orders/create`: Server-side price validation, discreet masked billing calculation (`VL Retail`), Supabase database persistence, and automatic Mailgun confirmation dispatch.
  - `GET /api/orders/[orderNumber]`: Live discreet order tracking lookup by order number, tracking code, or payment reference.
- **Payment Gateway Services & Webhooks:**
  - `POST /api/payments/paystack/initialize`: Paystack transaction initialization with masked descriptors.
  - `POST /api/payments/paystack/verify`: Paystack reference verification and order status synchronization.
  - `POST /api/payments/flutterwave/initialize`: Flutterwave hosted checkout link generation.
  - `POST /api/payments/flutterwave/verify`: Flutterwave transaction verification.
  - `POST /api/payments/webhook`: Unified webhook handler with HMAC-SHA512 verification (Paystack `x-paystack-signature`) and Flutterwave secret hash verification (`verif-hash`).
- **Mailgun Transactional API:**
  - `POST /api/emails/send`: Direct Mailgun REST API integration with fallback sandbox simulation and rich responsive HTML templates.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with custom luxury color tokens and glassmorphism utilities
- **Typography:** *Playfair Display* (Editorial Serif) & *Plus Jakarta Sans* (Clean UI Sans)
- **Icons:** Lucide React
- **Database Schema:** PostgreSQL / Supabase with Row Level Security (RLS) located in `supabase/schema.sql`

---

## 🚀 Running the Project

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```
