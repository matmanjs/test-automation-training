const { createPageDriver } = require('../../helpers');

module.exports = async (pageDriverOpts) => {
  // 创建 PageDriver
  const pageDriver = await createPageDriver(__filename, pageDriverOpts);

  // 设置浏览器参数
  await pageDriver.setDeviceConfig({
    name: 'mydevice',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
    viewport: {
      width: 1250,
      height: 400,
    },
  });

  await pageDriver.setPageUrl('http://now.qq.com/debug');

  await pageDriver.addAction('init', async (page) => {
    await page.waitFor('#debug-ua .ua');
  });

  return pageDriver.evaluate(() => ({
    remarks: '调试UA',
    ua: document.querySelector('#debug-ua .ua').innerText,
    title: document.title,
    width: window.innerWidth,
    height: window.innerHeight,
  }));
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
