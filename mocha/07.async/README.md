# 05.es6

mocha 提供了 `--require <module>, -r <module>` 语法，支持在执行测试文件之前引入自定义的模块进行处理。

- [ASYNCHRONOUS CODE](https://mochajs.org/#asynchronous-code)
- [WORKING WITH PROMISES](https://mochajs.org/#working-with-promises)
- [USING ASYNC / AWAIT](https://mochajs.org/#using-async-await)
- [--timeout \<ms\>, -t \<ms\>](https://mochajs.org/#-timeout-ms-t-ms)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 异步函数的测试

如果需要测试的函数是异步的，可在 `it()` 中追加一个函数传递进去，通常命名为 `done`。若 `done()` 函数接受了一个 `Error` 或者 `falsy` 值，则也算该用例执行失败。

详见 `test/async.test.js` ：

```js
var axios = require('axios');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function () {
    it('异步请求应该返回一个对象', function (done) {
        axios
            .get('https://api.github.com')
            .then((res) => {
                expect(res).to.be.an('object');
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});
```

### 2.2 Promise 函数的测试

除了使用 `done()` 回调之外，也可以返回一个 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

详见 `test/promise.test.js` ：

```js
var axios = require('axios');
var expect = require('chai').expect;

describe('promise.test.js - 异步测试', function () {
    it('异步请求应该返回一个对象', function () {
        return axios
            .get('https://api.github.com')
            .then(function (res) {
                expect(res).to.be.an('object');
                return res;
            });
    });
});
```