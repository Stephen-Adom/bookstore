/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0290ff',
        paleBlue: '#4386bf',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
