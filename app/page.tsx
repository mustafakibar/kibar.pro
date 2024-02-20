import { PostShowcase } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { ShowcaseViewer } from '@/components/Showcase';
import { SnippetShowcase } from '@/components/Snippet/SnippetShowcase';
import { NextPage } from 'next';
import { BLOG_PATH, PROJECTS_PATH, SNIPPETS_PATH } from './constants';
import { dummyBlogPosts, dummyProjects, dummySnippets } from './dummyData';

const HomePage: NextPage = () => {
  return (
    <main>
      <Hero />
      <Contact />

      <ShowcaseViewer
        title="Projects"
        viewAllHref={PROJECTS_PATH}
        className="my-4">
        {dummyProjects.map((item) => (
          <ProjectShowcase key={item.title} project={item} />
        ))}
      </ShowcaseViewer>

      <ShowcaseViewer
        title="Blog Posts"
        viewAllHref={BLOG_PATH}
        className="my-4">
        {dummyBlogPosts.map((item) => (
          <PostShowcase key={item.title} post={item} />
        ))}
      </ShowcaseViewer>

      <ShowcaseViewer
        title="Snippets"
        viewAllHref={SNIPPETS_PATH}
        className="my-4">
        {dummySnippets.map((item) => (
          <SnippetShowcase key={item.title} snippet={item} />
        ))}
      </ShowcaseViewer>
    </main>
  );
};

export default HomePage;
