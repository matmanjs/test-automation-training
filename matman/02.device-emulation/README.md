# 02.device-emulation

使用 matman 可以很方便实现设备仿真，即指定无头浏览器的视窗大小。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 预定义支持的设备

内置了 `mobile` 和 `pc` 两种（计划未来扩展多种，按照机型）：

`mobile` 适用于移动端测试场景，是 iPhone 6 的尺寸。

> iphone6 尺寸为 `375*667`，但是 nightmare 中滚动条的缘故，实际尺寸应该修改为 `414*760`

```
{
    'UA': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 nightmare',
    'width': 414,
    'height': 760
}
```

`pc` 适用于 PC 测试场景。

```
{
    'UA': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 nightmare',
    'width': 1280,
    'height': 800
}
```

使用方式为：

```js
setDeviceConfig('mobile')
setDeviceConfig('pc')
```

体验方式：

```bash
$ node demo_mobile.js
$ node demo_pc.js
```


### 2.2 自定义设备参数

可以自行定义设备参数，传递一个对象，包括 `UA`、`width` 和 `height`。


使用方式为：

```js
setDeviceConfig({
  'UA': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
  'width': 1250,
  'height': 400
})
```

体验方式：

```bash
$ node demo_custom.js
```