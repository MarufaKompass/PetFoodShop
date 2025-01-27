/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  daisyui: {
    themes: ["white"],
  },
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        textCategory: "13px",
        textTitle: "16px",
      },
      colors: {
        gray: "rgb(115, 115, 115)",
        heading: "#161616",
        primary: "#e59142",
        textColor: "#08284a",
        badgeHot: "#FF0000",
        badgeGreen: "#008000",
        footerText:'#939393'
      },

      screens: {
        xs: "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
