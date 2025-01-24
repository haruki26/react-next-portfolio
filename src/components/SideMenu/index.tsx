"use client"

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { cn, formatPath } from "@/libs/utils";
import { useSideMenuContext } from "@/contexts";
import { useScrollLock } from "@/hooks/useScrollLock";
import { PAGES } from "@/constans";


const SideMenu: React.FC = () => {
    const router = useRouter();
    const { isOpen, handleOpen } = useSideMenuContext();
    const [shouldRender, setShouldRender] = useState(isOpen);

    const target = useRef<HTMLDivElement>(null);
    const path = formatPath(usePathname(), true);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useScrollLock({
        isLock: isOpen,
        target,
    });

    const handleClick = (href: string) => {
        router.push(href);
        window.scrollTo({top: 0, behavior: "instant"});
        handleOpen();
    }

    const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleOpen();
        }
    }

    return (
        <div ref={target}>
            {shouldRender && (
                <div 
                    className={cn(
                        "w-full h-dvh fixed top-0 left-0 z-10 flex",
                        "transition-opacity duration-500 ease-in-out",
                        isOpen ? "opacity-100" : "opacity-0",
                        "bg-slate-700/40 dark:bg-gray-300/20"
                    )}
                    onClick={handleClickOverlay}
                >
                    <div className={cn(
                        "w-full max-w-md py-20 bg-background-end shadow-[5px_0_10px_0_rgba(34,34,34,0.2)]",
                        "flex flex-col justify-center items-center",
                        isOpen ? "animate-slide-in-left" : "animate-slide-out-left"
                    )}>
                        <div className="w-fit grid grid-rows-4 grid-cols-2 gap-6 font-roboto mr-16">
                            {PAGES.map((page, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-subgrid col-span-2 row-span-1 gap-0 pb-1 relative"
                                >
                                    <label
                                        className={cn(
                                            "absolute cursor-pointer top-0 left-16 bottom-0 right-0",
                                            path === page.text && [
                                                "after:animate-scale-in-center",
                                                "after:w-full after:h-[1.2px] after:absolute after:bottom-0 after:left-0",
                                                "after:bg-slate-800 after:shadow-[0_2px_5px_2px_rgba(0,0,0,0.13)]",
                                                "dark:after:bg-gray-400 dark:after:shadow-[0_2px_6px_3px_rgba(220,220,220,0.25)]",
                                            ],
                                        )}
                                        onClick={() => handleClick(page.href)}
                                    />
                                    {page.icon.type({
                                        size: "3rem",
                                        className: "fill-foreground mr-8 ml-auto",
                                    })}
                                    <span className="text-4xl text-center pt-1 pr-2">{page.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>   
    );
}

export default SideMenu;
