import { cn } from '@/lib/utils';
import { ShowcaseHeaderProps } from './type';

const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}>
      {children}
    </div>
  );
};

export { ShowcaseHeader };
