'use client';

import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  HOME_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  USES_PATH,
} from '@/lib/constants/paths';
import {
  AcademicCapIcon,
  CodeIcon,
  Envelope,
  FileText,
  Folder,
  Github,
  HomeIcon,
  Linkedin,
  ToolboxIcon,
  UserIcon,
} from '@/lib/icons';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type Item = {
  label: string;
  href: string;
  group: 'Navigate' | 'Links';
  icon: React.ReactNode;
  external?: boolean;
};

const ITEMS: readonly Item[] = [
  {
    label: 'Home',
    href: HOME_PATH,
    group: 'Navigate',
    icon: <HomeIcon className="size-4" />,
  },
  {
    label: 'About',
    href: ABOUT_PATH,
    group: 'Navigate',
    icon: <UserIcon className="size-4" />,
  },
  {
    label: 'Projects',
    href: PROJECTS_PATH,
    group: 'Navigate',
    icon: <Folder className="size-4" />,
  },
  {
    label: 'Notes',
    href: NOTES_PATH,
    group: 'Navigate',
    icon: <CodeIcon className="size-4" />,
  },
  {
    label: 'Uses',
    href: USES_PATH,
    group: 'Navigate',
    icon: <ToolboxIcon className="size-4" />,
  },
  {
    label: 'Certificates',
    href: CERTIFICATES_PATH,
    group: 'Navigate',
    icon: <AcademicCapIcon className="size-4" />,
  },
  {
    label: 'Contact',
    href: CONTACT_PATH,
    group: 'Navigate',
    icon: <Envelope className="size-4" />,
  },
  {
    label: 'Resume',
    href: RESUME_PATH,
    group: 'Links',
    icon: <FileText className="size-4" />,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mustafakibar',
    group: 'Links',
    icon: <Github className="size-4" />,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mustafakibar',
    group: 'Links',
    icon: <Linkedin className="size-4" />,
    external: true,
  },
];

const CommandPalette = () => {
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
      if (item.external)
        window.open(item.href, '_blank', 'noopener,noreferrer');
      else router.push(item.href);
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
          transition={{ duration: duration.fast }}>
          <div
            aria-hidden
            className="bg-overlay absolute inset-0 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: duration.normal, ease: easing.out }}
            className="border-rule-strong bg-elevated relative w-full max-w-lg overflow-hidden rounded-lg border shadow-2xl">
            <Command
              label="Command palette"
              className={cn(
                '[&_[cmdk-group-heading]]:text-ink-faint [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase',
              )}>
              <Command.Input
                placeholder="Type a command or search…"
                className="border-rule font-body text-ink placeholder:text-ink-faint w-full border-b bg-transparent px-4 py-4 text-base outline-none"
              />
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="font-body text-ink-faint px-4 py-6 text-center text-sm">
                  No results.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group key={group} heading={group}>
                    {ITEMS.filter((i) => i.group === group).map((item) => (
                      <Command.Item
                        key={item.label}
                        value={item.label}
                        onSelect={() => run(item)}
                        className="font-body text-ink-muted data-[selected=true]:bg-rule data-[selected=true]:text-ink flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm">
                        <span className="text-gold">{item.icon}</span>
                        <span>{item.label}</span>
                        {item.external && (
                          <span className="text-ink-faint ml-auto font-mono text-xs tracking-widest uppercase">
                            external
                          </span>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
              <div className="border-rule text-ink-faint flex items-center justify-between border-t px-4 py-2 font-mono text-xs tracking-wider uppercase">
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
