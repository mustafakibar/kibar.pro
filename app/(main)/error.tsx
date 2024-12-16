'use client';

import { HOME_PATH } from '@/common/paths';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { FaRegFaceSadCry } from 'react-icons/fa6';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const errorDetails = error.message || error.digest;
  useEffect(() => console.error(error), [error]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-16">
      <FaRegFaceSadCry size={128} />

      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">Sorry, something went wrong!</h2>
        {errorDetails && <p className="text-lg">{errorDetails}</p>}
      </div>

      <Button variant="link" onClick={() => window.location.replace(HOME_PATH)}>
        Anasayfa
      </Button>
    </div>
  );
}
