import env from '@/env';
import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  HOME_PATH,
  PROJECTS_PATH,
} from '@/lib/constants/paths';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [HOME_PATH, ABOUT_PATH, PROJECTS_PATH, CERTIFICATES_PATH];

  return routes.map((path) => ({
    url: `${env.SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === HOME_PATH ? 1 : 0.7,
  }));
}
