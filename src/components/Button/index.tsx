import { ButtonHTMLAttributes } from "react";
import { cn } from "@/libs/utils";

type Props = {
    children: React.ReactNode;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({
    children,
    type = "button",
    className,
    onClick,
}) => {
    return (
        <button
            type={type}
            className={cn(
                "h-16 w-52 relative bg-muted/90 dark:bg-muted",
                "before:w-full before:h-full before:absolute before:top-0 before:left-0",
                "before:border-black before:border-[1.5px]",
                "before:transform before:translate-x-[3px] before:-translate-y-[3px]",
                "hover:before:translate-x-0 hover:before:translate-y-0",
                "before:transition before:duration-300",
                "dark:before:border-slate-300",
                "after:w-full after:h-full after:absolute after:top-0 after:left-0 after:-z-10",
                "after:border-black after:border-[1.5px]",
                "after:transform after:translate-x-[-3px] after:-translate-y-[-3px]",
                "hover:after:translate-x-0 hover:after:translate-y-0",
                "after:transition after:duration-300",
                "dark:after:border-slate-300",
                className
            )}
            onClick={onClick}
        >
            <div className="w-full h-full absolute top-0 left-0">
                {children}
            </div>
        </button>
    );
}

export default Button;
