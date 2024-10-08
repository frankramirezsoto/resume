/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
    colors: {
      primary: "#3AB171",
      secondary: "#3D5C4B",
      dark: "#28332E",
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#3AB171",
                    
          "secondary": "#00aa00",
                    
          "accent": "#00be00",
                    
          "neutral": "#0a0917",
                    
          "base-100": "#28332E",
                    
          "info": "#0096d1",
                    
          "success": "#56fc92",
                    
          "warning": "#ff4200",
                    
          "error": "#ff3c4d",
                    },
      },
    ],
  },
};
