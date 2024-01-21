import { FindMeOn } from '@/components/FindMeOn';
import { Hero } from '@/components/Hero';
import { Project } from '@/components/Project';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { SectionCard } from '@/components/SectionCard';
import { NextPage } from 'next';
import { BLOG_PATH, PROJECTS_PATH } from './constants';

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

const HomePage: NextPage = () => {
  return (
    <main className="p-8">
      <Hero />
      <FindMeOn />

      <SectionCard
        title="Projects"
        viewAllHref={PROJECTS_PATH}
        className="my-4">
        <div className="max-h-[40vh] overflow-y-auto px-2">
          {dummyProjects.map((project) => (
            <ProjectShowcase key={project.title} project={project} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Blog Posts" viewAllHref={BLOG_PATH} className="my-4">
        <p>Coming soon...</p>
      </SectionCard>
    </main>
  );
};

export default HomePage;
