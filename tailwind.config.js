/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#39D2BE", dark: "#2AA596" }, // mintgroen
        accent: { DEFAULT: "#F59E0B" },                 // oranje
        base:   { DEFAULT: "#0A1220" }                  // donkerblauw
      },
      borderRadius: { xl: "1rem" }
    }
  },
  plugins: []
};
