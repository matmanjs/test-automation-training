# 06.set-cookie

matman 中针对 `cookie` 设置的几种方式。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 demo_string.js

matman 支持使用字符串设置浏览器的 `Cookie`，需要传入符合 Cookie 规范的字符串。

使用方法（完整代码请查看 [demo_string.js](./demo_string.js)）：

```js
// 设置 cookie
await pageDriver.setCookieConfig('mykey1=myvalue1; mykey2=myvalue2');
```

体验方式：

```bash
$ node demo_string.js
```

### 2.2 demo_object.js

matman 支持使用 `Object` 设置浏览器的 `Cookie`，其中 `key` 为 Cookie 键，`value` 为 Cookie 的值。

使用方法（完整代码请查看 [demo_object.js](./demo_object.js)）：

```js
// 设置 cookie
await pageDriver.setCookieConfig({ mykey1: 'myvalue1', mykey2: 'myvalue2' });
```

体验方式：

```bash
$ node demo_object.js
```

### 2.3 demo_array.js

matman 支持使用 `Array` 设置浏览器的 `Cookie`，可以对 Cookie 的过期时间，安全配置进行设置，具体的配置项 [参考](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v3.1.0&show=api-pagecookiesurls)。

使用方法（完整代码请查看 [demo_array.js](./demo_array.js)）：

```js
// 设置 cookie
// 还支持 domain expires 等配置, 请参考 https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v3.1.0&show=api-pagecookiesurls
await pageDriver.setCookieConfig([
  {
    name: 'mykey1',
    value: 'myvalue1',
  },
  {
    name: 'mykey2',
    value: 'myvalue2',
    httpOnly: true,
  },
]);
```

体验方式：

```bash
$ node demo_array.js
```

