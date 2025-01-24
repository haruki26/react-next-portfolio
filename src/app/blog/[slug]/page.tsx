import { notFound } from "next/navigation";
import Article from "@/components/Article";
import { getContentsDetail } from "@/libs/microcms";

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getContentsDetail("blog", params.slug).catch(notFound);

    return (
        <Article
            title={data.title}
            describe={data.describe}
            html={data.article}
            date={{
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            }}
        />
    );
};

export default Page;
