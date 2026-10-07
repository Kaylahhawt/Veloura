import React from 'react';
import { TransactionalEmailPreview } from '@/components/email/TransactionalEmailPreview';

export const metadata = {
  title: 'Mailgun Transactional Email Engine | Veloura',
  description: 'Interactive preview of Veloura order confirmation, dispatch, out-for-delivery, and delivery emails.',
};

export default function EmailPreviewPage() {
  return <TransactionalEmailPreview />;
}
