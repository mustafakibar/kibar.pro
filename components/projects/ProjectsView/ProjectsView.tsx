'use client';

import { CollectionView } from '@/components/layout/CollectionView';
import type { Project } from '@/components/projects/ProjectCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectRow } from '@/components/projects/ProjectRow';
import { type ViewMode } from '@/hooks/useViewPreference';
import { VIEW_COOKIE } from '@/lib/viewCookie';

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
}: ProjectsViewProps) => (
  <CollectionView
    items={projects}
    title={title}
    description={description}
    storageKey={VIEW_COOKIE.projects}
    initialView={initialView}
    reveal
    getKey={(p) => p.id}
    renderCard={(p) => <ProjectCard project={p} />}
    renderRow={(p) => <ProjectRow project={p} />}
  />
);

export { ProjectsView };
export type { ProjectsViewProps };
