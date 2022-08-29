/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B2E9C3',
        'secondary': '#F7F7F7',
        'background': '#f5fcff',
      },
      backgroundImage: {
        'header-img': "url('assets/images/background/cabecera.png')",
      }
    },
  },
  plugins: [],
}
