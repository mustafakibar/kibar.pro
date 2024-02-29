import { titleFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { TitleProps } from '..';

const Title: React.FC<TitleProps> = ({ className, children, ...props }) => {
  return (
    <h4
      className={cn(titleFont.className, 'text-xl tracking-tight', className)}
      {...props}>
      {children}
    </h4>
  );
};

export { Title };