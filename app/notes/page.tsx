import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { GistCard } from '@/components/notes/GistCard';
import { NoteCard } from '@/components/notes/NoteCard';
import { getGists, type GistSummary } from '@/lib/data/getGists';
import { listNoteSummaries, type NoteSummary } from '@/lib/notes';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Snippets, observations, and things worth keeping — short technical notes.',
  alternates: { canonical: '/notes' },
  openGraph: {
    title: 'Notes · Mustafa Kibar',
    description:
      'Snippets, observations, and things worth keeping — short technical notes.',
    url: '/notes',
  },
};

type FeedItem =
  | { kind: 'note'; date: string; data: NoteSummary }
  | { kind: 'gist'; date: string; data: GistSummary };

const NotesPage: NextPage = async () => {
  const notes = await listNoteSummaries();
  const gists = await getGists();

  const merged: FeedItem[] = [
    ...notes.map<FeedItem>((n) => ({
      kind: 'note' as const,
      date: n.frontmatter.date,
      data: n,
    })),
    ...gists.map<FeedItem>((g) => ({
      kind: 'gist' as const,
      date: g.updatedAt.slice(0, 10),
      data: g,
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Container className="pt-12 pb-4">
        <ChapterHead
          title="Notes"
          description="Snippets, observations, and things worth keeping."
          headingLevel="h1"
        />
      </Container>

      <Container size="narrow" className="py-16">
        {merged.length === 0 ? (
          <EmptyState message="No notes or gists published yet." />
        ) : (
          <ol className="flex flex-col" role="list">
            {merged.map((item, i) => (
              <li
                key={
                  item.kind === 'note'
                    ? `n-${item.data.slug}`
                    : `g-${item.data.id}`
                }>
                <RevealOnView delay={Math.min(i, 9) * 0.04}>
                  {item.kind === 'note' ? (
                    <NoteCard note={item.data} />
                  ) : (
                    <GistCard gist={item.data} />
                  )}
                </RevealOnView>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
};

export default NotesPage;
