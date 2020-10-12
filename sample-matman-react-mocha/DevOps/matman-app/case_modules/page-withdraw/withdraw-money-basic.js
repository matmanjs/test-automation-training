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

  // 第二步：还未选择提现金额之前，直接点击【确定】按钮
  await pageDriver.addAction('clickSubmitBeforeSelect', async (page) => {
    await page.click('#root .display-withdraw .withdraw-submit .now-button');
    await page.waitFor(500);
  });

  // 第三步：点击提示没有选择金额的弹窗中的【确定】按钮
  await pageDriver.addAction('clickNotSelectMoneyDlgOk', async (page) => {
    await page.click('.base-alert .dialog-inner .dialog-buttons .dialog-btn.ok');
  });

  // 第四步：选中【30元】
  await pageDriver.addAction('selectQuota30', async (page) => {
    await page.click('#root .display-withdraw .display-withdraw-quotas .selection .i2');
  });

  // 第五步：选中【15元】
  await pageDriver.addAction('selectQuota15', async (page) => {
    await page.click('#root .display-withdraw .display-withdraw-quotas .selection .i1');
  });

  // 第六步：点击【确定】按钮
  await pageDriver.addAction('clickSubmit', async (page) => {
    await page.click('#root .display-withdraw .withdraw-submit .now-button');
    await page.waitFor(500);
  });

  // 第七步：点击弹窗中的【确定】按钮
  await pageDriver.addAction('clickDlgOk', async (page) => {
    await page.click('.base-alert .dialog-inner .dialog-buttons .dialog-btn.ok');
  });

  // 第八步：一秒后再次获取页面状态
  await pageDriver.addAction('lastCheck', async (page) => {
    await page.waitFor(1000);
  });

  return pageDriver.evaluate(path.resolve(__dirname, './crawlers/get-page-info.js'));
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
