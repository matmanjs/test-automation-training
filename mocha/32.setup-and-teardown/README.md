# 32.setup-and-teardown

有些时候我们需要在测试之前或者测试完成之后做一些自定义的事情，此时可以通过 `--file`

- [--file <file|directory|glob>](https://mochajs.org/#-file-filedirectoryglob)
- [Mocha — Global Setup and Teardown (before/after)](https://futurestud.io/tutorials/mocha-global-setup-and-teardown-before-after)
- [AVAILABLE ROOT HOOKS](https://mochajs.org/#available-root-hooks)


## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

当测试文件在 `test` 目录下时，无需指定 `test` 目录，再加上 `--recursive` 参数，这样就能执行 `test` 子目录中的测试文件了。

> 业界普遍将 `test` 目录作为测试文件目录，建议大家也按此规定来。

```bash
$ npx mocha --recursive
```

但如果测试文件不是在 `test` 目录下，例如在 `test-other-folder` 中，则执行命令中需要追加文件目录：

```bash
$ # 执行 test-other-folder 下的测试用例
$ npx mocha test-other-folder --recursive

$ # 执行 test-other-folder/dir 下的测试用例
$ npx mocha test-other-folder/dir --recursive
```


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


### 使用 --file 方式

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