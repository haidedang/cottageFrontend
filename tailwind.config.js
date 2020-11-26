// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 3s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  important: true,

  // https://github.com/tailwindcss/custom-forms
};
