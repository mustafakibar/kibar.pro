import { SNIPPETS_PATH } from '@/app/constants';
import {
  ShowcaseActionContainer,
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseMain,
  ShowcaseTitle,
  ShowcaseViewURLButton,
} from '@/components/Showcase';
import { TagItems } from '@/components/Tag';
import { cn } from '@/lib/utils';
import { SnippetShowcaseProps } from '.';

const SnippetShowcase: React.FC<SnippetShowcaseProps> = ({
  snippet,
  className,
  ...props
}) => {
  return (
    <ShowcaseContainer className={cn(className)} {...props}>
      <ShowcaseMain>
        <ShowcaseHeader>
          <ShowcaseTitle>{snippet.title}</ShowcaseTitle>

          <ShowcaseActionContainer>
            {snippet.slug && (
              <ShowcaseViewURLButton
                url={`${SNIPPETS_PATH}\\${snippet.slug}`}
              />
            )}
          </ShowcaseActionContainer>
        </ShowcaseHeader>

        <ShowcaseDivider />

        <ShowcaseContent>{snippet.content}</ShowcaseContent>
      </ShowcaseMain>

      {snippet.tags && (
        <ShowcaseFooter>
          <TagItems tags={snippet.tags} />
        </ShowcaseFooter>
      )}
    </ShowcaseContainer>
  );
};

export { SnippetShowcase };
