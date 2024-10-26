/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        window: "1080px",
        header: "10%",
      },
      width: {
        window: "1920px",
      },
    },
  },
  plugins: [],
};
