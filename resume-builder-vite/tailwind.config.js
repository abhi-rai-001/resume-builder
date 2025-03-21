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
          100: '#E6F7FF',
          200: '#BAE7FF',
          300: '#91D5FF',
          400: '#69C0FF',
          500: '#40A9FF',
          600: '#1890FF',
          700: '#096DD9',
          800: '#0050B3',
          900: '#003A8C',
        },
        secondary: {
          50: '#F8F9FA',
          100: '#F9F9FA',
          200: '#F4F4F5',
          300: '#E4E4E7',
          400: '#D4D4D8',
          500: '#A1A1AA',
          600: '#71717A',
          700: '#52525B',
          800: '#27272A',
          900: '#18181B',
        },
      },
    },
  },
  plugins: [],
};