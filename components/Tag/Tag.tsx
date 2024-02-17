import { HOME_PATH } from '@/app/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TagProps } from '.';

const Tag: React.FC<TagProps> = ({
  name,
  className,
  clickable = true,
  customHref,
  ...props
}) => {
  return (
    <Link
      passHref
      href={
        clickable
          ? {
              pathname: HOME_PATH,
              query: { tag: customHref ?? name },
            }
          : {}
      }
      className={cn(
        'relative inline-flex -skew-y-3 items-center rounded-sm bg-background px-1 outline outline-background/30 transition-all duration-500 ease-in-out hover:cursor-pointer hover:rounded-md hover:bg-background/90 hover:opacity-95 hover:outline-offset-4 hover:outline-background/90 md:px-2 md:py-1',
        className,
      )}
      {...props}>
      {name}
    </Link>
  );
};

export { Tag };
