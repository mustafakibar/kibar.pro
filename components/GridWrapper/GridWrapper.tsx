import { cn } from '@/lib/utils';
import { GridWrapperProps } from '.';

const GridWrapper: React.FC<GridWrapperProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-start gap-8 md:grid-cols-2 xl:grid-cols-3',
        className,
      )}>
      {children}
    </div>
  );
};

export { GridWrapper };
