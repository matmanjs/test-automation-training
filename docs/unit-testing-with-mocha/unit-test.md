# 为项目接入单元测试

## 1. 约定

参考业界通用实践，我们推荐如下约定。

### 1.1 测试文件放置在 `test/unit` 目录

对于 Mocha 而言，其默认目录为 `test`，但我们推荐单元测试的测试文件目录为 `test/unit` ，原因包括：

- 可能会存在一些额外的与测试相关的脚本或者资源等放在 `test/scripts` 或 `test/data` 中，可使之隔离，更容易处理
- 可与端对端测试文件目录 `test/e2e` 进行区分

### 1.2 测试产物都输出到 `.test_output` 目录

一般测试产物可能包括 Mocha 的测试报告（例如 `mochawesome`）和覆盖率报告(例如 `nyc`)等，将它们统一输出到一个文件夹内，方便管理，避免运行之后，在项目中无端增加过多文件夹，也方便设置 `.gitignore`。

之所以是 `.test_output`，是因为一些开源社区组件也是这么命名的，例如 `.nyc_output`。


### 1.3 测试文件命名格式使用  `xxx.test.js`

通常测试文件以 `.test.js` 和 `.spec.js` 结尾，我们推荐前者。


### 1.4 不推荐全局安装 mocha

虽然可以全局安装 `mocha`，但是我们并不推荐，这并不是必要的，原因主要是：

- 全局安装时，若有多个项目使用不同的 `mocha` 版本，则可能会有问题
- 安装在本地，在 `package.json` 的 `devDependecies` 中引入，并适当设置 `scripts` 命令即可，或者使用 `npx mocha xxx` 也能部分情况下代替全局安装的 `mocha`

## 2. 快速接入

### 2.1 安装依赖

