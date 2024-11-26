import { GridWrapper } from '@/components/GridWrapper';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowUpDownIcon, FilterIcon, SearchIcon } from 'lucide-react';
import { NextPage } from 'next';
import { dummyProjects } from '../dummyData';

export const metadata = {
  title: 'Projects',
  description: "Here are some of the projects I've worked on.",
};

const ProjectsPage: NextPage = () => {
  return (
    <section className="flex flex-col sm:p-4 md:p-0">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Projects"
          subtitle="Showing 3 projects in total"
        />

        {/* TODO */}
        <div className="flex flex-shrink gap-4">
          <SearchIcon />
          <FilterIcon />
          <ArrowUpDownIcon />
        </div>
      </div>

      <GridWrapper>
        {[...dummyProjects, ...dummyProjects, ...dummyProjects].map((data, index) => (
          <ProjectShowcase key={index} project={data} />
        ))}
      </GridWrapper>
    </section>
  );
};

export default ProjectsPage;
