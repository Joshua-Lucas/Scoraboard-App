const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      purgecss({
        content: ['./public/*.html', './src/**/*.css', './src/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }