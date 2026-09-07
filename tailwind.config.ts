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
        navy: "#263E33",
        ink: "#263E33",
        cloud: "#FFFEFA",
        cream: "#F5F3EC",
        peach: "#ECE5D8",
        orange: "#294D3B",
        "orange-dark": "#1D392B",
        "orange-soft": "#E7EBDF",
        blue: "#294D3B",
        "blue-soft": "#E9ECDF",
        green: "#4F6641",
        "green-soft": "#E7EBDF",
        yellow: "#815E29",
        "yellow-soft": "#F1E8D6",
        pink: "#845440",
        "pink-soft": "#F1E5DC",
        purple: "#596B50",
        "purple-soft": "#EAECE2",
        mist: "#EAECE2",
        muted: "#60675D",
        soft: "#6B7166",
        line: "#D9DBCF",
        "line-strong": "#B9C0AF"
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        soft: "0 20px 60px rgba(37, 52, 37, 0.1)",
        card: "0 12px 32px rgba(37, 52, 37, 0.08)",
        float: "0 12px 30px rgba(37, 52, 37, 0.1)"
      },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
