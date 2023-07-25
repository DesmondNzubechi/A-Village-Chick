/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fonty': ['Foldit', 'cursive'],
        'instrument': ['Instrument Serif', 'serif'],
        'serif': ['Nanum Myeongjo', 'serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
      colors:{
        'Tp' : 'rgba(0, 0, 0, .8)',
        'spin' : 'rgba(0, 0, 0, .96)',
        'bgT'  : 'rgba(0, 0, 0, .3)',
      }
    },
  },
  plugins: [],
}