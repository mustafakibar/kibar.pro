import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Certificates · Mustafa KiBAR';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ III — CERTIFICATES',
    title: 'Certificates',
    subtitle: 'Earned across engineering, cloud, and product disciplines.',
  });
}
