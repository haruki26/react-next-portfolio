"use client"

import { useState } from "react";
import { SideMenuContext } from "@/contexts/sideMenuContext";


type Props = {
    children: React.ReactNode;
}

export const SideMenuProvider: React.FC<Props> = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <SideMenuContext.Provider value={{ isOpen, handleOpen }}>
            {children}
        </SideMenuContext.Provider>
    );
}