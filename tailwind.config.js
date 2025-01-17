/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* WebKit browserlar uchun */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Standart scrollbars */
          "-ms-overflow-style": "none" /* Internet Explorer */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
