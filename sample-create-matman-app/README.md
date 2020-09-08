# create-matman-app 的 mocha 模板

本项目是由 [create-matman-app](https://www.npmjs.com/package/create-matman-app) 的默认模板初始化生成，相应的初始化命令如下：

```
$ npx create-matman-app matman-app
```

## 1. 项目介绍

本项目包含了一个简单的 web 端对端测试示例，构造了一个 https://www.sogou.com/sogou.html 页面来演示最简单的一套 web 端对端测试的同源测试方案。

其中涉及到的框架和工具包括但不限于如下，更多资料请请查阅 [脚手架：create-matman-app 使用指南](https://matmanjs.github.io/matman/tool/create-matman-app.html) 。

- 测试框架：[Mocha](https://mochajs.org/) 
- 断言库：[Chai](https://www.chaijs.com/)
- 代理工具：[Whistle](https://github.com/avwo/whistle)
- mock 工具：[MockStar](https://github.com/mockstarjs/mockstar)
- web 端对端测试框架：[Matman](https://github.com/matmanjs/matman)


## 2. 命令

本项目是一个可以完整运行的项目，首先需要安装依赖：

```bash
$ npm install
```

### 2.1 直接运行测试命令

直接运行如下命令之后，则开始自动执行测试命令，其过程包括了（详见 `test/run-e2e-test.js` 文件）：

- 第一步：构建项目
- 第二步：启动 mockstar，用于本地构建 mock server
- 第三步：启动 whistle 并设置代理规则
- 第四步：启动 matman，提供了无头浏览器，用于 web 端对端测试时被测试文件调用
- 第五步：使用 mocha 执行测试文件

```bash
# 执行 web 端对端测试
$ npm run test:e2e

# 执行 web 端对端测试，同时展示无头浏览器，可用于调试
$ npm run test:e2e:show
```

### 2.2 开发调试

自动化测试过程根据不同项目特点，可能包括很多步骤，例如 2.1 章节中提到的五步。但从分阶段来看，无外乎分为两个阶段：

- 准备测试环境阶段，即 Server Under Test 阶段，简称 SUT，上述的第 1-4 步属于此阶段
- 执行测试文件阶段，即使用 Mocha 或者 Jest 执行测试命令，上述的第 5 步属于此阶段

#### 2.2.1 准备测试环境

开发调试阶段时，准备测试环境可以通过自定义自动化脚本来启动，也可以人工启动。

> 检查是否已经准备好的办法：可以打开 `https://www.sogou.com/sogou.html` 页面，同时设置浏览器走代理服务器 `http://127.0.0.1:8899`，检查加载情况是否正常。

##### 2.2.1.1 方式一：自动化脚本准备（推荐）

```bash
# 本地开发版本的自动化测试准备
$ npm run test:e2e:bootstrap:dev

# 生产版本的自动化测试准备
$ npm run test:e2e:bootstrap
```

##### 2.2.1.2 方式二：人工准备

即按照 2.1 章节提到的第 1-4 步 执行，适合在开发调试时使用，具体来说为：

- 启动项目构建，在本例中，执行 `npm run build-dev` 启动本地调试，执行 `npm run build-prod` 启动生产版本构建
- 进入到 `DevOps/mockstar-app` 目录下，首先执行 `npm install` 安装依赖，然后执行 `npm start` 启动 mock server 服务（默认 mock server 服务地址为： `http://127.0.0.1:9527`）
- 执行 `w2 start` 启动 whistle （需要全局安装 `npm install whistle -g`，默认代理服务地址：`http://127.0.0.1:8899`），同时设置好代理规则。在本例中，进入到 `DevOps/whistle` 目录下，执行 `npm run use-dev` 使用本地调试代理，执行 `npm run use-prod` 启动生产版本代理
- 进入到 `DevOps/mockstar-app` 目录下，执行 `npm install` 安装依赖

> 虽然步骤很多，但是如果你目前正处于开发阶段，那么这些步骤实际上已经被执行过了。


#### 2.2.2 执行测试文件

```bash
# 使用 mocha 执行测试文件
$ npm run test:e2e:direct
```

## 3. 设置代理

本项目提供的 `https://www.sogou.com/sogou.html` 页面并非实际存在页面，我们需要借助代理来访问，通过自定义自动化脚本来动态设置，也可以手动设置。

### 3.1 方式一：动态设置代理

推荐使用 [whistle](https://github.com/avwo/whistle) 来设置代理，运行如下命令自动设置代理，具体可以阅读 [DevOps/whistle/README.md](./DevOps/whistle/README.md) 。

```
# 开发场景
$ npm run use-whistle-dev

# 生产环境
$ npm run use-whistle-prod
```

### 3.2 方式二：手动设置代理

也可以自己手动设置，其中 `[project_path]` 为本地项目的绝对路径，需要按实际情况替换。

场景一： 开发场景，代理如下：

```
www.sogou.com/cgi-bin/a/b/demo_cgi 127.0.0.1:9527
www.sogou.com/sogou.html [project_path]/build/sogou.html
www.sogou.com/sogou.dev.bundle.js [project_path]/build/sogou.dev.bundle.js
```

场景二： 生产环境，代理如下：

```
www.sogou.com/cgi-bin/a/b/demo_cgi 127.0.0.1:9527
www.sogou.com/sogou.html [project_path]/build/sogou.html
www.sogou.com/sogou.prod.bundle.js [project_path]/build/sogou.prod.bundle.js
```

## 4. 反馈

更多文档请阅读 [官方指南](https://matmanjs.github.io/matman/) ，欢迎给我们 [提issue](https://github.com/matmanjs/matman/issues) 和 [star](https://github.com/matmanjs/matman) 。
