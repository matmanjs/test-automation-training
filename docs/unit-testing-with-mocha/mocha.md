# Mocha 入门教程

[Mocha](http://mochajs.org) 是现在最流行的 JavaScript 测试框架（JavaScript test framework）之一。官方给它自己定义的三个特点是：`simple`、`flexible`、`fun`。本文为 [Mocha](http://mochajs.org) 的入门教程。


> Mocha is a feature-rich JavaScript test framework running on [Node.js](http://nodejs.org/) and in the browser, making asynchronous testing _simple_ and _fun_. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. 

![](index_files/64653ac1-af3c-4950-a60a-8d7bab65405a.png)

## 1. 安装

推荐将 Mocha 安装在项目中：

```bash
$ npm install mocha --save-dev
```

有时候为了操作的方便，也可以将其安装到全局:

> 但不推荐安装在全局，可以使用 `npx` 也能方便执行命令，详见 [01.getting-started](https://github.com/matmanjs/test-automation-training/tree/master/mocha/01.getting-started) 。

```bash
$ npm install -g mocha
```

## 2. 使用 Mocha + Chai 写单元测试

### 2.1 安装断言库 Chai

Mocha 通常配合 [Chai](https://www.chaijs.com/) 使用，因此需要在项目中安装：

```bash
$ npm install chai --save-dev
```

### 2.2 简单示例

接下来我们看一个简单的例子，该例子完整代码可以查看  [01.getting-started](https://github.com/matmanjs/test-automation-training/tree/master/mocha/01.getting-started) 。

源码 `add.js` :

```js
module.exports = function (x, y) {
    return x + y;
}
```

测试脚本 `add.test.js` :

```js
const add = require('./add.js');
const { expect } = require('chai');

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
});
```

运行查看结果：

```bash
$ npx mocha add.test.js
```

![](index_files/ebcd460c-38aa-42d5-b864-5b7f8abdb20d.jpg)

### 2.3 关于 Mocha 的几个重要概念

Mocha 中有几个重要概念需要了解：

- `测试脚本`：测试用例的脚本，通常命名为 `*.test.js` 或 `*.spec.js`，例如上述示例中的 `add.test.js` 。一般情况下测试脚本是按功能模块划分，一个测试脚本里面包含一个或多个 `describe` 块
- `describe` 块：称为"测试套件"（test suite），表示一组相关的测试。一个 `describe` 块里面包含一个或多个 `it` 块，甚至  `describe` 块里面还可能包含 `describe` 块
- `it` 块：称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。一个 `it` 块里面包含一个或多个 `断言` 
- `断言` ：用于预判、校验用例逻辑的执行结果，在上述示例中，我们使用了 Chai 来写断言

![](index_files/7a89afc3-c087-4d51-b79b-56d84f02a4c6.jpg)


## 3. Mocha 学习手册

除了官方站点 https://mochajs.org/ 已经提供的文档之外，我们根据 mocha 最常见的场景进行了梳理，划分了不同的学习主题，每一个学习主题均有示例，推荐大家下载 https://github.com/matmanjs/test-automation-training/tree/master/mocha 项目进行实践。

- [01.getting-started](https://github.com/matmanjs/test-automation-training/tree/master/mocha/01.getting-started): 最简单的示例，适合入门
- [02.mocha-test-directory](https://github.com/matmanjs/test-automation-training/tree/master/mocha/02.mocha-test-directory): 测试用例放置的目录
- [03.command-line-argument](https://github.com/matmanjs/test-automation-training/tree/master/mocha/03.command-line-argument): 命令参数
- [04.configuring-mocha](https://github.com/matmanjs/test-automation-training/tree/master/mocha/04.configuring-mocha): mocha 的配置文件
- [05.es6](https://github.com/matmanjs/test-automation-training/tree/master/mocha/05.es6): es6 的场景
- [06.ts](https://github.com/matmanjs/test-automation-training/tree/master/mocha/06.ts): TypeScript 场景
- [07.async](https://github.com/matmanjs/test-automation-training/tree/master/mocha/07.async): 异步函数处理场景
- [08.hooks](https://github.com/matmanjs/test-automation-training/tree/master/mocha/08.hooks): 勾子事件，可做初始化或清理
- [09.exclusive-or-inclusive-tests](https://github.com/matmanjs/test-automation-training/tree/master/mocha/09.exclusive-or-inclusive-tests): 限定执行哪些用例
- [10.in-browser](https://github.com/matmanjs/test-automation-training/tree/master/mocha/10.in-browser): 浏览器里面使用 mocha
- [11.reporters](https://github.com/matmanjs/test-automation-training/tree/master/mocha/11.reporters): 测试结果的报告输出
- [31.custom-resolve-paths](https://github.com/matmanjs/test-automation-training/tree/master/mocha/31.custom-resolve-paths): 自定义模块路径下的处理


## 4. 使用 Mocha 做单元测试的项目实践

在实际项目工程中使用 Mocha 做单元测试时，还需要考虑单元测试覆盖率等，为此，我们提供了一些范本案例，希望能够帮助你快速的为你的项目接入单元测试：

- [sample-mocha-chai](https://github.com/matmanjs/test-automation-training/tree/master/sample-mocha-chai) ：es6 项目
- [sample-mocha-chai-ts](https://github.com/matmanjs/test-automation-training/tree/master/sample-mocha-chai-ts) ： TypeScript 项目
