/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      screens: {
        aboutmb: "767px",

        mobileabout: "1220px",

        about: "1550px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
};
