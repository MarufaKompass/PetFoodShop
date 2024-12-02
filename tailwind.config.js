/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui: {
    themes: ["white"],
  },
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'gray': 'rgb(115, 115, 115)', 
        'heading': '#000000'
      },
    },
  },
  plugins: [ require('daisyui'),],
}

