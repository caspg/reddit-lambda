const forBabelTest = require('../src/forBabelTest');

test('dummy example', () => {
  expect(true).toBe(true);
});

test('async await function', () => {
  forBabelTest()
    .then((result) => {
      expect(result).toBe('resolved promise');
    });
});
