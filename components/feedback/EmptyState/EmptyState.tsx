import { Body } from '@/components/typography';
import { cn } from '@/lib/utils';

type EmptyStateProps = {
  message: string;
  className?: string;
};

const EmptyState = ({ message, className }: EmptyStateProps) => (
  <div className={cn('flex min-h-32 items-center justify-center', className)}>
    <Body muted size="lg">
      {message}
    </Body>
  </div>
);

export { EmptyState };
export type { EmptyStateProps };
