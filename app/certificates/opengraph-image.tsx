import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Credentials · Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ III — CREDENTIALS',
    title: 'Credentials',
    subtitle: 'Earned across engineering, cloud, and product disciplines.',
  });
}
