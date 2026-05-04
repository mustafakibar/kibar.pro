import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
};

const AboutPage: NextPage = () => (
  <main className="container py-16">
    <p className="font-body text-ink-subtle">About rebuilds in Phase 3.</p>
  </main>
);

export default AboutPage;
