type Props = {
    children: React.ReactNode;
}

const IconAndStr: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-fit h-fit flex gap-1 items-center">
            {children}
        </div>
    );
}

export default IconAndStr;
