# postcss-optional-comments <a href="https://circleci.com/gh/CodeTheory/postcss-optional-comments" rel="postcss-optional-comments CircleCI Project">![postcss-optional-comments CircleCI Project](https://img.shields.io/circleci/project/CodeTheory/postcss-optional-comments.svg)</a> <a href="https://www.npmjs.com/package/postcss-optional-comments" rel="postcss-optional-comments on NPM">![postcss-optional-comments on NPM](https://img.shields.io/npm/v/postcss-optional-comments.svg)</a>

Support for conditional comments using PostCSS.


## What does this do?
This plugin allows you to choose which comments will appear in your css output using a simple not operator, `/*!`, in the opening syntax of a CSS comment.


## Example

input.css:
```css
/*! This comment will be removed! */
/* This comment will be kept! */
a {}
```

output.css:
```css
/* This comment will be kept! */
a {}
```


## Installation
postcss-optional-comments is freely available to download from github or install via [NPM](https://www.npmjs.com/package/postcss-optional-comments).

Install using NPM:
```
npm i --save-dev postcss-optional-comments
```


## Usage

### Gulp
Use with `gulp-postcss` module.

```js
gulp.task('css', function () {
  var postcss          = require('gulp-postcss');
  var optionalComments = require('postcss-optional-comments');

  return gulp.src('./src/**/*.css')
    .pipe(postcss([ optionalComments ]))
    .pipe(gulp.dest('./dest'));
});
```




## Todo
- Support single line comments


## Contributing
Feel free to submit a pull request!
