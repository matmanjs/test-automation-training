import sinon from 'sinon';
import { expect, assert } from 'chai';

function once(fn) {
    let returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

describe('sinon.fake 使用示例', () => {
    it('sinon.fake 直接调用返回匿名函数', () => {
        // create a fake that returns the text "foo"
        const fake = sinon.fake.returns('foo');
        fake(); 
        // foo
        expect(fake()).to.equal('foo');
    });

    it('sinon.fake 调用once原始函数一次', function () {
        const callback = sinon.fake();
        const proxy = once(callback);
    
        proxy();
    
        assert(callback.called);
    });

    it('sinon.fake 调用once原始函数两次', function () {
        const callback = sinon.fake();
        const proxy = once(callback);
    
        proxy();
        proxy();
    
        assert(callback.calledOnce);
    });

    it('sinon.fake 更改once的this指向并传参', function () {
        const callback = sinon.fake();
        const proxy = once(callback);
        const obj = {};
    
        proxy.call(obj, 1, 2, 3);
    
        assert(callback.calledOn(obj));
        assert(callback.calledWith(1, 2, 3));
    });

    it('sinon.fake 设置函数行为', function () {
        const callback = sinon.fake.returns(42);
        const proxy = once(callback);
        expect(proxy()).to.equal(42);
    });
});