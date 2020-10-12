const { expect } = require('chai');

const checkPage = require('../../../DevOps/matman-app/case_modules/page-hybrid-app/call-by-iframe');

describe('hybrid 页面：使用 iframe 方式调用 jsbridge', function () {
  this.timeout(30000);

  let matmanResult;

  before(async () => {
    matmanResult = await checkPage({
      show: false,
      doNotCloseBrowser: false,
      useRecorder: true,
    });
  });

  describe('实际调用了 tnow://callByIframe?name=matman', () => {
    let data;

    before(() => {
      data = matmanResult.data;
    });

    it('tnow://callByIframe 匹配成功', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByIframe')).to.be.true;
    });

    it('tnow://callByIframe?name=matman 匹配成功', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByIframe?name=matman')).to.be.true;
    });

    it('tnow://callByIframe 且 {"name":"matman"} 匹配成功', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByIframe', { name: 'matman' })).to.be.true;
    });

    it('tnow://callByIframeSomeOne 匹配失败', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByIframeSomeOne')).to.be.false;
    });

    it('tnow://callByIframe?name=matman222 匹配失败', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByIframe?name=matman222')).to.be.false;
    });

    it('tnow://callByIframe 且 {"name":"matman222"} 匹配失败', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByIframe', { name: 'matman222' })).to.be.false;
    });
  });
});
