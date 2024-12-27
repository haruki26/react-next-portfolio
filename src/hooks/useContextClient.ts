"use client";

import { Context, useContext } from "react"

export const useContextClient = <T>(context: Context<T | undefined>): T => {
    const c = useContext(context)
    if (!c) {
        throw new Error("context is undefind")
    }
    return c;
}
