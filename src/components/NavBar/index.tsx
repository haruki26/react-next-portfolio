"use client";

import { useState } from "react";
import HamburgerBtn from "../HamburgerBtn";
import clsx from "clsx";


const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={clsx([
            "sticky top-0 left-0 z-10 h-16 w-full px-3 py-2",
            "bg-zinc-100/75 shadow-lg shadow-slate-800/20",
            "dark:bg-zinc-900/75 dark:shadow-slate-100/20",
        ])}>
            <div className="h-full flex justify-between items-center">
                <div className="flex gap-4">
                    <HamburgerBtn isOpen={isOpen} handleOpen={handleOpen} />
                    <span className="text-xl font-bold">My Portfolio</span>
                </div>
                <div className="flex gap-4">
                    <span className="text-lg font-bold">Link</span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
