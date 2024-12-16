import { CACHE_TAG_GITHUB_REPOS } from '@/common/cache-tags';
import { Project } from '@/components/Project';
import env from '@/env';
import { getGithubRepos } from '@/lib/github';
import ms from 'ms';
import { unstable_cache } from 'next/cache';

const revalidate = env.IS_DEV ? 1 : ms('6h');

// Integrate with the cms
const getProjects = unstable_cache(
  async () => {
    const repos = await getGithubRepos();

    if (!repos || repos.length <= 0 || !Array.isArray(repos)) {
      return null;
    }

    return repos
      .filter((data) => !data.fork)
      .map((data) => ({
        id: String(data.id),
        title: data.name,
        slug: data.name,
        tags: data.topics,
        year: new Date(data.created_at).getFullYear(),
        description: data.description,
        images: [],
        repoUrl: data.html_url,
      })) as Project[];
  },
  [CACHE_TAG_GITHUB_REPOS],
  { revalidate, tags: [CACHE_TAG_GITHUB_REPOS] },
);

export { getProjects };
