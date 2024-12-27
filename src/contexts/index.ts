"use client";

import { useContextClient } from "@/hooks/useContextClient";
import { SideMenuContext, SideMenuContextType } from "./sideMenuContext";

// sidemenu context
export const useSideMenuContext = (): SideMenuContextType => {
    const { isOpen, handleOpen } = useContextClient(SideMenuContext);
    return { isOpen, handleOpen };
}
