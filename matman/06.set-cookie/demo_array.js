const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async () => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = matman.launch(new BrowserRunner());

  // 设置 cookie
  // 还支持 domain expires 等配置, 请参考 https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v3.1.0&show=api-pagecookiesurls
  await pageDriver.setCookieConfig([
    {
      name: 'mykey1',
      value: 'myvalue1',
    },
    {
      name: 'mykey2',
      value: 'myvalue2',
      httpOnly: true,
    },
  ]);

  // 设置截屏
  await pageDriver.setScreenshotConfig(true);

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.baidu.com');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor('#su');
  });

  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      cookie: document.cookie,
    };
  });
};

module
  .exports()
  .then(function (result) {
    console.log(JSON.stringify(result));
  })
  .catch(function (error) {
    console.error('failed:', error);
  });
