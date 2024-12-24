import clsx from "clsx";


type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className={clsx([
            "rounded-lg w-80 h-52",
            "bg-[#beb4aa]/30 text-[#0a1228] shadow-md",
            "transition duration-300",
            "hover:bg-[#beb4aa]/50 hover:shadow-xl hover:scale-[1.01]",
        ])}>
            <div className="w-full h-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default Card;
