import clsx from "clsx";
import Button from "../Button";
import Input from "./Input";
import TextArea from "./TextArea";


const ContactForm: React.FC = () => {
    return (
        <form className={clsx(
            "mx-auto mb-2 w-80 h-fit rounded-lg p-5 bg-zinc-100/75 dark:bg-zinc-900/75",
            "shadow-lg shadow-slate-800/20 dark:shadow-slate-100/20",
            "sm:w-96 md:w-[30rem]",
        )}>
            <div className="flex flex-col gap-7">
                <div className="w-full flex gap-1 flex-col sm:flex-row sm:gap-3">
                    <Input target="FirstName" />
                    <Input target="LastName" />
                </div>
                <Input target="eMail" />
                <TextArea target="Message" />
                <Button type="submit" className="w-32 h-12 mx-auto mt-5 mb-3 before:translate-x-[4px] before:-translate-y-[4px]">
                    <div className="w-full h-full flex justify-center items-center">
                        <span className="font-roboto text-xl text-slate-200">Submit</span>
                    </div>
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
