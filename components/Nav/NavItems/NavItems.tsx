import { cn } from '@/lib/utils';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { usePathname } from 'next/navigation';
import { NavItem } from '../NavItem';
import { NAV_ITEMS } from './constants';

const NavItems: React.FC<{
  className?: string;
  isMobile?: boolean;
  onItemClicked?: (text: string, href: string) => void;
}> = ({ className, isMobile = false, onItemClicked }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <ul
        className={cn(
          'flex list-none flex-col items-center justify-center gap-4 px-1 md:flex-row md:gap-1',
          className,
        )}>
        {NAV_ITEMS.filter(({ enabled = true }) => enabled).map((item, i) => (
          <motion.li
            key={item.text.concat(item.href)}
            className={cn({
              'w-full': isMobile,
            })}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: [0, 'auto'],
              opacity: [0, 1],
            }}
            transition={{
              delay: 0.1 + i * 0.1,
              duration: 0.3,
              ease: 'easeInOut',
            }}>
            <NavItem
              text={item.text}
              href={item.href}
              active={pathname === item.href}
              className={cn({
                'text-2xl': isMobile,
              })}
              onClick={onItemClicked?.bind(this, item.text, item.href)}
            />
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export { NavItems };
