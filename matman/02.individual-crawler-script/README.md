# 02.individual-crawler-script

使用独立的爬虫脚本，不仅有助于代码的复用，而且还支持使用第三方 npm 包和模块，可完成更复杂页面信息爬取工作，脚本代码也更易于维护。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 如何改造为爬虫脚本模块

我们在 [01.getting-started](../01.getting-started) 的基础上，将其改造为爬虫脚本模块，看看有什么区别。

改造之前的写法如下：

```js
  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      title: document.title,
      width: window.innerWidth,
      height: window.innerHeight,
      userAgent: navigator.userAgent,
      searchBtnTxt: document.querySelector('#su').value,
      searchKeyWorld: document.querySelector('#kw').value,
      searchResultInfo: (() => {
        const result = [];
        const doms = document.querySelectorAll('#content_left .c-container .t');
        if (doms) {
          doms.forEach(curDom => {
            result.push(curDom.innerText);
          });
        }
        return result;
      })()
    };
  });
```

改造之后的写法变为：

```js
  // 计算并返回结果
  return pageDriver.evaluate(path.resolve(__dirname, './crawlers/get-page-info.js'));
```

同时新增 `./crawlers/get-page-info.js` 文件，内容如下：

```js
function getSearchResultInfo() {
  const result = [];
  const doms = document.querySelectorAll('#content_left .c-container .t');
  if (doms) {
    doms.forEach(curDom => {
      result.push(curDom.innerText);
    });
  }
  return result;
}

module.exports = () => {
  return {
    title: document.title,
    width: window.innerWidth,
    height: window.innerHeight,
    userAgent: navigator.userAgent,
    searchBtnTxt: document.querySelector('#su').value,
    searchKeyWorld: document.querySelector('#kw').value,
    searchResultInfo: getSearchResultInfo()
  };
};
```

其他都保持不变，最后执行过程及结果都不变。由上可以看出，拆解出独立的爬虫脚本模块之后，爬虫脚本更容易阅读和管理（重点注意下 `searchResultInfo: getSearchResultInfo()` 这里的区别）。

### 2.2 独立爬虫脚本模块的高阶应用场景

改造为独立的爬虫脚本模块的意义，绝对不只是将代码移动到独立文件里面而已，而是对于模块和组件的复用，包括自由使用 npm 模块，从而享受 npm 生态。

在 `baidu-v2.js` 这个 demo 里面，引入的是 `./crawlers/get-page-info-v2.js` 文件，我们先看代码：

```js
const _ = require('lodash');
const getPageInfo = require('./get-page-info');

module.exports = () => {
  return _.merge(getPageInfo(), {
    cookie: document.cookie
  });
};
```

关注点一： 这里我们引入了 npm 模块 [lodash](https://www.npmjs.com/package/lodash) ，当然你还可以引入其他的模块，例如我们的 [web-crawl-util](https://www.npmjs.com/package/lodash) 组件提供了常见的一些工具函数，后续 demo 中还会提到，此处略过。

关注点二： 不仅如此，我们还复用了 `./crawlers/get-page-info.js` 这个独立的爬虫脚本模块。这样做的好处可以更好的组织爬虫脚本代码，对于复杂页面尤为方便。