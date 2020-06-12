# 32.setup-and-teardown

有些时候我们需要在测试之前或者测试完成之后做一些自定义的事情，此时可以通过 `--file`

- [--file <file|directory|glob>](https://mochajs.org/#-file-filedirectoryglob)
- [Mocha — Global Setup and Teardown (before/after)](https://futurestud.io/tutorials/mocha-global-setup-and-teardown-before-after)


## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

当测试文件在 `test` 目录下时，无需指定 `test` 目录，再加上 `--recursive` 参数，这样就能执行 `test` 子目录中的测试文件了。

> 业界普遍将 `test` 目录作为测试文件目录，建议大家也按此规定来。

```bash
$ npx mocha --recursive
```

但如果测试文件不是在 `test` 目录下，例如在 `test-other-folder` 中，则执行命令中需要追加文件目录：

```bash
$ # 执行 test-other-folder 下的测试用例
$ npx mocha test-other-folder --recursive

$ # 执行 test-other-folder/dir 下的测试用例
$ npx mocha test-other-folder/dir --recursive
```
