// const submitPost = require('./reddit/submitPost');
const forBabelTest = require('./forBabelTest');

exports.handler = (event, context, callback) => {
  // submitPost();
  forBabelTest()
    .then((result) => {
      callback(null, result);
    });
};
