import { formatDate } from "@/libs/utils";
import { IoTimeOutline } from "react-icons/io5";

type Props = {
    date: string;
};

const DateLabel: React.FC<Props> = ({ date }) => {
    return (
        <div className="flex items-center gap-2">
            <IoTimeOutline size={"1.2rem"} />
            <span>{formatDate(date)}</span>
        </div>
    );
};

export default DateLabel;
