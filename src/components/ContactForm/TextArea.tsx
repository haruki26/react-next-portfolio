"use client";

import clsx from "clsx";
import { useState } from "react";

type Props = {
    target: string;
}

const TextArea: React.FC<Props> = ({ target }) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-0">
            <label
                htmlFor={target.toLowerCase()}
                className={clsx(
                    "font-roboto text-slate-800 text-md tracking-tight dark:text-slate-300",
                    "transform transition-transform duration-150",
                    (inputValue || isFocused)
                    ? "translate-y-0 text-slate-800 dark:text-slate-300"
                    : "translate-y-5 text-slate-500 dark:text-slate-500",
                )}>
                    {target}
            </label>
            <textarea
                id={target.toLowerCase()}
                name={target.toLowerCase()}
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={clsx(
                    "px-2 w-full h-24 border-b-2 bg-inherit border-slate-800 dark:border-slate-300",
                    "focus:bg-stone-300/75 focus:outline-none dark:focus:bg-stone-700/75 focus:border-y-2",
                    "md:h-40"
                )}
            />
        </div>
    );
};

export default TextArea;
