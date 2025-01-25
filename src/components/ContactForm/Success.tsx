import React from "react";
import Button from "../Button";
import Link from "next/link";

const Success: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col gap-10 items-center">
            <p className="text-2xl font-mplus text-center">お問い合わせの送信が完了しました</p>
            <div className="flex gap-5">
                <Button className="w-32 h-12 mx-auto mt-5 mb-3 before:translate-x-[4px] before:-translate-y-[4px]">
                    <Link href="/" className="w-full h-full flex justify-center items-center">
                        <span className="font-roboto text-sm text-slate-200">Back Home</span>
                    </Link>
                </Button>
                <Button className="w-32 h-12 mx-auto mt-5 mb-3 before:translate-x-[4px] before:-translate-y-[4px]">
                    <Link href="/contact" className="w-full h-full flex justify-center items-center">
                        <span className="font-roboto text-sm text-slate-200">Back Contact</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Success;
