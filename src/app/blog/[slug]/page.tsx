import ArticleRender from "@/components/ArticleRender";
import { getContentsDetail } from "@/libs/microcms";

type Props = {
    params: {
        slug: string;
    };
};

const Page: React.FC<Props> = async ({ params }) => {
    const data = await getContentsDetail("blog", params.slug);

    return (
        <div className="mx-auto flex flex-col gap-10 font-mplus justify-center items-center max-w-screen-md">
            <h1 className="text-3xl text-center font-bold">{data.title}</h1>
            <span></span>
            <p>{data.describe}</p>
            <span className="inline-block w-full h-[0.7px] bg-slate-600 " />
            <ArticleRender html={data.article} />
        </div>
    )
}

export default Page;
