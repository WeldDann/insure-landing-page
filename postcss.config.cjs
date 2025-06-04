module.exports = {
  plugins: [
    require('@csstools/postcss-global-data')({
      files: ['./src/css/custom-medias.css'],
    }),
    require('postcss-custom-media'),
    require('autoprefixer'),
    require('postcss-preset-env'),
  ],
};
