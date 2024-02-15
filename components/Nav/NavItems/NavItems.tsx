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
import { NavItem } from '../NavItem';

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
        'flex w-full list-none flex-col items-center justify-center gap-5 p-3 sm:flex-row sm:gap-1',
        className,
      )}>
      {NAV_ITEMS.map((item) => (
        <li key={item.text.concat(item.href)}>
          <Link href={item.href} passHref legacyBehavior>
            <NavItem
              text={item.text}
              href={item.href}
              active={pathname === item.href}
              className="justify-center p-4 text-2xl sm:w-auto sm:justify-normal sm:text-base md:text-lg lg:text-xl"
              onClick={onItemClicked?.bind(this, item.text, item.href)}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { NavItems };
