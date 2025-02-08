import Image from "next/image";

import { LiaAddressCardSolid } from "react-icons/lia";
import { PiCakeLight } from "react-icons/pi";
import { TbBrandNextjs, TbUserHeart } from "react-icons/tb";
import { BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiLangchain } from "react-icons/si";

import IconAndStr from "@/components/IconAndStr";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";


const Page: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <section>
                <div className="flex flex-col gap-10 items-center md:gap-16">
                    <SectionTitle title="Profile" />
                    <div className="flex sm:gap-20 justify-center items-center">
                        <Image
                            src={"/avatar.png"}
                            alt="Avatar"
                            width={621}
                            height={900}
                            className="h-80 w-fit hidden sm:block"
                        />
                        <div className="flex flex-col gap-4 sm:gap-8 items-center">
                            <IconAndStr className="gap-5">
                                <LiaAddressCardSolid size="3.3rem" />
                                <div className="flex flex-col gap-1 justify-center items-center">
                                    <span className="text-2xl font-mplus font-medium tracking-tight">久保 陽生</span>
                                    <span className="text-lg font-roboto font-medium tracking-tight">Kubo Haruki</span>
                                </div>
                            </IconAndStr>
                            <IconAndStr className="gap-5">
                                <PiCakeLight size="2.7rem" />
                                <span className="text-3xl font-roboto font-medium tracking-tight">8/26</span>
                            </IconAndStr>
                            <IconAndStr className="gap-5">
                                <TbUserHeart size="2.6rem" />
                                <div className="flex flex-col gap-px justify-center items-center">
                                    <span className="text-xl font-roboto font-medium tracking-tight">ISTP-T</span>
                                </div>
                            </IconAndStr>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start text-lg font-mplus tracking-tight">
                        <p>
                            京都デザイン&テクノロジー専門学校で
                            <br className="md:hidden" />
                            PythonやWeb制作、AIについて学んでいます。
                        </p>
                        <p>
                            高校在学時は電子工作に取り組んでいました。
                            <br />
                            専門学校に入学後は特にWeb制作に興味を持っています。
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col gap-10 items-center md:gap-16">
                    <SectionTitle title="Skils" />
                    <div className="grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1">
                        <Card className="flex flex-col gap-4 items-center px-2 py-3">
                            <h2 className="text-2xl font-mplus font-medium tracking-tight">Studying</h2>
                            <div className="flex gap-4">
                                <BiLogoTypescript size="3.5rem" color="#3178c6" />
                                <BiLogoReact size="3.5rem" color="#61dafb" />
                                <BiLogoTailwindCss size="3.5rem" color="#06b6d4" />
                                <TbBrandNextjs size="3.5rem" className="stroke-black dark:stroke-white" />
                            </div>
                            <div className="flex gap-4">
                                <BiLogoPython size="3.5rem" color="#306998" />
                                <SiLangchain size="3.5rem" className="fill-black dark:fill-white" />
                            </div>
                        </Card>
                        <Card className="flex flex-col gap-4 items-center px-2 py-3">
                            <h2 className="text-2xl font-mplus font-medium tracking-tight">Certification</h2>
                            <ul className="text-xl tracking-tight flex flex-col gap-1 items-start">
                                <li className="font-mplus">基本情報技術者</li>
                                <li className="font-roboto">AZ-900 / AI-900 / DP-900</li>
                            </ul>
                            <span className="text-lg font-roboto font-medium tracking-tight pt-3">応用情報に挑戦したいです</span>
                        </Card>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col gap-10 items-center md:gap-16">
                    <SectionTitle title="Hobby" />
                    <div className="flex flex-col gap-4 items-center">
                        <Card className="flex flex-col gap-4 items-center px-2 py-3">
                            <h2 className="text-2xl font-mplus font-medium tracking-tight">Baking</h2>
                            <p className="text-lg font-mplus tracking-tight">
                                お菓子作りが好きです
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    src={"/tart.webp"}
                                    alt="tart"
                                    width={1024}
                                    height={1024}
                                    className="rounded-xl h-32 w-32 sm:h-40 sm:w-40"
                                />
                                <Image
                                    src={"/bushdenoel.webp"}
                                    alt="bushdenoel"
                                    width={961}
                                    height={961}
                                    className="rounded-xl h-32 w-32 sm:h-40 sm:w-40"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
