import { CollectionConfig } from 'payload';
import { permitAll, permitIfAdmin } from '../access';

const Tags: CollectionConfig = {
  slug: 'tags',
  labels: {
    singular: 'Tag',
    plural: 'Tags',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: permitAll,
    create: permitIfAdmin,
    delete: permitIfAdmin,
    update: permitIfAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  timestamps: false,
};

export { Tags };
