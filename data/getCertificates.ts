import { CACHE_TAG_CERTIFICATES } from '@/common/cache-tags';
import { CERTIFICATE_ITEMS } from '@/components/Certificates/constant';
import env from '@/env';
import ms from 'ms';
import { unstable_cache } from 'next/cache';

const revalidate = env.IS_DEV ? 1 : ms('6h');

// TODO S3
const getCertificates = unstable_cache(
  async () => CERTIFICATE_ITEMS || null,
  [CACHE_TAG_CERTIFICATES],
  { revalidate, tags: [CACHE_TAG_CERTIFICATES] },
);

export { getCertificates };
