import { FC, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
import { Button } from 'ultra-design';
import copyToClipboard from '../utils/copyToClipboard';
import './index.less';

interface CodeBlockProps {
  language?: string;
}

const CodeBlock: FC<CodeBlockProps> = props => {
  const [copyText, setCopyText] = useState('Copy');

  const onCopy = () => {
    copyToClipboard(props.children as string);
    setCopyText('Copied');
    setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
  };

  return (
    <div className="code-block-highlight">
      <SyntaxHighlighter language={props.language} style={dark}>
        {props.children}
      </SyntaxHighlighter>
      <Button size="mini" onClick={onCopy}>
        {copyText}
      </Button>
    </div>
  );
};

CodeBlock.defaultProps = {
  language: 'language-jsx',
};

export default CodeBlock;
