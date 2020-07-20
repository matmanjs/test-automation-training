# 10.mockstar-and-proxy

简单的 matman 示例。

## 1. 安装

```bash
# 安装 matman
$ npm install

# 安装 mockstar
$ cd mockstar-app && npm install
```

## 2. 启动项目

```bash
# 设置 whistle 代理
$ cd whistle && npm run start-prod

# 启动 mockstar
$ cd ../mockstar-app && npm start

# 启动项目
$ cd .. && node index.js
```

## 3. 示例说明

> 这里只是为了说明 matman 的 API，[whistle](https://wproxy.org/whistle/) 与 [mockstar](https://mockstarjs.github.io/mockstar/) 请分别参考其官网。

### 3.1 设置代理

使用 `useProxyServer` 这个 API，可以为浏览器设置代理，进行同源测试。

```js
// 为测试设置代理, 与浏览器中启动 SwitchyOmega 是一样的效果
await pageDriver.useProxyServer('127.0.0.1:8899');
```

### 3.2 设置 mockstar 返回结果

- 这个函数必须搭配 `mockstar` 使用，可以指定不同 `mocker` 的返回结果
- 接受的参数为一个对象
- key 为 mocker 名称，value 为需要返回的数据名称

```js
// 这个函数必须搭配 mockstar 使用, 其可以指定不同 mocker 的返回结果
// 接受的参数为一个对象
// key: mocker 名称 value: 需要返回的数据名称
await pageDriver.useMockstar({
  demo2: 'success_type_1',
  demo_cgi: 'error_100000',
});
```

