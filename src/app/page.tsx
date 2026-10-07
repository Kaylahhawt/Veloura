import React from 'react';
import { HeroBanner } from '@/components/home/HeroBanner';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { SensoryExperience } from '@/components/home/SensoryExperience';

export const metadata = {
  title: 'Veloura | Haute Lingerie, Sensual Wellness & Curated Intimacy',
  description: 'Veloura is a direct-to-consumer luxury brand specializing in French lace lingerie, sculptural body-safe wellness devices, and curated romance sets. 100% discreet packaging and masked billing.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroBanner />
      <FeaturedCollections />
      <CategoryShowcase />
      <SensoryExperience />
    </div>
  );
}
