function lambdaHandler(event, context) {
  context.succeed('Hello, world from TravisCi deployment!!');
}

module.exports = lambdaHandler;
