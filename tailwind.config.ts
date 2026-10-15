import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1C6AAE",
          cyan: "#5BC0EB",
          green: "#1E9D72",
          greenDeep: "#0E5F4A",
          mint: "#EAF8F3",
          sand: "#F7F3EB",
          cream: "#FFFDF9",
          slate: "#24313D",
          red: "#D94B4B",
          gold: "#D5B273",
        },
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(16, 42, 52, 0.18)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
