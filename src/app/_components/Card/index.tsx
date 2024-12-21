import LinkBtn from "../LinkBtn";

type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div
        className="rounded-lg bg-[#f5f5f5]/80 px-3 py-4 w-[22rem] h-[14rem]
                    shadow-md hover:bg-white/95 hover:shadow-lg hover:-translate-y-1 transition duration-300">
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
