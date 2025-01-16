import Link from "next/link";
import Card from "../Card";
import clsx from "clsx";
import { cn } from "@/libs/utils";


type Content = {
    title: string;
    description: string;
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
            "grid grid-rows-9",
            `grid-cols-1 grid-rows-[repeat(${rowSpan},minmax(0,1fr))] gap-5`,
            `md:grid-cols-2 md:grid-rows-[repeat(${rowSpan/2},minmax(0,1fr))]`,
        )}>
            {cardContents.map((content, index) => (
                <Card key={index} className={clsx(
                    "px-2 py-3 grid grid-rows-subgrid row-span-3 max-w-72 gap-1",
                )}>
                    <h3 className="font-mplus text-2xl">{content.title}</h3>
                    <div className="flex gap-0">
                        <p className="text-xl break-all">{content.description}</p>
                    </div>
                    <Link href={content.link}>
                        <span className="text-xl">Read more</span>
                    </Link>
                </Card>
            ))}
        </div>
    );
}

export default CardStack;
