# 02.individual-crawler-script

使用独立的爬虫脚本，不仅有助于代码的复用，而且还支持使用第三方 npm 包和模块，可完成更复杂页面信息爬取工作，脚本代码也更易于维护。

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 改造为爬虫脚本

我们在 [01.getting-started](../01.getting-started) 的基础上，将其改造为爬虫脚本模式，看看有什么区别。

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