import Link from "next/link";
import { cn } from "@/libs/utils";


type Props = {
    children: React.ReactNode;
    href: string;
}

const Button: React.FC<Props> = ({ children, href }) => {
    return (
        <div className="h-24 w-full pt-9 sm:flex">
            <button
                type="button"
                className={cn(
                    "w-screen h-16 bg-[#777777] absolute left-[60%] skew-x-2",
                    "before:w-full before:block before:h-full before:border-black before:border-[1.5px]",
                    "before:transform before:translate-x-[6px] before:-translate-y-[6px]",
                    "hover:before:translate-x-0 hover:before:translate-y-0",
                    "before:transition before:duration-300",
                    "sm:w-52 sm:static sm:mx-auto sm:skew-x-0"
                )}
            >
                <div className="h-full w-full absolute top-0 left-0">
                    <Link href={href}>
                        <div className={cn(
                            "h-full w-full flex items-center pl-12 xs:pl-20 sm:pl-[4.3rem]",
                            "after:inline-block after:w-[1.5rem] after:h-[0.4rem] after:ml-2 after:my-auto after:pr-1",
                            "after:border-solid after:border-b-[1px] after:border-r-[1px] after:border-[#eeeeee] after:skew-x-[45deg]",
                            "after:transition after:duration-300 hover:after:translate-x-1",
                        )}>
                            <span className="font-roboto text-xl text-[#eeeeee] font-light tracking-tighter -skew-x-2 sm:skew-x-0">
                                {children}
                            </span>
                        </div>
                    </Link>
                </div>
            </button>
        </div>
    );
}

export default Button;
