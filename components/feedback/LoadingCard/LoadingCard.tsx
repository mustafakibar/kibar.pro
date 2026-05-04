import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type LoadingCardProps = {
  className?: string;
  rows?: number;
};

const LoadingCard = ({ className, rows = 3 }: LoadingCardProps) => (
  <div
    className={cn(
      'border-rule bg-elevated flex flex-col gap-3 rounded-lg border p-5',
      className,
    )}
    aria-busy="true"
    aria-live="polite">
    <Skeleton className="h-5 w-3/5" />
    {Array.from({ length: rows }).map((_, i) => (
      <Skeleton key={i} className="h-3 w-full last:w-2/3" />
    ))}
  </div>
);

export { LoadingCard };
export type { LoadingCardProps };
