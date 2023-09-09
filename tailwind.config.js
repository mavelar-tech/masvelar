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
      }
    },
    screens: {
      '2xs': {'min': '0px', 'max': '437px'},
      'xs': {'min': '438px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [],
};