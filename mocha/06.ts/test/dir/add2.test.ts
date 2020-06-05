import { expect } from 'chai';
import add from '../../src/add';

describe('[子目录]加法函数的测试', function () {
    it('2 加 1 应该等于 3', function () {
        expect(add(2, 1)).to.be.equal(3);
    });
});
