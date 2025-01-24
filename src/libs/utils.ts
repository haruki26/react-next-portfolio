import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string): string => {
    return dayjs(date).tz("Asia/Tokyo").format("YYYY-MM-DD");
}

export const formatPath = (path: string, toUpper: boolean = false): string => {
    if (path === "/") return toUpper ? "Home" : "home";
    const p = path.split("/")[1];
    return toUpper ? p.charAt(0).toUpperCase() + p.slice(1) : p;
}

export const toTop = (behavior: "instant" | "smooth" = "smooth"): void => {
    window.scrollTo({
        top: 0,
        behavior: behavior,
    });
}
