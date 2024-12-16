/** @type {import('tailwindcss').Config} */

import animations from './animations.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boogaloo: ['Boogaloo', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#AE5929",  
        secondary: "#FFEFEB", 
        background: "#020202",
      },

      keyframes: {
        ...animations.keyframes, 
      },
      
      animation: {
        ...animations.animation,
      },

    },
  },
  plugins: [],
}
