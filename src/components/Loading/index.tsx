import clsx from "clsx";

const commonStyle = "inline absolute w-[8px] h-[8px] bg-white rounded-full animate-switch-scaling"

const Loading: React.FC = () => {
    return (
        <div className="relative w-[40px] h-[40px] m-auto">
            <span className={clsx(commonStyle, "top-0 left-[16px]")} />
            <span className={clsx(commonStyle, "top-[5.7px] left-[26.5px] animation-delay-125")} />
            <span className={clsx(commonStyle, "top-[16px] left-[32px] animation-delay-250")} />
            <span className={clsx(commonStyle, "top-[26.14px] left-[26.5px] animation-delay-375")} />
            <span className={clsx(commonStyle, "top-[32px] left-[16px] animation-delay-500")} />
            <span className={clsx(commonStyle, "top-[26.14px] left-[5px] animation-delay-625")} />
            <span className={clsx(commonStyle, "top-[16px] left-0 animation-delay-750")} />
            <span className={clsx(commonStyle, "top-[5.7px] left-[5px] animation-delay-875")} />
        </div>
    );
}

export default Loading;
