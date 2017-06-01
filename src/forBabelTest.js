const somePromise = () => new Promise((resolve) => resolve('resolved promise'));

async function forBabelTest() {
  const result = await somePromise();
  return result;
}

module.exports = forBabelTest;
