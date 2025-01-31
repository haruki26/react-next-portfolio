"use client";

import Link from "next/link";
import { toTop } from "@/libs/utils";
import type { EndPoint } from "@/libs/microcms";
import Button from "../Button";

type Props = {
    href: EndPoint;
}

const BackBtn: React.FC<Props> = ({ href }) => {
    return (
        <Button>
            <Link
                onClick={() => toTop("instant")}
                href={`/${href}`}
                className="w-full h-full flex items-center justify-center"
            >
                <span className="font-roboto text-xl text-muted-foreground font-light tracking-tighter">
                    All Posts
                </span>
            </Link>
        </Button>
    )
}

export default BackBtn;
