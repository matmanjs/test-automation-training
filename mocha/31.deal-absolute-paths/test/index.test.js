var path = require('path');
require('app-module-path').addPath(path.join(__dirname, '../src'));

var myTest = require('../src/index');
var expect = require('chai').expect;

describe('对有绝对路径引用的测试', function () {
    it('myTest 应该为 pro-mocha=3', function () {
        expect(myTest()).to.be.equal('pro-mocha=3');
    });
});
