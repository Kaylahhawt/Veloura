import React from 'react';
import { AccountPageContent } from '@/components/account/AccountPageContent';

export const metadata = {
  title: 'Customer Intimate Portal | Veloura',
  description: 'Manage your confidential profile, view past orders, and track active parcels.',
};

export default function AccountPage() {
  return <AccountPageContent />;
}
