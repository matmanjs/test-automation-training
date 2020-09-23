const path = require('path');
const { createPageDriver } = require('../../helpers');
const { BASIC_QUERY_DATA_MAP, WAIT, PAGE_URL } = require('./env');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = await createPageDriver(
    __filename,
    pageDriverOpts,
    BASIC_QUERY_DATA_MAP
  );

  // 设置浏览器设备型号
  await pageDriver.setDeviceConfig('pc');

  // 设置页面地址
  await pageDriver.setPageUrl(PAGE_URL);

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor(WAIT.READY);
  });

  // 第二步：点击 ”搜索 yyx990803“ 按钮
  await pageDriver.addAction('click_search_btn_01', async (page) => {
    await page.click(
      '#app .hello .search-github .search-actions .search-btn.btn01'
    );

    await page.waitFor(1000);

    await page.waitFor(
      '#app .hello .search-github .search-result .search-preview-keyword'
    );
  });

  // 第三步：点击 ”搜索 matmanjs“ 按钮
  await pageDriver.addAction('click_search_btn_02', async (page) => {
    await page.click(
      '#app .hello .search-github .search-actions .search-btn.btn02'
    );

    await page.waitFor(1000);

    await page.waitFor(
      '#app .hello .search-github .search-result .search-preview-keyword'
    );
  });

  // 执行并获取结果
  return pageDriver.evaluate(
    path.join(__dirname, './crawlers/get-page-info.js')
  );
};

// 调试专用：取消注释，执行 node xxx.js 即可
// module
//   .exports({
//     show: true,
//     doNotCloseBrowser: false,
//     useRecorder: true,
//   })
//   .then(function(result) {
//     console.log(JSON.stringify(result));
//   })
//   .catch(function(error) {
//     console.error('failed:', error);
//   });
