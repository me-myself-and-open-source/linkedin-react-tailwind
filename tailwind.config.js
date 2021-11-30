module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'vote': 'vote .2s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
