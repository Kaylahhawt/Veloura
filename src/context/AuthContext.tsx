'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Order, ShippingAddress } from '@/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  authProvider?: 'google' | 'email' | 'guest';
  savedAddresses: ShippingAddress[];
}

interface AuthContextType {
  user: UserProfile | null;
  isGuest: boolean;
  isAuthenticated: boolean;
  orders: Order[];
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  continueAsGuest: (email: string, name?: string) => void;
  saveOrder: (order: Order) => void;
  getOrderById: (orderId: string) => Order | undefined;
  syncSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const INITIAL_DEMO_ORDERS: Order[] = [
  {
    id: 'ord-84920',
    orderNumber: 'VL-84920',
    createdAt: '2026-10-01T14:32:00Z',
    status: 'Dispatched',
    items: [
      {
        id: 'item-1',
        productId: 'prod-ling-bra-01',
        title: 'Séraphine Underwire Balconette Lace Bra',
        image: '/images/products/lingerie/bra-1.jpg',
        size: '34B',
        color: 'Midnight Noir',
        price: 105.0,
        quantity: 1,
      },
      {
        id: 'item-2',
        productId: 'prod-acc-oil-01',
        title: 'Veloura Velvet Touch Botanical Massage Oil',
        image: '/images/products/accessories/acc-oil-1.jpg',
        price: 118.0,
        quantity: 1,
      },
    ],
    subtotal: 223.0,
    shippingFee: 0.0,
    taxAmount: 0.0,
    discountAmount: 22.3,
    totalAmount: 200.7,
    paymentGateway: 'Paystack',
    paymentReference: 'PSTK_VL_99812401',
    billingDescriptor: 'VL Retail',
    shippingAddress: {
      fullName: 'Genevieve Laurent',
      email: 'genevieve@example.com',
      phone: '+1 (555) 392-8819',
      addressLine1: '742 Evergreen Terrace',
      city: 'Portland',
      state: 'Oregon',
      postalCode: '97201',
      country: 'United States',
      discreetPackagingConsent: true,
    },
    carrier: 'Veloura Express Discreet Priority',
    trackingNumber: 'VLX-9048-2831-US',
    estimatedDelivery: 'Oct 07, 2026',
    timeline: [
      { status: 'Pending', timestamp: 'Oct 01, 2026 - 14:32', description: 'Order placed & payment authorized via Paystack as VL Retail', completed: true },
      { status: 'Processing', timestamp: 'Oct 02, 2026 - 09:15', description: 'Discreet double-layered plain packaging prepared at Paris hub', completed: true },
      { status: 'Dispatched', timestamp: 'Oct 03, 2026 - 16:40', description: 'Carrier collected parcel with tamper-evident security seal', completed: true },
      { status: 'Out for Delivery', timestamp: 'Pending', description: 'Local discreet courier delivery to doorstep', completed: false },
      { status: 'Delivered', timestamp: 'Pending', description: 'Signed and delivered in anonymous brown carton', completed: false },
    ],
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [orders, setOrders] = useState<Order[]>(INITIAL_DEMO_ORDERS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync session from real Google cookie or Supabase session
  const syncSession = useCallback(async () => {
    try {
      // 1. Check direct Google OAuth session cookie
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated && data.user) {
          setUser(data.user);
          setIsGuest(false);
          return;
        }
      }

      // 2. Check Supabase Auth session if configured
      if (isSupabaseConfigured && supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const meta = session.user.user_metadata || {};
          const supaUser: UserProfile = {
            id: session.user.id,
            name: meta.full_name || meta.name || session.user.email?.split('@')[0] || 'Client',
            email: session.user.email || '',
            avatarUrl: meta.avatar_url || meta.picture,
            authProvider: 'google',
            savedAddresses: [],
          };
          setUser(supaUser);
          setIsGuest(false);
          return;
        }
      }

      // 3. Fallback to localStorage for non-OAuth guest/saved states
      const storedUser = localStorage.getItem('veloura_user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed && !parsed.id?.startsWith('usr-google-8891')) {
          // ignore previous fake mock user
          setUser(parsed);
        }
      }
    } catch (e) {
      console.warn('[Session Sync Warning]', e);
    }
  }, []);

  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem('veloura_orders');
      if (storedOrders) setOrders(JSON.parse(storedOrders));
    } catch {
      // ignore
    }

    syncSession().finally(() => setIsLoaded(true));

    // Listen for Supabase auth state changes
    if (isSupabaseConfigured && supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (session?.user) {
            const meta = session.user.user_metadata || {};
            setUser({
              id: session.user.id,
              name: meta.full_name || meta.name || session.user.email?.split('@')[0] || 'Client',
              email: session.user.email || '',
              avatarUrl: meta.avatar_url || meta.picture,
              authProvider: 'google',
              savedAddresses: [],
            });
            setIsGuest(false);
          }
        }
      );
      return () => subscription.unsubscribe();
    }
  }, [syncSession]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      if (user) {
        localStorage.setItem('veloura_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('veloura_user');
      }
      localStorage.setItem('veloura_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [user, orders, isLoaded]);

  const loginWithGoogle = async () => {
    // 1. If Supabase is configured with Google OAuth, use Supabase OAuth redirect
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error('[Supabase Google OAuth Error]', error);
        throw error;
      }
      return;
    }

    // 2. Check if direct Google Cloud Console OAuth is configured
    const res = await fetch('/api/auth/status');
    const statusData = await res.json();

    if (statusData.googleConfigured) {
      // Redirect to Google Cloud Console OAuth consent screen
      const returnTo = encodeURIComponent(window.location.pathname);
      window.location.href = `/api/auth/google/login?returnTo=${returnTo}`;
      return;
    }

    // 3. Neither is configured — throw explicit error with setup details
    const err = new Error('GOOGLE_CONFIG_REQUIRED');
    (err as any).statusData = statusData;
    throw err;
  };

  const loginWithEmail = async (email: string) => {
    const username = email.split('@')[0];
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
    const emailUser: UserProfile = {
      id: `usr-${Date.now()}`,
      name: formattedName,
      email,
      authProvider: 'email',
      savedAddresses: [],
    };
    setUser(emailUser);
    setIsGuest(false);

    // Dispatch welcome email asynchronously
    fetch('/api/emails/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
        template: 'account_welcome',
        customerName: formattedName,
      }),
    }).catch((err) => console.error('[Email Login Welcome Email Error]', err));
  };

  const continueAsGuest = (email: string, name = 'Guest Shopper') => {
    setUser({
      id: `guest-${Date.now()}`,
      name,
      email,
      authProvider: 'guest',
      savedAddresses: [],
    });
    setIsGuest(true);
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      if (isSupabaseConfigured && supabase) {
        await supabase.auth.signOut();
      }
    } catch (e) {
      console.warn('[Logout Exception]', e);
    }
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem('veloura_user');
  };

  const saveOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev.filter((o) => o.id !== order.id)]);
  };

  const getOrderById = (orderId: string) => {
    return orders.find((o) => o.id === orderId || o.orderNumber === orderId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isGuest,
        isAuthenticated: !!user && !isGuest,
        orders,
        loginWithGoogle,
        loginWithEmail,
        logout,
        continueAsGuest,
        saveOrder,
        getOrderById,
        syncSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
