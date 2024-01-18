/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      fontFamily: {
         Roboto: ["Roboto", "sans-serif"],
      },
      extend: {
         colors: {
            content: {
               1: "hsl(var(--color-content) / <alpha-value>)",
               2: "hsl(var(--color-content2) / <alpha-value>)",
               3: "hsl(var(--color-content3) / <alpha-value>)",
            },
            bkg: "hsl(var(--color-bkg) / <alpha-value>)",
            buttons: "hsl(var(--color-buttons) / <alpha-value>)",
            textColor: "hsl(var(--color-text) / <alpha-value>)",
         },
      },
   },
   plugins: [],
};
