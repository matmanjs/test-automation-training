# 09.exclusive-or-inclusive-tests

Mocha 提供了 `only()`（只执行这些用例） 和 `skip()`（跳过不执行这些用例） 方法来选择包含和排除某些用例。

- [EXCLUSIVE TESTS](https://mochajs.org/#exclusive-tests)
- [INCLUSIVE TESTS](https://mochajs.org/#inclusive-tests)


## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

`only()` 和 `skip()` 方法都可以追加到 `describe` 和 `it` 之后：

```js
var add = require('../src/add.js');
var expect = require('chai').expect;

describe.only('[describe.only]加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });

    it.skip('任何数加0应该等于自身', function () {
        expect(add(1, 0)).to.be.equal(1);
    });
});
```

执行测试：

```bash
$ npm test
```