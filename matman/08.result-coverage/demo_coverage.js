const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async () => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = matman.launch(new BrowserRunner());

  // 设置 Coverage 参数, tag 为标签用于区分不同版本, path 用于指定文件名, 需要注意必须指定后缀
  await pageDriver.setCoverageConfig({
    tag: 'mytag',
    path: 'mypath.json',
  });

  // 设置页面地址
  await pageDriver.setPageUrl('https://www.baidu.com');

  // 第一步：开始操作之前，等待页面加载完成
  await pageDriver.addAction('init', async (page) => {
    await page.waitFor('#su');
  });

  // 计算并返回结果
  return pageDriver.evaluate(() => {
    return {
      title: document.title,
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
