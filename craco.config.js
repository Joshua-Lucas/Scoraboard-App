// craco.config.js
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
          content: ['./public/*.html', './src/**/*.tsx', './src/**/*.ts','./src/**/*.js'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ],
    },
  },
};

