import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2A3E5C",
          50: "#E8ECF1",
          100: "#D1D9E3",
          200: "#A3B3C7",
          300: "#758DAB",
          400: "#4F6887",
          500: "#2A3E5C",
          600: "#23344D",
          700: "#1B283B",
          800: "#141D2C",
          900: "#0C111A",
        },
        accent: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E7",
          100: "#F5EACC",
          200: "#EBD599",
          300: "#E1C066",
          400: "#D4AF37",
          500: "#B8952A",
          600: "#937720",
          700: "#6E5918",
          800: "#493B10",
          900: "#251E08",
        },
        background: "#FDFBF7",
        foreground: "#1A1A1A",
        muted: {
          DEFAULT: "#F1EDE6",
          foreground: "#6B6B6B",
        },
        border: "#E2DDD4",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
}

export default config
