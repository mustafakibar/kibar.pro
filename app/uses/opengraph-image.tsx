import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Uses · Mustafa KiBAR';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ V — WORKSHOP',
    title: 'Uses',
    subtitle: 'Hardware, software, and tools I actually use.',
  });
}
