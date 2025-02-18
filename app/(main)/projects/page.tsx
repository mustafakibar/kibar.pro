import { AnimatedItemWrapper } from '@/components/AnimatedItemWrapper';
import { GridWrapper } from '@/components/GridWrapper';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { SectionHeading } from '@/components/SectionHeading';
import { getProjects } from '@/data/getProjects';
import { NextPage } from 'next';

export const metadata = {
  title: 'Projects',
  description: "Here are some of the projects I've worked on.",
};

const ProjectsPage: NextPage = async () => {
  const projects = await getProjects();

  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Projects"
          description="Here are some of the projects I've worked on."
        />
      </div>

      <GridWrapper>
        {projects?.map((data, index) => (
          <AnimatedItemWrapper key={index} itemIndex={index}>
            <ProjectShowcase project={data} />
          </AnimatedItemWrapper>
        )) ?? <p className="text-xl">No projects found</p>}
      </GridWrapper>
    </section>
  );
};

export default ProjectsPage;
