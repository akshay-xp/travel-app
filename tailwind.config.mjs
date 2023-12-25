/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        night: "#020202",
        chalk: "#FCFCFC",
        sky: "#B2FFFD",
        mint: "#D0FFC5",
        primary: "#020202",
        secondary: "#FCFCFC",
        accent: "#B2FFFD",
      },
    },
  },
  plugins: [],
}
