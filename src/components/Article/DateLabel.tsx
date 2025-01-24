import { formatDate } from "@/libs/utils";
import { IoTimeOutline } from "react-icons/io5";

type Props = {
    date: string;
};

const DateLabel: React.FC<Props> = ({ date }) => {
    return (
        <div className="flex items-center justify-center gap-1 h-fit">
            <IoTimeOutline size={"1.2rem"} />
            <span className="text-md tracking-tighter pb-px">{formatDate(date)}</span>
        </div>
    );
};

export default DateLabel;
