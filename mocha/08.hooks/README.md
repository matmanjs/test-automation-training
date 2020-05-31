# 08.hooks

Mocha 提供了 `before()`, `after()`, `beforeEach()` 和 `afterEach()` 共 `4` 种勾子函数用于为自动化测试做初始化或者清理等工作。

- [HOOKS](https://mochajs.org/#hooks)

```js
describe('hooks', function() {
  before(function() {
    // runs once before the first test in this block
  });

  after(function() {
    // runs once after the last test in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

根据情况来选择合适的 `hooks` 即可。

```bash
$ npm test
```