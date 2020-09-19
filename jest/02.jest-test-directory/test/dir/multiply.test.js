const multiply = require('../../src/dir/multiply');

describe('__tests__ 目录下的测试用例：dir/multiply.js', () => {
  test('2 乘以 3 等于 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
