import { headingFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import { HeadingProps } from '..';

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return (
    <span
      className={cn(
        headingFont.className,
        'text-2xl tracking-tight',
        className,
      )}>
      {children}
    </span>
  );
};

export { Heading };
