const { expect } = require('chai');

const checkPage = require('../../../DevOps/matman-app/case_modules/page-transaction/basic-check');

describe('transaction 页面：无流水信息检查', function () {
  this.timeout(30000);

  let matmanResult;

  before(async () => {
    matmanResult = await checkPage({
      show: false,
      doNotCloseBrowser: false,
      useRecorder: true,
      queryDataMap: {
        get_flow: 'success_empty',
      },
    });
  });

  describe('检查基本信息', () => {
    let data;

    before(() => {
      data = matmanResult.get('init');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        transactionListInfo: {
          // 'emptyPic': 'http://now.qq.com/img/nopkdata@2x_c3c9fbba.png',
          emptyWording: '暂无流水记录',
          isExist: true,
          list: [],
          total: 0,
        },
      });
    });
  });
});
