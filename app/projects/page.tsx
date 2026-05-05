import { EmptyState } from '@/components/feedback/EmptyState';
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
  if (projects.length === 0) {
    return (
      <Container className="py-16">
        <EmptyState message="No projects to show yet." />
      </Container>
    );
  }
  return (
    <ProjectsView
      projects={projects}
      title="Projects"
      description="A selection of open-source and production work across the stack."
    />
  );
};

export default ProjectsPage;
