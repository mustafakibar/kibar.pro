import { cn } from '@/lib/utils';
import { ShowcaseContainerProps } from '..';

const ShowcaseContainer: React.FC<ShowcaseContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative flex flex-col flex-nowrap gap-3 rounded-xl bg-primary/5 p-5',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
};

export { ShowcaseContainer };
