import { cn } from '@/lib/utils';
import { TimelineProps } from '.';

const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

export { Timeline };
