import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      filter: ["hover", "focus"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      themes: {
        light: {
          colors: {
            background: "hsla(0, 0%, 93%, 1)",
            primary: {
              DEFAULT: "#831FC1",
              foreground: "#fff",
            },
            secondary: {
              DEFAULT: "#EAD3F8",
              foreground: "#000",
            },
          },
        },
        dark: {
          colors: {
            background:"#080D17" ,
            primary: {
              DEFAULT: "#FD7245",
              foreground: "#fff",
            },
            secondary: {
              DEFAULT: "#353535",
              foreground: "#fff",
            },
          },
        },
      },
    }),
  ],
};
