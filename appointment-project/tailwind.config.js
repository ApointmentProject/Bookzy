/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme
        lightPrimary: "hsl(11, 100%, 100%)",
        lightSecondary: "hsl(222, 35.7%, 11%)",
      },
    },
  },
  plugins: [],
};
