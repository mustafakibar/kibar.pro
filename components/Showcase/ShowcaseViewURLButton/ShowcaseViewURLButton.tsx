import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ShowCaseViewURLButtonProps } from '..';

const ShowcaseViewURLButton: React.FC<ShowCaseViewURLButtonProps> = ({
  url,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'inline-flex flex-row underline-offset-4 hover:text-accent-foreground hover:underline',
        className,
      )}
      {...props}>
      <Link passHref href={`${url}`}>
        View
      </Link>
      <ChevronRight />
    </div>
  );
};

export { ShowcaseViewURLButton };
