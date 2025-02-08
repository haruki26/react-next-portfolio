import Link from "next/link";
import { cn } from "@/libs/utils";
import Arrow from "../Arrow";
import Card from "../Card";


type Content = {
    title: string;
    describe: string;
    link: string;
}

type Props = {
    cardContents: Content[];
}

const CardStack: React.FC<Props> = ({ cardContents }) => {
    const rowSpan = cardContents.length * 3;
    const mdRowSpan = (rowSpan % 2 == 0 ? rowSpan : rowSpan + 3) / 2;

    return (
        <div className={cn(
            "grid grid-rows-9 py-5",
            `grid-cols-1 grid-rows-[repeat(${rowSpan},minmax(0,1fr))] gap-10`,
            `md:grid-cols-2 md:grid-rows-[repeat(${mdRowSpan},minmax(0,1fr))]`,
        )}>
            {cardContents.map((content, index) => (
                <Card key={index} className="p-5 grid grid-rows-subgrid row-span-3 max-w-72 gap-4">
                    <h3 className="font-mplus text-2xl">{content.title}</h3>
                    <div className="flex gap-0 px-2">
                        <p className="text-xl break-all">{content.describe}</p>
                    </div>
                    <Link href={content.link} className="ml-auto pl-2 pr-3 py-0 pb-1 border-2 border-muted rounded-md">
                        <Arrow>
                            <span className="text-xl">more</span>
                        </Arrow>
                    </Link>
                </Card>
            ))}
        </div>
    );
}

export default CardStack;
