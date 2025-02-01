import Image from "next/image"

import { BiLogoTypescript, BiLogoReact, BiLogoPython } from "react-icons/bi"
import { LiaGrinSolid } from "react-icons/lia"
import { SiLangchain } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

import Card from "../Card"
import IconAndStr from "../IconAndStr"
import Link from "next/link"
import Arrow from "../Arrow"


const SelfIntroduceCard: React.FC = () => {
    return (
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
                                className="mt-[0.1rem] inline fill-card-foreground"
                            />
                            <span className="text-2xl font-mplus tracking-tight">
                                久保 陽生
                            </span>
                        </IconAndStr>
                        <div className="flex gap-1 items-center">
                            <BiLogoTypescript size="1.9rem" className="inline fill-card-foreground" />
                            <BiLogoReact size="1.9rem" className="mt-[0.1rem] inline fill-card-foreground" />
                            <TbBrandNextjs size="1.9rem" className="inline stroke-icon" />
                            <BiLogoPython size="1.9rem" className="inline fill-card-foreground" />
                            <SiLangchain size="1.9rem" className="inline fill-card-foreground" />
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
                <Link href="/about" className="ml-auto pl-2 pr-3 py-0 pb-1 border-2 border-muted rounded-md">
                    <Arrow>
                        <span className="text-xl">more</span>
                    </Arrow>
                </Link>
            </div>
        </Card>
    )
}

export default SelfIntroduceCard;
