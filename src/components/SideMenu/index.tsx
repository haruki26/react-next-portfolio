"use client"

import { useState, useEffect, useRef } from "react";

import { cn } from "@/libs/utils";
import PageLinks, { IconSettings } from "../PageLinks";
import { useSideMenuContext } from "@/contexts";
import { useScrollLock } from "@/hooks/useScrollLock";

const SideMenu: React.FC = () => {
    const { isOpen } = useSideMenuContext();
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

    const icon: IconSettings = {
        size: 40,
        className: "fill-foreground",
    };

    return (
        <div ref={target}>
            {shouldRender && (
                <div className={cn(
                    "w-full h-svh fixed top-0 left-0 z-10 bg-slate-700/40 flex",
                    "transition-opacity duration-500 ease-in-out",
                    isOpen ? "opacity-100" : "opacity-0"
                )}>
                    <div className={cn(
                        "w-full max-w-md py-20 bg-background-end shadow-[5px_0_10px_0_rgba(34,34,34,0.2)]",
                        isOpen ? "animate-slide-in-left" : "animate-slide-out-left"
                    )}>
                        <PageLinks icon={icon} withText />
                    </div>
                </div>
            )}
        </div>   
    );
}

export default SideMenu;
