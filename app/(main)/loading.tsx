import { HEADER_CURRENT_PATH } from '@/common/headers';
import { MyLoading } from '@/components/MyLoading';
import { headers } from 'next/headers';

export default async function Loading() {
  const headerList = await headers();
  let loadingText: string | null = null;

  if (headerList) {
    const pathname = headerList.get(HEADER_CURRENT_PATH);
    if (pathname) {
      loadingText = `Loading ${pathname.substring(1)}, please wait...`;
    }
  }

  if (!loadingText) {
    loadingText = 'Loading, please wait...';
  }

  return <MyLoading loadingText={loadingText} />;
}
