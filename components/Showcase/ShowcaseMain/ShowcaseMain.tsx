import { cn } from '@/lib/utils';
import { ShowcaseMainProps } from '..';

const ShowcaseMain: React.FC<ShowcaseMainProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      {children}
    </div>
  );
};

export { ShowcaseMain };
