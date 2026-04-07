import { AnimatedItemWrapper } from '@/components/AnimatedItemWrapper';
import { CertificateShowcase } from '@/components/Certificates/CertificatesShowcase';
import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { getCertificates } from '@/lib/data/getCertificates';
import { AnimatePresence } from 'motion/react';
import type { Metadata, NextPage } from 'next';
import { ReactNode } from 'react';

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

const CertificatesPage: NextPage = async () => {
  const certificates = await getCertificates();

  let CertificateListComponent: ReactNode;
  if (certificates && certificates.length > 0) {
    CertificateListComponent = (
      <AnimatePresence>
        {certificates.map((data, index) => (
          <AnimatedItemWrapper key={index} delay={index}>
            <CertificateShowcase certificate={data} />
          </AnimatedItemWrapper>
        ))}
      </AnimatePresence>
    );
  } else {
    CertificateListComponent = <p className="text-xl">No certificates yet.</p>;
  }

  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Credentials"
          description="Certificates earned across engineering, cloud, and product disciplines."
        />
      </div>

      <GridWrapper>{CertificateListComponent}</GridWrapper>
    </section>
  );
};

export default CertificatesPage;
