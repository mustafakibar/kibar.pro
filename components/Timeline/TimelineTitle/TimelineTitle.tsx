import { cn } from '@/lib/utils';
import { TimelineTitleProps } from '.';

const TimelineTitle: React.FC<TimelineTitleProps> = ({
  children,
  className,
}) => {
  return <div className={cn('text-lg font-black', className)}>{children}</div>;
};

export { TimelineTitle };
