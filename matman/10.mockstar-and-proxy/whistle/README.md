# whistle 配置

whistle 官方文档： https://wproxy.org/whistle/ 。

## 启动 whistle

一般情况使用 `w2 start` 启动项目即可，如果需要制定端口，可以使用 `-p` 来指定端口，例如 `w2 start -p 8080` 。

目前已经提供了两个 npm script 命令：

``` 
# 本地开发模式
$ npm run start-dev

# 生产构建模式
$ npm run start-prod
```


## 使用自定义规则的生成文件

语法规则： `w2 add [filepath]` 。详见： https://wproxy.org/whistle/cli.html 。

推荐如下实践：

- 因为可能有多个规则文件，因此规则文件放置在 `rules` 目录下集中管理；
- 规则文件命名规则为 `whistle.xxx.js` ，例如 `whistle.dev.js` 和 `whistle.prod.js` ； 


## 提供给自动化测试的接口

在 `index.js` 里面提供了两个方法，可以动态生成代理规则，不同的项目需要自行进行更改。