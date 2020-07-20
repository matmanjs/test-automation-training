# 03.crawler-inject-jquery

为了更便于爬取 dom 上的信息，我们提供了参数，支持配置注入 jQuery。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 通过参数的方式注入 jQuery

当传入 `crawlerInjectJQuery` 为 `true` 值时，我们将为您注入 jQuery `v3.3.1` 脚本。

> 特别注意，有些页面本身就可能有 jQuery，如果设置了 `crawlerInjectJQuery=true` ，则注入新的 jQuery可能会导致业务出问题。例如 `https://www.baidu.com` 本身就有 jQuery，且做了部分定制，因此我们这个 demo 才放弃了拿 `https://www.baidu.com` 举例。

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
const pageDriver = await matman.launch(new BrowserRunner(), pageDriverOpts, {
  crawlerInjectJQuery: true
});
```

注入之后，您可以直接使用 `$` 和 `jQuery`:

```js
// 计算并返回结果
return pageDriver.evaluate(() => {
  return {
    title: document.title,
    navIndexTitle: $('#js_N_nav .ntes-nav-index-title').text(),
    firstNavName: jQuery('#js_N_nav .js_N_navSelect a:eq(0)').text()
  };
});
```

### 2.2 通过 matman.config.js 方式注入 jQuery

如果项目中爬虫脚本都需要 jQuery，还可以在根目录增加 `matman.config.js` 文件，用于简化配置：

```js
// 更多配置说明，请参考 https://matmanjs.github.io/matman/api/matman-config.html
module.exports = {
  rootPath: __dirname,
  crawlerInjectJQuery: true
};
```
