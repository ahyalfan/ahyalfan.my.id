/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-1': '#222831',
        'color-2': '#393E46',
        'color-3': '#00ADB5',
        'color-4': '#EEEEEE',
        'color-5': '#222831',
        'color-11': 'rgba(255,255,255,0)',
      },
      fontFamily: {
        inter: ['inter-black'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
