const path = require('path');
const { createPageDriver } = require('../../helpers');
const { WAIT } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver
  const pageDriver = await createPageDriver(__filename, pageDriverOpts);

  await pageDriver.setPageUrl('http://now.qq.com/simple');

  await pageDriver.addAction('init', async (page) => {
    await page.waitFor(WAIT.READY);
  });

  return await pageDriver.evaluate(path.resolve(__dirname, './crawlers/get-page-info-jquery.js'));
};

// module
//   .exports({
//     show: true,
//     doNotCloseBrowser: true,
//     useRecorder: false,
//   })
//   .then(function (result) {
//     console.log(JSON.stringify(result));
//   })
//   .catch(function (error) {
//     console.error('failed:', error);
//   });
