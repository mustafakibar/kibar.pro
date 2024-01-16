import { cn } from '@/lib/utils';
import { NavItem } from '.';

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
    <ul className={cn('inline-flex gap-5', className)}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <NavItem text={item.text} path={item.href} />
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
