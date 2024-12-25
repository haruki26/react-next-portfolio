const paths = ["/", "/work", "/contact", "/blog", "/"];

export const usePathFormat = (path: string): string | null => {
    if (path === "/") return "/";

    paths.forEach((p) => {
        if (path.includes(p)) return p;
    });

    return null;
}