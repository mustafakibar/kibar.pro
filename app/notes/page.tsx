import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { GistCard } from '@/components/notes/GistCard';
import { NoteCard } from '@/components/notes/NoteCard';
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
  return (
    <>
      <ChapterBand>
        <Container>
          <ChapterHead
            title="Notes"
            description="Snippets, observations, and things worth keeping."
            headingLevel="h1"
          />
        </Container>
      </ChapterBand>

      <Container size="narrow" className="flex flex-col gap-16 py-16">
        <section className="flex flex-col gap-4">
          {notes.length === 0 ? (
            <EmptyState message="No notes published yet." />
          ) : (
            <ol className="flex flex-col" role="list">
              {notes.map((note, i) => (
                <li key={note.slug}>
                  <RevealOnView delay={Math.min(i, 9) * 0.04}>
                    <NoteCard note={note} />
                  </RevealOnView>
                </li>
              ))}
            </ol>
          )}
        </section>

        {gists.length > 0 && (
          <section className="flex flex-col gap-4">
            <ol className="flex flex-col" role="list">
              {gists.map((gist, i) => (
                <li key={gist.id}>
                  <RevealOnView delay={Math.min(i, 9) * 0.04}>
                    <GistCard gist={gist} />
                  </RevealOnView>
                </li>
              ))}
            </ol>
          </section>
        )}
      </Container>
    </>
  );
};

export default NotesPage;
