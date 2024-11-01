/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        basic: ["Nanum Gothic", "sans-serif"],
        hightlight: ["Dongle", "sans-serif"],
      },
      height: {
        window: "1080px",
        header: "13%",
        login: "620px",
        post: "500px",
      },
      width: {
        window: "1920px",
        login: "450px",
        post: "840px",
        join: "400px",
      },
      backgroundColor: {
        basic: "#DCF2F1",
        highlight: "#20cbd3",
      },
      textColor: {
        basic: "#DCF2F1",
        highlight: "#20cbd3",
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
