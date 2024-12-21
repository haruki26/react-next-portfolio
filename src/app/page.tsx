const Page = () => {
    return (
        <div>
            <div className="h-screen p-2">
                <div className="w-full flex flex-col gap-10 px-4 py-8">
                    <h1 className="text-7xl text-center after:block after:mt-3 after:mx-auto after:h-[1px] after:w-[19rem] after:bg-slate-800/70">
                        Welcome!
                    </h1>
                    <p className="text-2xl">
                        This is a simple Next.js app with Tailwind CSS.
                    </p>
                    <p
                    className="text-xl text-center
                                after:block after:h-5 after:w-5 after:mx-auto after:mt-7
                                after:border-b-[1.5px] after:border-r-[1.5px] after:border-black after:transform after:rotate-45">
                        Scroll down to see more content.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;
