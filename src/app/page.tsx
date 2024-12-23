import Image from "next/image";

import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import clsx from "clsx";


const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className={clsx([
                "w-full h-fit flex px-4 py-8 flex-col font-roboto gap-10 items-center",
            ])}>
                <h1 className={clsx([
                    "text-5xl text-center py-10",
                    "after:block after:mt-5 after:mx-auto after:h-[1px] after:w-full after:bg-slate-800/70",
                    "after:animate-scale-in-center",
                ])}>
                    Welcome!
                </h1>
                <div className={clsx([
                    "text-lg text-center font-roboto font-semibold",
                    "flex flex-col gap-0",
                ])}>
                    <p>I&apos;m Haruki Kubo.</p>
                    <p>
                        Scroll down to see more content.
                    </p>
                </div>
                <span className={clsx([
                    "animate-floating-slow",
                    "before:block before:h-5 before:w-5 before:mt-2 before:mx-auto",
                    "before:border-r-[1.5px] before:border-b-[1.5px] before:border-black transform before:rotate-45",
                ])} />
            </div>
            <div className="mt-10 w-full flex flex-col">
                <section>
                    <div className="flex flex-col gap-5 items-center">
                        <SectionTitle title="About" />
                        <Card>
                            <div className="w-full h-full flex flex-col gap-2 items-center">
                                <div className="w-full">
                                    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />

                                </div>
                                <p className="text-3xl">
                                    This is a simple Next.js app with Tailwind CSS.
                                </p>
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
