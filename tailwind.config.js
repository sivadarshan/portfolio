/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend:{
    fontFamily: {
      'display': 'Oswald',
      'body': '"Open Sans"',
      'burtons':'burtons',
    },
  },
  },
  plugins: [],
}
