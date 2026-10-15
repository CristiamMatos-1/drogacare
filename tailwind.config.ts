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
          // Pantone-based CSS variables (validate with Pantone guide)
          "2767": "var(--color-2767)",
          "2383": "var(--color-2383)",
          "2202": "var(--color-2202)",
          "2255": "var(--color-2255)",
          "2253": "var(--color-2253)",
          "2466": "var(--color-2466)",

          // Friendly aliases
          blueDark: "var(--color-2767)",
          blue: "var(--color-2383)",
          blueLight: "var(--color-2202)",
          green: "var(--color-2255)",
          greenLight: "var(--color-2253)",
          greenDark: "var(--color-2466)",
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
