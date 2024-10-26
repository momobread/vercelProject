/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      basic: ["Dongle", "sans-serif"],
    },
    extend: {
      height: {
        window: "1080px",
        header: "10%",
      },
      width: {
        window: "1920px",
      },
      fontSize: {
        main: "1.5rem",
      },
    },
  },
  plugins: [],
};
