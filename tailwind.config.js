import colors from 'tailwindcss/colors'

// const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Quicksand": ["Quicksand", "sans-serif"],
        "Noto": ["Noto Color Emoji", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    require('tailwindcss-themer')({
      defaultTheme:{
        extend:{
          colors:{
            "primary": colors.lime,
            "secondary": colors.sky
          }
        }
      },
      themes:[
        {
          name:"neutral",
          extend:{
            colors:{
              "primary": colors.blue,
              "secondary": colors.neutral
            }
          }
        },
        {
          name:"slate",
          extend:{
            colors:{
              "primary": colors.cyan,
              "secondary": colors.slate
            }
          }
        },
        {
          name:"gray",
          extend:{
            colors:{
              "primary": colors.cyan,
              "secondary": colors.gray
            }
          }
        },
        {
          name:"amber",
          extend:{
            colors:{
              "primary": colors.green,
              "secondary": colors.amber
            }
          }
        },
        {
          name:"sky",
          extend:{
            colors:{
              "primary": colors.lime,
              "secondary": colors.sky
            }
          }
        }
      ]
    }),
  ],
}