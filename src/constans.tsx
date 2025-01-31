import { BiBookBookmark, BiBookContent, BiEnvelope, BiHome } from "react-icons/bi";
import { LiaGrinSolid } from "react-icons/lia";

export const PAGES = [
    {
        icon: <BiHome />,
        text: "Home",
        href: "/",
    },
    {
        icon: <LiaGrinSolid />,
        text: "About",
        href: "/about",
    },
    {
        icon: <BiBookBookmark />,
        text: "Works",
        href: "/works",
    },
    {
        icon: <BiBookContent />,
        text: "Blog",
        href: "/blog",
    },
    {
        icon: <BiEnvelope />,
        text: "Contact",
        href: "/contact",
    },
]

export const TOP_ARTICLE_NUM = 3;
