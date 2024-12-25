import { cn } from "@/libs/utils";
import clsx from "clsx";


type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className={cn(
            "rounded-lg w-80 h-52",
            "bg-[#beb4aa]/30 text-[#0a1228] shadow-md transition duration-300",
            "hover:bg-[#beb4aa]/50 hover:shadow-xl hover:scale-[1.01]",
            "dark:bg-[#4a3c32]/40 dark:text-[#eee9df] shadow-zinc-400/20",
            "dark:hover:bg-[#4a3c32]/60 dark:hover:shadow-zinc-400/40",
        )}>
            <div className="w-full h-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default Card;
