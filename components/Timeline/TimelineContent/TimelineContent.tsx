import { cn } from '@/lib/utils';
import { TimelineContentProps } from '.';

const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  className,
}) => {
  return <div className={cn('opacity-80', className)}>{children}</div>;
};

export { TimelineContent };
