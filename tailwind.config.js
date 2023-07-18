/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Tp' : 'rgba(0, 0, 0, .8)',
        'bgT'  : 'rgba(0, 0, 0, .3)',
      }
    },
  },
  plugins: [],
}