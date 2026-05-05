import { EmptyState } from '@/components/feedback/EmptyState';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { ProjectCard } from '@/components/projects/ProjectCard';
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
      <ChapterBand>
        <Container>
          <ChapterHead
            title="Projects"
            description="A selection of open-source and production work across the stack."
            headingLevel="h1"
          />
        </Container>
      </ChapterBand>

      <Container className="py-16">
        {projects.length === 0 ? (
          <EmptyState message="No projects to show yet." />
        ) : (
          <Grid cols={{ md: 2, xl: 3 }}>
            {projects.map((p, i) => (
              <RevealOnView key={p.id} delay={Math.min(i, 9) * 0.04}>
                <ProjectCard project={p} />
              </RevealOnView>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
