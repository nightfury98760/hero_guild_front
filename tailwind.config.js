/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'full': '100% 100%'
      },
      colors: {
        'purple-thin': '#ab7fe8',
        'purple-normal': '#7d0ab9',
        'purple-hard': '#361161',
        'white-normal': '#fff4e0',
        'yellow-normal': '#fffa89',
        'amber-text': '#9c4b23',
        'amber-text-light': '#ba7b32',
        'green-text': '#2e8250',
        'green-price': '#13743a'
      },
      fontFamily: {
        custom: ['CustomFont', 'sans-serif']
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
