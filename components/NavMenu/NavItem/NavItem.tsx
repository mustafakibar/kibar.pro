import { cn } from '@/lib/utils';
import { NavItemProps } from '.';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavItem: React.FC<NavItemProps> = ({
  text,
  path,
  className,
  ...props
}) => {
  return (
    <Link href={path}>
      <Button className={cn(className)} variant='ghost' {...props}>
        {text}
      </Button>
    </Link>
  );
};

export default NavItem;
