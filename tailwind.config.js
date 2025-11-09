// Source - https://stackoverflow.com/a
// Posted by Danila, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-08, License - CC BY-SA 4.0

// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors,
        // or add them one by one and name whatever you want
        amber: colors.amber,
        emerald: colors.emerald,
        yellow: colors.yellow,
        'dark-red': '#991B1B',
      }
    }
  }
}
