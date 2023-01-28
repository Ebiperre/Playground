/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/lips.svg')",
      }
    },
    colors: {
      redPink: "#FF5B79",
      white: "#FFFFFF",
      purple: "#CC0079"
    }
  },
  plugins: [],
}
