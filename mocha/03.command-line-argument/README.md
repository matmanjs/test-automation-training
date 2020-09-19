# 03.command-line-argument

mocha 提供了很多的命令： https://mochajs.org/#command-line-usage ，可以通过选择不同命令和参数来启动测试。

- [COMMAND-LINE USAGE](https://mochajs.org/#command-line-usage)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

在示例中，我们选择了 [mochawesome](https://www.npmjs.com/package/mochawesome) 来做报告模板输出。因此，测试命令需要更新如下，其含义是使用 mochawesome 作为 reporter，且将报告输出到 `.test_output` 文件夹内：

```bash
$ npx mocha --recursive --reporter mochawesome --reporter-options reportDir=.test_output
```

我们也可以增加 `script` 命令

```json
{
  "scripts": {
    "test": "mocha --recursive --reporter mochawesome --reporter-options reportDir=.test_output"
  }
}
```

这样，我们可以简化测试命令为：

```bash
$ npm test
```
