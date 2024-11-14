/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        cap : ['campton-light (otf)'],
        mon : ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-navy': '#1e3a8a', // Customize with the actual navy color you want
        'primary-turquoise': '#0fb9b1', // Customize with the actual turquoise color you want
        'primary-lightgreen': '#34d399', // Customize with the actual light green color you want
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
