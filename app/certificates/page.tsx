import { CertificatesView } from '@/components/certificates/CertificatesView';
import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { CERTIFICATES } from '@/lib/data/certificates.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Certificates',
  description:
    'Certificates earned across engineering, cloud, and product disciplines.',
  alternates: { canonical: '/certificates' },
  openGraph: {
    title: 'Certificates · Mustafa Kibar',
    description:
      'Certificates earned across engineering, cloud, and product disciplines.',
    url: '/certificates',
  },
};

const CertificatesPage: NextPage = () => (
  <>
    <Container className="pt-12 pb-4">
      <ChapterHead
        title="Certificates"
        description="Certificates earned across engineering, cloud, and product disciplines."
        headingLevel="h1"
      />
    </Container>

    <Container className="py-16">
      {CERTIFICATES.length === 0 ? (
        <EmptyState message="No certificates to show yet." />
      ) : (
        <CertificatesView certificates={CERTIFICATES} />
      )}
    </Container>
  </>
);

export default CertificatesPage;
