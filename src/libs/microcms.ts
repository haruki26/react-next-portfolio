import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";


export type Content = {
    title: string;
    describe: string;
    article: string;
    thumbnail?: MicroCMSImage | undefined;
    publishedAt: string;
    updatedAt: string;
} & MicroCMSListContent;

type EndPoint = "works" | "blog";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is not defined");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getContents = async (
    endpoint: EndPoint,
    queries?: MicroCMSQueries,
) => {
    const listData = await client.getList<Content>({
        endpoint,
        queries,
    });
    return listData;
};

export const getContentsDetail = async (
    endpoint: EndPoint,
    id: string,
    queries?: MicroCMSQueries,
) => {
    const detailData = await client.getListDetail<Content>({
        endpoint,
        contentId: id,
        queries,
    });
    return detailData;
};
