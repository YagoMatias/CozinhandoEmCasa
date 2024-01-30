/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgcard: 'rgba(100, 38, 32, 0.46)',
        bgcardHover: 'rgba(140, 77, 71, 0.46)',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        slideDivs: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.4s linear',
        slideDivs: 'slideDivs 0.2s linear',
      },
    },
  },
  plugins: [],
};
