/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat : "'Montserrat', sans-serif",
        martel: "'Martel', serif",
        cabin: "'Cabin', sans-serif",
      },
      colors:{
        color1: "#EBEAE6"
      }
    },
  },
  plugins: [],
}
