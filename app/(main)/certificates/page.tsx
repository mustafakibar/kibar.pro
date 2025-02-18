import { AnimatedItemWrapper } from '@/components/AnimatedItemWrapper';
import { CertificateShowcase } from '@/components/Certificates/CertificatesShowcase';
import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { getCertificates } from '@/data/getCertificates';
import { AnimatePresence } from 'motion/react';
import { NextPage } from 'next';
import { ReactNode } from 'react';

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
    CertificateListComponent = <p className="text-xl">No certificates found</p>;
  }

  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Certificates"
          description="Certificates I have earned over the years."
        />
      </div>

      <GridWrapper>{CertificateListComponent}</GridWrapper>
    </section>
  );
};

export default CertificatesPage;
