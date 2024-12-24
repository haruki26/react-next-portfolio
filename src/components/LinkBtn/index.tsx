import clsx from "clsx";
import Link from "next/link";


type Props = {
    href: string;
    children: React.ReactNode;
}

const LinkBtn: React.FC<Props> = ({ href, children }) => {
    return (
        <button className="h-fit">
            <Link href={href}>
                <div className={clsx([
                    "w-28",
                    "after:inline-block after:w-[1.5rem] after:h-[0.4rem] after:ml-2 after:mt-1 after:pr-1",
                    "after:border-solid after:border-b-[1px] after:border-r-[1px] after:border-black after:skew-x-[45deg]",
                    "after:transition after:duration-300 hover:after:translate-x-1"
                ])}>
                    {children}
                </div>
            </Link>
        </button>
    );
}

export default LinkBtn;
