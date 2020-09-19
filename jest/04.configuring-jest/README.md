# 04.configuring-jest

Jest 除了提供 [command-line](./03.command-line-argument) 这种命令参数的方式之外，还支持自定义配置文件，详见 [Configuring Jest](https://jestjs.io/docs/en/configuration) 。

推荐使用 [--init](https://jestjs.io/docs/en/cli#--init) 来初始化 Jest 的配置文件，会有一些选项进行选择，最后生成一个 `jest.config.js` 文件。例如执行：

```bash
$ npx jest --init
```

就会有类似的询问来初始化配置文件：

```
➜  04.configuring-jest git:(master) ✗ npx jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … no

✏️  Modified /Users/helinjiang/vscodeproject/test-automation-training/jest/04.configuring-jest/package.json

📝  Configuration file created at /Users/helinjiang/vscodeproject/test-automation-training/jest/04.configuring-jest/jest.config.js
```

需要注意的是：

- 生成 `jest.config.js` 文件之后，你可以按照你的需求，参考 [Configuring Jest](https://jestjs.io/docs/en/configuration) 来修改配置
- 如果你的 Jest 配置文件名字做了修改，也可以通过 [--config=<path>](https://jestjs.io/docs/en/cli#--configpath) 指定你的 Jest 配置文件

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

本示例是在 [03.command-line-argument](./03.command-line-argument) 基础上做的变更。修改之前，我们需要运行的命令如下：

```bash
$ npx jest --reporters=default --reporters=jest-html-reporters --collectCoverage
```

我们将这些参数放置到 `jest.config.js` 中，并做了变更，增加了 [jest-html-reporters](https://www.npmjs.com/package/jest-html-reporters) 一些配置，并将其和 `coverage` 报告的结果放置到 `.test_output` 文件夹内。部分代码如下：

```js
module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: '.test_output/coverage',

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './.test_output',
        filename: 'report.html',
        expand: true,
      },
    ],
  ],
};
```

此时，我们就可以简化命令执行：

```bash
$ npx jest

# or
# npm test
```

可以看到输出：

```
➜  04.configuring-jest git:(master) ✗ npx jest
 PASS  __tests__ /dir/multiply.test.js
 PASS  __tests__ /sum.test.js
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |
 src          |     100 |      100 |     100 |     100 |
  sum.js      |     100 |      100 |     100 |     100 |
 src/dir      |     100 |      100 |     100 |     100 |
  multiply.js |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.743 s, estimated 1 s
Ran all test suites.
📦 reporter is created on: /Users/helinjiang/vscodeproject/test-automation-training/jest/04.configuring-jest/.test_output/report.html
```

同时可以看到 `.test_output` 文件夹内的文件确实如我们配置的那样：

```
.
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── sort-arrow-sprite.png
│   │   ├── sorter.js
│   │   └── src
│   │       ├── dir
│   │       │   ├── index.html
│   │       │   └── multiply.js.html
│   │       ├── index.html
│   │       └── sum.js.html
│   └── lcov.info
└── report.html
```
