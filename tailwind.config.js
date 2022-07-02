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
        ash:'#95A5A6'
      },
      backgroundImage:{
        'hero-picture':"url('/images/netflix.jpg')"
      }
    },
  },
  plugins: [],
}
