/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
       screens: {
      'sw1275': '1275px',    // @media (min-width: 640px)
      'laptop': '1024px',   // @media (min-width: 1024px)
      'desktop': '1280px',  // @media (min-width: 1280px)
      // You can name them anything
      'xs': '400px',        // custom breakpoint
      '3xl': '1600px',      // custom large breakpoint
    },
    },
  },
  plugins: [],
};
