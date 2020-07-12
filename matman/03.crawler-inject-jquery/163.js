const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = await matman.launch(new BrowserRunner(), pageDriverOpts, {
    crawlerInjectJQuery: true
  });

  // 设置浏览器打开时所模拟的设备参数
  await pageDriver.setDeviceConfig({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
    viewport: {
      width: 1024,
      height: 520
    }
  });

  // 设置截屏
  await pageDriver.setScreenshotConfig(true);

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.163.com');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async page => {
    await page.waitFor('#js_N_nav');
  });

  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      title: document.title,
      navIndexTitle: $('#js_N_nav .ntes-nav-index-title').text(),
      firstNavName: jQuery('#js_N_nav .js_N_navSelect a:eq(0)').text()
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
