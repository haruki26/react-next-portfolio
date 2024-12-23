import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          start: "rgb(var(--background-start))",
          end: "rgb(var(--background-end))",
        },
        foreground: "rgb(var(--foreground))",
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        }
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
