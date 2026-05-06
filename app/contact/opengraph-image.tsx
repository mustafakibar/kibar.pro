import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Contact · Mustafa KiBAR';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ IV — CORRESPONDENCE',
    title: 'Contact',
    subtitle: 'Best caught by email or in writing.',
  });
}
