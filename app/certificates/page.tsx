import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/certificates' },
};

const CertificatesPage: NextPage = () => (
  <main className="container py-16">
    <p className="font-body text-ink-subtle">
      Certificates rebuilds in Phase 5.
    </p>
  </main>
);

export default CertificatesPage;
