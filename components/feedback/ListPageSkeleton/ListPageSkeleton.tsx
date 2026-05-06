import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Body, Heading } from '@/components/typography';
import { Skeleton } from '@/components/ui/skeleton';
import type { ViewMode } from '@/lib/viewCookie';
import type { ReactNode } from 'react';

type ListPageSkeletonProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Match the user's view preference so the skeleton mirrors final layout. */
  view?: ViewMode;
  count?: number;
};

const SkeletonRow = () => (
  <li className="border-rule flex items-baseline gap-4 border-b px-3 py-4">
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <Skeleton className="h-5 w-3/5" />
      <Skeleton className="h-3 w-4/5" />
    </div>
    <Skeleton className="h-3 w-16" />
    <Skeleton className="h-3 w-12" />
  </li>
);

const SkeletonCard = () => (
  <div className="border-rule bg-elevated flex h-44 flex-col gap-3 rounded-lg border p-5">
    <Skeleton className="h-5 w-3/5" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-4/5" />
    <div className="border-rule mt-auto flex items-center justify-between gap-3 border-t pt-3">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-3 w-12" />
    </div>
  </div>
);

const ListPageSkeleton = ({
  title,
  description,
  view = 'list',
  count = 6,
}: ListPageSkeletonProps) => (
  <>
    <Container className="pt-12 pb-4">
      <header className="flex flex-col gap-3">
        <Heading as="h1">{title}</Heading>
        <span
          aria-hidden
          className="from-gold via-gold-bright block h-px w-14 bg-gradient-to-r to-transparent"
        />
        {description && (
          <Body muted size="lg" className="max-w-prose">
            {description}
          </Body>
        )}
      </header>
    </Container>

    <Container className="py-8" aria-busy="true" aria-live="polite">
      {view === 'grid' ? (
        <Grid cols={{ md: 2, xl: 3 }}>
          {Array.from({ length: count }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </Grid>
      ) : (
        <ol className="flex flex-col" role="list">
          {Array.from({ length: count }).map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </ol>
      )}
    </Container>
  </>
);

export { ListPageSkeleton };
export type { ListPageSkeletonProps };
