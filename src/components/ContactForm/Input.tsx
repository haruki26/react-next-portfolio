"use client";

import clsx from "clsx";
import { useState } from "react";

type Props = {
    target: string;
}

const Input: React.FC<Props> = ({ target }) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="w-full flex flex-col gap-0">
            <label
                htmlFor={target.toLowerCase()}
                className={clsx(
                    "font-roboto  text-md tracking-tight",
                    "transform transition duration-150",
                    (inputValue || isFocused)
                    ? "translate-y-0 text-slate-800 dark:text-slate-300"
                    : "translate-y-5 text-slate-500 dark:text-slate-500",
                )}>
                    {target}
            </label>
            <input
                type="text"
                id={target.toLowerCase()}
                name={target.toLowerCase()}
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={clsx(
                    "px-2 w-full border-b-2 bg-inherit rounded-t border-slate-800 dark:border-slate-300",
                    "focus:bg-stone-300/75 focus:outline-none dark:focus:bg-stone-700/75",
                )}
            />
        </div>
    );
};

export default Input;
