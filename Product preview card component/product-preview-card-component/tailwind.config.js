/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          "dark-cyan": "hsl(158, 36%, 37%)",
          "cream": "hsl(30, 38%, 92%)",
          "very-dark-cyan": "hsl(158, 35%, 20%)"
        },
        neutral: {
          "very-dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
          'white': "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        fraunces: ["Fraunces", ...defaultTheme.fontFamily.sans],
      },
      //   backgroundImage: {
      //     'img-product-desktop': "url('/images/image-product-desktop.jpg')",
      //     'img-product-mobile': "url('/images/image-product-mobile.jpg')",
      // }
    },
  },
  plugins: [],
};
