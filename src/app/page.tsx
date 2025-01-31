import clsx from "clsx";

import { getContents } from "@/libs/microcms";
import { TOP_ARTICLE_NUM } from "@/constans";
import type { AsyncPage } from "@/types";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Hero";
import SelfIntroduceCard from "@/components/SelfIntroduceCard";
import TopArticles from "@/components/TopArticles";


const Page: AsyncPage = async () => {
    const worksData = await getContents("works", { limit: TOP_ARTICLE_NUM });
    const blogData = await getContents("blog", { limit: TOP_ARTICLE_NUM });

    return (
        <div className="flex flex-col items-center">
            <div className={clsx([
                "w-full h-fit flex px-4 py-8 flex-col gap-10 items-center",
            ])}>
                <Hero describe="プロフィールや作品についてまとめてあります">
                    <h1 className="font-roboto font-light text-5xl tracking-tighter sm:text-8xl">
                        Welcome!
                    </h1>
                </Hero>
                <div className={clsx([
                    "flex flex-col gap-3 max-w-screen-sm",
                    "text-lg text-center font-mplus font-normal tracking-wide",
                ])}>
                    <p className="animate-fade-in-bottom">
                        このサイトには私の作品をまとめたページや、学びのアウトプットの
                        <br className="hidden sm:inline" />
                        場としてのブログページがあります。
                    </p>
                </div>
                <div className="flex flex-col gap-0 items-center">
                    <span className="text-lg font-roboto tracking-tighter">
                        Scroll down to see more content.
                    </span>
                    <span className={clsx([
                        "animate-floating-slow",
                        "before:block before:h-5 before:w-5 before:mt-3 before:mx-auto",
                        "before:border-r-[1.5px] before:border-b-[1.5px] before:border-black",
                        "before:transform before:rotate-45 before:translate-y-5",
                        "dark:before:border-zinc-50 dark:before:border-r-[1.6px] dark:before:border-b-[1.6px]",
                    ])} />
                </div>
            </div>
            <div className="mt-10 w-full flex flex-col gap-10 justify-center md:gap-20">
                <section>
                    <div className="flex flex-col gap-5 items-center md:gap-10">
                        <SectionTitle title="About" />
                        <SelfIntroduceCard />
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10 items-center">
                        <SectionTitle title="Works" />
                        <TopArticles contents={worksData.contents} articleType="works" />
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10 items-center">
                        <SectionTitle title="Blog" />
                        <TopArticles contents={blogData.contents} articleType="blog" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
