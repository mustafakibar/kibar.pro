import { ogContentType, ogSize, renderOgImage } from './_og/og-template';

export const runtime = 'edge';
export const alt = 'Mustafa Kibar — Senior Full-Stack Engineer';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'kibar.pro',
    title: 'Mustafa Kibar',
    subtitle:
      'Senior Full-Stack Engineer — designing and shipping reliable products across the web stack.',
  });
}
