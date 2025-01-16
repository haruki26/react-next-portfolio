import Link from "next/link";
import Card from "../Card";


type Content = {
    title: string;
    description: string;
    link: string;
}

type Props = {
    cardContents: Content[];
}

const CardStack: React.FC<Props> = ({ cardContents }) => {
    return (
        <ul className="grid grid-cols-1 gap-4">
            {cardContents.map((content, index) => (
                <li key={index}>
                    <Card className="grid grid-rows-subgrid row-span-3 col-span-1 gap-1">
                        <h3 className="">{content.title}</h3>
                        <p className="">{content.description}</p>
                        <Link href={content.link}>
                            <span>Read more</span>
                        </Link>
                    </Card>
                </li>
            ))}
        </ul>
    );
}

export default CardStack;
