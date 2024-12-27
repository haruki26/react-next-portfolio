"use client";

import { createContext } from "react";

export type SideMenuContextType = {
    isOpen: boolean;
    handleOpen: () => void;
}

export const SideMenuContext = createContext<SideMenuContextType | undefined>(undefined);
