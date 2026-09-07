import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./Keywoard-pages/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1680px" }
    },
    extend: {
      colors: {
        navy: "#22241f",
        ink: "#22241f",
        cloud: "#f5f2ec",
        cream: "#f5f2ec",
        peach: "#eeeae2",
        orange: "#c53d1a",
        "orange-dark": "#a92f12",
        "orange-soft": "#f0e2d6",
        blue: "#c53d1a",
        "blue-soft": "#f0e2d6",
        green: "#2B8A78",
        "green-soft": "#E7F5F1",
        yellow: "#B17C22",
        "yellow-soft": "#FFF6DF",
        pink: "#B55279",
        "pink-soft": "#FBEAF1",
        purple: "#726BDF",
        "purple-soft": "#EFEEFF",
        mist: "#eeeae2",
        muted: "#66685f",
        soft: "#74766d",
        line: "#d9d8ce",
        "line-strong": "#c4c5b9"
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        soft: "0 20px 60px rgba(65, 75, 125, 0.1)",
        card: "0 12px 32px rgba(65, 75, 125, 0.08)",
        float: "0 12px 30px rgba(65, 75, 125, 0.1)"
      },
      fontFamily: { sans: ["var(--font-manrope)", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
