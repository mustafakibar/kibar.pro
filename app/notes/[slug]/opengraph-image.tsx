import { getNote } from '@/lib/notes';
import { notFound } from 'next/navigation';
import { ogContentType, ogSize, renderOgImage } from '../../_og/og-template';

export const alt = 'Notes · Mustafa Kibar';
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) notFound();
  return renderOgImage({
    eyebrow: `§ Notes · ${note.frontmatter.date}`,
    title: note.frontmatter.title,
    subtitle: note.frontmatter.description,
  });
}
