var postcss = require('postcss');

module.exports = postcss.plugin('postcss-optional-comments', function() {

    return function (root) {
        root.walkDecls(function(decl){
            if (decl.prop.match(/(^\/\/\![\s]?.+|\/\*\![^*]*\*+([^/*][^*]*\*+)*\/)/)) {
                decl.remove();
            }
        });
    };
});
