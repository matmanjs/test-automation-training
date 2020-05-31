# 02.mocha-test-directory

默认情况下， mocha 会寻找 `./test/*.js` 文件，即 `test` 文件夹下的 `js` 文件。如果需要包含子目录，则需要额外传递 `--recursive` 参数。

- [THE TEST/ DIRECTORY](https://mochajs.org/#the-test-directory)
- [--recursive](https://mochajs.org/#-recursive)


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