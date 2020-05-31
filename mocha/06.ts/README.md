# 06.ts

针对 TypeScript 项目，也是需要一些特别的处理。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 使用 ts-node

使用 [ts-node](https://www.npmjs.com/package/ts-node)，参考 https://www.npmjs.com/package/ts-node#mocha ：

> 特别注意：`'test/**/*.{ts,tsx}'` 是包括了单引号的，如果不加单引号，则无法正常执行子目录下的测试文件。

```bash
$ npx mocha --require ts-node/register 'test/**/*.{ts,tsx}'
```


### 2.2 使用 ts-mocha

使用 [ts-mocha](https://www.npmjs.com/package/ts-mocha)：

> 特别注意：`'test/**/*.test.ts'` 是包括了单引号的，如果不加单引号，则无法正常执行子目录下的测试文件。

```bash
$ npx ts-mocha -p tsconfig.json 'test/**/*.test.ts'
```
