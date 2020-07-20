# 09.matman-config

matman 配置项目解释。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

> 具体的配置可以 [参考](https://matmanjs.github.io/matman/api/matman-config.html)

### 2.1 在 case 中配置

> 我们不推荐使用这种方式

在 launch 函数中的第三个参数中传入，这里配置的优先级最高，将覆盖配置文件中的配置。

样例如下（具体可以参考 [demo.js](./demo.js)）：

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
// 我们可以在 lunch 的第三个参数中传递 matman 的配置
// 不过一般不推荐你这样做
// 请在项目根目录中新建 matman.config.js 文件并在其中写入配置
// 更多配置说明, 请参考 https://matmanjs.github.io/matman/api/matman-config.html
const pageDriver = matman.launch(
  new BrowserRunner(),
  {},
  {
    // 自动注入 JQuery
    crawlerInjectJQuery: true,
    // 开发模式运行
    isDevBuild: true,
  }
);
```

### 2.2 matman 配置文件（matman.config.js）

> 推荐在根目录下新建 `matman.config.js` 进行全局的配置

我们再配置文件中以 CommonJS 的形式，默认暴露一个对象。

样例如下（具体可以参考 [matman.config.js](./matman.config.js)）：

```js
// 更多配置说明，请参考 https://matmanjs.github.io/matman/api/matman-config.html
module.exports = {
  rootPath: __dirname,
  crawlerInjectJQuery: true,
};
```

