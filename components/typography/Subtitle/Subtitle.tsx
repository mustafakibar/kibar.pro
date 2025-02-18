import { cn } from '@/lib/utils';
import { SubtitleProps } from '..';

const Subtitle: React.FC<SubtitleProps> = ({ children, ...props }) => {
  return (
    <h5
      className={cn('text-md tracking-tight text-muted-foreground')}
      {...props}>
      {children}
    </h5>
  );
};

export { Subtitle };
