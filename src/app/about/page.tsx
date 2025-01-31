import Image from "next/image";
import IconAndStr from "@/components/IconAndStr";
import { LiaAddressCardSolid } from "react-icons/lia";
import { PiCakeLight } from "react-icons/pi";
import { TbUserHeart } from "react-icons/tb";
import SectionTitle from "@/components/SectionTitle";

const Page: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <section>
                <div className="flex flex-col gap-5 items-center md:gap-10">
                    <SectionTitle title="Profiel" />
                    <div className="flex md:gap-32 justify-center items-center">
                        <Image
                            src={"/avatar.png"}
                            alt="Avatar"
                            width={621}
                            height={900}
                            className="h-80 w-fit hidden md:block"
                        />
                        <div className="flex flex-col gap-8 items-center">
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
                </div>
            </section>
        </div>
    );
};

export default Page;
