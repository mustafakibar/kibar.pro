'use client';

import {
  ABOUT_PATH,
  BLOG_PATH,
  HOME_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  SNIPPETS_PATH,
} from '@/app/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '.';

const NAV_ITEMS = [
  { text: 'Home', href: HOME_PATH },
  { text: 'About', href: ABOUT_PATH },
  { text: 'Blog', href: BLOG_PATH },
  { text: 'Projects', href: PROJECTS_PATH },
  { text: 'Snippets', href: SNIPPETS_PATH },
  { text: 'Resume', href: RESUME_PATH },
];

const NavItems: React.FC<{
  className?: string;
  onItemClicked?: (text: string, href: string) => void;
}> = ({ className, onItemClicked }) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        'flex list-none flex-col gap-5 sm:flex-row sm:gap-1',
        className,
      )}>
      {NAV_ITEMS.map((item) => (
        <li key={item.text.concat(item.href)}>
          <Link href={item.href} passHref legacyBehavior>
            <NavItem
              text={item.text}
              href={item.href}
              active={pathname === item.href}
              className="w-1/2 justify-center p-4 text-2xl sm:w-auto sm:justify-normal sm:text-base"
              onClick={() => {
                if (onItemClicked != null) onItemClicked(item.text, item.href);
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
