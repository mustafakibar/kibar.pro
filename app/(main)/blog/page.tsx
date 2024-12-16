import { PostShowcase } from '@/components/Blog';
import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { NextPage } from 'next';
import { dummyBlogPosts } from '../dummyData';

const BlogPage: NextPage = () => {
  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading title="Posts" description="Showing 3 posts in total" />
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
