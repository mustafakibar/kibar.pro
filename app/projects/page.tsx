import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { ProjectsView } from '@/components/projects/ProjectsView';
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
    <>
      <Container className="pt-12 pb-4">
        <ChapterHead
          title="Projects"
          description="A selection of open-source and production work across the stack."
          headingLevel="h1"
        />
      </Container>

      <Container className="py-16">
        {projects.length === 0 ? (
          <EmptyState message="No projects to show yet." />
        ) : (
          <ProjectsView projects={projects} />
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
