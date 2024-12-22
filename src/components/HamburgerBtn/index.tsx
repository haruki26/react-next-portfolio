type Props = {
    isOpen: boolean;
    handleOpen: () => void;
}

const HamburgerBtn: React.FC<Props> = ({ isOpen, handleOpen }) => {
    return (
        <button type="button" className="flex flex-col gap-2" onClick={handleOpen}>
            <div className={
                `w-8 h-0.5 bg-black transition duration-500 ease-in-out ${isOpen && "translate-y-2.5 rotate-45"}`
            }/>
            <div className={
                `w-8 h-0.5 bg-black transition duration-500 ease-in-out ${isOpen && "opacity-0"}`
            }/>
            <div className={
                `w-8 h-0.5 bg-black transition duration-500 ease-in-out ${isOpen && "-translate-y-2.5 -rotate-45"}`
            }/>
        </button>
    );
}

export default HamburgerBtn;
