import { cn } from "@/libs/utils";


type Props = {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({
    children,
    className = "",
}) => {
    return (
        <div className={cn(
            "rounded-lg bg-card/50 text-card-foreground shadow-md transition duration-300",
            "hover:bg-card/70 hover:shadow-xl hover:scale-[1.01]",
            "dark:bg-card/40 dark:text-card-foreground shadow-zinc-400/20",
            "dark:hover:bg-card/60 dark:hover:shadow-zinc-400/40",
            className,
        )}>
            {children}
        </div>
    );
}

export default Card;
