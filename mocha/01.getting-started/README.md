# 01.getting-started

简单的 mocha 示例。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 官方的 GETTING STARTED 例子

`getting-started.test.js` 示例来自官方例子： https://mochajs.org/#getting-started 。注意，Mocha 本身不提供断言库，该示例直接使用的是 Node.js 自带的 [Assert](https://nodejs.org/api/assert.html) 模块。

```js
var assert = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
```

执行测试命令如下：

```bash
$ ./node_modules/mocha/bin/mocha getting-started.test.js
```

### 2.2 使用 chai 做断言库的简单例子

Mocha 可以搭配[任意断言库(assertion library)](https://mochajs.org/#assertions)，我们选择了 [chai](https://www.chaijs.com/) ，因为 Mocha + Chai 这种搭配方式应用范围最广，并使用 [expect](https://www.chaijs.com/api/bdd/) 这种 `BDD` 方式，因为它更接近于自然语言，相对比较容易理解些。

`add.test.js` 示例代码如下：

```js
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
});
```

执行测试命令如下：

```bash
$ ./node_modules/mocha/bin/mocha add.test.js
```

## 3. 如何简化执行测试的命令

上述示例中执行测试的命令比较长，一般有三种方式可以简化。

### 3.1 在 package.json 中定义 script 命令

业界最常用的推荐做法！在 `package.json` 中增加自定义的 `script` 命令，例如增加：

```json
{
  "scripts": {
     "test": "./node_modules/mocha/bin/mocha *.test.js"
  }
}
```

上述定义了之后，就可以简化命令为：

```bash
$ npm test
```

由于在本示例中在本地安装了 `mocha`，因此还可以直接使用 `mocha` 命令：

> 推荐这种写法

```json
{
  "scripts": {
     "test-use-local-mocha": "mocha *.test.js"
  }
}
```

上述定义了之后，就可以简化命令为：

```bash
$ npm run test-use-local-mocha
```

### 3.2 使用 npx

可以使用 [npx](https://www.npmjs.com/package/npx) 命令可以简化。

```bash
$ # ./node_modules/mocha/bin/mocha add.test.js
$ npx mocha add.test.js
```

### 3.3 全局安装 mocha

可以[全局安装 mocha](https://mochajs.org/#installation)。

> 不是特别推荐这种做法，使用 `npx` 命令基本可以等效实现

```bash
$ npm install --global mocha
```

上述定义了之后，就可以简化命令为：

```bash
$ # ./node_modules/mocha/bin/mocha add.test.js
$ mocha add.test.js
```
