/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        surface: '#131313',
        primary: '#aca3ff',
        secondary: '#45e26f'
      }
    }
  },
  plugins: []
}
