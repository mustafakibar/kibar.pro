import { HOME_PATH } from '@/app/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TagItemProps } from '..';

const TagItem: React.FC<TagItemProps> = ({
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
        'group relative inline-flex -skew-y-3 items-center rounded-sm bg-foreground/10 px-1 outline outline-foreground/30 transition-all duration-500 ease-in-out hover:cursor-pointer hover:rounded-md hover:bg-foreground/20 hover:opacity-95 hover:outline-offset-4 hover:outline-foreground/40 md:px-2 md:py-1',
        className,
      )}
      {...props}>
      <span className="absolute scale-75 font-black transition-transform duration-100 ease-linear group-hover:scale-110">
        #
      </span>
      <span className="ms-3 inline-block group-hover:ms-4">{name}</span>
    </Link>
  );
};

export { TagItem };
