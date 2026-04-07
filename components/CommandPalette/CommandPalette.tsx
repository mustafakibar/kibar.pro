'use client';

import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  HOME_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
} from '@/lib/constants/paths';
import { cn } from '@/lib/utils';
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FaFileLines,
  FaFolderOpen,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaRegUser,
} from 'react-icons/fa6';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

type Item = {
  label: string;
  href: string;
  group: string;
  icon: React.ReactNode;
  external?: boolean;
  shortcut?: string;
};

const ITEMS: Item[] = [
  { label: 'Home', href: HOME_PATH, group: 'Navigate', icon: <FaHouse /> },
  { label: 'About', href: ABOUT_PATH, group: 'Navigate', icon: <FaRegUser /> },
  {
    label: 'Projects',
    href: PROJECTS_PATH,
    group: 'Navigate',
    icon: <FaFolderOpen />,
  },
  {
    label: 'Certificates',
    href: CERTIFICATES_PATH,
    group: 'Navigate',
    icon: <HiOutlineAcademicCap />,
  },
  {
    label: 'Resume',
    href: RESUME_PATH,
    group: 'Links',
    icon: <FaFileLines />,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mustafakibar',
    group: 'Links',
    icon: <FaGithub />,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mustafakibar',
    group: 'Links',
    icon: <FaLinkedin />,
    external: true,
  },
];

const CommandPalette: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const run = useCallback(
    (item: Item) => {
      setOpen(false);
      if (item.external) {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(item.href);
      }
    },
    [router],
  );

  const groups = Array.from(new Set(ITEMS.map((i) => i.group)));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}>
          <div
            aria-hidden
            className="bg-background/70 absolute inset-0 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="bg-background/95 ring-foreground/10 relative w-full max-w-lg overflow-hidden rounded-xl ring-1 shadow-2xl">
            <Command
              label="Command palette"
              className="[&_[cmdk-group-heading]]:text-foreground/40 [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase">
              <Command.Input
                placeholder="Type a command or search…"
                className="border-foreground/10 placeholder:text-foreground/40 w-full border-b bg-transparent px-4 py-4 text-sm outline-none"
              />
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="text-foreground/40 px-4 py-6 text-center text-sm">
                  No results.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group key={group} heading={group}>
                    {ITEMS.filter((i) => i.group === group).map((item) => (
                      <Command.Item
                        key={item.label}
                        value={item.label}
                        onSelect={() => run(item)}
                        className={cn(
                          'text-foreground/80 flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm',
                          'data-[selected=true]:bg-foreground/10 data-[selected=true]:text-foreground',
                        )}>
                        <span className="text-foreground/50 text-base">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                        {item.external && (
                          <span className="text-foreground/30 ml-auto text-[10px] tracking-widest uppercase">
                            external
                          </span>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
              <div className="border-foreground/10 text-foreground/40 flex items-center justify-between border-t px-4 py-2 text-[10px] tracking-wider uppercase">
                <span>⏎ select</span>
                <span>esc close</span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CommandPalette };
