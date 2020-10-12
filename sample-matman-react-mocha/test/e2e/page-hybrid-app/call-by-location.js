const { expect } = require('chai');

const checkPage = require('../../../DevOps/matman-app/case_modules/page-hybrid-app/call-by-location');

describe('hybrid 页面：使用 location 方式调用 jsbridge', function () {
  this.timeout(30000);

  let matmanResult;

  before(async () => {
    matmanResult = await checkPage({
      show: false,
      doNotCloseBrowser: false,
      useRecorder: true,
    });
  });

  describe('实际调用了 tnow://callByLocation?name=matman', () => {
    let data;

    before(() => {
      data = matmanResult.get('index');
    });

    it('tnow://callByLocation 匹配成功', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByLocation')).to.be.true;
    });

    it('tnow://callByLocation?name=matman 匹配成功', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByLocation?name=matman')).to.be.true;
    });

    it('tnow://callByLocation 且 {"name":"matman"} 匹配成功', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByLocation', { name: 'matman' })).to.be.true;
    });

    it('tnow://callByLocationSomeOne 匹配失败', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByLocationSomeOne')).to.be.false;
    });

    it('tnow://callByLocation?name=matman222 匹配失败', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByLocation?name=matman222')).to.be.false;
    });

    it('tnow://callByLocation 且 {"name":"matman222"} 匹配失败', () => {
      expect(matmanResult.isExistJSBridge('tnow://callByLocation', { name: 'matman222' })).to.be
        .false;
    });
  });
});
