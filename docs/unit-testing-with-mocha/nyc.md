# 引入 nyc 获取代码覆盖率

我们使用 [nyc](https://www.npmjs.com/package/nyc) 来获得测试覆盖率报告。

## 1. 约定

参考业界通用实践，我们推荐如下约定。

- 覆盖率产物输出到 `.test_output/coverage` 目录
- 统计覆盖率时，统计所有的文件，而不仅仅是测试用例涉及的文件


## 2. 快速接入

### 2.1 安装依赖

```bash
$ npm i nyc --save-dev
```

### 2.2 增加 .nycrc 文件

在项目根目录下新创建 `.nycrc` 文件，如下。配置参数详见： https://www.npmjs.com/package/nyc#configuration-files 。

```json
{
    "all": true,
    "include": [
        "src/**/*.js"
    ],
    "exclude": [
        "src/**/modules/**/*.js",
        "src/**/assets/**/*.js"
    ],
    "reporter":[
         "text-summary",
         "html",
         "lcovonly"
    ],
    "report-dir": ".test_output/coverage"
}
```

注意：

- `all` 定义是否包含未被执行的文件，注意一定要设置为 `true`，否则计算出的覆盖率只是测试用例涉及的文件的覆盖率，不是实际的覆盖率
- `include` 定义了哪些文件计算在内，你也可以按需修改
- `exclude` 排除部分文件，例如第三方库等，默认情况下会排除 `node_modules` 下文件，你也可以按需修改
- `reporter` 参数至少要配置如下两种，其他可选值也可以查看 [Using Alternative Reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/) 。
  - `text-summary` ：控制台日志会直接打印执行结果，方便在控制台直接查看建议覆盖率结果
  - `html` ：会有静态 html 页面产生，方便我们自己可视化查看结果，可以看到所有文件的代码哪些被覆盖了，哪些未被覆盖
  - `lconvonly` ：产生 `lcov.info` 文件，属于标准的覆盖率产物，一般是提供给第三方统计分析平台用
- `report-dir` 指定了报告的输出，推荐放在 `.test_output/coverage` 目录下


### 2.3 修改 package.json

在 `package.json` 文件中，增加 `coverage` 的命令，则后续可以运行 `npm run coverage` 或者运行  `npm run test:unit` 获得单元测试的代码覆盖率。

```json
{
    "scripts": {
        "test:unit": "npm run coverage",
        "test:unit:direct": "mocha test/unit",
        "coverage": "nyc npm run test:unit:direct"
    }
}
```

### 2.4 查看结果

运行之后，可以在控制台看到简单的覆盖率信息输出。

![](index_files/fe19bf08-fc22-41c2-83c9-c8a21e84f987.jpg)

而在 `.test_output/coverage` 可以看到结果：

![](index_files/80c866a8-985f-4bd9-bd40-072eaaa4ff78.jpg)

打开 `index.html` 之后，可以看到覆盖率信息，我们主要关注 `Lines` 这个值，一般我们提到单元测试代码覆盖率就是指这个值。

![](index_files/63839117-0610-48ba-a3f7-a95fa829bdb1.jpg)

注意，文件是可以点击打开的，进入之后可以看到，如果有红色的代码，则说明该代码没有单元测试覆盖。

![](index_files/2296f534-7a8d-43fb-8177-8c830421c039.png)
