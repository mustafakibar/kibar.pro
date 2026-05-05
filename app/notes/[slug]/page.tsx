import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { NoteContent } from '@/components/notes/NoteContent';
import { Body, Mono } from '@/components/typography';
import { NOTES_PATH } from '@/lib/constants/paths';
import { ChevronRight } from '@/lib/icons';
import { getNote, getNoteSlugs, summariseNote } from '@/lib/notes';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) return {};
  return {
    title: note.frontmatter.title,
    description: note.frontmatter.description,
    alternates: { canonical: `${NOTES_PATH}/${slug}` },
    openGraph: {
      title: `${note.frontmatter.title} · Notes`,
      description: note.frontmatter.description,
      url: `${NOTES_PATH}/${slug}`,
      type: 'article',
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) notFound();
  const summary = summariseNote(note);

  return (
    <>
      <ChapterBand>
        <Container size="narrow">
          <Link
            href={NOTES_PATH}
            className="text-gold hover:text-gold-bright mb-3 inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase">
            <ChevronRight className="size-3 rotate-180" />
            Notes
          </Link>
          <ChapterHead
            chapter={`§ VI · ${summary.frontmatter.date}`}
            title={summary.frontmatter.title}
            description={summary.frontmatter.description}
            headingLevel="h1"
          />
          <Body muted className="mt-4 flex items-center gap-3">
            <Mono className="text-ink-faint">
              {summary.readingTimeMinutes} min read
            </Mono>
          </Body>
        </Container>
      </ChapterBand>

      <Container size="narrow" className="py-16">
        <NoteContent source={note.content} />
      </Container>
    </>
  );
}
