import clsx from "clsx";
import LinkBtn from "../LinkBtn";

type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className={clsx([
            "rounded-lg px-3 py-4 w-[22rem] h-[14rem]",
            "bg-[#f5f5f5]/80 shadow-md",
            " transition duration-300",
            "hover:bg-white/95 hover:shadow-lg hover:-translate-y-1",
        ])}>
            <div className="h-5/6">
                {children}
            </div>
            <div className="h-1/6 w-fit ml-auto">
                <LinkBtn href="/about">
                    <span>more</span>
                </LinkBtn>
            </div>
        </div>
    );
}

export default Card;
