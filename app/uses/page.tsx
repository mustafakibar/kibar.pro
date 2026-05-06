import { PageShell } from '@/components/layout/PageShell';
import { DeskBand } from '@/components/uses/DeskBand';
import { UsesIndex } from '@/components/uses/UsesIndex';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The hardware, software, and tools I work from in Istanbul.',
  alternates: { canonical: '/uses' },
  openGraph: {
    title: 'Uses · Mustafa KiBAR',
    description: 'The hardware, software, and tools I work from in Istanbul.',
    url: '/uses',
  },
};

const UsesPage: NextPage = () => (
  <PageShell
    title="Workshop"
    description="The desk, the machine, and the tools — what I actually use."
    contentSize="narrow"
    contentClassName="flex flex-col gap-16 py-16">
    <UsesIndex />
    <DeskBand />
  </PageShell>
);

export default UsesPage;
