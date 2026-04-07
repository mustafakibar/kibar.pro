import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Projects — Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'Projects',
    title: 'Selected Work',
    subtitle:
      'Open-source and production work spanning web, mobile, and backend systems.',
  });
}
