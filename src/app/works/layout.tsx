import type { Metadata } from "next";
import { BiBookBookmark } from "react-icons/bi";
import Hero from "@/components/Hero";
import IconAndStr from "@/components/IconAndStr";


export const metadata: Metadata = {
    title: "Works",
};

type Props = {
    children: React.ReactNode;
};

const WorksLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col gap-4 px-5 sm:px-0">
            <Hero>
                <IconAndStr className="gap-3">
                    <BiBookBookmark size={"3.7rem"} />
                    <h1 className="font-roboto text-6xl">Works</h1>
                </IconAndStr>
            </Hero>
            {children}
        </div>
    );
};

export default WorksLayout;
