/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81C408', //  green 
        secondary: '#FFB524', // orange
        accent: '#45595B', // gray
      },
    },
    
  },
  plugins: [],
}