"use client";

import { useTheme } from "next-themes";
import { IoInformationCircleOutline } from "react-icons/io5";


type Props = {
    message: string | null;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
    const { resolvedTheme } = useTheme();
    return message ? (
        <div className="flex items-center gap-[0.12rem] pl-1 pt-px">
            <IoInformationCircleOutline
                size={20}
                color={resolvedTheme === "dark" ? "#f87171" : "#ef4444"}
                className="fill-red-500 dark:fill-red-400" />
            <span className="text-red-500 text-sm font-mplus tracking-tight dark:text-red-400">{message}</span>
        </div>
    ) : (
        <div className="h-5" />
    );
};

export default ErrorMessage;
