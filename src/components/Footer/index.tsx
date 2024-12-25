import { cn } from "@/libs/utils";


const Footer: React.FC = () => {
    return (
        <div className={cn(
            "h-fit w-full px-3 py-2 bg-[#3e2723] text-[#f5f5dc] shadow-[0_-4px_9px_8px_rgba(0,0,0,0.18)]",
            "dark:bg-[#2e2e2e] dark:shadow-[0_-2px_10px_6px_rgba(221,221,221,0.18)]",
        )}>
            <div className="h-full flex justify-center items-center">
                <span className="text-lg font-bold">© 2021 My Portfolio</span>
            </div>
        </div>
    );
}

export default Footer;
