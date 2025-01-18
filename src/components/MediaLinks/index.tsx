import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";


const MediaLinks: React.FC = () => {
    return (
        <div className="flex gap-4">
            <a href="https://www.instagram.com/yousei_81" target="_blank">
                <IoLogoInstagram size={"2rem"} />
            </a>
            <a href="https://github.com/haruki26" target="_blank">
                <IoLogoGithub size={"2rem"} />
            </a>
        </div>
    );
};

export default MediaLinks;
