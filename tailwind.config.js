/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      pink: '#FEC3A6',
      yellow: '#EFE9AE',
      orange: {
        light: '#FEC3A6',
        DEFAULT:'#FFAC81'
      },
      red: '#FF928B',
      white: '#ffffff',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'wix': ['"Wix Madefor Display"', 'sans-serif']
      }
    },
  },
  plugins: []
}

