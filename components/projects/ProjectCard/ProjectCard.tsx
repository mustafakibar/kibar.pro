import { SourceLink } from '@/components/projects/SourceLink';
import { TagList } from '@/components/tag/TagList';
import { Body, Mono, Subhead } from '@/components/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Project } from './types';

type ProjectCardProps = {
  project: Project;
  hideTags?: boolean;
  className?: string;
};

const ProjectCard = ({
  project,
  hideTags = false,
  className,
}: ProjectCardProps) => {
  const href = project.repoUrl ?? '#';
  const showTags = !hideTags && project.tags && project.tags.length > 0;
  const isLinked = Boolean(project.repoUrl);

  return (
    <Link
      href={href}
      target={isLinked ? '_blank' : undefined}
      rel={isLinked ? 'noopener noreferrer' : undefined}
      className={cn(
        'group border-rule bg-elevated duration-normal flex flex-col gap-3 rounded-lg border p-5 transition-all ease-out',
        isLinked &&
          'hover:border-gold/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_oklch(0.05_0_0/0.6)]',
        !isLinked && 'pointer-events-none',
        className,
      )}>
      <header className="flex items-start justify-between gap-3">
        <Subhead
          as="h3"
          className="text-ink duration-fast group-hover:text-gold not-italic transition-colors">
          {project.title}
        </Subhead>
        <div className="flex shrink-0 items-center gap-2">
          <Mono className="text-ink-faint">{project.year}</Mono>
          {project.repoUrl && <SourceLink url={project.repoUrl} />}
        </div>
      </header>
      {project.description && (
        <Body size="sm" muted className="line-clamp-3">
          {project.description}
        </Body>
      )}
      {showTags && (
        <footer className="mt-auto pt-2">
          <TagList tags={project.tags ?? null} max={5} />
        </footer>
      )}
    </Link>
  );
};

export { ProjectCard };
export type { ProjectCardProps };
