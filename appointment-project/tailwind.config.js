/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merryweather: ["Merryweather", "serif"],
      },
      colors: {
        // Light Theme
        lightPrimary: "hsl(11, 00%, 100%)",
        lightSecondary: "hsl(222, 35.7%, 11%)",
        'main-dark-bg': '#181818',
        'secundary-dark-bg': '#262626',
        'main-light-bg': '#FFFFFF',
        'secundary-light-bg': '#F9F9F9',
        //'secundary-light-bg': '#F1F1F1',
      },
    },
  },
  plugins: [],
});