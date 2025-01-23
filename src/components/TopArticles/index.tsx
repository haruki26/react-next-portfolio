import { EndPoint, getContents } from "@/libs/microcms";
import CardStack from "../CardStack";


type Props = {
    path: EndPoint;
}

const TopArticles =  async ({ path }: Props) => {
    const data = await getContents(
        path, { limit: 3 }
    );

    if (data.contents.length === 0) {
        return null;
    }

    const articles = data.contents.map((article) => ({
        title: article.title,
        describe: article.describe,
        link: `/blog/${article.id}`,
    }))

    return (
        <CardStack cardContents={articles} />
    );
}

export default TopArticles;