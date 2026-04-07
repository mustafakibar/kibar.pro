'server-only';

import { CERTIFICATE_ITEMS } from '@/components/Certificates/constant';

// Static data — no caching wrapper needed.
const getCertificates = async () => CERTIFICATE_ITEMS;

export { getCertificates };
