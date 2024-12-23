import { titleFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import { TitleProps } from '..';

const Title: React.FC<TitleProps> = ({ className, children, ...props }) => {
  return (
    <h4
      className={cn(
        titleFont.className,
        'text-xl font-bold tracking-tight',
        className,
      )}
      {...props}>
      {children}
    </h4>
  );
};

export { Title };
