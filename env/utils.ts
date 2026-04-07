/**
 * Read an optional environment variable.
 * Returns `undefined` when the variable is missing or empty.
 */
const getOptionalEnv = (key: string): string | undefined => {
  const value = process.env[key];
  return value && value.length > 0 ? value : undefined;
};

/**
 * Read a required environment variable.
 * Throws synchronously when missing — call only from server code that genuinely needs it.
 */
const getRequiredEnv = (key: string): string => {
  const value = getOptionalEnv(key);
  if (!value) {
    throw new Error(`Required environment variable '${key}' is missing.`);
  }
  return value;
};

export { getOptionalEnv, getRequiredEnv };
