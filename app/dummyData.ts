import { Post } from '@/components/Blog';
import { Project } from '@/components/Project';
import { Snippet } from '@/components/Snippet';

const dummyProjects: Project[] = [
  {
    title: 'Dummy Project -1',
    slug: 'dummy-project-1',
    year: 2016,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Dummy Project -2',
    slug: 'dummy-project-2',
    year: 2021,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    repoUrl: 'https://gitlab.com',
    tags: ['react', 'typescript'],
  },
  {
    title: 'Dummy Project -3',
    slug: 'dummy-project-3',
    year: 2012,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    repoUrl: 'https://gitlab.com',
    tags: ['react', 'typescript'],
  },
  {
    title: 'Dummy Project -4',
    slug: 'dummy-project-4',
    year: 2011,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    repoUrl: 'https://gitlab.com',
    tags: ['react', 'typescript'],
  },
];

const dummySnippets: Snippet[] = [
  {
    title: 'Dummy Snippet -1',
    slug: 'dummy-snippet-1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['react', 'typescript'],
  },
  {
    title: 'Dummy Snippet -2',
    slug: 'dummy-snippet-2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['rust', 'webassembly'],
  },
  {
    title: 'Dummy Snippet -3',
    slug: 'dummy-snippet-3',
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

export { dummyBlogPosts, dummyProjects, dummySnippets };
