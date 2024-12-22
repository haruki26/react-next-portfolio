"use client";

import { useState } from "react";
import HamburgerBtn from "../HamburgerBtn";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="sticky top-0 left-0 z-10 h-16 w-full bg-white/75 shadow-md px-3 py-2">
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
