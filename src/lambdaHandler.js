function lambdaHandler(event, context) {
  context.succeed('Hello, world!');
}

module.exports = lambdaHandler;
