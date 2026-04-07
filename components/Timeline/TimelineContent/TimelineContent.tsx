import { cn } from '@/lib/utils';
export type TimelineContentProps = {
  className?: string;
  children: React.ReactNode;
};

const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  className,
}) => {
  return <div className={cn('opacity-80', className)}>{children}</div>;
};

export { TimelineContent };
