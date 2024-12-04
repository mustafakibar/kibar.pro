import { PostShowcase } from '@/components/Blog';
import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { NextPage } from 'next';
import { dummyBlogPosts } from '../dummyData';

const BlogPage: NextPage = () => {
  return (
    <section className="flex flex-col max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading title="Posts" subtitle="Showing 3 posts in total" />

        {/* TODO */}
        <div className="flex flex-shrink gap-4"></div>
      </div>

      <GridWrapper>
        {[...dummyBlogPosts, ...dummyBlogPosts, ...dummyBlogPosts].map(
          (data, index) => (
            <PostShowcase key={index} post={data} />
          ),
        )}
      </GridWrapper>
    </section>
  );
};

export default BlogPage;
