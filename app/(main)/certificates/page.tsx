import { CertificateShowcase } from '@/components/Certificates/CertificatesShowcase';
import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { getCertificates } from '@/data/getCertificates';
import { NextPage } from 'next';

const CertificatesPage: NextPage = async () => {
  const certificates = await getCertificates();

  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Certificates"
          description="Certificates I have earned over the years."
        />
      </div>

      <GridWrapper>
        {certificates?.map((data, index) => (
          <CertificateShowcase key={index} certificate={data} />
        )) ?? <p className="text-xl">No certificates found</p>}
      </GridWrapper>
    </section>
  );
};

export default CertificatesPage;
