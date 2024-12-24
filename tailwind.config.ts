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
      screens: {
        "xs": "512px",
      },
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
        mplus: ["var(--font-mplus)"],
      },
      animation: {
        "floating-slow": "floating-slow 1.8s ease-in-out infinite alternate-reverse",
        "scale-in-center": "scale-in-center 1.5s ease-in-out",
        "fade-in-bottom": "fade-in-bottom 1.5s ease-in-out both",
      },
      keyframes: {
        "floating-slow": {
          "0%": {
            transform: "translateY(0.5rem)",
          },
          "100%": {
            transform: "translateY(-0.5rem)",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0) translateY(0.2rem)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) translateY(0)",
            opacity: "1",
          },
        },
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(0.5rem)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
