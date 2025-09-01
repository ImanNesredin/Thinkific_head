/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    container: {
      center: false,
      padding: '0',
    },
    screens: {
      sm: '410px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
        colors: {
            LightWhite: 'rgb(233, 232, 233)',
            WaterWhite: 'rgba(233, 232, 233, 0.2)',
            LightGray: 'rgb(232, 230, 225)',
            Yellow: 'rgb(252, 204, 24)',
            DarkGray: 'rgb(113, 106, 92)',
            WaterBlack: 'rgba(0, 0, 0, 0)',
            LightBlack: 'rgb(39, 21, 38)',
          },
    },
  },
  plugins: [],
}
