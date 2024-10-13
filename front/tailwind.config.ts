import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFAF2",
        foreground: "var(--foreground)",
        customGreen: "rgba(19, 74, 33, 1)",
        customHover: "#DEBE48",
        customPLNTS: "#F35F0A", 
        customHoverPLNTS: "#9E1814",
        customText:"#134A21",
        customBG:"#FFFAF2",
        custombgclr:"#E7E3D9",
        customftrgrn:"#5E6846",
        customtextRed:"#C40000",
      },
      fontFamily: {
        'victor-serif': ['"Victor Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
