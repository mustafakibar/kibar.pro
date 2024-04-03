import { PostShowcase } from '@/components/Blog';
import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowUpDownIcon, FilterIcon, SearchIcon } from 'lucide-react';
import { NextPage } from 'next';
import { dummyBlogPosts } from '../dummyData';

const BlogPage: NextPage = () => {
  return (
    <section className="flex flex-col sm:p-4 md:p-0">
      <div className="flex items-center justify-between">
        <SectionHeading title="Posts" subtitle="Showing 3 posts in total" />

        {/* TODO */}
        <div className="flex flex-shrink gap-4">
          <SearchIcon />
          <FilterIcon />
          <ArrowUpDownIcon />
        </div>
      </div>

      <GridWrapper>
        {[...dummyBlogPosts, ...dummyBlogPosts, ...dummyBlogPosts].map(
          (item) => (
            <PostShowcase key={item.title} post={item} />
          ),
        )}
      </GridWrapper>
    </section>
  );
};

export default BlogPage;
