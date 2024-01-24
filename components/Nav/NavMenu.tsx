import { cn } from '@/lib/utils';
import { NavMenuProps } from '.';
import { NavDrawer } from './NavDrawer';
import { NavItems } from './NavItem';

const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  return (
    <>
      {/* On small screens, show a hamburger menu icon. */}
      <nav className={cn('flex sm:hidden', className)}>
        <NavDrawer />
      </nav>

      {/* On large screens, show the navigation links on the right side of the logo. */}
      <nav className={cn('hidden sm:flex', className)}>
        <NavItems />
      </nav>
    </>
  );
};

export default NavMenu;
