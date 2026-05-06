'use client';

import { Magnetic } from '@/components/motion/Magnetic';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Check, Copy } from '@/lib/icons';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

type EmailRowProps = {
  email: string;
  className?: string;
};

const EmailRow = ({ email, className }: EmailRowProps) => {
  const { copied, copy } = useCopyToClipboard();
  return (
    <Magnetic strength={10} radius={140}>
      <a
        href={`mailto:${email}`}
        onClick={(e) => {
          if (!e.shiftKey && !e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            void copy(email);
          }
        }}
        className={cn(
          'group font-display text-ink duration-fast hover:text-gold inline-flex items-center gap-3 text-3xl tracking-[-0.02em] transition-colors md:text-4xl',
          className,
        )}
        aria-label={`Copy ${email} to clipboard`}>
        <span className="gold-sweep">{email}</span>
        <span className="relative inline-flex size-6 shrink-0">
          <AnimatePresence initial={false} mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: duration.fast, ease: easing.out }}
                className="text-success absolute inset-0 inline-flex items-center justify-center">
                <Check className="size-5" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: duration.fast, ease: easing.out }}
                className="text-ink-muted duration-fast absolute inset-0 inline-flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Copy className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <span aria-live="polite" className="sr-only">
          {copied ? 'Copied to clipboard' : ''}
        </span>
      </a>
    </Magnetic>
  );
};

export { EmailRow };
export type { EmailRowProps };
