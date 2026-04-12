/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        background: "#fef9f2",
        surface: "#fef9f2",
        primary: "#984300",
        "primary-container": "#bb5810",
        "primary-fixed": "#f1dcc7",
        secondary: "#895033",
        "secondary-container": "#e9d5c5",
        tertiary: "#006096",
        "tertiary-container": "#2e7fab",
        outline: "#887364",
        "outline-variant": "#dbc2b0",
        "on-primary": "#ffffff",
        "on-secondary-container": "#5f341d",
        "on-surface": "#1d1c18",
        "on-surface-variant": "#554336",
        "surface-container": "#f2ede6",
        "surface-container-low": "#f8f3ec",
        "surface-container-high": "#ece5dc",
        "surface-container-highest": "#e6e2db",
        "surface-container-lowest": "#ffffff",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(29, 28, 24, 0.08)",
        card: "0 18px 40px rgba(29, 28, 24, 0.06)",
        glow: "0 24px 60px rgba(152, 67, 0, 0.16)",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        headline: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(152, 67, 0, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(152, 67, 0, 0.06) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
