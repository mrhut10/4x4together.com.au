const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssEasingGradients = require('postcss-easing-gradients');

module.exports = {
  plugins: [postcssImport, postcssEasingGradients, tailwindcss, autoprefixer],
};
