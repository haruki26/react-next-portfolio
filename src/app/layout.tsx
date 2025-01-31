import type { Metadata } from "next";
import { Roboto_Serif, M_PLUS_1p } from "next/font/google";

import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";
import { ThemeProvider } from "@/components/theme-provider";
import { SideMenuProvider } from "@/components/sidemenu-provider";
import TopBackBtn from "@/components/TopBackBtn";


const roboto = Roboto_Serif({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
    preload: true,
});

const mplus = M_PLUS_1p({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-mplus",
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "Haruki's Portfolio",
    description: "ポートフォリオサイトです。今までの作品や学びをブログ形式でまとめています。",
    openGraph: {
        title: "Haruki's Portfolio",
        description: "ポートフォリオサイトです。今までの作品や学びをブログ形式でまとめています。",
        locale: "ja_JP",
        url: "https://react-next-portfolio-iota.vercel.app/",
        siteName: "Haruki's Portfolio",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${roboto.variable} ${mplus.variable} h-full min-h-dvh w-full m-0 flex flex-col`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    storageKey="theme"
                >
                    <SideMenuProvider>
                        <header className="sticky top-0 left-0 z-50">
                            <NavBar />
                        </header>
                        <SideMenu />
                    </SideMenuProvider>
                    <main className="h-fit px-2 py-3 grow flex flex-col">
                        {children}
                    </main>
                    <footer className="w-full h-fit pt-8">
                        <Footer />
                    </footer>
                    <TopBackBtn />
                </ThemeProvider>
            </body>
        </html>
    );
}
