import Link from "next/link";
import Card from "../Card";
import clsx from "clsx";
import { cn } from "@/libs/utils";
import Arrow from "../Arrow";


type Content = {
    title: string;
    describe: string;
    link: string;
}

type Props = {
    cardContents: Content[];
}

const CardStack: React.FC<Props> = ({ cardContents }) => {
    const cl = cardContents.length;
    const rowSpan = (cl % 2 == 0 ? cl : cl + 1) * 3;

    return (
        <div className={cn(
            "grid grid-rows-9 py-5",
            `grid-cols-1 grid-rows-[repeat(${rowSpan},minmax(0,1fr))] gap-10`,
            `md:grid-cols-2 md:grid-rows-[repeat(${rowSpan/2},minmax(0,1fr))]`,
        )}>
            {cardContents.map((content, index) => (
                <Card key={index} className={clsx(
                    "px-2 py-3 grid grid-rows-subgrid row-span-3 max-w-72 gap-4",
                )}>
                    <h3 className="font-mplus text-2xl">{content.title}</h3>
                    <div className="flex gap-0 px-2">
                        <p className="text-xl break-all">{content.describe}</p>
                    </div>
                    <Link href={content.link} className={clsx(
                        "ml-auto pl-2 pr-3 py-0 pb-1",
                        "border-2 border-muted rounded-md",
                    )}>
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
