import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'About — Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'About',
    title: 'About Mustafa',
    subtitle:
      'Senior full-stack engineer based in Istanbul. Background, experience, and the workspace I build from.',
  });
}
