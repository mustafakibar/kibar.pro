import env from '@/env';
import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  HOME_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  USES_PATH,
} from '@/lib/constants/paths';
import { getNoteSlugs } from '@/lib/notes';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.SITE_URL;
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    HOME_PATH,
    ABOUT_PATH,
    PROJECTS_PATH,
    CERTIFICATES_PATH,
    CONTACT_PATH,
    USES_PATH,
    NOTES_PATH,
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified,
    changeFrequency: 'monthly' as const,
  }));

  const slugs = await getNoteSlugs();
  const noteRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}${NOTES_PATH}/${slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
  }));

  return [...staticRoutes, ...noteRoutes];
}
