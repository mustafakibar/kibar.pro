import { cn } from '@/lib/utils';
import { ShowcaseActionContainerProps } from '..';

const ShowcaseActionContainer: React.FC<ShowcaseActionContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('text-primary/80 flex items-center gap-5', className)}
      {...props}>
      {children}
    </div>
  );
};

export { ShowcaseActionContainer };
