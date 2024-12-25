"use client";

import { BiSolidArrowToTop } from "react-icons/bi";


const TopBackBtn: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="h-fit w-fit"
        >
            <BiSolidArrowToTop
                size={30}
                className="h-8 transition inline fill-white duration-500 hover:scale-110 hover:-translate-y-1"
            />
        </button>
    );
}

export default TopBackBtn;
