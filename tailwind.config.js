const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {   
    extend: {
      colors: {
        blueLight: '#009fe3',
        blueDark: '#0059a7',
        greenDark: '#264653',
        greenLight: '#2a9d8f',
        blueLight2: '#34BAAB',
        orangeLight: '#f4a261',
        orangeDark: '#e76f51',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
