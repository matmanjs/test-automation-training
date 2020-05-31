var axios = require('axios');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function () {
    it('异步请求应该返回一个对象', function (done) {
        axios
            .get('https://www.qq.com')
            .then((res) => {
                expect(res).to.be.an('object');
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});
