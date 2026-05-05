import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { DeskBand } from '@/components/uses/DeskBand';
import { UsesIndex } from '@/components/uses/UsesIndex';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The hardware, software, and tools I work from in Istanbul.',
  alternates: { canonical: '/uses' },
  openGraph: {
    title: 'Uses · Mustafa Kibar',
    description: 'The hardware, software, and tools I work from in Istanbul.',
    url: '/uses',
  },
};

const UsesPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          chapter="§ V — WORKSHOP"
          title="Workshop"
          description="The desk, the machine, and the tools — what I actually use."
          headingLevel="h1"
        />
      </Container>
    </ChapterBand>

    <Container size="narrow" className="flex flex-col gap-16 py-16">
      <UsesIndex />
      <DeskBand />
    </Container>
  </>
);

export default UsesPage;
