import { CollectionConfig } from 'payload';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'name',
  },
  access: {},
  fields: [],
  timestamps: false,
};

export default Posts;
