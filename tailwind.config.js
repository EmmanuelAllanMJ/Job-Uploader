/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [{ fontFeatureSettings: "Poppins" }, "Inter var, sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#1597E4",
      "blue-dark": "#44ace9",
      alert: "#d86161",
      white: "#fafafa",
      border: "#e6e6e6",
      grey: "#7a7a7a",
      black: "#182021",
      dark: "#212121",
    },
  },
  plugins: [],
};
