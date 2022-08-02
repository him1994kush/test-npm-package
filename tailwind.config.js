/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "1536px", max: "1980px" },
        "4xl": { min: "1537px", max: "3180px" },
      },
    },
  },
  plugins: [],
};
