/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#80A4A9",
        sec: "#39393A",
      },
    },
  },
  plugins: [],
};
