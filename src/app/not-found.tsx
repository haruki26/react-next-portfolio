import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl font-bold">404 Not Found</h1>
            <p className="text-lg mt-5">お探しのページが見つかりませんでした。</p>
        </div>
    )
}

export default NotFound;
