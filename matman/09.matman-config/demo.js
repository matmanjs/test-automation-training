const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

module.exports = async () => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  // 我们可以在 lunch 的第三个参数中传递 matman 的配置
  // 不过一般不推荐你这样做
  // 请在项目根目录中新建 matman.config.js 文件并在其中写入配置
  // 更多配置说明, 请参考 https://matmanjs.github.io/matman/api/matman-config.html
  const pageDriver = matman.launch(
    new BrowserRunner(),
    {},
    {
      crawlerInjectJQuery: true,
      isDevBuild: true,
    }
  );

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
