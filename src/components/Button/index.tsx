import Link from "next/link";
import { cn } from "@/libs/utils";


type Props = {
    children: React.ReactNode;
    href: string;
}

const Button: React.FC<Props> = ({ children, href }) => {
    return (
        <div className="w-full flex">
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
                <Link href={href}>
                    <div className={cn(
                        "h-full w-full flex items-center justify-center",
                        "after:inline-block after:w-[1.5rem] after:h-[0.4rem] after:ml-2 after:my-auto after:pr-1",
                        "after:border-solid after:border-b-[1px] after:border-r-[1px] after:border-muted-foreground",
                        "after:skew-x-[45deg] after:transition after:duration-300 hover:after:translate-x-1",
                    )}>
                        <span className="font-roboto text-xl text-muted-foreground font-light tracking-tighter">
                            {children}
                        </span>
                    </div>
                </Link>
            </button>
        </div>
    );
}

export default Button;
