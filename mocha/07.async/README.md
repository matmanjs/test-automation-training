# 07.async

mocha 支持异步场景的测试。

- [ASYNCHRONOUS CODE](https://mochajs.org/#asynchronous-code)
- [WORKING WITH PROMISES](https://mochajs.org/#working-with-promises)
- [USING ASYNC / AWAIT](https://mochajs.org/#using-async-await)
- [--timeout \<ms\>, -t \<ms\>](https://mochajs.org/#-timeout-ms-t-ms)
- [TIMEOUTS](https://mochajs.org/#timeouts)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 使用回调函数 done()

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

### 2.2 使用 Promise

除了使用 `done()` 回调之外，也可以返回一个 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 。

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

### 2.3 使用 async/await

如果当前的 js 环境支持（Node 版本大于或等于 `v7.6.0`），则还可以使用 [async / await](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/async_function) 。

详见 `test/async-await.test.js` ：

```js
var axios = require('axios');
var expect = require('chai').expect;

describe('async-await.test.js - 异步测试', function () {
    it('异步请求应该返回一个对象', async function () {
        const res = await axios.get('https://api.github.com');
        expect(res).to.be.an('object');
    });
});
```

### 2.4 设置用例执行超时时间

默认情况下，用例执行的超时时间为 `2000ms` ，但有时候有些用例确实会超过这个时间，则有两种方案。

方案一：使用 [--timeout \<ms\>, -t \<ms\>](https://mochajs.org/#-timeout-ms-t-ms) ，这样对于所有的用例都生效。

```bash
$ npx mocha --timeout=4000
```

方案二：使用 [TIMEOUTS](https://mochajs.org/#timeouts) 来为指定的用例设置超时时间。

详见 `test/timeout.test.js` ：

```js
var expect = require('chai').expect;

describe('timeout.test.js - 超时测试', function () {
    // 默认超时时间为 2s, 通过这个方法可以将超时时间修改为 4s
    // https://mochajs.org/#timeouts
    this.timeout(4000);

    it('测试应该 3000 毫秒后结束', function (done) {
        setTimeout(function () {
            expect(true).to.be.true;
            done();
        }, 3000);
    });
});
```

注意，Mocha 中并不推荐使用 `ARROW FUNCTIONS`，主要原因是上述的 `this`，具体原因请查看 [ARROW FUNCTIONS](https://mochajs.org/#arrow-functions) 。