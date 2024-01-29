/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      custom : ['Rancho','cursive','Noto Serif Display',
    'serif','Kaushan Script','cursive','Inter','Cormorant Garamond','serif']
    }
  },
  plugins: [require("daisyui")],
}