# 31.custom-resolve-paths

在实际项目里面，我们可能会设置一个 `根目录`，配合 `webpack` 等工具，用于简化模块之间的引用。


## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

在本例中，`src/utils` 提供公共的方法，目录结构如下：

```text
src
├── index.js
├── tools.js
└── utils
    ├── config.js
    └── index.js

```

为了便于在任何 src 下的模块中直接通过 `require('utils')` 使用，我们用 `webpack` 配置了 `resolve` ：

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    // https://webpack.js.org/configuration/resolve/
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/utils')
        }
    }
};
```

则在应用该模板时，就可以直接引入了：

```js
// 常规的写法
// const utils = require('./utils');
// const config = require('./utils/config');

// 配置 resolve 之后的写法
const utils = require('utils');
const config = require('utils/config');
```

但上述的写法对于 mocha 而言，它是无法有效识别的，必须也要进行特殊处理并指定根目录。因此，我们引入了 [app-module-path](https://www.npmjs.com/package/app-module-path) 来做类似的事情：

```js
var path = require('path');
require('app-module-path').addPath(path.join(__dirname, '../src'));

var myTest = require('../src/tools');
var expect = require('chai').expect;

describe('对有绝对路径引用的测试', function () {
    it('myTest(1,2) 应该为 test-automation-training-mocha: 1+2=3', function () {
        expect(myTest(1,2)).to.be.equal('test-automation-training-mocha: 1+2=3');
    });
});
```

执行测试命令：

```bash
$ npm test
```