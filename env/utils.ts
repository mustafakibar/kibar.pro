const getEnv = (key: string, def: string | null = null) => {
  const env = process.env[key];
  if (env) {
    return env;
  } else {
    return def;
  }
};

const getEnvOrWarn = (key: string) => {
  const env = getEnv(key);
  if (env) {
    return env;
  } else {
    console.log(`Environment variable '${key}' is missing`);
    return null;
  }
};

const getEnvOrThrow = (key: string) => {
  const env = getEnv(key);
  if (env) {
    return env;
  } else {
    throw new Error(`Environment variable '${key}' is missing`);
  }
};

export { getEnv, getEnvOrThrow, getEnvOrWarn };
