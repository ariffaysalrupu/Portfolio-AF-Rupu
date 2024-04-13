/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#353D3B",
        secondary: "#10D3A4",
      },
      fontFamily: {
        "cute-font": ['"Cute Font"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "cormorant-sc": ['"Cormorant SC"', "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
