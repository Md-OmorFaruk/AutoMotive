/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: "'Manrope', 'sans-serif'",
        font2: " 'Rancho', 'cursive'",
        font3: "'Young Serif', serif"
      }
    },
  },
  plugins: [require("daisyui")],
   themes: ["light", "dark", "cupcake"],
}

