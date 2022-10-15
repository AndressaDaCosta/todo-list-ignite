/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',
      danger: '#e25858',

      gray: {
        700: '#0d0d0d',
        600: '#1a1a1a',
        500: '#262626',
        400: '#333333',
        300: '#808080',
        200: '#d9d9d9',
        100: '#f2f2f2',
      },

      blue: {
        300: '#4ea8de',
        500: '#1e6f9f'
      },
      purple: {
        300: '#8284fa',
        500: '#5e60ce'
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}