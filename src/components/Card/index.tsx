import { cn } from "@/libs/utils";
import clsx from "clsx";


type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className={cn(
            "rounded-lg w-80 h-52",
            "bg-card/30 text-card-foreground shadow-md transition duration-300",
            "hover:bg-card/50 hover:shadow-xl hover:scale-[1.01]",
            "dark:bg-card/40 dark:text-card-foreground shadow-zinc-400/20",
            "dark:hover:bg-card/60 dark:hover:shadow-zinc-400/40",
        )}>
            <div className="w-full h-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default Card;
