import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { ArrowUpDownIcon, FilterIcon, SearchIcon } from 'lucide-react';
import { NextPage } from 'next';
import { dummyProjects } from '../dummyData';

export const metadata = {
  title: 'Projects',
  description: "Here are some of the projects I've worked on.",
};

const ProjectsPage: NextPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-black tracking-tighter">Projects</h1>
          <h3 className="text-sm text-muted-foreground">
            Showing 3 projects in total
          </h3>
        </div>

        {/* TODO */}
        <div className="flex flex-shrink gap-4">
          <SearchIcon />
          <FilterIcon />
          <ArrowUpDownIcon />
        </div>
      </div>

      <div className="my-4 grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {[...dummyProjects, ...dummyProjects, ...dummyProjects].map((item) => (
          <ProjectShowcase key={item.title} project={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
