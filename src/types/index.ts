export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  itemCount: number;
  subcategories: string[];
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  size?: string;
  color?: string;
  colorHex?: string;
  material?: string;
  stockQuantity: number;
  priceOverride?: number;
  powerType?: 'Rechargeable' | 'Magnetic USB' | 'Battery Operated';
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  story: string;
  basePrice: number;
  discountPrice?: number;
  categoryId: string;
  categorySlug: string;
  categoryName: string;
  subcategory: string;
  images: string[];
  secondaryImage: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  tags: string[];
  sensoryFeel: string;
  fabricCare?: string;
  safetyCertifications: string[];
  intensityLevels?: string;
  materials: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  variants: ProductVariant[];
  discreetPackagingIncluded: boolean;
}

export interface CartItem {
  id: string; // unique item id (productId + variantId)
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  discreetPackagingConsent: boolean;
  deliveryNotes?: string;
}

export interface OrderItemRecord {
  id: string;
  productId: string;
  title: string;
  image: string;
  size?: string;
  color?: string;
  price: number;
  quantity: number;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Dispatched' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: OrderStatus;
  items: OrderItemRecord[];
  subtotal: number;
  shippingFee: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentGateway: 'Paystack' | 'Flutterwave';
  paymentReference: string;
  billingDescriptor: string; // e.g. "VL Retail"
  shippingAddress: ShippingAddress;
  carrier: string;
  trackingNumber: string;
  estimatedDelivery: string;
  timeline: {
    status: OrderStatus;
    label?: string;
    timestamp: string;
    description: string;
    completed: boolean;
  }[];
}

export interface FilterState {
  category: string;
  subcategories: string[];
  minPrice: number;
  maxPrice: number;
  materials: string[];
  sizes: string[];
  colors: string[];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
  searchQuery: string;
}
