import { Post, PostShowcase } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Project } from '@/components/Project';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { SectionHeading } from '@/components/SectionHeading';
import { Snippet } from '@/components/Snippet';
import { SnippetShowcase } from '@/components/Snippet/SnippetShowcase';
import { NextPage } from 'next';
import { BLOG_PATH, PROJECTS_PATH, SNIPPETS_PATH } from './constants';

const dummyProjects: Project[] = [
  {
    title: 'Dummy Project -1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    github: 'https://github.com',
  },
  {
    title: 'Dummy Project -2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    github: 'https://github.com',
    tags: ['react', 'typescript'],
  },
];

const dummySnippets: Snippet[] = [
  {
    title: 'Dummy Snippet -1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['react', 'typescript'],
  },
  {
    title: 'Dummy Snippet -2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['rust', 'webassembly'],
  },
  {
    title: 'Dummy Snippet -3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['kotlin', 'microservice'],
  },
];

const dummyBlogPosts: Post[] = [
  {
    id: '1',
    slug: 'dummy-blog-post-1',
    tags: ['react', 'typescript'],
    title: 'Dummy Blog Post -1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    published: true,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: null,
  },
  {
    id: '2',
    slug: 'dummy-blog-post-2',
    tags: ['rust', 'webassembly'],
    title: 'Dummy Blog Post -2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    published: true,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: null,
  },
  {
    id: '3',
    slug: 'dummy-blog-post-3',
    tags: ['kotlin', 'microservice'],
    title: 'Dummy Blog Post -3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    published: true,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: null,
  },
];

const HomePage: NextPage = () => {
  return (
    <main className="p-8">
      <Hero />
      <Contact />

      <SectionHeading
        title="Projects"
        viewAllHref={PROJECTS_PATH}
        className="my-4">
        <div className="max-h-[40vh] overflow-y-auto px-2">
          {dummyProjects.map((item) => (
            <ProjectShowcase key={item.title} project={item} />
          ))}
        </div>
      </SectionHeading>

      <SectionHeading
        title="Blog Posts"
        viewAllHref={BLOG_PATH}
        className="my-4">
        <div className="max-h-[40vh] overflow-y-auto px-2">
          {dummyBlogPosts.map((item) => (
            <PostShowcase key={item.title} post={item} />
          ))}
        </div>
      </SectionHeading>

      <SectionHeading
        title="Snippets"
        viewAllHref={SNIPPETS_PATH}
        className="my-4">
        <div className="max-h-[40vh] overflow-y-auto px-2">
          {dummySnippets.map((item) => (
            <SnippetShowcase key={item.title} snippet={item} />
          ))}
        </div>
      </SectionHeading>
    </main>
  );
};

export default HomePage;
