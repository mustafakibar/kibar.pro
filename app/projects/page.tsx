import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/projects' },
};

const ProjectsPage: NextPage = () => (
  <main className="container py-16">
    <p className="font-body text-ink-subtle">Projects rebuilds in Phase 4.</p>
  </main>
);

export default ProjectsPage;
