/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#dbac2c",
          dark: "#c47f17",
          light: "#f1e9c9",
        },
        purple: {
          DEFAULT: "#8047f8",
          dark: "#4b2995",
          light: "#ebe5f9",
        },
        base: {
          text_dark: "#FAFAFA",
          title: "#272221",
          subtitle: "#403937",
          text: "#574f4d",
          label: "#8d8686",
          hover: "#d7d5d5",
          button: "#e6e5e5",
          input: "#ededed",
          card: "#f3f2f2",
          card_dark:"#BEB7DF",
        },
        background_dark: "#121214",
        background: "#fafafa",
        white: "#ffffff",
      },
      fontFamily: {
        baloo: ["'Baloo 2'", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
