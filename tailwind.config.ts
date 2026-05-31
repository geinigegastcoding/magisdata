import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1680px"
      }
    },
    extend: {
      colors: {
        navy: "#274C7E",
        ink: "#365374",
        cloud: "#F7FBFF",
        cream: "#FFFCF7",
        peach: "#FFF7ED",
        orange: "#FF6B1A",
        "orange-dark": "#C95A16",
        "orange-soft": "#FFEDD5",
        blue: "#2563EB",
        "blue-soft": "#DBEAFE",
        green: "#16A34A",
        "green-soft": "#DCFCE7",
        yellow: "#D97706",
        "yellow-soft": "#FEF3C7",
        pink: "#BE3A5A",
        "pink-soft": "#FFE4E6",
        purple: "#9333EA",
        "purple-soft": "#F3E8FF",
        mist: "#EEF6FF",
        muted: "#536179",
        soft: "#7A8499",
        line: "#EAECEF"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      boxShadow: {
        soft: "0 16px 42px rgba(83, 97, 121, 0.1)",
        card: "0 10px 26px rgba(83, 97, 121, 0.085)",
        float: "0 12px 30px rgba(83, 97, 121, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
