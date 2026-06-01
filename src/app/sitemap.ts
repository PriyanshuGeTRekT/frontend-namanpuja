import type { MetadataRoute } from 'next';
import { getAllLocationSlugs, getTemples, getPujas } from '@/lib/api';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.namanpuja.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [locations, temples, pujas] = await Promise.all([
    getAllLocationSlugs(),
    getTemples(),
    getPujas(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/book`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE}/locations/${l.slug}`,
    lastModified: l.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const templeRoutes: MetadataRoute.Sitemap = temples.map((t) => ({
    url: `${SITE}/temples/${t.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const pujaRoutes: MetadataRoute.Sitemap = pujas.map((p) => ({
    url: `${SITE}/pujas/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes, ...pujaRoutes, ...templeRoutes];
}
