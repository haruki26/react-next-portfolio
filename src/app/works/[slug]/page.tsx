import type { Metadata } from "next";
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

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const data = await getContentsDetail("works", params.slug);

    return {
        title: data.title,
        description: data.describe,
        openGraph: {
            title: data.title,
            description: data.describe,
        },
    };
};

const Page: AsyncPage<Props> = async ({ params }) => {
    const data = await getContentsDetail("works", params.slug).catch(notFound);

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
            <BackBtn href="works" />
        </div>
        
    );
};

export default Page;
