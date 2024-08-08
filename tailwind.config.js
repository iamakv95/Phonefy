/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
        screens: {
          xl: "1360px",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        "28px": "1.8rem",
        "14px": "0.95rem",
        "18px": "1.1rem",
        "32px": "2rem",
        "11px": ".72rem",
        "12px": ".77rem",
        "12px": ".85rem",
        "24px": "1.5rem",
        "50px": "3.3rem",
      },
      colors: {
        black: "#1d2128",
        gray: "#7c818b",
        hoverRed: "#ff311c",
        red: "#ff3636",
        button: "#FF5951",
        accent: "#fedfdc",
      },
      boxShadow: {
        "custom-black": "0 2px 6px 0 rgba(0,0,0,.16)",
        "hover-black": "0 4px 8px 0 rgba(0, 0, 0, .16);",
        "custom-red": "0 2px 6px 0 rgba(255, 89, 81, .4)",
      },
    },
  },
  plugins: [],
};
