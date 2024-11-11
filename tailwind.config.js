import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text))",
        background: "rgb(var(--background))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
      },
      transitionTimingFunction: {
        "out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
      },
    },
  },
  plugins: [animate],
}
