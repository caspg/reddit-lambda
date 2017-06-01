const submitPost = require('./reddit/submitPost');

function lambdaHandler(/* event, context, callback */) {
  submitPost();
}

module.exports = lambdaHandler;
