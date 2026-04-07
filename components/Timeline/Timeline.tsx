import { cn } from '@/lib/utils';
export type TimelineProps = {
  className?: string;
  children: React.ReactNode;
};

const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

export { Timeline };
