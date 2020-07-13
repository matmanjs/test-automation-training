const path = require('path');
const { expect } = require('chai');

const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

describe('百度首页：常规检查，使用单文件形式', function () {
  this.timeout(30000);

  it('检查基本信息', async function () {
    const pageDriver = matman.launch(new BrowserRunner(), {
      show: process.env.SHOW_BROWSER || false,
      doNotCloseBrowser: false,
      useRecorder: true,
      tag: __filename,
      caseModulesPath: __dirname,
    });

    // 设置浏览器打开时所模拟的设备参数
    await pageDriver.setDeviceConfig({
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
      viewport: {
        width: 1024,
        height: 520,
      },
    });

    // 设置截屏
    await pageDriver.setScreenshotConfig(true);

    // 设置页面地址
    await pageDriver.setPageUrl('https://www.baidu.com');

    // 等待页面加载完成
    await pageDriver.addAction('init', async (page) => {
      await page.waitFor('#su');
    });

    // 计算并返回结果
    const matmanResult = await pageDriver.evaluate(() => {
      return {
        title: document.title,
        width: window.innerWidth,
        height: window.innerHeight,
        userAgent: navigator.userAgent,
        _version: Date.now(),
        searchBtnTxt: document.querySelector('#su').value,
      };
    });

    // console.log(JSON.stringify(matmanResult));
    const data = matmanResult.get('init');

    // 网站title应该为：百度一下，你就知道
    expect(data.title).to.equal('百度一下，你就知道');

    // 搜索按钮的文字应该为：百度一下
    expect(data.searchBtnTxt).to.equal('百度一下');

    //userAgent应该正确
    expect(data.userAgent).to.equal(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua'
    );
  });
});
