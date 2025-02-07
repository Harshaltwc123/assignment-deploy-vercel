/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ms: "300px",
        xs: "489px",
        sm: "660px",
        md: "780px",
        // lg: "1024px",
        // xl: "1280px",
      },
    },
    
  },
  plugins: [],
}