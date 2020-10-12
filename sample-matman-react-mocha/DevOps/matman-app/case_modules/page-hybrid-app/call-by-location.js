const { createPageDriver } = require('../../helpers');
const { WAIT } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver
  const pageDriver = await createPageDriver(__filename, pageDriverOpts);

  await pageDriver.setPageUrl('http://now.qq.com/hybrid-app');

  // 第一步：开始操作之前
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor(WAIT.READY);
  });

  // 第二步：点击使用 location 调用 jsbridge
  await pageDriver.addAction('clickJsBridge', async (page) => {
    await page.click('#call-by-location');
  });

  return pageDriver.evaluate(() => ({
    remarks: '调试使用 location 调用 jsbridge',
  }));
};

// module
//   .exports({
//     show: true,
//     doNotCloseBrowser: true,
//     useRecorder: true,
//   })
//   .then(function (result) {
//     console.log(JSON.stringify(result));
//   })
//   .catch(function (error) {
//     console.error('failed:', error);
//   });
