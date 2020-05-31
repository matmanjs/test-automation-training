var add = require('../src/add.js');
var expect = require('chai').expect;

describe.only('[describe.only]加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });

    it.skip('任何数加0应该等于自身', function () {
        expect(add(1, 0)).to.be.equal(1);
    });
});


describe('加法函数的测试[no only]', function () {
    it('2 加 2 应该等于 4', function () {
        expect(add(2, 2)).to.be.equal(4);
    });
});
