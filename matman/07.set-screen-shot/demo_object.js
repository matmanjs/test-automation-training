const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async () => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = matman.launch(new BrowserRunner());

  // 设置截屏
  // clip 属性指定截图的区域
  // fullPage 属性指定是否截取全屏, 还是截取可视区域
  // 需要注意的是 clip 和 fullPage 不能同时设置
  // path 指定的为生成文件的文件名, 需要注意的是需要指定后缀, 且必须为 PNG
  await pageDriver.setScreenshotConfig({
    path: 'temp.png',
    clip: {
      x: 200,
      y: 200,
      width: 800,
      height: 500,
    },
    fullPage: true,
  });

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.baidu.com');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor('#su');
  });

  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      title: document.title,
    };
  });
};

module
  .exports()
  .then(function (result) {
    console.log(JSON.stringify(result));
  })
  .catch(function (error) {
    console.error('failed:', error);
  });
