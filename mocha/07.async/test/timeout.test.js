var expect = require('chai').expect;

describe('timeout.test.js - 超时测试', function () {
    // 默认超时时间为 2s, 通过这个方法可以将超时时间修改为 4s
    // https://mochajs.org/#-timeout-ms-t-ms
    this.timeout(4000);

    it('测试应该 3000 毫秒后结束', function (done) {
        setTimeout(function () {
            expect(true).to.be.true;
            done();
        }, 3000);
    });
});
