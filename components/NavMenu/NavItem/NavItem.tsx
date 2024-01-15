import { cn } from '@/lib/utils';
import { NavItemProps } from '.';
import Link from 'next/link';

const NavItem: React.FC<NavItemProps> = ({ text, path, className }) => {
  return (
    <Link href={path}>
      <div className={cn(className)}>{text}</div>
    </Link>
  );
};

export default NavItem;
