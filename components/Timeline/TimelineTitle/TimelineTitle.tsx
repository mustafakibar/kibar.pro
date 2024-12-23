import { cn } from '@/lib/utils';
import { TimelineTitleProps } from '.';

const TimelineTitle: React.FC<TimelineTitleProps> = ({
  children,
  className,
}) => {
  return <h3 className={cn('font-black', className)}>{children}</h3>;
};

export { TimelineTitle };
