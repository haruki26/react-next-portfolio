import Link from "next/link";

import type { Content } from "@/libs/microcms";
import Button from "../Button";
import CardStack from "../CardStack";


type Props = {
    contents: Content[];
    articleType: "blog" | "works";
}

const TopArticles: React.FC<Props> = ({ contents, articleType }) => {
    const articles = contents.map((content) => ({
        title: content.title,
        describe: content.describe,
        link: `/${articleType}/${content.id}`,
    }))

    return (
        <>
        {contents.length === 0
            ? <p className="text-foreground text-2xl font-mplus">No articles</p>
            : <CardStack cardContents={articles} />
        }
        <Button>
            <Link
                href={`/${articleType}`}
                className="w-full h-full flex items-center justify-center"
            >
                <span className="font-roboto text-2xl text-muted-foreground font-light tracking-tighter">
                    All Posts
                </span>
            </Link>
        </Button>
        </>
    )
}

export default TopArticles;