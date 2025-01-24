"use client";

import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import { cn } from "@/libs/utils";
import { useLayoutEffect, useState } from "react";


const ThemeChangeBtn: React.FC = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState<boolean>();

    useLayoutEffect(() => {
        setIsDark(resolvedTheme === "dark");
    }, [resolvedTheme]);

    const handleClick = () => {
        setIsDark(!isDark);
        setTheme(isDark ? "light" : "dark");
    }

    if (isDark === undefined) return <div className="w-[71px] h-[34px] border-1"></div>;

    return (
        <div className={cn(
            "p-px w-[71px] h-[34px] rounded-3xl relative",
            "border-2 border-spacing-1 border-amber-300 dark:border-amber-200"
        )}>
            <div
                onClick={handleClick}
                className={cn(
                    "cursor-pointer absolute top-[1px] left-[3px] w-full h-full z-10",
                    "after:inline-block after:w-[28px] after:h-[28px] after:rounded-full",
                    "after:bg-amber-500/40 dark:after:bg-amber-200/30",
                    "after:transform after:transition after:duration-[400ms] after:ease-in-out",
                    isDark ? "after:translate-x-[34px]" : "after:translate-x-0",
                )}
            />
            <IoSunnyOutline
                size={26}
                className={cn(
                    "absolute top-[2px] left-[3px]",
                    "transform transition duration-200 ease-in-out",
                    isDark ? "translate-x-17 opacity-0 scale-0" : "translate-x-0 opacity-100 scale-100"
                )}
            />
            <IoMoonOutline
                size={26}
                className={cn(
                    "absolute top-[2px] right-[3px]",
                    "transform transition duration-200 ease-in-out",
                    isDark ? "translate-x-0 opacity-100 scale-100" : "translate-x-17 opacity-0 scale-0"
                )}
            />
        </div>
    );
}

export default ThemeChangeBtn;
