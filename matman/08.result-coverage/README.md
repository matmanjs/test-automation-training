# 08.result-coverage

对 matman 的运行结果与覆盖率报告进行配置，分别是不同的 API 但是设计的内容较少并且相似，所以我们放到一起进行分析、讲解。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 demo_coverage.js

设置 `Coverage` 参数

- `tag` 为标签用于区分不同版本
- `path` 用于指定文件名，需要注意必须指定后缀

使用方法（完整代码请查看 [demo_coverage.js](./demo_coverage.js)）：

```js
// 设置 Coverage 参数, tag 为标签用于区分不同版本, path 用于指定文件名, 需要注意必须指定后缀
await pageDriver.setCoverageConfig({
  tag: 'mytag',
  path: 'mypath.json',
});
```

体验方式：

```bash
$ node demo_coverage.js
```

### 2.1 demo_result.js

设置产物参数

- `tag` 为标签用于区分不同版本
- `path` 用于指定文件名，需要注意必须指定后缀

使用方法（完整代码请查看 [demo_result.js](./demo_result.js)）：

```js
// 设置产物参数, tag 为标签用于区分不同版本, path 用于指定文件名, 需要注意必须指定后缀
await pageDriver.setMatmanResultConfig({
  tag: 'mytag',
  path: 'mypath.json',
});
```

体验方式：

```bash
$ node demo_result.js
```