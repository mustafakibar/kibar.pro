import { Access } from 'payload';

const permitAll: Access = () => true;

const permitIfAdmin: Access = ({ req: { user } }) =>
  user != null && user?.role === 'admin';

const permitIfAuthenticated: Access = ({ req: { user } }) => !!user;

const permitIfAuthenticatedAndPublished: Access = ({ req: { user } }) => {
  if (!user) return false;

  return {
    _status: {
      equals: 'published',
    },
  };
};

const permitIfPublished: Access = () => ({
  _status: {
    equals: 'published',
  },
});

export {
  permitAll,
  permitIfAdmin,
  permitIfAuthenticated,
  permitIfAuthenticatedAndPublished,
  permitIfPublished,
};
