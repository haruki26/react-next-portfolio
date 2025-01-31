import { LiaGrinSolid } from "react-icons/lia";
import Hero from "@/components/Hero";
import IconAndStr from "@/components/IconAndStr";



type Props = {
    children: React.ReactNode;
};

const AboutLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col gap-4 px-5 sm:px-0">
            <Hero>
                <IconAndStr className="gap-3">
                    <LiaGrinSolid size="3.7rem" />
                    <h1 className="font-roboto text-6xl">About</h1>
                </IconAndStr>
            </Hero>
            {children}
        </div>
    );
};

export default AboutLayout;
