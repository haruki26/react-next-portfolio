import { BiBookBookmark } from "react-icons/bi";
import IconAndStr from "@/components/IconAndStr";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";


const dummy = [
    {
        title: "準備中",
        description: "contcfsvfsrsbsdrsrergesrfvsdrgsertgsdcvfergbvewrvsxgbrevgr",
        link: "#"
    },
    {
        title: "準備中...",
        description: "content",
        link: "#"
    },
    {
        title: "準備中...",
        description: "content",
        link: "#"
    },
    {
        title: "準備中...",
        description: "contwefwerfewrgbythtyrbnmyujhrgetrhrsfefvgrteesrgent",
        link: "#"
    },
    {
        title: "準備中...",
        description: "content",
        link: "#"
    },
]

const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-10 my-4">
            <IconAndStr className="gap-3">
                <BiBookBookmark size={"3.7rem"} />
                <span className="font-roboto text-6xl">Works</span>
            </IconAndStr>
            <CardStack cardContents={dummy} />
        </div>
    );
}

export default Page;
