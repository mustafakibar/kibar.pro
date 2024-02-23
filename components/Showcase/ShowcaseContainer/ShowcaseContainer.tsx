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
        'relative translate-x-0 rounded-lg p-5 ring-1 ring-primary/50 duration-150 ease-out hover:skew-x-1 hover:skew-y-1 hover:scale-105 hover:gap-8 hover:ring-2 hover:ring-primary/90',
        className,
      )}
      {...props}>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
};

export { ShowcaseContainer };
