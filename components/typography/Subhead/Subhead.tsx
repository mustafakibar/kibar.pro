import { cn } from '@/lib/utils';
import { SubheadProps } from '..';

const Subhead: React.FC<SubheadProps> = ({ className, children }) => {
  return <h3 className={cn('text-muted-foreground', className)}>{children}</h3>;
};

export { Subhead };
