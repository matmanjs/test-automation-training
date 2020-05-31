var path = require('path');
require('app-module-path').addPath(path.join(__dirname, '../src'));

var myTest = require('../src/tools');
var expect = require('chai').expect;

describe('对有绝对路径引用的测试', function () {
    it('myTest(1,2) 应该为 test-automation-training-mocha: 1+2=3', function () {
        expect(myTest(1,2)).to.be.equal('test-automation-training-mocha: 1+2=3');
    });
});
