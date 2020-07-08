import style from "react-syntax-highlighter/styles/prism/darcula";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBlock: React.FC = ({
    children,
    ...props
}) => {
    const code = typeof children === 'string'
        ? children.trim()
        : ''
    ;

    return (
        <SyntaxHighlighter
            style={style}
            language="javascript"
            showLineNumbers={code.split('\n').length > 1}
            customStyle={{
                fontSize: 14,
                whiteSpace: 'wrap',
                borderRadius: '4px',
            }}
            {...props}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;