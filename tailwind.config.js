/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT:'15px'
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors:{
        primary:'#242a2b',
        secondary:'#808080',
        accent:{
          DEFAULT:'#1482C2',
          secondary:'#085E90',
          tertiary:'#51BCFB'
        },
        grey:'#e8f0f1',
      },
      fontFamily:{
        primary:'Poppins',
      },
      boxShadow:{
        custom1:'0px 2px 40px 0px rgba(8,70,78,0.08)',
        custom2:'0px 2px 30px 0px rgba(8,73,81,0.06)',
      },
      backgroundImage:{
        HeroBg: 'url(../../asset/BG.svg)',
        HeroBg_Mobile : 'url(../../asset/imej-hero-2.png)',
        Daftar_Bg: 'url(../../asset/bg-lari.jpg)',
      }
    },
  },
  plugins: [],
}

