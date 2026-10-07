# Product Requirement Document (PRD): Veloura E-Commerce Store

**Document Version:** 2.0  
**Status:** Approved for Engineering  
**Target Platform:** Web (Desktop & Mobile Responsive)  

---

## 1. Executive Summary & Brand Identity

Veloura is a direct-to-consumer (D2C) e-commerce brand specializing in female intimate wear, lingerie, luxury lifestyle accessories, and adult wellness products.

* **Brand Positioning:** Soft, Sensual, Luxurious, Appealing.
* **Target Audience:** Modern women seeking high-quality intimate apparel and wellness products, as well as couples looking for curated romance and intimacy experiences.
* **UI/UX Philosophy:** Minimalist, soft-toned aesthetics (warm blush, muted roses, silk satin sheens, deep plum accents), discreet shopping communication, fluid micro-interactions, and high-trust transaction flows.

---

## 2. Technical Architecture & Stack Overview

Veloura leverages a modern headless e-commerce stack built for speed, exceptional SEO performance, type-safe development, and seamless payment integration.

```
+-----------------------------------------------------------------------+
|                            Frontend Layer                             |
|          Next.js (App Router) + TypeScript + Tailwind CSS             |
|                        shadcn/ui Components                           |
+-----------------------------------+-----------------------------------+
                                    |
      +-----------------------------+-----------------------------+
      |                             |                             |
      v                             v                             v
+-------------------+     +-------------------+     +-------------------+
|   Supabase Auth   |     |    Supabase DB    |     |  Payment Gateways |
| + Google OAuth2.0 |     | (PostgreSQL + RLS)|     | Paystack / Flutter|
+-------------------+     +---------+---------+     +-------------------+
                                    |
                                    v
                          +-------------------+
                          |  Mailgun API Engine|
                          | (Transactional)   |
                          +-------------------+
```

| Layer | Technology | Key Responsibility |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js (App Router)** | SSR/SSG rendering for instant page loads, dynamic routing, and high SEO rankings. |
| **Language** | **TypeScript** | Strict type safety across cart state, checkout data, and payment API payloads. |
| **Styling** | **Tailwind CSS** | Custom design tokens representing Veloura's soft, sensual, and luxurious aesthetic. |
| **UI Component Library** | **shadcn/ui** | Accessible, unstyled Radix primitives styled with Tailwind (Sheets, Drawers, Dialogs). |
| **Database & Auth Backend**| **Supabase** | Managed PostgreSQL, Row Level Security (RLS) policies, session management, `@supabase/ssr`. |
| **Social Authentication** | **Google Cloud Console** | Google OAuth 2.0 integration configured through Supabase Auth. |
| **Payment Gateways** | **Paystack & Flutterwave**| Dual payment gateway setup supporting cards, bank transfers, USSD, and mobile money with discreet billing masking. |
| **Transactional Email** | **Mailgun** | Dynamic HTML email templates triggered via Supabase database webhooks / edge functions. |

---

## 3. Scope of Work: Functional Requirements

### Module 1: Brand Experience, Search & Discovery

#### 1. Landing / Home Page
* **Hero Banner Section:** Full-bleed, high-resolution visual slider highlighting seasonal collections and hero products with soft motion transitions.
* **Featured Collections:** Curated grids (`Best Sellers`, `New Arrivals`, `Curated Couples Sets`).
* **Discreet Guarantee Badge:** Explicit trust-building banners for billing statement privacy and anonymous exterior packaging.
* **Footer & Trust Architecture:** Links to Customer Care, Size Guide, Discreet Shipping Policy, Privacy Statement, and Newsletter Signup Modal.

#### 2. Product Catalogue & Navigation
* **Responsive Layout:** 2-column layout on mobile, 4-column layout on desktop.
* **Product Cards:** Image hover effects (secondary view toggle), price display, color swatches, and inline badges (`New`, `Bestseller`, `Out of Stock`).
* **Quick View Modal (`shadcn/ui Dialog`):** View high-level product details and add items to cart directly without navigating away from category lists.

#### 3. Category Architecture
1. **Lingerie:** Bras, Panties, Bodysuits, Babydolls, Corsets, Shapewear.
2. **Sex Toys:** Vibrators, Suction Toys, Dildos, Anal Toys, Essentials.
3. **Couples:** Bondage & Restraints, Games, Couples Vibrators, Enhancement Oils.
4. **Accessories:** Storage Pouches, Toy Cleaners, Body Oils, Lubricants.
5. **Gift Sets:** Bride-to-Be Kits, Date Night Bundles, Curated Romance Boxes.

