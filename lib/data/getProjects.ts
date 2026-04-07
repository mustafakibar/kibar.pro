'server-only';

import { Project } from '@/components/Project';
import env from '@/env';
import { CACHE_TAG_GITHUB_REPOS } from '@/lib/constants/cache-tags';
import { getGithubRepos } from '@/lib/github';
import { unstable_cache } from 'next/cache';

const ONE_DAY_SECONDS = 60 * 60 * 24;
const THIRTY_MINUTES_SECONDS = 60 * 30;
const revalidate = env.IS_DEV ? THIRTY_MINUTES_SECONDS : ONE_DAY_SECONDS;

const getProjects = unstable_cache(
  async (): Promise<Project[]> => {
    try {
      const repos = await getGithubRepos();
      if (!Array.isArray(repos) || repos.length === 0) return [];

      return repos
        .filter((data) => !data.fork)
        .map<Project>((data) => ({
          id: String(data.id),
          title: data.name,
          slug: data.name,
          tags: data.topics,
          year: data.created_at
            ? new Date(data.created_at).getFullYear()
            : 'n/a',
          description: data.description,
          images: [],
          repoUrl: data.html_url,
        }));
    } catch (error) {
      console.warn('[getProjects] failed to fetch GitHub repos:', error);
      return [];
    }
  },
  [CACHE_TAG_GITHUB_REPOS],
  { revalidate, tags: [CACHE_TAG_GITHUB_REPOS] },
);

export { getProjects };
