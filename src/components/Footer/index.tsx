import { cn } from "@/libs/utils";

import MediaLinks from "../MediaLinks";
import { PAGES } from "@/constans";
import Link from "next/link";


const Footer: React.FC = () => {

    return (
        <div className={cn(
            "h-fit w-full px-3 py-8 bg-[#3e2723] text-[#f5f5dc] shadow-[0_-4px_9px_8px_rgba(0,0,0,0.18)]",
            "dark:bg-[#2e2e2e] dark:shadow-[0_-2px_10px_6px_rgba(221,221,221,0.18)]",
        )}>
            <div className="h-full flex flex-col gap-5 justify-center items-center">
                <div className="w-full flex gap-5 items-center justify-center">
                    {PAGES.map((page, index) => (
                        <Link href={page.href} key={index}>
                            {page.icon.type({
                                size: "2.3rem",
                                className: "fill-slate-200",
                            })}
                        </Link>
                    ))}
                </div>
                <MediaLinks />
            </div>
        </div>
    );
}

export default Footer;
