/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#ff7c08",
        "secondary":"#231f40",
        "bg-primary":"#EEF6EB"
      }
    },
  },
  plugins: [require("daisyui")],
}

