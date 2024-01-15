import { cn } from '@/lib/utils';
import { NavMenuProps } from '.';
import { NavItem } from './NavItem';

const NAV_ITEMS = [
  { text: 'Home', href: '/' },
  { text: 'Blog', href: '/blog' },
  { text: 'Projects', href: '/projects' },
  { text: 'Snippets', href: '/snippets' },
  { text: 'About', href: '/about' },
  { text: 'Resume', href: '/resume' },
];

const NavItems: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={cn('inline-flex', className)}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <NavItem text={item.text} path={item.href} />
        </li>
      ))}
    </ul>
  );
};

const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  return (
    <>
      {/* On small screens, show a hamburger menu icon. */}
      <nav className={cn('md:hidden flex', className)}>
        <button>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </nav>

      {/* On large screens, show the navigation links on the right side of the logo. */}
      <nav className={cn('hidden md:flex justify-end items-end', className)}>
        <NavItems />
      </nav>
    </>
  );
};

export default NavMenu;
