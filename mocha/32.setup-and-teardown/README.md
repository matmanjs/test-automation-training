# 32.setup-and-teardown

Mocha 提供了一些全局勾子事件，可以在测试前、测试中和测试后做一些自定义的事情。

- [--file <file|directory|glob>](https://mochajs.org/#-file-filedirectoryglob)
- [ROOT HOOK PLUGINS](https://mochajs.org/#root-hook-plugins)
- [AVAILABLE ROOT HOOKS](https://mochajs.org/#available-root-hooks)
- [Mocha — Global Setup and Teardown (before/after)](https://futurestud.io/tutorials/mocha-global-setup-and-teardown-before-after)


## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 使用 --require 和 ROOT HOOK PLUGINS

Mocha `v8.x` 之后，提供了新的 [ROOT HOOK PLUGINS](https://mochajs.org/#root-hook-plugins) 方式来写，并提供了 `beforeAll`、`beforeEach`、`afterAll` 和 `afterEach` 四个函数，具体请查看 [AVAILABLE ROOT HOOKS](https://mochajs.org/#available-root-hooks) 。


示例 [test-hooks.js](./test-hooks.js) :

```js
exports.mochaHooks = {
  // 普通的异步写法
  beforeAll(done) {
    console.log('[test-hooks.js] beforeAll');
    done();
  },

  // async or Promise-returning functions allowed
  async beforeEach() {
    console.log('[test-hooks.js] beforeEach');
  },

  // https://mochajs.org/#multiple-root-hooks-in-a-single-plugin
  afterAll: [
    function (done) {
      console.log('[test-hooks.js] afterAll done()');
      done();
    },
    async function () {
      console.log('[test-hooks.js] afterAll async-await');
    },
  ],

  afterEach(done) {
    console.log('[test-hooks.js] afterEach');
    done();
  },
};
```

执行命令 

```bash
$ npx mocha --require ./test-hooks.js --recursive
```

可以看到输出结果如下：

```text
[test-hooks.js] beforeAll
  加法函数的测试
[test-hooks.js] beforeEach
    ✓ 1 加 1 应该等于 2
[test-hooks.js] afterEach
[test-hooks.js] beforeEach
    ✓ 任何数加0应该等于自身
[test-hooks.js] afterEach

  乘法函数的测试
[test-hooks.js] beforeEach
    ✓ 1 乘 1 应该等于 1
[test-hooks.js] afterEach

[test-hooks.js] afterAll done()
[test-hooks.js] afterAll async-await
```


### 2.2 使用 --file 方式

使用 `--file` 来定义的全局勾子，只适用于 `serial mode` 串行模式下。在 Mocha `v8.x` 之前，只支持串行执行测试用例，`v8.x` 之后，默认情况也是串行模式。这种情况下，可以通过 `before`、`beforeEach`、`after` 和 `afterEach` 等勾子。

示例 [test-setup.js](./test-setup.js) :

```js
// root hook to run before all test
before(() => {
  console.log('[test-setup.js] before');
});

// root hook to run before every test (even in other files)
beforeEach(() => {
  console.log('[test-setup.js] beforeEach');
});

// root hook to run after all test
after(() => {
  console.log('[test-setup.js] after');
});

// root hook to run after every test (even in other files)
afterEach(function () {
  console.log('[test-setup.js] afterEach');
});
```

执行命令 

```bash
$ npx mocha --file ./test-setup.js --recursive
```

可以看到输出结果如下：

```text
[test-setup.js] before
  加法函数的测试
[test-setup.js] beforeEach
    ✓ 1 加 1 应该等于 2
[test-setup.js] afterEach
[test-setup.js] beforeEach
    ✓ 任何数加0应该等于自身
[test-setup.js] afterEach

  乘法函数的测试
[test-setup.js] beforeEach
    ✓ 1 乘 1 应该等于 1
[test-setup.js] afterEach

[test-setup.js] after
```