import Image from "next/image";

import clsx from "clsx";
import { LiaGrinSolid } from "react-icons/lia";
import { BiLogoPython, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLangchain } from "react-icons/si";

import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import IconAndStr from "@/components/IconAndStr";
import Button from "@/components/Button";


const Page: React.FC = () => {
    
    return (
        <div className="flex flex-col items-center">
            <div className={clsx([
                "w-full h-fit flex px-4 py-8 flex-col gap-10 items-center",
            ])}>
                <div className={clsx([
                    "text-center pt-10 pb-12 w-full flex flex-col gap-3 items-center font-roboto font-light tracking-tighter",
                    "after:block after:mt-10 after:mx-auto after:h-px after:w-full after:bg-slate-800/70",
                    "after:animate-scale-in-center after:max-w-screen-md",
                    "sm:pt-24 sm:pb-28 sm:gap-12 sm:after:mt-24",
                ])}>
                    <h1 className="text-5xl tracking-wide sm:text-8xl">Welcome!</h1>
                    <p className="text-xl animate-fade-in-bottom sm:text-4xl">I&apos;m Haruki Kubo.</p>
                </div>
                <div className={clsx([
                    "flex flex-col gap-3 max-w-screen-sm",
                    "text-lg text-center font-mplus font-normal tracking-wide",
                ])}>
                    <p className="animate-fade-in-bottom">
                        このサイトには私の作品をまとめたページや、学びのアウトプットの
                        <span className="hidden sm:inline"><br /></span>
                        場としてのブログページがあります。
                    </p>
                    <p className="animate-fade-in-bottom">
                        コンテンツは少ないですが楽しんでいただけると嬉しいです。
                    </p>
                </div>
                <div className="flex flex-col gap-0 items-center">
                    <span className="text-lg font-roboto tracking-tighter">
                        Scroll down to see more content.
                    </span>
                    <span className={clsx([
                        "animate-floating-slow",
                        "before:block before:h-5 before:w-5 before:mt-3 before:mx-auto",
                        "before:border-r-[1.5px] before:border-b-[1.5px] before:border-black",
                        "before:transform before:rotate-45 before:translate-y-5"
                    ])} />
                </div>
            </div>
            <div className="mt-10 w-full flex flex-col gap-10 justify-center">
                <section>
                    <div className="flex flex-col gap-5 items-center">
                        <SectionTitle title="About" />
                        <Card>
                            <div className="px-3 py-2 flex flex-col gap-1 items-center">
                                <div className="w-full h-fit flex px-1 gap-4 items-center">
                                    <Image
                                        src={"/my_icon.svg"}
                                        alt="icon" 
                                        width={100}
                                        height={100}
                                        className="my-2 rounded-xl bg-zinc-300/80 w-20 dark:bg-zinc-200/90"
                                    />
                                    <div className="flex flex-col gap-2 items-start">
                                        <IconAndStr>
                                            <LiaGrinSolid
                                                size="1.6rem"
                                                className="mt-[0.1rem] inline fill-icon"
                                            />
                                            <span className="text-2xl font-mplus tracking-tight">
                                                久保 陽生
                                            </span>
                                        </IconAndStr>
                                        <div className="flex gap-1 items-center">
                                            <BiLogoTypescript size="1.9rem" className="inline fill-icon" />
                                            <BiLogoReact size="1.9rem" className="mt-[0.1rem] inline fill-icon" />
                                            <TbBrandNextjs size="1.9rem" className="inline stroke-icon" />
                                            <BiLogoPython size="1.9rem" className="inline fill-icon" />
                                            <SiLangchain size="1.9rem" className="inline fill-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col px-4 gap-0 items-start text-lg tracking-tight font-mplus">
                                    <p>
                                        PythonやWeb制作、AIについて
                                        <br />
                                        学んでいます。
                                    </p>
                                    <p>趣味はお菓子作りです。</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-5 items-center">
                        <SectionTitle title="Works" />
                        <Card>
                            <div className="w-full h-full px-3 py-2 flex flex-col gap-1 items-center justify-center">
                                <span>準備中...</span>
                            </div>
                        </Card>
                    </div>
                    <Button href="/">
                        more
                    </Button>
                </section>
                <section>
                    <div className="flex flex-col gap-5 items-center">
                        <SectionTitle title="Blog" />
                        <Card>
                            <div className="w-full h-full px-3 py-2 flex flex-col gap-1 items-center justify-center">
                                <span>準備中...</span>
                            </div>
                        </Card>
                    </div>
                    <Button href="/">
                        more
                    </Button>
                </section>
            </div>
        </div>
    );
}

export default Page;
