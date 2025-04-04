"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { formatPath } from "@/libs/utils";
import { useSideMenuContext } from "@/contexts";
import { PAGES } from "@/constans";
import HamburgerBtn from "./HamburgerBtn";
import ThemeChangeBtn from "../ThemeChangeBtn";


const NavBar: React.FC = () => {
    const { isOpen, handleOpen } = useSideMenuContext();
    const path = formatPath(usePathname(), true);
    const pageName = PAGES.find((page) => page.text === path)?.text || "Not Found";
    
    return (
        <div className={clsx([
            "h-16 w-full px-3 py-2",
            "bg-zinc-100/75 shadow-lg shadow-slate-800/20",
            "dark:bg-zinc-900/75 dark:shadow-slate-100/20",
        ])}>
            <div className="h-full flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <HamburgerBtn isOpen={isOpen} handleOpen={handleOpen} />
                    <span className="text-2xl font-roboto font-medium">{pageName}</span>
                </div>
                <ThemeChangeBtn />
            </div>
        </div>
    );
}

export default NavBar;
