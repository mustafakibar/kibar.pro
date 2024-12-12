import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { SnippetShowcase } from '@/components/Snippet/SnippetShowcase';
import { NextPage } from 'next';
import { dummySnippets } from '../dummyData';

const CertificatesPage: NextPage = () => {
  return (
    <section className="flex flex-col max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Certificates"
          subtitle="Showing 3 certificates in total"
        />

        <div className="flex flex-shrink gap-4"></div>
      </div>

      <GridWrapper>
        {[...dummySnippets, ...dummySnippets, ...dummySnippets].map(
          (data, index) => (
            <SnippetShowcase key={index} snippet={data} />
          ),
        )}
      </GridWrapper>
    </section>
  );
};

export default CertificatesPage;
