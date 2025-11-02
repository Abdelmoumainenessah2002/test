import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        mushrifOrange: "#f97316",
        mushrifRed: "#ef4444",
        mushrifYellow: "#eab308",
        mushrifBlue: "#4AC4B6",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        arabic: ["var(--font-noto-kufi-arabic)", "Noto Kufi Arabic", "sans-serif"],
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

