import { Body, Heading } from '@/components/typography';
import { cn } from '@/lib/utils';

type ErrorStateProps = {
  title?: string;
  message: string;
  className?: string;
};

const ErrorState = ({
  title = 'Something broke',
  message,
  className,
}: ErrorStateProps) => (
  <div
    className={cn(
      'flex flex-col items-center gap-3 py-16 text-center',
      className,
    )}>
    <Heading>{title}</Heading>
    <Body muted size="lg" className="max-w-md">
      {message}
    </Body>
  </div>
);

export { ErrorState };
export type { ErrorStateProps };
