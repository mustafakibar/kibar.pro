import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { SnippetShowcase } from '@/components/Snippet/SnippetShowcase';
import { ArrowUpDownIcon, FilterIcon, SearchIcon } from 'lucide-react';
import { NextPage } from 'next';
import { dummySnippets } from '../dummyData';

const SnippetsPage: NextPage = () => {
  return (
    <section className="flex flex-col sm:p-4 md:p-0">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Snippets"
          subtitle="Showing 3 snippets in total"
        />

        {/* TODO */}
        <div className="flex flex-shrink gap-4">
          <SearchIcon />
          <FilterIcon />
          <ArrowUpDownIcon />
        </div>
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