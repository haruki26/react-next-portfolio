import Card from "../Card";

type Props = {
    children: React.ReactNode;
}

const CardStack: React.FC<Props> = ({
    children,
}) => {
    return (
        <div className="grid grid-rows-3 gap-4">
        </div>
    );
}

export default CardStack;
