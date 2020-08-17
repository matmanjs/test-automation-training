import sinon from 'sinon';
import { expect } from 'chai';

describe('sinon.stub 使用示例', () => {
    it('sinon.stub 直接调用返回匿名函数', () => {
        const stub = sinon.stub();

        stub('hello');

        expect(stub.firstCall.args).to.deep.equal(['hello']);
    });

    it('sinon.stub 替换对象函数并设置行为', () => {
        const stub = sinon.stub();
        // 预设行为，stub函数调用返回值为54
        stub.returns(54);
        expect(stub()).to.equal(54);
    });

    it('sinon.stub 替换对象函数并模拟实际调用的函数', () => {
        const myObj = {};
        myObj.prop = function propFn() {
            return 'foo';
        };
        // 对myObj的prop方法进行预设行为，当调用这个方法的时候实际会调用fakeFn这个函数
        sinon.stub(myObj, 'prop').callsFake(function fakeFn() {
            return 'bar';
        });
        expect(myObj.prop()).to.equal('bar');
    });
});