# 04.device-emulation

使用 matman 可以很方便实现设备仿真，即指定无头浏览器的视窗大小。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

matman 内置了多种预定义的设备仿真，包括  `mobile` 和 `pc`，未来会扩展更多机型。如果当前已预定义的设备类型无法满足您的诉求，您完全可以自定义设置包括 `userAgent` 和浏览器宽高等参数。

> 需要特别注意的是，有些页面会自适应的，同样一个网也，会因为 `userAgent` 和浏览器宽高不一样，可能会有不一样的布局。因此在实际使用过程中，需要按情况处理。例如我们的示例中，[demo_mobile.js](./demo_pc.js) 和 [demo_pc.js](./demo_pc.js) 都是打开了百度首页，但是网页展示有明显区别（例如搜索按钮的 `id` 就已经不一样），您可以启动 demo 进行体验便知。


### 2.1 demo_mobile.js

matman 内置了多种预定义的设备仿真，其中 `mobile` 便是其中之一。`mobile` 适用于移动端测试场景，是 `iPhone 6` 的尺寸。

> iphone6 尺寸为 `375*667`，但是 nightmare 中滚动条的缘故，因此预定义的浏览器尺寸为 `414*760` 。

```
{
    'UA': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 nightmare',
    'width': 414,
    'height': 760
}
```

使用方式（完整代码请查看 [demo_mobile.js](./demo_mobile.js)）：

```js
page.setDeviceConfig('mobile')
```

体验方式：

```bash
$ node demo_mobile.js
```

### 2.2 demo_pc.js

matman 内置了多种预定义的设备仿真，其中 `pc` 便是其中之一。`pc` 适用于 PC 测试场景。

```
{
    'UA': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 nightmare',
    'width': 1280,
    'height': 800
}
```

使用方式（完整代码请查看 [demo_pc.js](./demo_pc.js)）：

```js
page.setDeviceConfig('pc')
```

体验方式：

```bash
$ node demo_pc.js
```

### 2.3 demo_custom.js

可以自行定义设备参数，传递一个对象，包括:

 - `UA`：`String`，会设置到 `navigator.userAgent` 中
 - `width`：`Number`，浏览器宽度
 - `height`：`Number`，浏览器高度

使用方式（完整代码请查看 [demo_custom.js](./demo_custom.js)）：

```js
page.setDeviceConfig({
  'UA': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
  'width': 1250,
  'height': 400
})
```

体验方式：

```bash
$ node demo_custom.js
```