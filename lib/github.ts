import env from '@/env';

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  topics: string[];
};

const getGithubRepos = async () => {
  const repos: GithubRepo[] = [];
  const username = env.GITHUB_USERNAME;

  if (username != null) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );

    return (await response.json()) as GithubRepo[];
  }

  return repos;
};

export { getGithubRepos };
