import ArticleRender from "@/components/ArticleRender";
import DateLabel from "@/components/DateLabel";
import { getContentsDetail } from "@/libs/microcms";

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getContentsDetail("blog", params.slug);

    return (
        <div className="mx-auto flex flex-col gap-10 font-mplus justify-center items-center max-w-screen-md">
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-center font-bold">{data.title}</h1>
                <div className="flex gap-4 mx-auto">
                    <span className="tracking-tight">公開日</span>
                    <DateLabel date={data.createdAt} />
                </div>
                <p>{data.describe}</p>
            </div>
            <span className="inline-block w-full h-[0.7px] bg-slate-600 " />
            <ArticleRender html={data.article} />
            <div className="flex gap-4 mx-auto">
                <span className="tracking-tight">最終更新日</span>
                <DateLabel date={data.updatedAt} />
            </div>
        </div>
    )
}

export default Page;
