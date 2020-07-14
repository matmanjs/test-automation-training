const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

// 本文件中的功能需要搭配 mockstar 与 whistle 共同使用
// 具体使用方式请参考两者文档
// 在运行本示例前, 请分别运行 whistle 项目与 mockstar-app 项目
module.exports = async () => {
  // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
  const pageDriver = matman.launch(new BrowserRunner(), {
    useRecorder: true,
    show: true,
    doNotCloseBrowser: true,
  });

  // 为测试设置代理, 与浏览器中启动 SwitchyOmega 是一样的效果
  await pageDriver.useProxyServer('127.0.0.1:8899');

  // 这个函数必须搭配 mockstar 使用, 其可以指定不同 mocker 的返回结果
  // 接受的参数为一个对象
  // key: mocker 名称 value: 需要返回的数据名称
  await pageDriver.useMockstar({
    demo2: 'success_type_1',
    demo_cgi: 'error_100000',
  });

  // 设置页面地址
  await pageDriver.setPageUrl('https://now.qq.com');

  await pageDriver.addAction('init', async (page) => {
    await page.waitFor('#button2');
  });

  await pageDriver.addAction('click1', async (page) => {
    await page.click('#button1');
    await page.waitFor('#wait1');
  });

  await pageDriver.addAction('click2', async (page) => {
    await page.click('#button2');
    await page.waitFor('#wait2');
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
