"use client";

import { ContactFormSchema } from "@/validation/schema/ContactFormSchema";
import clsx from "clsx";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";


type Props = {
    register: UseFormRegisterReturn<keyof ContactFormSchema>;
    fieldError?: FieldError;
}

const Input: React.FC<Props> = ({
    register,
    fieldError,
}) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const { onChange, onBlur, name, ref } = register;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        setInputValue(e.target.value);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur(e);
        setIsFocused(false);
    }

    return (
        <div className="w-full flex flex-col gap-0">
            <label
                htmlFor={name}
                className={clsx(
                    "font-roboto  text-md tracking-tight",
                    "transform transition duration-150",
                    (inputValue || isFocused)
                    ? "translate-y-0 text-slate-800 dark:text-slate-300"
                    : "translate-y-5 text-slate-500 dark:text-slate-500",
                )}>
                    {name}
            </label>
            <input
                type="text"
                id={name}
                ref={ref}
                name={name}
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                className={clsx(
                    "px-2 w-full border-b-2 bg-inherit rounded-t border-slate-800 dark:border-slate-300",
                    "focus:bg-stone-300/75 focus:outline-none dark:focus:bg-stone-700/75",
                )}
            />
            <ErrorMessage message={fieldError?.message} />
        </div>
    );
};

export default Input;
