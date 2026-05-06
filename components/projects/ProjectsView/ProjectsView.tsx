'use client';

import { Grid } from '@/components/layout/Grid';
import { PageShell } from '@/components/layout/PageShell';
import { RevealOnView } from '@/components/motion/RevealOnView';
import type { Project } from '@/components/projects/ProjectCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectRow } from '@/components/projects/ProjectRow';
import { ViewToggle } from '@/components/ui/ViewToggle';
import { useViewPreference, type ViewMode } from '@/hooks/useViewPreference';
import { duration, easing } from '@/lib/tokens';
import { VIEW_COOKIE } from '@/lib/viewCookie';
import { AnimatePresence, motion } from 'motion/react';

type ProjectsViewProps = {
  projects: readonly Project[];
  title: string;
  description: string;
  initialView?: ViewMode;
};

const ProjectsView = ({
  projects,
  title,
  description,
  initialView = 'grid',
}: ProjectsViewProps) => {
  const [view, setView] = useViewPreference(VIEW_COOKIE.projects, initialView);

  return (
    <PageShell
      title={title}
      description={description}
      toolbar={<ViewToggle view={view} onChange={setView} />}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duration.normal, ease: easing.out }}>
          {view === 'grid' ? (
            <Grid cols={{ md: 2, xl: 3 }}>
              {projects.map((p, i) => (
                <RevealOnView
                  key={p.id}
                  delay={Math.min(i, 9) * 0.04}
                  amount={0.1}>
                  <ProjectCard project={p} />
                </RevealOnView>
              ))}
            </Grid>
          ) : (
            <ol className="flex flex-col" role="list">
              {projects.map((p) => (
                <li key={p.id}>
                  <ProjectRow project={p} />
                </li>
              ))}
            </ol>
          )}
        </motion.div>
      </AnimatePresence>
    </PageShell>
  );
};

export { ProjectsView };
export type { ProjectsViewProps };
