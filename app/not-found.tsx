import { HOME_PATH } from '@/lib/constants/paths';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
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
