var axios = require('axios');
var expect = require('chai').expect;

describe('promise.test.js - 异步测试', function () {
    it('异步请求应该返回一个对象', function () {
        return axios
            .get('https://api.github.com')
            .then(function (res) {
                expect(res).to.be.an('object');
                return res;
            });
    });
});
