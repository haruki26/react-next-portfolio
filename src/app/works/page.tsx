import { BiBookBookmark } from "react-icons/bi";
import IconAndStr from "@/components/IconAndStr";
import Card from "@/components/Card";


const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-10 my-4">
            <IconAndStr className="gap-3">
                <BiBookBookmark size={"3.7rem"} />
                <span className="font-roboto text-6xl">Works</span>
            </IconAndStr>
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                <Card className="grid grid-cols-subgrid gap-2 p-3">
                    <div className="flex flex-col gap-1 items-center">
                        <span>準備中`kamakakakak</span>
                    </div>
                    <div className="flex flex-col">
                        <span>content</span>
                        <span>content</span>
                    </div>
                    <span>Im pen.</span>
                </Card>
                <Card className="grid grid-cols-subgrid gap-2 p-3">
                <div className="flex flex-col gap-1 items-center">
                        <span>準備中...</span>
                    </div>
                    <div className="flex flex-col">
                        <span>content</span>
                    </div>
                    <span>Im pen.</span>
                </Card>
                <Card className="grid grid-cols-subgrid gap-2 p-3">
                <div className="flex flex-col gap-1 items-center">
                        <span>準備中...</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>content</span>
                    </div>
                    <span className="text-xl">Im pen.</span>
                </Card>
            </div>
        </div>
    );
}

export default Page;
