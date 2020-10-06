module.exports = function(eleventy) {

  // Enable data deep merge
  eleventy.setDataDeepMerge(true);

  // Config
  return {
    templateFormats: [
      'md',
      'njk',
      'html'
    ],

    pathPrefix: '',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',

    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    }
  };
}
