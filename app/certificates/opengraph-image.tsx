import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Credentials — Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'Credentials',
    title: 'Credentials',
    subtitle:
      'Professional certificates earned across engineering, cloud, and product disciplines.',
  });
}
