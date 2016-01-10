# postcss-optional-comments ![](https://img.shields.io/circleci/project/wulkano/molten.svg)
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



## Todo
- Support single line comments


## Contributing
Feel free to submit a pull request!
