import type { Project } from '@/components/projects/ProjectCard';
import { Body, Mono } from '@/components/typography';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SelectedWorkListProps = {
  projects: readonly Project[];
  className?: string;
};

const SelectedWorkList = ({ projects, className }: SelectedWorkListProps) => (
  <ol
    className={cn('divide-rule flex flex-col divide-y', className)}
    role="list">
    {projects.map((p) => {
      const href = p.repoUrl ?? '#';
      return (
        <li key={p.id}>
          <Link
            href={href}
            target={p.repoUrl ? '_blank' : undefined}
            rel={p.repoUrl ? 'noopener noreferrer' : undefined}
            className="group hover:bg-rule/40 duration-fast relative flex items-center gap-4 py-4 transition-colors ease-out">
            <span className="duration-normal flex min-w-0 flex-1 items-center gap-3 transition-transform ease-out group-hover:translate-x-1">
              <Body className="text-ink font-medium">{p.title}</Body>
              {p.description && (
                <Body size="sm" muted className="truncate">
                  — {p.description}
                </Body>
              )}
            </span>
            <Mono className="text-ink-faint">{p.year}</Mono>
            <ChevronUpRight
              data-hover-only-arrow
              className="text-ink-faint duration-normal group-hover:text-gold size-4 self-center opacity-0 transition-all ease-out group-hover:opacity-100"
            />
          </Link>
        </li>
      );
    })}
  </ol>
);

export { SelectedWorkList };
export type { SelectedWorkListProps };
