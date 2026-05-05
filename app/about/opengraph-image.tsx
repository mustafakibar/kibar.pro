import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'About · Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ I — THE MAKER',
    title: 'About',
    subtitle: 'Background, stack, and the workshop I build from.',
  });
}
