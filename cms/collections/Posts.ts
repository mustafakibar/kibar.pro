import { CollectionConfig } from 'payload';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {},
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  timestamps: false,
};

export { Posts };
