const submitPost = require('./reddit/submitPost');

function lambdaHandler(/* event, context, callback */) {
  submitPost()
    .then(console.log)
    .catch(console.log);
}

module.exports = lambdaHandler;
