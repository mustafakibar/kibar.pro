import { ChapterHead } from '@/components/layout/ChapterHead';
import { ViewAllLink } from '@/components/layout/ViewAllLink';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionViewerProps = {
  chapter?: string;
  title: ReactNode;
  description?: ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
  children: ReactNode;
  className?: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
};

const SectionViewer = ({
  chapter,
  title,
  description,
  viewAllHref,
  viewAllLabel = 'View all',
  children,
  className,
  headingLevel,
}: SectionViewerProps) => (
  <section className={cn('flex flex-col gap-8', className)}>
    <div className="flex flex-wrap items-end justify-between gap-4">
      <ChapterHead
        chapter={chapter}
        title={title}
        description={description}
        headingLevel={headingLevel}
      />
      {viewAllHref && (
        <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
      )}
    </div>
    {children}
  </section>
);

export { SectionViewer };
export type { SectionViewerProps };
