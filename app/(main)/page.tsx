import { BLOG_PATH, PROJECTS_PATH, SNIPPETS_PATH } from '@/common/paths';
import { PostShowcase } from '@/components/Blog';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { ShowcaseViewer } from '@/components/Showcase';
import { SnippetShowcase } from '@/components/Snippet/SnippetShowcase';
import { NextPage } from 'next';
import { dummyBlogPosts, dummyProjects, dummySnippets } from './dummyData';

const HomePage: NextPage = () => {
  return (
    <main>
      <Hero />

      <ShowcaseViewer
        title="Projects"
        viewAllHref={PROJECTS_PATH}
        className="my-4">
        {dummyProjects.slice(0, 3).map((item) => (
          <ProjectShowcase key={item.id} project={item} hideTags />
        ))}
      </ShowcaseViewer>

      <ShowcaseViewer
        title="Blog Posts"
        viewAllHref={BLOG_PATH}
        className="my-4">
        {dummyBlogPosts.slice(0, 3).map((item) => (
          <PostShowcase key={item.id} post={item} />
        ))}
      </ShowcaseViewer>

      <ShowcaseViewer
        title="Snippets"
        viewAllHref={SNIPPETS_PATH}
        className="my-4">
        {dummySnippets.slice(0, 3).map((item) => (
          <SnippetShowcase key={item.id} snippet={item} />
        ))}
      </ShowcaseViewer>
    </main>
  );
};

export default HomePage;
