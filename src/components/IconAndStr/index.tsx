import clsx from "clsx";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const IconAndStr: React.FC<Props> = ({
    children,
    className = "",
}) => {
    return (
        <div className={clsx(
            "w-fit h-fit flex items-center",
            className,
        )}>
            {children}
        </div>
    );
}

export default IconAndStr;
