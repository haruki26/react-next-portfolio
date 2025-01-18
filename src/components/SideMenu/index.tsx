"use client"

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/libs/utils";
import { useSideMenuContext } from "@/contexts";
import { useScrollLock } from "@/hooks/useScrollLock";
import { BiBookBookmark, BiBookContent, BiEnvelope, BiHome } from "react-icons/bi";


const pages = [
    {
        icon: <BiHome />,
        text: "Home",
        href: "/",
    },
    {
        icon: <BiBookBookmark />,
        text: "Works",
        href: "/works",
    },
    {
        icon: <BiBookContent />,
        text: "Blog",
        href: "/blog",
    },
    {
        icon: <BiEnvelope />,
        text: "Contact",
        href: "/contact",
    },
]

const SideMenu: React.FC = () => {
    const router = useRouter();
    const { isOpen, handleOpen } = useSideMenuContext();
    const [shouldRender, setShouldRender] = useState(isOpen);
    const target = useRef<HTMLDivElement>(null);

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
                        "w-full h-svh fixed top-0 left-0 z-10 bg-slate-700/40 flex",
                        "transition-opacity duration-500 ease-in-out",
                        isOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={handleClickOverlay}
                >
                    <div className={cn(
                        "w-full max-w-md py-20 bg-background-end shadow-[5px_0_10px_0_rgba(34,34,34,0.2)]",
                        "flex flex-col justify-center items-center",
                        isOpen ? "animate-slide-in-left" : "animate-slide-out-left"
                    )}>
                        <div className="w-fit grid grid-rows-4 grid-cols-2 gap-6 font-roboto mr-16">
                            {pages.map((page, index) => (
                                <label
                                    key={index}
                                    className="cursor-pointer grid grid-cols-subgrid col-span-2 row-span-1 gap-0"
                                    onClick={() => handleClick(page.href)}
                                >
                                    {page.icon.type({
                                        size: "3rem",
                                        className: "fill-foreground mx-auto",
                                    })}
                                    <span className="text-4xl text-center pt-1">{page.text}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>   
    );
}

export default SideMenu;
