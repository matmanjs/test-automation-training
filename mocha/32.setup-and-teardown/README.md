# 32.setup-and-teardown

有些时候我们需要在测试之前或者测试完成之后做一些自定义的事情，此时可以通过 `--file`

- [--file <file|directory|glob>](https://mochajs.org/#-file-filedirectoryglob)
- [Mocha — Global Setup and Teardown (before/after)](https://futurestud.io/tutorials/mocha-global-setup-and-teardown-before-after)


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


## 使用 --file 方式

使用 `--file` 来定义的全局勾子，只适用于 `serial mode` 串行模式下。在 Mocha `v8.x` 之前，只支持串行执行测试用例，`v8.x` 之后，默认情况也是串行模式。这种情况下，可以通过 `before`、`beforeEach`、`after` 和 `afterEach` 等勾子。

例如 [test/setup.js](./test/setup.js) :

```js
// root hook to run before all test
before(() => {
  console.log('[hooks] before');
});

// root hook to run before every test (even in other files)
beforeEach(() => {
  console.log('[hooks] beforeEach');
});

// root hook to run after all test
after(() => {
  console.log('[hooks] after');
});

// root hook to run after every test (even in other files)
afterEach(function () {
  console.log('[hooks] afterEach');
});
```

执行命令 

```
$npx mocha --file ./test/setup.js --recursive"
```

可以看到输出结果如下：

```text
[hooks] before
  加法函数的测试
[hooks] beforeEach
    ✓ 1 加 1 应该等于 2
[hooks] afterEach
[hooks] beforeEach
    ✓ 任何数加0应该等于自身
[hooks] afterEach

  乘法函数的测试
[hooks] beforeEach
    ✓ 1 乘 1 应该等于 1
[hooks] afterEach

[hooks] after
```