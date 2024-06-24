/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inika: ["Inika", "serif"],
        karla: ["Karla", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
