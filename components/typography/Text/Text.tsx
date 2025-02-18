import { cn } from '@/lib/utils';
import { TextProps } from '..';

const Text: React.FC<TextProps> = ({ className, children }) => {
  return <span className={cn(className)}>{children}</span>;
};

export { Text };
