import { cn } from '@/lib/utils';
export type TimelineTitleProps = {
  className?: string;
  children: React.ReactNode;
};

const TimelineTitle: React.FC<TimelineTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('text-lg font-semibold', className)}>{children}</div>
  );
};

export { TimelineTitle };
