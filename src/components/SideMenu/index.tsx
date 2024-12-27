"use client"

import { cn } from "@/libs/utils";
import PageLinks, { IconSettings } from "../PageLinks";
import { useSideMenuContext } from "@/contexts";

const SideMenu: React.FC = () => {
    const { isOpen } = useSideMenuContext();
    if (!isOpen) return null;

    const icon: IconSettings = {
        size: 40,
        className: "fill-foreground",
    };

    return (
        <div className={cn(
            "w-full max-w-sm h-svh px-2 py-5 z-10",
            "bg-background-end flex items-center justify-center"
        )}>
            <PageLinks icon={icon} withText />
        </div>
    );
}

export default SideMenu;
