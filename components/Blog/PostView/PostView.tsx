import { PostViewProps } from '.';

const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <div>
      - Post view
      {post.title}
      {post.content}
    </div>
  );
};

export { PostView };
