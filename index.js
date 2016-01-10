var postcss = require('postcss');

module.exports = postcss.plugin('postcss-optional-comments', function (opts) {
  opts = opts || {};

  return function (css) {
    css.walkComments(function (comments) {
      if(comments.toString().substring(0, 3) === '/*!') {
        comments.remove();
      }
    });
  };

});
