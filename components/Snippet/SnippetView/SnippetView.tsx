import { SnippetViewProps } from '.';

const SnippetView: React.FC<SnippetViewProps> = ({ snippet }) => {
  return (
    <div>
      - Snippet view
      {snippet.title}
      {snippet.content}
    </div>
  );
};

export { SnippetView };
