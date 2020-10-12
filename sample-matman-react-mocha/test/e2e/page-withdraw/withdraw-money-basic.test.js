const { expect } = require('chai');

const checkPage = require('../../../DevOps/matman-app/case_modules/page-withdraw/withdraw-money-basic');

describe('withdraw：验证提现操作的基本逻辑', function () {
  this.timeout(30000);

  let matmanResult;

  before(async () => {
    matmanResult = await checkPage({
      show: false,
      doNotCloseBrowser: false,
      useRecorder: true,
    });
  });

  describe('第一步：开始操作之前', () => {
    let data;

    before(() => {
      data = matmanResult.get('init');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: { isExist: false },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：23.4',
          isExist: true,
          isSubmitActive: false,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: true, isSelected: false, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('【15元】按钮可以被选择', () => {
      expect(data.withdrawInfo.quota1.isAvailable).to.be.true;
    });

    it('【15元】按钮未被选中', () => {
      expect(data.withdrawInfo.quota1.isSelected).to.be.false;
    });

    it('【30元】按钮不可选择', () => {
      expect(data.withdrawInfo.quota2.isAvailable).to.be.false;
    });

    it('没有扣税提示', () => {
      expect(data.withdrawInfo.taxedTips).to.be.empty;
    });

    it('【确定】按钮为非激活态，即不可点击', () => {
      expect(data.withdrawInfo.isSubmitActive).to.be.false;
    });
  });

  describe('第二步：还未选择提现金额之前，直接点击【确定】按钮', () => {
    let data;

    before(() => {
      data = matmanResult.get('clickSubmitBeforeSelect');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: {
          btnTxt: '确定',
          content: '请先选择金额之后再提现！',
          isExist: true,
        },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：23.4',
          isExist: true,
          isSubmitActive: false,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: true, isSelected: false, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('弹出提示框，提示：请先选择金额之后再提现', () => {
      expect(data.alertInfo.content).to.equal('请先选择金额之后再提现！');
    });
  });

  describe('第三步：点击提示没有选择金额的弹窗中的【确定】按钮', () => {
    let data;

    before(() => {
      data = matmanResult.get('clickNotSelectMoneyDlgOk');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: { isExist: false },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：23.4',
          isExist: true,
          isSubmitActive: false,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: true, isSelected: false, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('提示框消失', () => {
      expect(data.alertInfo.isExist).to.be.false;
    });
  });

  describe('第四步：选中【30元】', () => {
    let data;

    before(() => {
      data = matmanResult.get('selectQuota30');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: { isExist: false },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：23.4',
          isExist: true,
          isSubmitActive: false,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: true, isSelected: false, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('【30元】按钮没有被选中', () => {
      expect(data.withdrawInfo.quota2.isSelected).to.be.false;
    });

    it('【确定】按钮没有变为激活态', () => {
      expect(data.withdrawInfo.isSubmitActive).to.be.false;
    });

    it('余额提示： 23.4', () => {
      expect(data.withdrawInfo.balanceTips).to.equal('可提现余额(元)：23.4');
    });
  });

  describe('第五步：选中【15元】', () => {
    let data;

    before(() => {
      data = matmanResult.get('selectQuota15');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: { isExist: false },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：23.4',
          isExist: true,
          isSubmitActive: true,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: true, isSelected: true, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '实际到账：12元(根据国家税务总局规定收取20%红包个人所得税)',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('【15元】按钮已被选中', () => {
      expect(data.withdrawInfo.quota1.isSelected).to.be.true;
    });

    it('扣税提示：实际到账4元', () => {
      expect(data.withdrawInfo.taxedTips).to.equal('实际到账：12元(根据国家税务总局规定收取20%红包个人所得税)',);
    });

    it('【确定】按钮为激活态，即可点击', () => {
      expect(data.withdrawInfo.isSubmitActive).to.be.true;
    });

    it('余额提示： 23.4', () => {
      expect(data.withdrawInfo.balanceTips).to.equal('可提现余额(元)：23.4');
    });
  });

  describe('第六步：点击【确定】按钮', () => {
    let data;

    before(() => {
      data = matmanResult.get('clickSubmit');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: {
          btnTxt: '确定',
          content:
            '你的15元（税前）提现申请已提交，税后实际到账12元。请到QQ钱包-点击QQ钱包余额数字-交易记录查看。',
          isExist: true,
        },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：23.4',
          isExist: true,
          isSubmitActive: true,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: true, isSelected: true, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '实际到账：12元(根据国家税务总局规定收取20%红包个人所得税)',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('弹出提示框，提示成功', () => {
      expect(data.alertInfo.content).to.equal('你的15元（税前）提现申请已提交，税后实际到账12元。请到QQ钱包-点击QQ钱包余额数字-交易记录查看。',);
    });

    it('请求了 withdraw_money 接口（提现接口）', () => {
      const result = matmanResult.isExistXHR(
        '//cgi.now.qq.com/cgi-bin/a/b/withdraw_money',
        {
          activeid: 10001,
          amount: 1500,
        },
        200,
      );

      expect(result).to.be.true;
    });
  });

  describe('第七步：点击弹窗中的【确定】按钮', () => {
    let data;

    before(() => {
      data = matmanResult.get('clickDlgOk');
    });

    it('数据快照校验通过', () => {
      expect(data).to.eql({
        alertInfo: { isExist: false },
        noticeInfo: { isExist: true, txt: '活动提现截止至2019年6月30日' },
        ruleInfo: {
          count: 3,
          isExist: true,
          rule0: {
            rules: ['1. 规则说明一；', '2. 规则说明二；', '3. 规则说明三；'],
            title: '提现及税费规则',
          },
          rule1: { rules: ['这是税费说明。'], title: '税费说明' },
          rule2: { rules: ['这是代缴方案说明。'], title: '代缴方案' },
        },
        toastInfo: { isExist: false },
        withdrawInfo: {
          balanceTips: '可提现余额(元)：8.4',
          isExist: true,
          isSubmitActive: false,
          quota0: { isAvailable: true, isSelected: false, text: '5元' },
          quota1: { isAvailable: false, isSelected: false, text: '15元' },
          quota2: { isAvailable: false, isSelected: false, text: '30元' },
          quotaCount: 3,
          quotaTitle: '提现金额(元)',
          submitTxt: '确定',
          taxedTips: '',
          walletTips: '提现到QQ钱包：123456',
        },
      });
    });

    it('提示框被关闭', () => {
      expect(data.alertInfo.isExist).to.be.false;
    });

    it('余额提示： 8.4', () => {
      expect(data.withdrawInfo.balanceTips).to.equal('可提现余额(元)：8.4');
    });

    it('【15元】按钮不可选择', () => {
      expect(data.withdrawInfo.quota1.isAvailable).to.be.false;
    });

    it('请求了 get_balance 接口（获取余额信息）', () => {
      const result = matmanResult.isExistXHR(
        '//cgi.now.qq.com/cgi-bin/a/b/get_balance',
        {
          activeid: 10001,
        },
        200,
      );

      expect(result).to.be.true;
    });
  });

  describe('第八步：一秒后再次获取页面状态', () => {
    let data;

    before(() => {
      data = matmanResult.get('lastCheck');
    });

    it('跳转到了首页', () => {
      expect(matmanResult.isExistPage('/abc/index', {}, 200)).to.be.true;
    });
  });
});
