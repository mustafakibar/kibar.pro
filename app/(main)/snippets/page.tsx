import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { SnippetShowcase } from '@/components/Snippet/SnippetShowcase';
import { NextPage } from 'next';
import { dummySnippets } from '../dummyData';

const SnippetsPage: NextPage = () => {
  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Snippets"
          description="Showing 3 snippets in total"
        />
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

export default SnippetsPage;
