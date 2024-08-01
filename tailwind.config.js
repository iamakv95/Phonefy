/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
        },
        screens: {
          xl: '1360px',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '28px': '1.8rem', 
        '14px': '0.95rem', 
        '18px': '1.1rem', 
        '32px': '2rem',
        '11px': '.70rem',
        '13px': '.79rem',
        '24px' : '1.5rem'
      },
      colors:{
        'black':'#1d2128',
        'gray':'#7c818b',
        'red':'#ff311c',
        'orange':'#ff7316',
        'button':'#FF5951',
        'accent' : '#ff331c1f',
      }
    },
  },
  plugins: [],
}

