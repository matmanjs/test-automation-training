const { expect } = require('chai');

const checkPage = require('../../../DevOps/matman-app/case_modules/page_sogou/basic-check');

describe('搜狗首页：点击获取信息(error_100000)', function () {
  this.timeout(30000);

  let resultData;

  before(async () => {
    resultData = await checkPage({
      show: false,
      doNotCloseBrowser: false,
      useRecorder: true,
      queryDataMap: {
        demo_cgi: 'error_100000',
      },
    });
  });

  describe('第一步：开始操作之前，等待页面加载完成', () => {
    let data;

    before(() => {
      data = resultData.get('init');
    });

    it('数据快照正确', () => {
      expect(data).to.eql({
        webviewInfo: {
          title: 'hi jack in sogou.html',
          width: 1024,
          height: 520,
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
        },
        sayHelloInfo: {
          isExist: true,
          wording: '你好，我不是 www.sogou.com',
        },
        msgInfo: {
          isExist: true,
          wording: '我是原始信息，请点击下面按钮之后可更新信息',
          isSuccess: false,
          isLoaded: false,
        },
        btnInfo: {
          isExist: true,
          wording: '点击我获取新的信息！',
        },
      });
    });

    it('消息信息为原始信息', () => {
      expect(data.msgInfo.wording).to.be.equal('我是原始信息，请点击下面按钮之后可更新信息');
    });
  });

  describe('第二步：点击按钮', () => {
    let data;

    before(() => {
      data = resultData.get('click');
    });

    it('数据快照正确', () => {
      expect(data).to.eql({
        webviewInfo: {
          title: 'hi jack in sogou.html',
          width: 1024,
          height: 520,
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
        },
        sayHelloInfo: {
          isExist: true,
          wording: '你好，我不是 www.sogou.com',
        },
        msgInfo: {
          isExist: true,
          wording: '来自接口返回： {"retcode":100000,"err_msg":"error msg!"}',
          isSuccess: false,
          isLoaded: true,
        },
        btnInfo: {
          isExist: true,
          wording: '点击我获取新的信息！',
        },
      });
    });

    it('消息信息已更新为新信息', () => {
      expect(data.msgInfo.wording).to.be.equal('来自接口返回： {"retcode":100000,"err_msg":"error msg!"}');
    });

    it('消息信息类型：失败', () => {
      expect(data.msgInfo.isSuccess).to.be.false;
    });
  });
});
