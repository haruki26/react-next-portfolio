import CardStack from "@/components/CardStack";
import { getContents } from "@/libs/microcms";
import React from "react";


const Page = async () => {
    const data = await getContents("blog");

    if (data.contents.length === 0) {
        return (
            <div className="flex items-center justify-center h-96">
                <h1 className="text-3xl">No Works</h1>
            </div>
        );
    }

    const cards = data.contents.map((content) => ({
        title: content.title,
        describe: content.describe,
        link: `/blog/${content.id}`,
    }));

    return (
        <div className="flex flex-col items-center gap-10 my-4">
            <CardStack cardContents={cards} />
        </div>
    );
}

export default Page;
