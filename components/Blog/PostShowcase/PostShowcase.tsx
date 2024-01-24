import { PostShowcaseProps } from '.';

const PostShowcase: React.FC<PostShowcaseProps> = ({ post }) => {
  return (
    <div>
      - Post showcase
      {post.title}
      {post.content}
    </div>
  );
};

export { PostShowcase };
