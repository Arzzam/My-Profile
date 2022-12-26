/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgimage: "#185a9d",
      bgGra1: "#43cea2",
      bgGra2: "#185a9d",
    },
    minHeight: {
      own: "24em",
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    spacing: {
      "1/2": "50%",
      "300px": "300px",
      "30px": "30px",
    },
    extend: {},
  },
  plugins: [],
};
