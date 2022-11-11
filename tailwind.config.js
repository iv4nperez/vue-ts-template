/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        googleSans: ["google-sans"],
        publicSans: ["Public Sans"],
      },
      colors:{
        'blue-primary': '#1a73e8'
      }
    },
  },
  plugins: [],
}