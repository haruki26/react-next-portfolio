import Image from "next/image";

import clsx from "clsx";
import parser, { HTMLReactParserOptions, Element, Text } from "html-react-parser";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";


const options: HTMLReactParserOptions = {
    replace: (dom) => {
        if (!(dom instanceof Element)) return;

        if (dom.name === "pre") {
            if (!(dom.firstChild instanceof Element)) return;
            if (!(dom.firstChild.firstChild instanceof Text)) return;

            return (
                <SyntaxHighlighter
                    language={dom.firstChild.attribs.class.replace("language-", "")}
                    style={atomOneDark}
                    customStyle={{
                        padding: "1rem",
                        overflowX: "scroll",
                    }}
                >
                    {dom.firstChild.firstChild.data}
                </SyntaxHighlighter>
            )
        } else if (dom.name === "image") {
            const width = parseInt(dom.attribs.width);
            const height = parseInt(dom.attribs.height);
            if (isNaN(width) || isNaN(height)) return;
            
            return (
                <Image
                    src={dom.attribs.src}
                    alt={dom.attribs.alt}
                    width={width}
                    height={height}
                />
            )
        }
    }
}

type Props = {
    html: string;
}

const Content: React.FC<Props> = ({ html }) => {
    const parsedHtml = parser(html, options);

    return (
        <article className={clsx(
            "w-full prose break-all md:prose-lg text-foreground prose-headings:text-foreground",
            "prose-pre:w-80 prose-pre:mx-auto xs:prose-pre:w-[480px] md:prose-pre:w-full",
            "dark:prose-teal dark:prose-strong:text-foreground",
        )}>
            {parsedHtml}
        </article>
    )
}

export default Content;
