const path = require('path');
const { expect } = require('chai');
const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

describe('百度首页：常规检查（单文件）', function () {
  this.timeout(30000);

  let resultData;

  before(async function () {
    const MATMAN_ROOT_PATH = path.join(__dirname, '../');

    // 创建 PageDriver 对象，使用它可以实现对浏览器页面的控制
    const pageDriver = matman.launch(new BrowserRunner(), {
      rootPath: MATMAN_ROOT_PATH,
    });

    // 设置浏览器参数
    await pageDriver.setDeviceConfig({
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
      viewport: {
        width: 1250,
        height: 400,
      },
    });

    // 设置截屏
    await pageDriver.setScreenshotConfig(true);

    // 加载页面地址
    await pageDriver.setPageUrl('https://www.baidu.com');

    // 需要等待某些条件达成，才开始运行爬虫脚本
    await pageDriver.addAction('SCAN_PAGE', async (page) => {
      await page.waitFor('#su');
    });

    // 结束，获取结果
    resultData = await pageDriver.evaluate(() => {
      return {
        title: document.title,
        width: window.innerWidth,
        height: window.innerHeight,
        userAgent: navigator.userAgent,
        _version: Date.now(),
        searchBtnTxt: document.querySelector('#su').value,
      };
    });
  });

  describe('检查基本信息', function () {
    let data;

    before(function () {
      data = resultData.data[0];
    });

    it('网站title应该为：百度一下，你就知道', function () {
      expect(data.title).to.equal('百度一下，你就知道');
    });

    it('搜索按钮的文字应该为：百度一下', function () {
      expect(data.searchBtnTxt).to.equal('百度一下');
    });

    it('userAgent应该正确', function () {
      expect(data.userAgent).to.equal(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
      );
    });
  });
});
