# 05.es6

mocha 提供了 `--require <module>, -r <module>` 语法，支持在执行测试文件之前引入自定义的模块进行处理。

- [--require \<module\>, -r \<module\>](https://mochajs.org/#-require-module-r-module)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

本来演示了 es6 项目的处理方式。我们需要安装 [@babel/register](https://www.npmjs.com/package/@babel/register) 和 [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)  。

增加 `.babelrc` 文件，并且配置：

```json
{
    "presets": [ "@babel/preset-env"]
}
```

这样就可以通过如下命令执行自动化测试了：

```bash
$ npx mocha --require @babel/register --recursive
```

特别情况下，如果你需要针对自动化测试，使用独立的 babel 配置，则可以使用 [BABEL_ENV](https://babeljs.io/docs/en/6.26.3/babelrc#env-option) 来指定配置，例如在下面增加了一个 `env` 的配置：

```json
{
    "presets": [
        "@babel/preset-env"
    ],
    "env": {
        "test": {
            "presets": [
                "@babel/preset-env"
            ]
        }
    }
}
```

然后指定 `BABEL_ENV=test` 即可 ：

```bash
$ npx cross-env BABEL_ENV=test mocha --require @babel/register --recursive
```
