import BackBtn from "./BackBtn";
import Content from "./Content";
import DateLabel from "./DateLabel";


type Props = {
    title: string;
    describe: string;
    html: string;
    date: {
        createdAt: string;
        updatedAt: string;
    };
}

const Article: React.FC<Props> = ({
    title,
    describe,
    html,
    date,
}) => {

    return (
        <div className="mx-auto flex flex-col gap-10 font-mplus justify-center items-center max-w-screen-md">
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-center font-bold">{title}</h1>
                <div className="flex gap-4 mx-auto">
                    <span className="tracking-tight">公開日</span>
                    <DateLabel date={date.createdAt} />
                </div>
                <p>{describe}</p>
            </div>
            <span className="inline-block w-full h-[0.7px] bg-slate-600 " />
            <Content html={html} />
            <div className="flex gap-4 mx-auto">
                <span className="tracking-tight">最終更新日</span>
                <DateLabel date={date.updatedAt} />
            </div>
        </div>
    )
}

export default Article;
