import { cn } from '@/lib/utils';
import { NavMenuProps } from '.';
import { NavItems } from './NavItem';
import { NavDrawer } from './NavDrawer';

const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  return (
    <>
      {/* On small screens, show a hamburger menu icon. */}
      <nav className={cn('md:hidden flex', className)}>
        <NavDrawer />
      </nav>

      {/* On large screens, show the navigation links on the right side of the logo. */}
      <nav className={cn('hidden md:flex justify-end items-end', className)}>
        <NavItems />
      </nav>
    </>
  );
};

export default NavMenu;
