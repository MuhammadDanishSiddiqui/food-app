/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimary: "rgba(0, 0, 0, 0.35)",
        darkPrimary: "#1F1F1F",
        secondary: "#FF9E2C",
      },
      fontFamily: {
        GilroyBold: ["Gilroy-Bold"],
        GilroyMedium: ["Gilroy-Medium"],
        GilroyRegular: ["Gilroy-Regular"],
        GilroySemiBold: ["Gilroy-SemiBold"],
      },
    },
  },
  plugins: [],
};
