import clsx from "clsx";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Arrow: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={clsx(
            "after:inline-block after:w-[1.5rem] after:h-[0.4rem] after:ml-2 after:my-auto after:pr-1",
            "after:border-solid after:border-b-[2px] after:border-r-[2px] after:border-muted",
            "after:skew-x-[45deg] after:transition after:duration-300 hover:after:translate-x-[3px]",
            className,
        )}>
            {children}
        </div>
    );
}

export default Arrow;
