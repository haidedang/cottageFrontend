// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend:{
      width:{
        '1/8':'12.5%',
        '1/10':'10%'
      }
    }
  },
  variants: {
    animation: ["motion-safe"],
  },
  important: true,
  // https://github.com/tailwindcss/custom-forms
};
