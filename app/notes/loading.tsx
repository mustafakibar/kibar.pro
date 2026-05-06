import { ListPageSkeleton } from '@/components/feedback/ListPageSkeleton';
import { readViewCookie } from '@/lib/viewPreference';

const NotesLoading = async () => {
  const view = await readViewCookie('notes', 'list');
  return (
    <ListPageSkeleton
      title="Notes"
      description="Snippets, observations, and things worth keeping."
      view={view}
    />
  );
};

export default NotesLoading;
