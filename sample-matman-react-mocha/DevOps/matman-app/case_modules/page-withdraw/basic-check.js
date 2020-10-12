const path = require('path');
const { createPageDriver } = require('../../helpers');
const { BASIC_QUERY_DATA_MAP, WAIT } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver
  const pageDriver = await createPageDriver(__filename, pageDriverOpts, BASIC_QUERY_DATA_MAP);

  // 本页面实际需要有登录态信息，自动化测试时手动设置 cookie
  await pageDriver.setCookieConfig('myuin=123456');

  // 设置页面地址
  await pageDriver.setPageUrl('http://now.qq.com/withdraw');

  // 增加自定义动作
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor(WAIT.READY);
  });

  // 获取结果
  return pageDriver.evaluate(path.resolve(__dirname, './crawlers/get-page-info.js'));
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
