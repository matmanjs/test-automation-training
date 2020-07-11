const matman = require('matman');

matman

  // 创建 Browser 对象，使用它对浏览器进行设置
  .launch({ show: true })

  // 创建 Page 对象，使用它可以实现对浏览器页面的控制
  .newPage(__filename)

  // 设置浏览器参数
  .setDeviceConfig('pc')

  // 设置截屏
  .setScreenshotConfig(true)

  // 加载页面地址
  .goto('https://www.baidu.com')

  // 需要等待某些条件达成，才开始运行爬虫脚本
  .wait('#su')

  // 爬虫脚本的函数，用于获取页面中的数据
  .evaluate(() => {
    return {
      title: document.title,
      width: window.innerWidth,
      height: window.innerHeight,
      userAgent: navigator.userAgent
    };
  })

  // 结束，获取结果
  .end()
  .then((data) => {
    console.log('==执行成功==');
    console.log(data);
  })
  .catch((err) => {
    console.log('==执行失败==');
    console.error(err);
  });


