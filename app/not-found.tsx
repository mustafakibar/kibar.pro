import { HOME_PATH } from '@/lib/constants/paths';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[60vh] flex-col items-center justify-center gap-6 overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="from-primary/30 to-secondary/10 pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br bg-clip-text text-[18rem] leading-none font-black text-transparent select-none md:text-[26rem]">
        404
      </div>
      <p className="text-muted-foreground text-sm tracking-widest uppercase">
        Error 404
      </p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        This page wandered off.
      </h1>
      <p className="text-muted-foreground max-w-md text-base md:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href={HOME_PATH}
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors">
        Back to home
      </Link>
    </main>
  );
}