#### 4. Search and Filtering System
* **Predictive Instant Search:** Auto-completing search bar powered by Supabase text search across titles, tags, and category taxonomies.
* **Filtering Engine:**
  * **Price Range:** Dynamic dual-thumb price slider.
  * **Category & Subcategory:** Multi-select checkboxes.
  * **Attributes:** Size (`XS` to `3XL`), Color palette, Material (`Silk`, `Lace`, `Satin`, `Body-safe Silicone`), Intensity levels.
* **Sorting:** Options for Featured, Price: Low to High, Price: High to Low, Newest Arrivals, Customer Ratings.

---

### Module 2: Product Detail & Cart Management

#### 5. Product Details Page (PDP)
* **Gallery Component:** High-res image carousel, zoom modal, and preview videos.
* **Rich Description:** Fabric composition, sensory feel, care instructions, and safety certifications (phthalate-free, body-safe silicone).
* **Discreet Packaging Callout:** Dedicated reassurance tag placed below the primary CTA button.

#### 6. Product Variants Matrix
* **Attributes:** Size, Color, Material, Power Type (rechargeable, battery).
* **Real-time Inventory Check:** Automatic disabling of unavailable color/size combinations based on variant stock in Supabase.

#### 7. Add to Cart & Slide-Over Cart
* **Slide-over Drawer (`shadcn/ui Sheet`):** Slide-out side drawer upon adding products to maintain shopping momentum.
* **Cart Summary:** Interactive subtotal calculation and dynamic progress bar for free shipping thresholds.

#### 8. Cart State & Management
* **Item Adjustments:** Real-time quantity selector, option editing, and single-click item removal.
* **Cart Persistence:** Synced across user sessions via Supabase and browser local storage.

---

### Module 3: Authentication, User Account & Checkout

#### 9. Authentication & Social Sign-In
* **Google OAuth 2.0:** One-click authentication via Google Cloud Console through Supabase Auth.
* **Email & Password:** Native password authentication alternative.
* **Guest Checkout:** Ability to complete orders without forcing user account creation.

#### 10. Customer Account Portal
* **Dashboard Overview:** Personal profile, communication preferences, and security settings.
* **Address Book:** Multi-address management for default shipping and billing destinations.

#### 11. Checkout Engine
* **Address Autocomplete:** Fast shipping address lookup.
* **Payment Gateway Routing:** Dual support for **Paystack** and **Flutterwave** popups and redirects.
  * **Discreet Billing Masking:** Merchant descriptor appears as neutral entity (e.g., `VL Retail` or `Veloura Store`).
* **Summary & Discounts:** Clear breakdown of items, subtotal, shipping fee, tax, and promotional code inputs.

---

### Module 4: Order Lifecycle & Communication

#### 12. Order History
* **Customer Portal View:** Complete list of past orders with invoice details, payment receipts, and current order states.
* **One-Click Reorder:** Quick button to re-add past items directly into the cart.

#### 13. Order Tracking
* **Status Badges:** Real-time status indicators (`Pending`, `Processing`, `Dispatched`, `Out for Delivery`, `Delivered`).
* **Courier Integration:** Direct shipment tracking links linked to local logistics partners.

#### 14. Transactional Emails (via Mailgun)
* **Trigger Engine:** Mailgun transactional sending via Supabase Database Webhooks / Edge Functions.
* **Order Confirmation Email:** Dispatched immediately upon payment status changing to `Paid`. Contains itemized breakdown, invoice, and discreet delivery notice.
* **Status Change Emails:**
  * **Dispatch Email:** Includes courier details and tracking code.
  * **Out for Delivery:** Real-time alert on delivery day.
  * **Delivery Confirmation:** Final thank-you note with product care guides.

---

## 4. Database Schema Overview (Supabase PostgreSQL)

```sql
-- Core User Profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categories Hierarchy
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT
);

-- Master Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2) NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product Variants
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  sku TEXT UNIQUE NOT NULL,
  size TEXT,
  color TEXT,
  material TEXT,
  stock_quantity INT DEFAULT 0,
  price_override DECIMAL(10,2)
);

-- Customer Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  status TEXT DEFAULT 'Pending', -- Pending, Processing, Dispatched, Delivered
  total_amount DECIMAL(10,2) NOT NULL,
  payment_gateway TEXT, -- Paystack or Flutterwave
  payment_reference TEXT UNIQUE,
  shipping_address JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order Items
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES product_variants(id),
  quantity INT NOT NULL,
  price_at_purchase DECIMAL(10,2) NOT NULL
);
```