import { MyLoading } from '@/components/MyLoading';
import { headers } from 'next/headers';

export default async function Loading() {
  const headerList = await headers();
  let loadingText: string | null = null;

  if (headerList) {
    const pathname = headerList.get('x-current-path');
    if (pathname) {
      loadingText = `Loading ${pathname.substring(1)}, please wait...`;
    }
  }

  if (!loadingText) {
    loadingText = 'Loading, please wait...';
  }

  return <MyLoading loadingText={loadingText} />;
}
