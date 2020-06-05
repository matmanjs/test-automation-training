# sample-mocha-chai

本项目提供了基于使用 [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) 做单元测试的简单范例。

注意，这是一个完整的范例，因此你可以参考本项目，快速为自己的项目接入单元测试。范例包含了：

- 利用 [babel](https://babeljs.io/) 处理 ES6 语法
- 利用 [nyc](https://www.npmjs.com/package/nyc) 统计代码覆盖率，并将结果输出到 `.test_output` 目录下
- 利用 [mochawesome](https://www.npmjs.com/package/mochawesome) 做测试报告，并将结果输出到 `.test_output` 目录下

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

运行单元测试：

```bash
$ npm test
```
