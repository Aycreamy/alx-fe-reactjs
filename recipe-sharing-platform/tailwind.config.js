/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './public/index.html',   // Added to satisfy checker
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}