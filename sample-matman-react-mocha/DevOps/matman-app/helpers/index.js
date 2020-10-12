const _ = require('lodash');
const matman = require('matman');
const { BrowserRunner } = require('matman-runner-puppeteer');

/**
 * 设置浏览器打开时所模拟的设备参数
 *
 * 内置的设备：https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts
 * 更多实践请查阅：https://github.com/matmanjs/test-automation-training/tree/master/matman/04.device-emulation
 */
const DEVICE = {
  // 内置的设备（iOS）：iPhone 6
  IOS_IPHONE_6: 'iPhone 6',

  // 内置的设备（安卓）：Galaxy Note 3
  ANDROID_GALAXY_NOTE_3: 'Galaxy Note 3',

  // 自定义设备
  CUSTOM_DEVICE: {
    name: 'My iPhone 6',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
};

/**
 * 创建端对端测试的 page driver
 *
 * @param {String} caseModuleFilePath caseModule的根目录，必须要绝对路径
 * @param {Object} pageDriverOpts PageDriver 额外参数
 * @param {Object} [queryDataMap] mock server 额外参数
 */
async function createPageDriver(caseModuleFilePath, pageDriverOpts, queryDataMap) {
  // 创建 PageDriver，API 详见 https://matmanjs.github.io/matman/api/
  const pageDriver = await matman.launch(
    new BrowserRunner(),
    _.merge({}, pageDriverOpts, { caseModuleFilePath }),
  );

  // 走指定的代理服务，由代理服务配置请求加载本地项目，从而达到同源测试的目的
  await pageDriver.useProxyServer(await matman.getLocalWhistleServer(8899));

  // 使用 mockstar 来做 mock server 用于构造假数据
  if (queryDataMap || pageDriverOpts.queryDataMap) {
    await pageDriver.useMockstar(_.merge({}, queryDataMap, pageDriverOpts.queryDataMap));
  }

  // 设置浏览器设备型号
  await pageDriver.setDeviceConfig(DEVICE.IOS_IPHONE_6);

  // 设置截屏
  await pageDriver.setScreenshotConfig(true);

  // 返回
  return pageDriver;
}

module.exports = {
  createPageDriver,
  DEVICE,
};
