# 04.mocha-opts

mocha 提供了很多的命令： https://mochajs.org/#command-line-usage ，可以通过选择不同命令和参数来启动测试。

- [CONFIGURING MOCHA (NODE.JS)](https://mochajs.org/#configuring-mocha-nodejs)
- [MOCHA.OPTS](https://mochajs.org/#mochaopts)


## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 使用 mocha.opts 文件

官方文档详见 [MOCHA.OPTS](https://mochajs.org/#mochaopts) ，该方式在 mocha 的 `v6.0` 之后不再推荐使用，并且在未来的版本中可能会移除，如果依然使用的话，则可能会有如下提示：

> (node:82848) DeprecationWarning: Configuration via mocha.opts is DEPRECATED and will be removed from a future version of Mocha. Use RC files or package.json instead.

可以通过 `--opts` 参数指定文件，默认值为 `./test/mocha.opts`。在 `test-use-mocha-opts` 目录下，我们定义了一个 `mocha.opts` 文件：

```text
--reporter spec
```

执行命令：

```bash
$ npx mocha test-use-mocha-opts
```

可以看到输出：

```text
(node:84859) DeprecationWarning: Configuration via mocha.opts is DEPRECATED and will be removed from a future version of Mocha. Use RC files or package.json instead.
1..3
ok 1 [test-use-mocha-opts]加法函数的测试【test-in-other-dir】 1 加 1 应该等于 2
ok 2 [test-use-mocha-opts]加法函数的测试【test-in-other-dir】 任何数加0应该等于自身
ok 3 [test-use-mocha-opts]乘法函数的测试【test-in-other-dir】 1 乘 1 应该等于 1
# tests 3
# pass 3
# fail 0
```
