const path = require('path');
const { createPageDriver } = require('../../helpers');
const { BASIC_QUERY_DATA_MAP, WAIT } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver
  const pageDriver = await createPageDriver(__filename, pageDriverOpts, BASIC_QUERY_DATA_MAP);

  // 本页面实际需要有登录态信息，自动化测试时手动设置 cookie
  await pageDriver.setCookieConfig('myuin=123456');

  await pageDriver.setPageUrl('http://now.qq.com/withdraw');

  // 第一步：开始操作之前
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor(WAIT.READY);
  });

  // 第二步：选中【5元】
  await pageDriver.addAction('selectQuota', async (page) => {
    await page.click('#root .display-withdraw .display-withdraw-quotas .selection .i0');
  });

  // 第三步：点击【确定】按钮
  await pageDriver.addAction('clickSubmit', async (page) => {
    await page.click('#root .display-withdraw .withdraw-submit .now-button');
    await page.waitFor(500);
  });

  // 第四步：点击弹窗中的【确定】按钮
  await pageDriver.addAction('clickDlgOk', async (page) => {
    await page.click('.base-alert .dialog-inner .dialog-buttons .dialog-btn.ok');
  });

  return pageDriver.evaluate(path.resolve(__dirname, './crawlers/get-page-info.js'));
};

// module
//   .exports({
//     show: true,
//     doNotCloseBrowser: true,
//     useRecorder: true,
//     queryDataMap: {
//       withdraw_money: 'error_20_active_empty',
//     },
//   })
//   .then(function (result) {
//     console.log(JSON.stringify(result));
//   })
//   .catch(function (error) {
//     console.error('failed:', error);
//   });
