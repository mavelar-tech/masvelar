/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        text: "#454545",
        background: "#FDFCFC",
        primary: "#82B5B5",
        secondary: "#E8D8D8",
        accent: "#5B9999",
        dimWhite: "#EFEDEA"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        chakraPetch: ["Chakra Petch", "sans-serif"]
      },
    }
  },
  plugins: [],
};