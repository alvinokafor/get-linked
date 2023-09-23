import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--clashDisplay-font)", "sans-serif"],
        body: ["var(--monteserrat-font)", "sans-serif"],
        mono: ["var(--unicaOne-font)", "sans-serif"],
        typo: ["var(--typoHoop-font)", "sans-serif"],
      },
      colors: {
        "body-bg": "#150E28",
        "footer-bg": "#100B20",
        primary: "#D434FE",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
        "timeline-gradient":
          "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
      },
      fontSize: {
        hero: "5rem",
        countdown: "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
