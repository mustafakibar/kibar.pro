'server-only';

import env from '@/env';
import { getGithubGists, type GithubGist } from '@/lib/github';
import { unstable_cache } from 'next/cache';

const ONE_DAY_SECONDS = 60 * 60 * 24;
const THIRTY_MINUTES_SECONDS = 60 * 30;
const revalidate = env.IS_DEV ? THIRTY_MINUTES_SECONDS : ONE_DAY_SECONDS;

export type GistSummary = {
  id: string;
  title: string;
  description: string;
  url: string;
  fileCount: number;
  primaryFile: string;
  primaryLanguage: string | null;
  updatedAt: string;
};

const summarise = (gist: GithubGist): GistSummary => {
  const fileNames = Object.keys(gist.files);
  const primary = fileNames[0] ?? 'untitled';
  const primaryLang = primary ? (gist.files[primary]?.language ?? null) : null;
  const description = (gist.description ?? '').trim();
  const title = description.length > 0 ? description : primary;
  return {
    id: gist.id,
    title,
    description: description.length > 0 ? description : '',
    url: gist.html_url,
    fileCount: fileNames.length,
    primaryFile: primary,
    primaryLanguage: primaryLang,
    updatedAt: gist.updated_at,
  };
};

const getGists = unstable_cache(
  async (): Promise<GistSummary[]> => {
    try {
      const gists = await getGithubGists();
      if (!Array.isArray(gists) || gists.length === 0) return [];
      return gists
        .filter((g) => g.public)
        .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
        .map(summarise);
    } catch (error) {
      console.warn('[getGists] failed to fetch GitHub gists:', error);
      return [];
    }
  },
  ['github-gists'],
  { revalidate, tags: ['github-gists'] },
);

export { getGists };
