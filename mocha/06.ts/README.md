# 06.ts

针对 TypeScript 项目，也是需要一些特别的处理。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

需要安装：

```bash
$ npm install typescript ts-mocha @types/mocha @types/chai @types/expect --save-dev
```


这样就可以通过如下命令执行自动化测试了：

```bash
$ npx ts-mocha -p tsconfig.json test/**/*.test.ts
```
