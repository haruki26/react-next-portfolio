"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { toTop } from "@/libs/utils";
import { BiSolidArrowToTop } from "react-icons/bi";


const TopBackBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <div className={clsx(
            "fixed bottom-5 right-5 z-10 md:bottom-10 md:right-16",
            "transform transition duration-500",
            isVisible ? "opacity-100 z-10" : "opacity-0 -z-10",
        )}>
            <button
                type="button"
                onClick={() => toTop()}
                className={clsx(
                    "h-12 w-12 md:h-16 md:w-16 rounded-full bg-slate-700 dark:bg-slate-500",
                    "shadow-xl shadow-slate-700/30 dark:shadow-slate-300/20",
                    "transition duration-500 hover:scale-110 hover:-translate-y-1 "
                )}
            >
                <BiSolidArrowToTop
                    size={50}
                    className="h-7 inline fill-slate-200 md:h-10 dark:fill-slate-100"
                />
            </button>
        </div>
    );
}

export default TopBackBtn;
