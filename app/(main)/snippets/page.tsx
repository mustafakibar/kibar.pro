import { SectionHeading } from '@/components/SectionHeading';
import { NextPage } from 'next';

const SnippetsPage: NextPage = () => {
  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading title="Snippets" description="My snippets" />
      </div>
    </section>
  );
};

export default SnippetsPage;
