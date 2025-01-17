import clsx from "clsx";


type Props = {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
    return (
        <button
            type="button"
            className={clsx(
                "h-16 w-52 bg-muted relative",
                "before:w-full before:h-full before:absolute before:top-0 before:left-0",
                "before:border-black before:border-[1.5px]",
                "before:transform before:translate-x-[6px] before:-translate-y-[6px]",
                "hover:before:translate-x-0 hover:before:translate-y-0",
                "before:transition before:duration-300",
                "dark:before:border-slate-300"
            )}
        >
            <label className={clsx(
                "w-full h-full absolute top-0 left-0",
                className
            )}>
                {children}
            </label>
        </button>
    );
}

export default Button;
