'use client';

import { useRouter } from 'next/navigation';
import { NavItem } from '.';

const NAV_ITEMS = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { text: 'Projects', href: '/projects' },
  { text: 'Snippets', href: '/snippets' },
  { text: 'Resume', href: '/resume' },
];

const NavItems: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();

  return NAV_ITEMS.map((item) => (
    <NavItem
      key={item.text.concat(item.href)}
      text={item.text}
      path={item.href}
      className={className}
    />
  ));
};

export default NavItems;
