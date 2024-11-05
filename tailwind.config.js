/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "pale-navy": "#36384d",
      "dark-navy": "#242742",
      "vermillion": "#ff6155",
      "grey": "#19182b",
      "gradient1-start": "#ff6a3a",
      "gradient1-stop": "#ff527b"
    },
    extend: {},
  },
  plugins: [],
}