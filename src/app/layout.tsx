import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/components/providers/AppProviders';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1F0D1B',
};

export const metadata: Metadata = {
  title: 'Veloura | Haute Lingerie, Sensual Wellness & Curated Intimacy',
  description:
    'Direct-to-consumer luxury brand specializing in French lace lingerie, sculptural body-safe wellness devices, and curated romance sets. 100% discreet packaging and masked billing.',
  keywords: [
    'luxury lingerie',
    'mulberry silk',
    'sensual wellness',
    'body-safe vibrators',
    'couples intimacy sets',
    'discreet shipping',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} font-sans antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF4F2] text-[#1F0D1B] overflow-x-hidden w-full max-w-[100vw]">
        <AppProviders>
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

