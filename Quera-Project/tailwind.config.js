/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height:{
        'registerh':"486px",
        "bgh":"60vh",
        "checkh":"13px"


      },
      width:{
        'registerw':"402px",
        "inputW":"354px",
        "checkw":"5px",
        "23":"95px"
      }
      ,
      ringColor:{
        "check":"#B4DFDF"
      }
      ,
      borderColor:{
        "inputBorder":"#AAAAAA",
        "submitColor":"#208D8E",
        "check":"#B4DFDF",
        "mark":"#208D8E",
        "uncheck":"#999999"
        
      },
      backgroundColor:{
        "submitColor":"#208D8E",
        "check":"#B4DFDF"
        
      },
      borderRadius:{
        "registerRad":"20px"
      },
      boxShadow:{
        "registerShadow":"0px 12px 50px rgba(0, 0, 0, 0.18);"
      },
      fontSize:{
        "headerSize":"32px",
        "xxs":"11px"
      },
      
      backgroundImage:{
        "bggradient":" linear-gradient(269.55deg, #06846F 0.35%, #54BEE8 103.4%);",
        "namegradient":"linear-gradient(90deg, #118C80 0%, #4AB7D8 120%);"
      },
      skew:{
        "7":"7deg"
      },
      fontFamily:{
        "dana":"dana"
      },
      maxHeight:{
        'maxh':"520px",
      },
      spacing:{
        "7%":"7.8vh"
      },
      
      
     
      
      
      

    },
  },
  plugins: [],
}

