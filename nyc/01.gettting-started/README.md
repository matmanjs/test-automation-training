简单的 [nyc](https://www.npmjs.com/package/nyc) 示例。

## 1. 安装

```bash
$ npm install
```

## 运行命令

```bash
# 运行测试用例
$ npm run test
# 获取测试覆盖率
$ npm run coverage
```
运行上述命令如果在当前目录发现有`.nyc_output`文件夹，则说明`nyc`运行成功。这个文件夹中存储的是覆盖率原始信息，但我们往往需要的是一个更为直观查看的文件，`nyc`提供了生成文件的功能，可以通过配置来进行设置，请看第二节教程——[02.configuring-nyc]。