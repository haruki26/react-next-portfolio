"use client";

import clsx from "clsx";
import { useState } from "react";
import Button from "../Button";


type LabelProps = {
    target: string;
}

const InputForm: React.FC<LabelProps> = ({ target }) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-0">
            <label
                htmlFor={target.toLowerCase()}
                className={clsx(
                    "font-roboto text-slate-600 text-md tracking-tight",
                    "transform transition duration-150",
                    (inputValue || isFocused) ? "translate-y-0" : "translate-y-5",
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
                className="px-2 w-full border-b-2 bg-inherit rounded-t border-slate-800 focus:bg-stone-300/75 focus:outline-none"
            />
        </div>
    );
};

const ContactForm: React.FC = () => {
    return (
        <form className={clsx(
            "mx-auto mb-2 w-80 h-fit rounded-lg p-5 bg-zinc-100/75 dark:bg-zinc-900/75",
            "shadow-lg shadow-slate-800/20 dark:shadow-slate-100/20",
            "",
        )}>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                    <InputForm target="FirstName" />
                    <InputForm target="LastName" />
                </div>
                <InputForm target="eMail" />
                <div className="flex flex-col gap-0">
                    <label htmlFor="message" className="font-roboto text-slate-600 text-md tracking-tight">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="px-2 w-full h-24 border-b-2 bg-inherit rounded-t border-slate-800 focus:bg-stone-300/75 focus:outline-none"
                    />
                </div>
                <Button type="submit" className="w-32 h-12 mx-auto mt-5 mb-3 before:translate-x-[4px] before:-translate-y-[4px]">
                    <div className="w-full h-full flex justify-center items-center">
                        <span className="font-roboto text-xl text-slate-200">Submit</span>
                    </div>
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
