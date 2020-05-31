import { expect } from 'chai';
import add from '../../src/add';

describe('[子目录]加法函数的测试', () => {
    it('2 加 1 应该等于 3', () => {
        expect(add(2, 1)).to.be.equal(3);
    });
});
