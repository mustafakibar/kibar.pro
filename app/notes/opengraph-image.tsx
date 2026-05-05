import { ogContentType, ogSize, renderOgImage } from '../_og/og-template';

export const runtime = 'edge';
export const alt = 'Notes · Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: '§ VI — NOTES',
    title: 'Notes',
    subtitle: 'Snippets, observations, and things worth keeping.',
  });
}
