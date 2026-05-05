import { CertificateCard } from '@/components/certificates/CertificateCard';
import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { CERTIFICATES } from '@/lib/data/certificates.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Credentials',
  description:
    'Professional certificates and credentials earned across engineering, cloud, and product disciplines.',
  alternates: { canonical: '/certificates' },
  openGraph: {
    title: 'Credentials · Mustafa Kibar',
    description:
      'Professional certificates and credentials earned across engineering, cloud, and product disciplines.',
    url: '/certificates',
  },
};

const CertificatesPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          title="Credentials"
          description="Certificates earned across engineering, cloud, and product disciplines."
          headingLevel="h1"
        />
      </Container>
    </ChapterBand>

    <Container className="py-16">
      {CERTIFICATES.length === 0 ? (
        <EmptyState message="No credentials to show yet." />
      ) : (
        <Grid cols={{ md: 2, xl: 3 }}>
          {CERTIFICATES.map((c, i) => (
            <RevealOnView key={c.title} delay={Math.min(i, 9) * 0.04}>
              <CertificateCard certificate={c} />
            </RevealOnView>
          ))}
        </Grid>
      )}
    </Container>
  </>
);

export default CertificatesPage;
