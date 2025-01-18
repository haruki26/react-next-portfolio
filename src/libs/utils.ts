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
