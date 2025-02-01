import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#FF3D71",  // Hot pink
        blue: "#005FFF",  // Vibrant blue
        yellow: "#FFD500", // Electric yellow
        cyan: "#00E6E6", // Bright cyan
        red: "#FF1F1F", // Bold red
        green: "#00FF99", // Bright green
      },
    },
  },
  plugins: [],
} satisfies Config;
