/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
        "2md": "850px",
        "3xl": "1700px",
      },
      spacing: {
        sectionGapXl: "16rem",
        sectionGapLg: "11rem",
        sectionGapMd: "7.5rem",
        sectionGapSm: "4rem",
        elementGapSm: "1.7rem",
        elementGapMd: "3rem",
        elementGapLg: "5rem",
        headerGapSm: "1rem",
        headerGapMd: "3rem",
      },
      boxShadow: {
        large: "0 10px 60px -5px rgba(0,0,0,0.3)",
        medium: "0 5px 40px -5px rgba(0,0,0,0.25)",
      },
      transitionDuration: {
        default: "150ms",
      },
      colors: {
        primary: "#56ab2f",
        secondary: "#a8e063",
        primaryDark: "#458926",
        primaryLight: "67b344",
        primaryLightest: "#bbddac",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#f5f5f5",
        lightBorder: "#ddd",
      },
      fontFamily: {
        default: "'Poppins', sans-serif",
      },
      borderRadius: {
        default: "5px",
        defaultLg: "10px",
      },
    },
  },
  plugins: [],
};
