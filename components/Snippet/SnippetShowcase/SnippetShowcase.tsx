import { SNIPPETS_PATH } from '@/common/paths';
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
import { SnippetShowcaseProps } from '.';

const SnippetShowcase: React.FC<SnippetShowcaseProps> = ({
  snippet,
  className,
  hideTags = false,
  ...props
}) => {
  const href = snippet.slug ? `${SNIPPETS_PATH}//${snippet.slug}` : '';

  return (
    <Link href={href} className={cn({ 'pointer-events-none': href == '' })}>
      <ShowcaseContainer className={cn(className)} {...props}>
        <ShowcaseHeader>
          <ShowcaseTitle>{snippet.title}</ShowcaseTitle>
        </ShowcaseHeader>

        <ShowcaseDivider />

        <ShowcaseContent>{snippet.content}</ShowcaseContent>

        <ShowcaseFooter>
          {!hideTags && snippet.tags && <TagItems tags={snippet.tags} />}
        </ShowcaseFooter>
      </ShowcaseContainer>
    </Link>
  );
};

export { SnippetShowcase };
