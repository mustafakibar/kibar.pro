import { getEnvOrThrow, getEnvOrWarn } from './utils';

const IS_DEV = process.env.NODE_ENV === 'development';
const DATABASE_URI = getEnvOrThrow('DATABASE_URI');
const PAYLOADCMS_SECRET = getEnvOrThrow('PAYLOADCMS_SECRET');
const GITHUB_USERNAME = getEnvOrWarn('GITHUB_USERNAME');
const GITHUB_API_KEY = getEnvOrWarn('GITHUB_API_KEY');
const GITHUB_API_VER = getEnvOrWarn('GITHUB_API_VER');
const MAIL_FROM_NAME = getEnvOrWarn('MAIL_FROM_NAME');
const MAIL_FROM_ADDRESS = getEnvOrWarn('MAIL_FROM_ADDRESS');
const SMTP_USER = getEnvOrWarn('SMTP_USER');
const SMTP_PASS = getEnvOrWarn('SMTP_PASS');
const SMTP_HOST = getEnvOrWarn('SMTP_HOST');
const SMTP_PORT = getEnvOrWarn('SMTP_PORT');

const env = {
  IS_DEV,
  DATABASE_URI,
  PAYLOADCMS_SECRET,
  GITHUB_USERNAME,
  GITHUB_API_KEY,
  GITHUB_API_VER,
  MAIL_FROM_NAME,
  MAIL_FROM_ADDRESS,
  SMTP_USER,
  SMTP_PASS,
  SMTP_HOST,
  SMTP_PORT,
};

export default env;
