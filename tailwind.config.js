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
        header: "13%",
        login: "620px",
      },
      width: {
        window: "1920px",
        login: "450px",
      },
      fontSize: {
        main: "1.5rem",
      },
      translate: {
        login: "-50%",
      },
    },
  },
  plugins: [],
};
