import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { NoteCard } from '@/components/notes/NoteCard';
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
  return (
    <>
      <ChapterBand>
        <Container>
          <ChapterHead
            chapter="§ VI — MARGINALIA"
            title="Marginalia"
            description="Snippets, observations, and things worth keeping."
            headingLevel="h1"
          />
        </Container>
      </ChapterBand>

      <Container size="narrow" className="py-16">
        {notes.length === 0 ? (
          <EmptyState message="No notes published yet." />
        ) : (
          <ol className="flex flex-col" role="list">
            {notes.map((note, i) => (
              <li key={note.slug}>
                <RevealOnView delay={Math.min(i, 9) * 0.04}>
                  <NoteCard note={note} index={i} />
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
