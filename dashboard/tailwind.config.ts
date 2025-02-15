import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#5372FF',
      },
      fontFamily: {
        "work-sans" :["Work Sans","sans-serif"],
       },
       screens:{
        'lg': '1024px',
        'xl': '1280px',
       },
      },
  
  },
  plugins: [],
};
export default config;
