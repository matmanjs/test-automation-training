## 安装

```bash
$ npm install
```

## 命令

```bash
# 运行测试用例
$ npm run test
# 获取测试覆盖率
$ npm run  coverage
```

运行测试覆盖率命令后会发现，当前文件夹下多了coverage文件，此时因为对`src/minus.js`文件进行测试，所以该文件覆盖率为`0`。
而文件`src/multiply.js`因为被配置在了`exclude`,不会计入测试。
但有些场景下(比如polyfill文件)难以进行单测，需要在待测试文件中忽略这部分文件或是忽略某一行的测试，就无法通过配置达到了，请看第三节[03.ignore]

## 配置选项

`nyc`支持以下几种配置形式：

| 文件名       | 文件协议 |
| :-------------- | :--------------- |
| `.nycrc`        | JSON             |
| `.nycrc.json`   | JSON             |
| `.nycrc.yaml`   | YAML             |
| `.nycrc.yml`    | YAML             |
| `nyc.config.js` | CommonJS export  |


具体的配置选项如下：

| 选项      | 描述                                                  | 类型            | 默认值                                                      |
| :--------------- | :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- |
| `all`            | 是否包括所有文件(不仅仅是测试套件所涉及的文件) | `Boolean`       | `false`                                                      |
| `check-coverage` | 是否检查测试覆盖率在不在阈值内，否则失败     | `Boolean`       | `false`                                                      |
| `extension`      | 除了`.js`文件外，还需要去处理的文件列表 | `Array<String>` | `['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx']`             |
| `include`        | 查看 [selecting files for coverage](https://www.npmjs.com/package/nyc#selecting-files-for-coverage) | `Array<String>` | `['**']`                                                     |
| `exclude`        | 查看 [selecting files for coverage](https://www.npmjs.com/package/nyc#selecting-files-for-coverage)  | `Array<String>` | [list](https://github.com/istanbuljs/schema/blob/master/default-exclude.js) |
| `reporter`       | [支持的导出文件的格式](https://istanbul.js.org/docs/advanced/alternative-reporters/) | `Array<String>` | `['text']`                                                   |
| `report-dir`     | 覆盖率测试文件导出目录                       | `String`        | `./coverage`                                                 |
| `skip-full`      | 不显示已经100%通过测试的文件       | `false`                                                      |
| `temp-dir`       | 测试覆盖率结果的源文件导出目录             | `String`        | `./.nyc_out`                                                 |