import { cn } from '@/lib/utils';
import { TimelineTitleProps } from '.';

const TimelineTitle: React.FC<TimelineTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('text-lg font-semibold', className)}>{children}</div>
  );
};

export { TimelineTitle };
