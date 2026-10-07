import React from 'react';
import { notFound } from 'next/navigation';
import { CATEGORIES } from '@/data/products';
import { ProductCatalog } from '@/components/product/ProductCatalog';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: 'Category | Veloura' };

  return {
    title: `${category.name} | Veloura Luxury Intimates`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return <ProductCatalog initialCategorySlug={slug} />;
}
