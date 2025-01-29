import clsx from "clsx";
import { NextPage } from "next";



const NotFound: NextPage = () => {
    return (
        <div className={clsx(
            "flex flex-col items-center justify-center",
            "w-full h-[calc(100dvh-(64px+189.6px+24px))]"
        )}>
            <div className="flex flex-col items-center gap-5 py-10">
                <h1 className="text-3xl font-roboto font-bold md:text-5xl">
                    404 Not Found
                </h1>
                <p className="text-lg mt-5 font-mplus text-center md:text-2xl">
                    お探しのページが
                    <br />
                    見つかりませんでした
                </p>
            </div>
        </div>
    );
};

export default NotFound;
