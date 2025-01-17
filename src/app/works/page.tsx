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
            <CardStack cardContents={dummy} />
        </div>
    );
}

export default Page;
