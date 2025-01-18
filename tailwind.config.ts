import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
          start: "rgba(var(--background-start))",
          end: "rgba(var(--background-end))",
        },
        foreground: "rgba(var(--foreground))",
        muted: {
          DEFAULT: "rgba(var(--muted))",
          foreground: "rgba(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "rgba(var(--card-background))",
          foreground: "rgba(var(--card-foreground))",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        mplus: ["var(--font-mplus)"],
      },
      animation: {
        "floating-slow": "floating-slow 1.8s ease-in-out infinite alternate-reverse",
        "scale-in-center": "scale-in-center 1.5s ease-in-out",
        "fade-in-bottom": "fade-in-bottom 1.5s ease-in-out both",
        "slide-in-left": "slide-in-left 0.5s ease-in-out both",
        "slide-out-left": "slide-out-left 0.5s ease-in-out both",
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
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;
