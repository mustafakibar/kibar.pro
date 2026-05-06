import { ListPageSkeleton } from '@/components/feedback/ListPageSkeleton';
import { readViewCookie } from '@/lib/viewPreference';

const CertificatesLoading = async () => {
  const view = await readViewCookie('certificates', 'grid');
  return (
    <ListPageSkeleton
      title="Certificates"
      description="Certificates earned across engineering, cloud, and product disciplines."
      view={view}
    />
  );
};

export default CertificatesLoading;
