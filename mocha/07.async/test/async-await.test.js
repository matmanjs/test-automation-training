var axios = require('axios');
var expect = require('chai').expect;

describe('async-await.test.js - 异步测试', function () {
    it('异步请求应该返回一个对象', async function () {
        const res = await axios.get('https://www.qq.com');
        expect(res).to.be.an('object');
    });
});
