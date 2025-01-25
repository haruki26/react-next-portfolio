import { notFound } from "next/navigation";

import { getContentsDetail } from "@/libs/microcms";
import type { AsyncPage } from "@/types";
import Article from "@/components/Article";
import BackBtn from "@/components/Article/BackBtn";


type Props = {
    params: {
        slug: string;
    };
};

const Page: AsyncPage<Props> = async ({ params }) => {
    const data = await getContentsDetail("blog", params.slug).catch(notFound);

    return (
        <div className="flex flex-col items-center gap-10">
            <Article
                title={data.title}
                describe={data.describe}
                html={data.article}
                date={{
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                }}
            />
            <BackBtn href="blog" />
        </div>
        
    );
};

export default Page;
