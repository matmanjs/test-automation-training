const sum = require('../src/sum');

describe('__tests__ 目录下的测试用例：sum.js', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
