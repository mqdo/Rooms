/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(400px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide 0.5s ease-in'
      }
    },
    colors: {
      transparent: 'transparent',
      primary: {
        200: '#E5BC8D',
        400: '#E5BC8D',
        700: '#6D3C02',
      },
      secondary: {
        200: '#364067',
        400: '#232F5D',
        700: '#19244D',
      },
      accent: {
        200: '#F0F389',
        400: '#FAFF70',
        700: '#E2EA00',
      },
      white: '#FFFFFF',
      gray: {
        50: '#F4F4F5',
        100: '#DFDFE2',
        200: '#C9C9CF',
        300: '#B3B3BC',
        400: '#9E9EA9',
        500: '#7D7D8C',
        600: '#60606C',
        700: '#43434C',
        900: '#31313B',
      },
      black: '#1E1E1E',
      success: '#20A39E',
      error: '#EF5B5B',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Abril Fatface', 'serif'],
    },
  },
  plugins: [],
};
