/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        'secundary-light-bg': '#F1F1F1',
      },
    },
  },
  plugins: [],
};
