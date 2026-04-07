import { AnimatedItemWrapper } from '@/components/AnimatedItemWrapper';
import { GridWrapper } from '@/components/GridWrapper';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { SectionHeading } from '@/components/SectionHeading';
import { getProjects } from '@/lib/data/getProjects';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A selection of open-source and production work spanning web, mobile, and backend systems.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects · Mustafa Kibar',
    description:
      'A selection of open-source and production work spanning web, mobile, and backend systems.',
    url: '/projects',
  },
};

const ProjectsPage: NextPage = async () => {
  const projects = await getProjects();

  return (
    <section className="flex flex-col gap-8 max-sm:p-4">
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Projects"
          description="A selection of open-source and production work across the stack."
        />
      </div>

      <GridWrapper>
        {projects && projects.length > 0 ? (
          projects.map((data, index) => (
            <AnimatedItemWrapper key={data.id} delay={index}>
              <ProjectShowcase project={data} />
            </AnimatedItemWrapper>
          ))
        ) : (
          <p className="text-xl">No projects yet.</p>
        )}
      </GridWrapper>
    </section>
  );
};

export default ProjectsPage;
