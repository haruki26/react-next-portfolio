"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiHome, BiBookBookmark, BiBookContent, BiEnvelope } from "react-icons/bi";

import { cn, formatPath } from "@/libs/utils";
import IconAndStr from "../IconAndStr";
import React from "react";


const pages = [
    {
        icon: <BiHome />,
        text: "Home",
        href: "/",
    },
    {
        icon: <BiBookBookmark />,
        text: "Works",
        href: "/works",
    },
    {
        icon: <BiBookContent />,
        text: "Blog",
        href: "/blog",
    },
    {
        icon: <BiEnvelope />,
        text: "Contact",
        href: "/contact",
    },
]

export type IconSettings = {
    size: number;
    className: string;
}

type Props = {
    icon: IconSettings;
    className?: string;
    withText?: boolean;
    horizontal?: boolean;
}

const PageLinks: React.FC<Props> = ({
    icon,
    className,
    withText = false,
    horizontal = false,
}) => {
    const current = formatPath(usePathname());

    return (
        <ul className={cn(
            "flex items-center justify-center",
            className,
            {
                "flex-col": !horizontal,
            }
        )}>
            {pages.map((page, index) => (
                <li
                    key={index}
                    className={cn(
                        "w-fit h-fit px-1 relative",
                        current === page.href && (
                            [
                                "before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10",
                                "after:absolute after:top-1/2 after:left-0",
                                "after:h-[5px] after:w-full after:rounded-md after:bg-slate-200",
                                "after:shadow-[0_0_8px_7px_rgba(255,255,255,0.15)]",
                                "after:animate-scale-in-center",
                            ]
                        ),
                    )}
                >
                    <Link href={page.href} passHref={true}>
                        <IconAndStr>
                            {page.icon.type({
                                ...icon,
                                className: cn(
                                    icon.className,
                                    "cursor-pointer",
                                    "transform transition duration-200 ease-in-out",
                                )
                            })}
                            {withText && (
                                <span className="text-lg font-roboto tracking-tight">
                                    {page.text}
                                </span>
                            )}
                        </IconAndStr>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PageLinks;
