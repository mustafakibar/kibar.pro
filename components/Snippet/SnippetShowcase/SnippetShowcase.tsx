import { cn } from '@/lib/utils';
import { SnippetShowcaseProps } from '.';

const SnippetShowcase: React.FC<SnippetShowcaseProps> = ({
  snippet,
  className,
  ...props
}) => {
  return (
    <div className={cn('p-2', className)} {...props}>
      <div>
        <h2>{snippet.title}</h2>
        <p>{snippet.content}</p>
      </div>
      <div>
        <a href={snippet.url} target="_blank" rel="noopener noreferrer">
          Snippet Link
        </a>
      </div>
    </div>
  );
};

export { SnippetShowcase };
