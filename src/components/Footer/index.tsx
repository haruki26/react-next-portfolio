import { cn } from "@/libs/utils";

const Footer: React.FC = () => {
    return (
        <div className={cn(
            "h-16 w-full px-3 py-2 bg-zinc-100/75 shadow-lg shadow-slate-800/20",
            "dark:bg-zinc-900/75 dark:shadow-slate-100/20",
        )}>
            <div className="h-full flex justify-center items-center">
                <span className="text-lg font-bold">© 2021 My Portfolio</span>
            </div>
        </div>
    );
}

export default Footer;
