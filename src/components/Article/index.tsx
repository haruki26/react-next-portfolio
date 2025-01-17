import clsx from "clsx";
import parser from "html-react-parser";


type Props = {
    html: string;
}

const Article: React.FC<Props> = ({ html }) => {

    return (
        <article className={clsx(
            "w-full prose break-all md:prose-lg text-foreground prose-headings:text-foreground",
            "prose-pre:w-80 prose-pre:mx-auto xs:prose-pre:w-[480px] md:prose-pre:w-full",
            "prose-code:overflow-x-scroll dark:prose-teal dark:prose-strong:text-foreground",
        )}>
            {parser(html)}
        </article>
    )
}

export default Article;
