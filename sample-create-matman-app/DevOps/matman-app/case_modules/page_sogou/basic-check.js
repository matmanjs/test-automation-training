const path = require('path');
const { createPageDriver } = require('../../helpers');
const { BASIC_QUERY_DATA_MAP } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = await createPageDriver(__filename, pageDriverOpts, BASIC_QUERY_DATA_MAP);

  // 设置浏览器打开时所模拟的设备参数
  await pageDriver.setDeviceConfig({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
    viewport: {
      width: 1024,
      height: 520,
    },
  });

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.sogou.com/sogou.html');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor('#btn');
  });

  // 第二步：点击按钮
  await pageDriver.addAction('click', async (page) => {
    await page.click('#btn');
    await page.waitFor('.msg-loaded');
  });

  // 计算并返回结果
  return pageDriver.evaluate(path.join(__dirname, './crawlers/get-page-info.js'));
};

// module
//   .exports({ show: true, doNotCloseBrowser: false, useRecorder: true })
//   .then(function (result) {
//     console.log(JSON.stringify(result));
//   })
//   .catch(function (error) {
//     console.error('failed:', error);
//   });
