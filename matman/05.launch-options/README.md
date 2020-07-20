# 05. launch-options

matman 的 `launch` 启动函数的配置项目介绍。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 demo_delay_before_run.js

matman 支持在启动前进行一段时间的等待，以便进行一些其他的处理工作。只需要在 launch 函数中传入 `delayBeforeRun` 参数即可，单位为 `ms`。

使用方法（完整代码请查看 [demo_delay_before_run.js](./demo_delay_before_run.js)）：

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
// delayBeforeRun 配置项将在指定时间后再启动测试, 可用于一些需要准备的任务
const pageDriver = matman.launch(new BrowserRunner(), {
  delayBeforeRun: 5000,
});
```

体验方式：

```bash
$ node demo_delay_before_run.js
```

### 2.2 demo_executable_path.js

matman 支持使用其他支持 DevTools 协议的浏览器进行调试。只需要在 launch 函数中传入 `executablePath` 参数即可，需要注意的是在使用 Firefox 时不可以使用 `正式版`，请使用 `Nightly` 版本。

使用方法（完整代码请查看 [demo_executable_path.js](./demo_executable_path.js)）：

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
// executablePath 配置项将指定你需要使用的浏览器, 需要注意的是在使用 firefox 时不可以使用正式版, 请使用 Nightly 版本
// 注意本地运行时, 请切换为你自己的路径
const pageDriver = matman.launch(new BrowserRunner(), {
  executablePath:
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
});
```

体验方式：

```bash
$ node demo_executable_path.js
```

### 2.3 demo_show.js

matman 支持不使用无头模式运行浏览器。只需要在 launch 函数中传入 `show` 参数即可，我们一般使用时搭配 `doNotCloseBrowser` 选项，不关闭浏览器，以便进行调试。

使用方法（完整代码请查看 [demo_show.js](./demo_show.js)）：

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
// show 选项将展示浏览器页面, 这对于调试非常有用
// 通常需要搭配 doNotCloseBrowser 选项不关闭浏览器
const pageDriver = matman.launch(new BrowserRunner(), {
  show: true,
  doNotCloseBrowser: true,
});
```

体验方式：

```bash
$ node demo_show.js
```

### 2.4 demo_tag.js

matman 支持保存多个版本的结果快照。只需要在 launch 函数中传入 `tag` 参数即可。

使用方法（完整代码请查看 [demo_tag.js](./demo_tag.js)）：

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
// tag 配置项将体现在产物的名字中, 作为文件名的后缀添加, 区分不同版本
const pageDriver = matman.launch(new BrowserRunner(), { tag: '2020-07-13' });
```

体验方式：

```bash
$ node demo_tag.js
```

### 2.5 demo_use_recorder.js

matman 支持使用记录器，拦截 `console` 与 `request`。只需要在 launch 函数中传入 `useRecorder` 参数即可。

使用方法（完整代码请查看 [demo_use_recorder.js](./demo_use_recorder.js)）：

```js
// 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
// useRecorder 配置项将启动网络、console 等事件记录器, 自动抓取请求信息, 可用于 CGI 检测, 请谨慎启用
const pageDriver = matman.launch(new BrowserRunner(), { useRecorder: true });
```

体验方式：

```bash
$ node demo_use_recorder.js
```