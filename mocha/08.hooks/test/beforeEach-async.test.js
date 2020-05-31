var expect = require('chai').expect;

describe('beforeEach示例-异步操作', function () {
    var foo = false;

    beforeEach(function (done) {
        setTimeout(function () {
            foo = true;
            done();
        }, 50);
    });

    it('全局变量异步修改应该成功', function () {
        expect(foo).to.be.equal(true);
    });
});
