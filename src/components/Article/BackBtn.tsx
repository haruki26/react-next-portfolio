"use client";

import Link from "next/link";
import { toTop } from "@/libs/utils";
import Button from "../Button";


const BackBtn: React.FC = () => {
    return (
        <Button>
            <Link
                onClick={() => toTop()}
                href="/blog"
                className="w-full h-full flex items-center justify-center"
            >
                <span className="font-mplus text-xl text-muted-foreground font-light tracking-tighter">
                    記事一覧へ
                </span>
            </Link>
        </Button>
    )
}

export default BackBtn;
