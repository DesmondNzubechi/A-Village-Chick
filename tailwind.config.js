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
       // 'poppins' : ['Poppins', 'sans-serif'],
        'courier' : ['Courier Prime', 'monospace'],
         'poppins': ['Spectral', 'serif']
      },
      colors:{
        'Terracotta' : '#945D60',
        'Herb' : '#626E60',
        'Chilli' : '#AF473C',
        'Charcoal': '#3C3C3C',
        'Tp' : 'rgba(0, 0, 0, .8)',
        'spin' : 'rgba(0, 0, 0, .96)',
        'bgT'  : 'rgba(0, 0, 0, .3)',
        'tpr'  : 'rgba(250, 250, 250, .8)',
      }
    },
  },
  plugins: [],
}