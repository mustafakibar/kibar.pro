'use client';

import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { RevealOnView } from '@/components/motion/RevealOnView';
import type { Project } from '@/components/projects/ProjectCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectRow } from '@/components/projects/ProjectRow';
import { Mono } from '@/components/typography';
import { LayoutGrid, ListIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type ViewMode = 'grid' | 'list';
const STORAGE_KEY = 'kibar:projects-view';

type ProjectsViewProps = {
  projects: readonly Project[];
  title: string;
  description: string;
};

const ProjectsView = ({ projects, title, description }: ProjectsViewProps) => {
  const [view, setView] = useState<ViewMode>('grid');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'list' || saved === 'grid') setView(saved);
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  const setViewPersisted = (next: ViewMode) => {
    setView(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable
    }
  };

  return (
    <>
      <Container className="pt-12 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <ChapterHead
            title={title}
            description={description}
            headingLevel="h1"
          />
          <ViewToolbar view={view} onChange={setViewPersisted} />
        </div>
      </Container>

      <Container className="py-8">
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
      </Container>
    </>
  );
};

type ViewToolbarProps = {
  view: ViewMode;
  onChange: (next: ViewMode) => void;
};

const ViewToolbar = ({ view, onChange }: ViewToolbarProps) => (
  <div className="flex items-center gap-2">
    <Mono className="text-ink-faint text-xs tracking-widest uppercase">
      View
    </Mono>
    <div
      role="group"
      aria-label="Toggle view mode"
      className="border-rule flex overflow-hidden rounded-md border">
      <button
        type="button"
        aria-pressed={view === 'grid'}
        aria-label="Grid view"
        onClick={() => onChange('grid')}
        className={cn(
          'duration-fast flex size-8 items-center justify-center transition-colors',
          view === 'grid'
            ? 'bg-gold/15 text-gold'
            : 'text-ink-muted hover:bg-rule/40 hover:text-ink',
        )}>
        <LayoutGrid className="size-4" />
      </button>
      <button
        type="button"
        aria-pressed={view === 'list'}
        aria-label="List view"
        onClick={() => onChange('list')}
        className={cn(
          'border-rule duration-fast flex size-8 items-center justify-center border-l transition-colors',
          view === 'list'
            ? 'bg-gold/15 text-gold'
            : 'text-ink-muted hover:bg-rule/40 hover:text-ink',
        )}>
        <ListIcon className="size-4" />
      </button>
    </div>
  </div>
);

export { ProjectsView };
export type { ProjectsViewProps };
