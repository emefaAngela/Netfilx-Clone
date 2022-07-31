/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' ],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        red:'#E50914',
        ash:'#95A5A6',
        tile:'rgb(48,48,48)',
        break:'#222222'
      },
      backgroundImage:{
        'hero-picture':"url('/images/netflix.jpg')"
      },
      fontFamily:{
        body:["'Bebas Neue',cursive"]
      }
    },
  },
  plugins: [],
}
