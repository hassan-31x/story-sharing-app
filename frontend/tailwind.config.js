/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#FB7C5B',
        'secondaryColor': '#4281A4',
        'lightOrange': '#efcfa8',
        'darkOrange': '#C64B16',
        'secondaryBlack': '#13293D'
      },
    }
  },
  plugins: [],
}