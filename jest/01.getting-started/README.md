# 01.getting-started

最简单的 [Jest](https://jestjs.io/) 示例。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

本示例来自官方例子： https://jestjs.io/docs/zh-Hans/getting-started 。

第一步，创建一个 `sum.js` 文件：

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

第二步，创建一个 `sum.test.js` 测试文件：

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

第三步，执行测试命令如下：

```bash
$ npx jest sum.test.js
```

执行完之后，可以看到测试结果输出：

```
➜  01.getting-started git:(master) ✗ npx jest sum.test.js
 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.074 s
Ran all test suites matching /sum.test.js/i.
```

也可以在 `package.json` 中增加自定义的 `script` 命令：

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

这样就可以执行如下：

```bash
$ npm test
```

执行完之后，可以看到测试结果输出：

```
➜  01.getting-started git:(master) ✗ npm test

> 01.getting-started@ test /Users/helinjiang/vscodeproject/test-automation-training/jest/01.getting-started
> jest

 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.143 s
Ran all test suites.
```

## 3. 执行 Jest 命令的方式

### 3.1 借助 package.json 中的 scripts

业界最常用的推荐做法！在 `package.json` 中增加自定义的 `script` 命令：

```json
{
  "scripts": {
    "test": "jest",
    "test-another-way": "jest *.test.js"
  }
}
```

无论命令有多长，最后都可以用比较优雅地方式来运行：

```bash
$ npm test
$ npm run test-another-way
```

有两个点要特别强调一下：

第一，`npm test` 可以看做是 `npm run test` 的简写形式，与此类似的，`npm start` 也可以看做 `npm run start` 的简写。但这种方式只有少数特例，例如 `npm run test-another-way` 就不能简写为 `npm test-another-way`。具体细节可以阅读 [npm-run-script](https://docs.npmjs.com/cli-commands/run-script.html) 和 [npm-test](https://docs.npmjs.com/cli-commands/test) 。

第二，在 `scripts` 中我们可以定义直接使用 `jest *.test.js` ，但如果你在 cmd 中直接运行 `jest *.test.js`，则会提示 `command not found: jest` 的错误。如果要在命令行中简化命令，要么借助 `npx`，要么全局安装 `jest` 。

### 3.2 借助 npx 直接将本地 mocha 模块当做全局模块使用

可以使用 [npx](https://www.npmjs.com/package/npx) ，将本地 jest 模块当做全局模块使用，此时就可以直接在命令行中执行：

```bash
$ npx jest sum.test.js
```

### 3.3 全局安装 Jest

可以全局安装 Jest，但不是特别推荐这种做法，因为一旦不同项目依赖的 `jest` 版本不一样，则会带来比较多的麻烦。而将 `jest` 安装在本地，再配合 `npx` 命令，也基本可以等效实现命令行中简化命令的目的。

> 关于 Jest CLI 命令可以阅读 [Jest CLI Options](https://jestjs.io/docs/zh-Hans/cli) 。

```bash
$ npm install jest --global
```

上述定义了之后，就可以简化命令为：

```bash
$ jest sum.test.js
```
