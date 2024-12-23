import clsx from "clsx";
import LinkBtn from "../LinkBtn";

type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className={clsx([
            "rounded-lg w-80 h-52 animate-fade-in-bottom",
            "bg-[#beb4aa]/30 shadow-md",
            "transition duration-300",
            "hover:bg-[#beb4aa]/50 hover:shadow-xl hover:scale-[1.01]",
        ])}>
            <div className="h-5/6 px-3 py-2 overflow-hidden">
                {children}
            </div>
            <div className="h-1/6 w-fit my-0 mr-3 ml-auto">
                <LinkBtn href="/about">
                    <span className="font-roboto text-xl">more</span>
                </LinkBtn>
            </div>
        </div>
    );
}

export default Card;
