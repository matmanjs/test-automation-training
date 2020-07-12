const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = await matman.launch(new BrowserRunner(), pageDriverOpts);

  // 设置浏览器打开时所模拟的设备参数
  await pageDriver.setDeviceConfig('mobile');

  // 设置截屏
  await pageDriver.setScreenshotConfig(true);

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.baidu.com');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async page => {
    await page.waitFor('#index-bn');
  });

  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      title: document.title,
      width: window.innerWidth,
      height: window.innerHeight,
      userAgent: navigator.userAgent,
      searchBtnTxt: document.querySelector('#index-bn').innerText,
    };
  });
};

module
  .exports({ show: true, doNotCloseBrowser: true, useRecorder: false })
  .then(function (result) {
    console.log(JSON.stringify(result));
  })
  .catch(function (error) {
    console.error('failed:', error);
  });
