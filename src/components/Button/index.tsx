import { cn } from "@/libs/utils";


type Props = {
    children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <button
            type="button"
            className={cn(
                "h-16 w-52 bg-muted mx-auto relative",
                "before:absolute before:top-0 before:left-0 before:w-full before:h-full",
                "before:w-full before:h-full before:border-black before:border-[1.5px]",
                "before:transform before:translate-x-[6px] before:-translate-y-[6px]",
                "hover:before:translate-x-0 hover:before:translate-y-0",
                "before:transition before:duration-300",
                "dark:before:border-slate-300"
            )}
        >
            {children}
        </button>
    );
}

export default Button;
