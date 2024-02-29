import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/dashboard/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#fec201', // Ejemplo de un color personalizado llamado "primary"
        secondary: '#b3dcea', // Ejemplo de otro color personalizado llamado "secondary"
        azul:'#b8c7ff'
        // Puedes agregar más colores según tus necesidades
      },
    },
  },
  plugins: [],
};
export default config;
