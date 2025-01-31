import { cn } from "@/libs/utils";


type Props = {
    title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
    return (
        <h2 className={cn(
            "w-full flex items-center justify-center",
            "before:inline-block before:h-[0.4px] before:w-[1.2rem] before:bg-black before:mr-3 before:mt-[0.12rem]",
            "after:inline-block after:h-[0.4px] after:w-[1.2rem] after:bg-black  after:ml-3 after:mt-[0.12rem]",
            "dark:before:bg-white dark:after:bg-white",
        )}>
            <span className="font-roboto text-3xl font-medium tracking-tighter md:text-5xl">
                {title}
            </span>
        </h2>
    );
}

export default SectionTitle;
