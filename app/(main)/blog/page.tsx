import { SectionHeading } from '@/components/SectionHeading';
import { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading title="Blog" description="My blog posts" />
      </div>
    </section>
  );
};

export default BlogPage;
