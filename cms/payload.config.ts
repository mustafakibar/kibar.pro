import { postgresAdapter } from '@payloadcms/db-postgres';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import env from '@/env';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';
import { Tags } from './collections/Tags';
import { Users } from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Tags, Posts],
  editor: lexicalEditor(),
  secret: env.PAYLOADCMS_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URI,
    },
    migrationDir: './cms/migrations',
  }),
  sharp,
  email: nodemailerAdapter({
    defaultFromName: env.MAIL_FROM_NAME,
    defaultFromAddress: env.MAIL_FROM_ADDRESS,
    transportOptions: {
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    },
  }),
  plugins: [payloadCloudPlugin()],
});
