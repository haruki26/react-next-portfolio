import React from "react";
import Button from "../Button";
import Link from "next/link";

const Success: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col gap-20 items-center">
            <p className="text-2xl font-mplus text-center">お問い合わせの送信が完了しました</p>
            <Button>
                <Link href="/" className="w-full h-full flex justify-center items-center">
                    <span className="font-roboto text-xl text-slate-200">Back Home</span>
                </Link>
            </Button>
        </div>
    );
};

export default Success;
