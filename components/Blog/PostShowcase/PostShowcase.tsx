import { BLOG_PATH } from '@/common/paths';
import {
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseTitle,
} from '@/components/Showcase';
import { TagItems } from '@/components/Tag';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PostShowcaseProps } from '.';

const PostShowcase: React.FC<PostShowcaseProps> = ({
  post,
  className,
  hideTags = false,
  ...props
}) => {
  const href = post.slug ? `${BLOG_PATH}//${post.slug}` : '';

  return (
    <Link href={href} className={cn({ 'pointer-events-none': href == '' })}>
      <ShowcaseContainer className={cn(className)} {...props}>
        <ShowcaseHeader>
          <ShowcaseTitle>{post.title}</ShowcaseTitle>
        </ShowcaseHeader>

        {/* TODO {post.createdAt} */}

        <ShowcaseDivider />

        <ShowcaseContent>{post.foreword ?? post.content}</ShowcaseContent>

        <ShowcaseFooter>
          {!hideTags && post.tags && <TagItems tags={post.tags} />}
        </ShowcaseFooter>
      </ShowcaseContainer>
    </Link>
  );
};

export { PostShowcase };
