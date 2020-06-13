# 04.configuring-mocha

mocha 除了提供 `command-line` 这种命令参数的方式之外，还支持自定义配置文件。但由于 mocha 支持多重配置方式，为了避免冲突，优先级如下（更具体规则请查看 [MERGING](https://mochajs.org/#merging)）：

- Arguments specified on command-line 【命令行中携带的参数的优先级最高】
- Configuration file (`.mocharc.js`, `.mocharc.yml`, etc.)
- `mocha` property of `package.json`

> 特别注意，`mocha.opts` 在 Mocha 的 `v8.x` 中已经被移除不支持了，老项目尤其要注意改造！

更多阅读：

- [CONFIGURING MOCHA (NODE.JS)](https://mochajs.org/#configuring-mocha-nodejs)
- [MERGING](https://mochajs.org/#merging)
- [--config \<path\>](https://mochajs.org/#-config-path)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 使用 configuration 配置文件

在 mocha `v6.0.0` 之后，使用 configuration 配置文件来代替 mocha.opts 文件，详见： [CONFIGURING MOCHA (NODE.JS)](https://mochajs.org/#configuring-mocha-nodejs) 。

支持多种文件的格式，使用 `--config <path>` 可以指定自定义路径，默认情况下会从执行命令的当前目录（一般情况是 `package.json` 文件的目录，因为我们大多数会用 `script` 命令来执行）寻找。如果该目录下有多个文件，则优先级为：

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

### 2.2 使用自定义命令覆盖配置文件

本例中 [.mocharc.yml](./.mocharc.yml) 定义的输出报告采用了 `mochawesome` ，我们也可以通过 `command-line` 参数来覆盖，例如：

```bash
$ npx mocha --reporter dot
```

### 2.3 禁用配置文件

即便项目中定义了 [.mocharc.yml](./.mocharc.yml) ，你也可以 [--config \<path\>](https://mochajs.org/#-config-path) 来禁用它。

```bash
$ npx mocha --no-config
```