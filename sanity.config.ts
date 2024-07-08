import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { apiVersion, basePath, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath,
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
