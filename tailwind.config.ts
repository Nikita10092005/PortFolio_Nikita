import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        "bg-raised": "#F3F1EA",
        ink: "#1A1A1A",
        "text-secondary": "#3D3D3D",
        muted: "#5C5C5C",
        accent: "#B8860B",
        line: "rgba(26,26,26,0.14)",
        "line-strong": "rgba(26,26,26,0.26)",
        // dark mode tokens
        "dark-bg": "#121212",
        "dark-card": "#1E1E1E",
        "dark-ink": "#F8F8F8",
        "dark-secondary": "#D4D4D4",
        "dark-muted": "#A8A8A8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-source-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
