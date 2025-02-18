import { cn } from '@/lib/utils';
import { ShowcaseActionContainerProps } from '..';

const ShowcaseActionContainer: React.FC<ShowcaseActionContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex items-center gap-5 text-primary/80', className)}
      {...props}>
      {children}
    </div>
  );
};

export { ShowcaseActionContainer };
