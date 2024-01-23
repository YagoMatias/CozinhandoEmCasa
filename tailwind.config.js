/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgcard: 'rgba(100, 38, 32, 0.46)',
      },
    },
  },
  plugins: [],
};
