/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#722F37',
          dark: '#58232a',
        },
        accent: {
          DEFAULT: '#D4AF37',
          dark: '#b5952c',
        },
        surface: '#F8F9FA',
      },
    },
  },
  plugins: [],
}