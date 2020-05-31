# 04.configuring-mocha

mocha 除了提供 `command-inline` 这种方式之外，还支持自定义配置文件。但由于 mocha 支持多重配置方式，为了避免冲突，优先级如下（更具体规则请查看 [MERGING](https://mochajs.org/#merging)）：

- Arguments specified on command-line 【命令行中携带的参数的优先级最高】
- Configuration file (`.mocharc.js`, `.mocharc.yml`, etc.)
- `mocha` property of `package.json`
- `mocha.opts` 【`v6.0.0` 之后不再推荐使用，为了可能会被移除】

更多阅读：

- [CONFIGURING MOCHA (NODE.JS)](https://mochajs.org/#configuring-mocha-nodejs)
- [MOCHA.OPTS](https://mochajs.org/#mochaopts)
- [MERGING](https://mochajs.org/#merging)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 使用 configuration 配置文件

在 mocha `v6.0.0` 之后，使用 configuration 配置文件来代替 mocha.opts 文件，详见： [CONFIGURING MOCHA (NODE.JS)](https://mochajs.org/#configuring-mocha-nodejs) 。

支持多种文件格式，使用 `--config <path>` 可以指定自定义路径，默认情况下会从执行命令的当前目录（一般情况是 `package.json` 文件的目录，因为我们大多数会用 `script` 命令来执行）寻找。如果该目录下有多个文件，则优先级为：

- `.mocharc.js`【优先级最高】
- `.mocharc.yaml`
- `.mocharc.yml`
- `.mocharc.jsonc`
- `.mocharc.json`【优先级最低】


本例中，我们定义了 `.mocharc.yml`，并指定了用 `mochawesome` 这种报告模板输出：

```yaml
reporter: 'mochawesome'
reporterOptions:
  - 'reportDir=.test_output'
recursive: true
```

执行命令：

```bash
$ npx mocha
```

也等效于直接执行：

```bash
$ npx mocha --recursive --reporter mochawesome --reporter-options reportDir=.test_output
```


### 2.2 使用 mocha.opts 文件

官方文档详见 [MOCHA.OPTS](https://mochajs.org/#mochaopts) 。注意：该方式在 mocha 的 `v6.0.0` 之后不再推荐使用，并且在未来的版本中可能会移除，如果依然使用的话，则可能会有如下提示：

> (node:82848) DeprecationWarning: Configuration via mocha.opts is DEPRECATED and will be removed from a future version of Mocha. Use RC files or package.json instead.

可以通过 `--opts <path>` 参数指定文件，默认值为 `./test/mocha.opts`。在 `test-use-mocha-opts` 目录下，我们定义了一个 `mocha.opts` 文件，并指定了用 `list` 这种报告模板输出：

```text
--reporter list
--recursive
```

执行命令(为了避免根目录中的 `.mocharc.yml` 的干扰，所以额外增加了 `--no-config`)：

```bash
$ npx mocha test-use-mocha-opts --no-config --opts=test-use-mocha-opts/mocha.opts
```

可以看到输出：

```text
(node:87653) DeprecationWarning: Configuration via mocha.opts is DEPRECATED and will be removed from a future version of Mocha. Use RC files or package.json instead.

  ✓ [test-use-mocha-opts]加法函数的测试【test-in-other-dir】 1 加 1 应该等于 2: 1ms
  ✓ [test-use-mocha-opts]加法函数的测试【test-in-other-dir】 任何数加0应该等于自身: 0ms
  ✓ [test-use-mocha-opts]乘法函数的测试【test-in-other-dir】 1 乘 1 应该等于 1: 0ms

  3 passing (4ms)
```
