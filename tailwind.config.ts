import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A96E",
          "gold-light": "#E8D5B0",
          "gold-dark": "#A88B4A",
          dark: "#1A1A1A",
          "dark-light": "#2A2A2A",
          cream: "#FAF7F2",
          "cream-dark": "#F0EBE3",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
