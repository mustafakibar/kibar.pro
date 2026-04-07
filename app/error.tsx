'use client';

import { Button } from '@/components/ui/button';
import { HOME_PATH } from '@/lib/constants/paths';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-muted-foreground text-sm tracking-widest uppercase">
        Something broke
      </p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Unexpected error
      </h1>
      <p className="text-muted-foreground max-w-md text-base md:text-lg">
        An unexpected error occurred while rendering this page. You can try
        again or head back home.
      </p>
      {error.digest && (
        <p className="text-muted-foreground/70 font-mono text-xs">
          ref: {error.digest}
        </p>
      )}
      <div className="mt-2 flex gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button
          variant="outline"
          onClick={() => window.location.assign(HOME_PATH)}>
          Back to home
        </Button>
      </div>
    </main>
  );
}