使用 Mocha 做单元测试时，我们建议使用 [mocha](https://mochajs.org/) + [chai](https://www.chaijs.com/) 这种组合。并且，由于 mocha 升级到 `v8.x` 版本之后做了比较大的改动，建议如果是新业务，直接升级到 `v8.x` 以上！

```bash
$ npm i mocha chai --save-dev
```

为了更好的查看测试结果，我们使用 [mochawesome](https://www.npmjs.com/package/mochawesome)  来做测试报告输出:

```bash
$ npm i mochawesome --save-dev
```

### 2.2 配置 mocha

如果是 mocha `v8.x` 及以上版本，则在项目根目录下创建 `.mocharc.yml` 文件，参数说明可以参考 [CONFIGURING MOCHA (NODE.JS)](https://mochajs.org/#configuring-mocha-nodejs) 。

```yml
reporter: 'mochawesome'
reporterOptions:
  - 'reportDir=.test_output/mochawesome'
recursive: true
```

如果是 mocha `v8.x` 以下版本，则在 `test` 目录下创建 `test /mocha.opts` 文件，并配置如下：

> 强烈建议升级 mocha 到 `v8.x` 及以上版本。

```
--reporter mochawesome
--reporter-options reportDir=../.test_output/mochawesome
--recursive
```

### 2.3 修改 package.json

在 `package.json` 文件的测试命令中追加 `test` 配置 ，例如

```json
{
  "scripts": {
    "test:unit": "mocha test/unit"
  }
}
```

如此一来，就可以通过运行下面的命令执行单元测试了：

```bash
$ npm run test:unit
```


### 2.4 修改 .gitignore

由于我们将单元测试的测试产物都输出到 `.test_output` 目录下，因此需要在 `.gitignore` 文件中追加如下配置，避免提交到 git 仓库中 。

```
.test_output
```

### 2.5. 验证

新增 `test/unit/tmp.test.js`，内容下：

```js
const { expect } = require('chai');

function add(x, y) {
  return x + y;
}

describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });
});
```

在项目根目录下，执行 `npm run test:unit` 命令，如果输出正常，且在 `.test_output` 目录下有输出，则说明配置已完成。

![](index_files/0c84c031-f10a-4f4b-8385-ba315070662e.jpg)
![](index_files/d15bc4a1-d6b5-4d8d-b540-ed7b10e6e73c.png)


## 3. ES6 项目接入

> 可以参考 https://github.com/matmanjs/test-automation-training/tree/master/mocha/05.es6 这个例子。

需要引入 [babel](https://babeljs.io/) 及相关插件来处理，例如引入 [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) ：

```bash
$ npm i @babel/preset-env --save-dev
```

同时为 `.babelrc` 文件增加配置：

```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

最后需要在 `.mocharc.yml` 中增加一个 `require` 的配置：

```yml
require:
  - '@babel/preset-env'
```

但有时候单元测试使用的 babel 配置与项目构建的可能不一样，例如  [create-react-app](https://github.com/facebook/create-react-app) 的应用，就不会直接暴露 `.babelrc` 出来，此时可以使用 `BABEL_ENV` 来处理，可以配置 `.babelrc` 为：

```json
{
    "env": {
        "test": {
            "presets": [
                "@babel/preset-env"
            ]
        }
    }
}
```

然后测试命令中增加  `BABEL_ENV=test`，例如  `cross-env BABEL_ENV=test mocha test/unit ` 。如果在 `package.json` 文件中，则可修改为：


```json
{
  "scripts": {
    "test:unit": "cross-env BABEL_ENV=test mocha test/unit"
  }
}
```

注意需要安装下 [cross-env](https://www.npmjs.com/package/cross-env) :

```bash
$ npm i cross-env --save-dev
```

## 4. TS 项目接入

> 可以参考 https://github.com/matmanjs/test-automation-training/tree/master/mocha/06.ts 这个例子。

如果你的项目是 ts 写的，则一般需要引入 `ts-node/register` ：

```bash
$ npm i ts-node --save-dev
```

同时需要在 `.mocharc.yml`  中增加一个 `require` 的配置：

```yml
require:
  - 'ts-node/register'
```

而 `package.json` 文件中，则可修改为：

```json
{
  "scripts": {
    "test:unit": "mocha 'test/unit/**/*.{ts,tsx}'"
  }
}
```


## 5. 常见问题

### 5.1 我的项目包含了 window 等怎么测试？

如果你的代码里面有 `window` 等代码，还可能需要加入 [jsdom](https://www.npmjs.com/package/jsdom) 和 [jsdom-global](https://www.npmjs.com/package/jsdom-global) ：

```bash
$ npm i jsdom jsdom-global --save-dev
```

同时需要在 `.mocharc.yml` 中增加一个 `require` 的配置：

```yml
require:
  - 'jsdom-global/register'
```

如果是 `mocha.opts` 文件的话则为：

```
--require jsdom-global/register
```

### 5.2 忽略样式引用

单测一些组件的时候往往会因为引用了样式导致 mocha 运行失败，需要安装 [ignore-styles](https://www.npmjs.com/package/ignore-styles) :

```bash
$ npm i ignore-styles --save-dev
```

同时需要在`.mocharc.yml` 中增加一个 `require` 的配置：

```yml
require:
  - 'ignore-styles'
```


### 5.3 模拟全局函数

需要安装 [sinon](https://www.npmjs.com/package/sinon) :

```bash
$ npm i sinon --save-dev
```

例如：

```js
import sinon from 'sinon';
window.aegis = sinon.fake();
window.aegis.info = sinon.fake();
```

使用 sinon 的好处在于可以监听函数的行为，更多 sinon 的使用方法可参考 [https://sinonjs.org/](https://sinonjs.org/) 。

### 5.4 解决 webpack 路径别名

需要安装  [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) ：

```bash
$ npm i babel-plugin-module-resolver --save-dev
```

在 `.babelrc` 中添加配置：

```json
{
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test"
      }
    }]
  ]
}
```
