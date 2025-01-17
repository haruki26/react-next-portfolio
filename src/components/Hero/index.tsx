import { cn } from "@/libs/utils";


type Props = {
    children: React.ReactNode;
    describe?: string | null;
}

const Hero: React.FC<Props> = ({
    children,
    describe = null,
}) => {
    return (
        <div className={cn(
            "text-center pt-10 pb-12 w-full flex flex-col gap-7 items-center",
            "after:block after:mt-12 after:mx-auto after:h-px after:w-full after:bg-slate-800/70",
            "after:animate-scale-in-center after:max-w-screen-md",
            "sm:pt-24 sm:pb-28 sm:gap-12 sm:after:mt-24",
            "dark:after:bg-yellow-400/50",
        )}>
            {children}
            {describe && (
                <span className="font-mplus text-xl animate-fade-in-bottom sm:text-4xl">
                    {describe}
                </span>
            )}
        </div>
    );
}

export default Hero;
