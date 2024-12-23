import clsx from "clsx";

type Props = {
    title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
    return (
        <h2 className={clsx([
            "w-full text-5xl flex items-center justify-center",
            "before:inline-block before:h-[1px] before:w-[1.5rem] before:bg-black before:mr-4 before:mt-[0.65rem]",
            "after:inline-block after:h-[1px] after:w-[1.5rem] after:bg-black  after:ml-4 after:mt-[0.65rem]",
        ])}>
            {title}
        </h2>
    );
}

export default SectionTitle;
