import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fc",
          100: "#d9e4f8",
          200: "#b3c8f0",
          300: "#84a5e4",
          400: "#4f7bd4",
          500: "#2b5cc0",
          600: "#1c47a3",
          700: "#133b8a",
          800: "#0B3A8F",
          900: "#0a2f70",
          950: "#071f4b",
        },
        accent: {
          DEFAULT: "#C08A2E",
          light: "#d9a94f",
          dark: "#9a6d1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(11, 58, 143, 0.12)",
        card: "0 2px 12px -2px rgba(11, 58, 143, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
