/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        stix: ['STIX Two Text', 'serif'],
        clash: ['Clash Display Variable Bold', 'serif'],
        bellefair: ['Bellefair', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        basker: ['Baskervville', 'serif']
      }
    },
  },
  plugins: [],
}
