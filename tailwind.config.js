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
          primary: "#3AB171",

          "primary-content": "#00090b",

          secondary: "#00aa00",

          "secondary-content": "#000b00",

          accent: "#00be00",

          "accent-content": "#000d00",

          neutral: "#0a0917",

          "neutral-content": "#c7c7cb",

          "base-100": "#232824",

          "base-200": "#1d211e",

          "base-300": "#171b18",

          "base-content": "#d2cecb",

          info: "#0096d1",

          "info-content": "#000810",

          success: "#56fc92",

          "success-content": "#021608",

          warning: "#ff4200",

          "warning-content": "#160100",

          error: "#ff3c4d",

          "error-content": "#160102",
        },
      },
    ],
  },
};
