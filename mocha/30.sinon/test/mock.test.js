import sinon from 'sinon';

describe('sinon.mock 使用示例', () => {
    it('sinon.mock 监听一个对象', () => {
        const myAPI = { method: function () {} };
        const mock = sinon.mock(myAPI);
        // 对myAPI的method方法设置会调用一次的期望
        mock.expects("method").once();
        // 调用该方法
        myAPI.method();
        // 验证期望
        mock.verify();
    });
});