const path = require('path');
const { createPageDriver } = require('../../helpers');
const { BASIC_QUERY_DATA_MAP, WAIT } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver
  const pageDriver = await createPageDriver(__filename, pageDriverOpts, BASIC_QUERY_DATA_MAP);

  // 设置页面地址
  await pageDriver.setPageUrl('http://now.qq.com/transaction');

  // 增加自定义动作
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor(WAIT.READY);
  });

  // 获取结果
  return await pageDriver.evaluate(path.resolve(__dirname, './crawlers/get-page-info.js'));
};

// module
//   .exports({
//     show: true,
//     doNotCloseBrowser: true,
//     useRecorder: true,
//     queryDataMap: {
//       get_flow: 'success_basic',
//       // get_flow: 'success_empty',
//     },
//   })
//   .then(function (result) {
//     console.log(JSON.stringify(result));
//   })
//   .catch(function (error) {
//     console.error('failed:', error);
//   });
