import { ogContentType, ogSize, renderOgImage } from './_og/og-template';

export const runtime = 'edge';
export const alt = 'Mustafa KiBAR — Senior Full-Stack Engineer';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ 0 — INDEX',
    title: 'K𝑖BAR',
    subtitle:
      'Senior full-stack engineer based in Istanbul. Reliable, performant products end-to-end.',
  });
}
