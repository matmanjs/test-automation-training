# 07.set-screen-shot

matman 支持对网页进行截图，具体的设置方法如下。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 demo_bool.js

matman 支持进行页面截图，需要使用 `setScreenshotConfig` 进行开启。

使用方法（完整代码请查看 [demo_bool.js](./demo_bool.js)）：

```js
// 设置截屏
// 设置为 true 开启截屏
await pageDriver.setScreenshotConfig(true);
```

体验方式：

```bash
$ node demo_bool.js
```

### 2.2 demo_string.js

matman 支持对截图的文件名进行自定义，需要传入文件的完整名称（包括 `后缀`，且目前仅支持 `PNG`）。

使用方法（完整代码请查看 [demo_string.js](./demo_string.js)）：

```js
// 设置截屏
// 当传入的参数为字符串时, 指定的为生成文件的文件名, 需要注意的是需要指定后缀, 且必须为 PNG
await pageDriver.setScreenshotConfig('screenShot.png');
```

体验方式：

```bash
$ node demo_string.js
```

### 2.1 demo_object.js

matman 支持用对象设置具体的截屏参数，可以使用 `clip` 属性指定截屏的区域，这里我们需要注意的是 `clip` 与 `fullPage` 不能同时设置。

使用方法（完整代码请查看 [demo_object.js](./demo_object.js)）：

```js
// 设置截屏
// clip 属性指定截图的区域
// fullPage 属性指定是否截取全屏, 还是截取可视区域
// 需要注意的是 clip 和 fullPage 不能同时设置
// path 指定的为生成文件的文件名, 需要注意的是需要指定后缀, 且必须为 PNG
await pageDriver.setScreenshotConfig({
  path: 'temp.png',
  clip: {
    x: 200,
    y: 200,
    width: 800,
    height: 500,
  },
  fullPage: false,
});
```

体验方式：

```bash
$ node demo_object.js
```

