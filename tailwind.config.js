// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend:{
      width:{
        '1/8':'12.5%',
        '1/9':'11.111111%',
        '1/10':'10%'
      }
    }
  },
  variants: {
    animation: ["motion-safe"],
    margin: ['responsive', 'hover'],
  },
  important: true,
  // https://github.com/tailwindcss/custom-forms
};
