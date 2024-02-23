import { cn } from '@/lib/utils';
import { ShowcaseFooterProps } from '..';

const ShowcaseFooter: React.FC<ShowcaseFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex items-center', className)} {...props}>
      {children}
    </div>
  );
};

export { ShowcaseFooter };
