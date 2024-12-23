import { cn } from '@/lib/utils';
import { TimelineContentProps } from '.';

const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  className,
}) => {
  return <p className={cn('opacity-80', className)}>{children}</p>;
};

export { TimelineContent };
