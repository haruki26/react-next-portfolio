import Image from "next/image";

import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import clsx from "clsx";


const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className={clsx([
                "w-full h-fit flex px-4 py-8 flex-col gap-10 items-center",
            ])}>
                <div className={clsx([
                    "text-center pt-10 pb-12 w-full flex flex-col gap-3 items-center font-roboto font-light tracking-tighter",
                    "after:block after:mt-10 after:mx-auto after:h-[1px] after:w-full after:bg-slate-800/70",
                    "after:animate-scale-in-center",
                ])}>
                    <h1 className="text-5xl">Welcome!</h1>
                    <p className="text-xl animate-fade-in-bottom">I&apos;m Haruki Kubo.</p>
                </div>
                <div className={clsx([
                    "flex flex-col gap-3 ",
                    "text-lg text-center font-mplus font-normal tracking-wide",
                ])}>
                    <p className="animate-fade-in-bottom">
                        このサイトには私の作品をまとめたページや、学びのアウトプットの場としてのブログページがあります。
                    </p>
                    <p className="animate-fade-in-bottom">
                        コンテンツは少ないですが楽しんでいただけると嬉しいです。
                    </p>
                </div>
                <div className="flex flex-col gap-0 items-center">
                    <span className="text-sm font-roboto">Scroll down to see more content.</span>
                    <span className={clsx([
                        "animate-floating-slow",
                        "before:block before:h-5 before:w-5 before:mt-3 before:mx-auto",
                        "before:border-r-[1.5px] before:border-b-[1.5px] before:border-black",
                        "before:transform before:rotate-45 before:translate-y-5"
                    ])} />
                </div>
            </div>
            <div className="mt-10 w-full flex flex-col">
                <section>
                    <div className="flex flex-col gap-5 items-center">
                        <SectionTitle title="About" />
                        <Card>
                            <div className="w-full h-full flex flex-col gap-2 items-center">
                                <div className="w-full h-fit flex px-2 gap-8 items-center">
                                    <Image
                                        src={"/my_icon.svg"}
                                        alt="icon" 
                                        width={100}
                                        height={100}
                                        className="rounded-xl bg-zinc-300/80 w-20"
                                    />
                                    <div className="flex flex-col gap-1 items-start font-mplus">
                                        
                                    </div>
                                </div>
                                <p className="text-2xl">
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
