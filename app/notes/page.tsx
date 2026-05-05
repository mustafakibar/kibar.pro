import { EmptyState } from '@/components/feedback/EmptyState';
import { Container } from '@/components/layout/Container';
import { NotesView, type FeedItem } from '@/components/notes/NotesView';
import { getGists } from '@/lib/data/getGists';
import { listNoteSummaries } from '@/lib/notes';
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

  if (merged.length === 0) {
    return (
      <Container className="py-16">
        <EmptyState message="No notes or gists published yet." />
      </Container>
    );
  }

  return (
    <NotesView
      items={merged}
      title="Notes"
      description="Snippets, observations, and things worth keeping."
    />
  );
};

export default NotesPage;
