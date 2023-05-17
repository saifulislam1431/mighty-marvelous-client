/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0C81A6",
        
"secondary": "#10557B",
        
"accent": "#93D0D7",
        
"neutral": "#2B2834",
        
"base-100": "#F4F4F6",
        
"info": "#99BBEA",
        
"success": "#63EEBD",
        
"warning": "#F4911F",
        
"error": "#CA2037",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

