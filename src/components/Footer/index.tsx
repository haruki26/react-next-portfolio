import { cn } from "@/libs/utils";
import type { IconSettings } from "../PageLinks";

import ThemeChangeBtn from "../ThemeChangeBtn";
import TopBackBtn from "../TopBackBtn";
import PageLinks from "../PageLinks";


const Footer: React.FC = () => {
    const iconSetting: IconSettings = {
        size: 28,
        className: cn(
            "fill-white",
        )
    };

    return (
        <div className={cn(
            "h-fit w-full px-3 py-4 bg-[#3e2723] text-[#f5f5dc] shadow-[0_-4px_9px_8px_rgba(0,0,0,0.18)]",
            "dark:bg-[#2e2e2e] dark:shadow-[0_-2px_10px_6px_rgba(221,221,221,0.18)]",
        )}>
            <div className="h-full flex flex-col gap-7 justify-center items-center">
                <div className="pl-6 flex gap-10 items-center">
                    <TopBackBtn />
                    <ThemeChangeBtn />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <PageLinks
                        icon={iconSetting}
                        className="gap-6"
                        horizontal
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
