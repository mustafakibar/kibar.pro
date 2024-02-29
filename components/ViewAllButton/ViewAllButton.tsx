import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ViewAllButtonProps } from '.';

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  className,
  href,
  ...props
}) => {
  return (
    <Link href={href} {...props} legacyBehavior>
      <div
        className={cn(
          'group mx-4 inline-flex items-center text-sm text-accent-foreground underline-offset-4 transition-all duration-100 ease-in hover:cursor-pointer hover:gap-1 hover:px-1 hover:underline',
          className,
        )}>
        <span>View all</span>
        <ArrowUpRight
          strokeWidth={3}
          className="text-accent-foreground/70 transition-all duration-500 ease-in-out group-hover:rotate-45 group-hover:scale-125 group-hover:animate-pulse"
        />
      </div>
    </Link>
  );
};

export { ViewAllButton };
