const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    }
  },
  plugins: [],
}