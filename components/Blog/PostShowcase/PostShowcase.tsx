import { BLOG_PATH } from '@/app/constants';
import {
  ShowcaseActionContainer,
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseMain,
  ShowcaseStamp,
  ShowcaseTitle,
  ShowcaseViewURLButton,
} from '@/components/Showcase';
import { TagItems } from '@/components/Tag';
import { cn } from '@/lib/utils';
import { PostShowcaseProps } from '.';

const PostShowcase: React.FC<PostShowcaseProps> = ({
  post,
  className,
  ...props
}) => {
  return (
    <ShowcaseContainer className={cn(className)} {...props}>
      <ShowcaseMain>
        <ShowcaseStamp>
          <span className="font-semibold">{post.createdAt}</span>
        </ShowcaseStamp>

        <ShowcaseHeader>
          <ShowcaseTitle>{post.title}</ShowcaseTitle>

          <ShowcaseActionContainer>
            {post.slug && (
              <ShowcaseViewURLButton url={`${BLOG_PATH}\\${post.slug}`} />
            )}
          </ShowcaseActionContainer>
        </ShowcaseHeader>

        <ShowcaseDivider />

        <ShowcaseContent>{post.foreword ?? post.content}</ShowcaseContent>
      </ShowcaseMain>

      <ShowcaseFooter>
        <TagItems tags={post.tags} />
      </ShowcaseFooter>
    </ShowcaseContainer>
  );
};

export { PostShowcase };
