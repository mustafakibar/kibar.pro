import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const Page: NextPage = () => (
  <main className="container py-16">
    <p className="font-body text-ink-subtle">Home rebuilds in Phase 2.</p>
  </main>
);

export default Page;
