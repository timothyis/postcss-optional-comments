# postcss-optional-comments ![](https://img.shields.io/circleci/project/CodeTheory/postcss-optional-comments.svg) ![](https://img.shields.io/npm/v/postcss-optional-comments.svg)
Support for conditional comments


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
