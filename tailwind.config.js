/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#091156",
        secondary: "#8B8B8B",
        pink: "#FF64AE",
        text1: "#D8DCFF",
        "icon-color": "#A2A2A8",
        white: "#FFFFFF",
        black: "#000",

      },
      boxShadow: {
        sdprimary: "0px 25px 50px 25px #F6F7FF",
        sdsecondary: "0px 6px 12px 10px #F6F7FF",
        sdbutton: "0px 17px 22px 0px #FFEDF6",
        sdimg: "0px 0px 50px 25px #FFF",
      },
      screens: {
        'sm': { 'max': '767px' },
        // => @media (max-width: 767px)

        'md': { 'min': '768px', 'max': '1024px' },
        // => @media (min-width: 768px and max-width: 1023px)
        'md_max': { 'max': '1264px' },
        // => @media ( max-width: 1264px)
        'lg': { 'min': '1265px', },
        // => @media (min-width: 1024px ) 
        'max': { 'min': '1441px' },
        // => @media ( min-width: 1441px)
      }
    },
  },
  plugins: [],
  keyframes: {
    spinner: {
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
};