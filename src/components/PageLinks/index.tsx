"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiHome, BiBookBookmark, BiBookContent, BiEnvelope } from "react-icons/bi";

import { cn } from "@/libs/utils";
import IconAndStr from "../IconAndStr";
import React from "react";
import { usePathFormat } from "@/hooks/usePathFormat";


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
    const current = usePathFormat(usePathname());

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
                                "after:absolute after:top-1/2 after:left-0",
                                "after:h-[4px] after:rounded-md after:w-full after:bg-slate-200",
                                "after:shadow-[0_0_8px_7px_rgba(255,255,255,0.15)]",
                                "after:transform after:transition after:duration-200 after:ease-in-out",
                                "after:scale-x-100",
                            ]
                        ),
                    )}
                >
                    <Link href={page.href}>
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
