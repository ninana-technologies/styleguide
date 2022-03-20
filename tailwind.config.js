module.exports = {
  content: ["../*/src/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF3E0",
          200: "#FF9800",
          300: "#F57C00",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
