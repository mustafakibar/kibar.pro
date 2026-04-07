import { getOptionalEnv } from './utils';

const env = {
  IS_DEV: process.env.NODE_ENV === 'development',
  GITHUB_USERNAME: getOptionalEnv('GITHUB_USERNAME'),
  GITHUB_API_KEY: getOptionalEnv('GITHUB_API_KEY'),
  GITHUB_API_VER: getOptionalEnv('GITHUB_API_VER') ?? '2022-11-28',
  SITE_URL: getOptionalEnv('NEXT_PUBLIC_SITE_URL') ?? 'https://kibar.pro',
  PLAUSIBLE_DOMAIN: getOptionalEnv('NEXT_PUBLIC_PLAUSIBLE_DOMAIN'),
  PLAUSIBLE_SCRIPT_SRC:
    getOptionalEnv('NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC') ??
    'https://plausible.io/js/script.js',
} as const;

export default env;
