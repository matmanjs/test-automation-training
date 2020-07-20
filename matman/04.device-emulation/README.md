# 04.device-emulation

使用 matman 可以很方便实现设备仿真，即指定无头浏览器的视窗大小。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

matman 内置了多种预定义的设备仿真，包括  `mobile` 和 `pc`，未来会扩展更多机型。如果当前已预定义的设备类型无法满足您的诉求，您完全可以自定义设置包括 `userAgent` 和浏览器宽高等参数。

### 2.1 demo_default.js

我们内置一套配置，可以简单地启动与使用，我们内置的配置为：

```js
const DEVICE_CHROME = {
  name: 'Chrome',
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36 matman/DEVICE_CHROME',
  viewport: {
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false,
  },
};
```

使用方法（完整代码请查看 [demo_default.js](./demo_default.js)）：不进行设置

体验方式：

```bash
$ node demo_default.js
```

### 2.2 demo_mobile.js

matman 内置了多种预定义的设备仿真，其中 `mobile` 便是其中之一。`mobile` 适用于移动端测试场景，是 `iPhone 6` 的尺寸。

使用方式（完整代码请查看 [demo_mobile.js](./demo_mobile.js)）：

```js
// 设置浏览器打开时所模拟的设备参数
await pageDriver.setDeviceConfig('mobile');
```

体验方式：

```bash
$ node demo_mobile.js
```

### 2.3 demo_defined_device.js

matman 内置了多种预定义的设备仿真，具体的预定义可以 [参考](https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts)。

使用方式（完整代码请查看 [demo_defined_device.js](./demo_defined_device.js)）：

```js
// 设置浏览器打开时所模拟的设备参数
await pageDriver.setDeviceConfig('iPhone XR');
```

体验方式：

```bash
$ node demo_defined_device.js
```

### 2.4 demo_custom.js

可以自行定义设备参数，传递一个对象，包括:

 - `UA`：`String`，会设置到 `navigator.userAgent` 中
 - `width`：`Number`，浏览器宽度
 - `height`：`Number`，浏览器高度

使用方式（完整代码请查看 [demo_custom.js](./demo_custom.js)）：

```js
// 设置浏览器打开时所模拟的设备参数
await pageDriver.setDeviceConfig({
  name: 'custom',
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36 matman/custom',
  viewport: {
    width: 888,
    height: 666,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false,
  },
});
```

体验方式：

```bash
$ node demo_custom.js
```



