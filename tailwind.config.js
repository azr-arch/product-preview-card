/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: { max: "580px" },
      smm: { max: "430px" },
    },
    fontFamily: {
      monte: "'Montserrat'",
      fraunces: "'Fraunces'",
    },

    extend: {},
  },
  plugins: [],
};
