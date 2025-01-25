import { notFound } from "next/navigation";

import { getContentsDetail } from "@/libs/microcms";
import type { AsyncPage } from "@/types";
import Article from "@/components/Article";


type Props = {
    params: {
        slug: string;
    };
};

const Page: AsyncPage<Props> = async ({ params }) => {
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
