import { cn } from "@/libs/utils";


type Props = {
    isOpen: boolean;
    handleOpen: () => void;
}

const HamburgerBtn: React.FC<Props> = ({ isOpen, handleOpen }) => {
    return (
        <button type="button" className="flex flex-col h-fit gap-2" onClick={handleOpen}>
            <span className={cn(
                "w-8 h-0.5 bg-black transition duration-500 ease-in-out",
                "dark:bg-zinc-400",
                isOpen && "translate-y-2.5 rotate-45",
            )}/>
            <span className={cn(
                "w-8 h-0.5 bg-black transition duration-500 ease-in-out",
                "dark:bg-zinc-400",
                isOpen && "opacity-0",
            )}/>
            <span className={cn(
                "w-8 h-0.5 bg-black transition duration-500 ease-in-out",
                "dark:bg-zinc-400",
                isOpen && "-translate-y-2.5 -rotate-45",
            )}/>
        </button>
    );
}

export default HamburgerBtn;
