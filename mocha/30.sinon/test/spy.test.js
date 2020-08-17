import sinon from 'sinon';
import { expect } from 'chai';

describe('sinon.spy 使用示例', () => {
    it('sinon.spy 直接调用返回匿名函数', () => {
        const spy = sinon.spy();

        // 我们可以像调用函数一样调用一个spy
        spy('Hello', 'World');

        // 现在我们可以获取关于这次调用的信息
        expect(spy.firstCall.args).to.deep.equal(['Hello', 'World']); //output: ['Hello', 'World']
    });

    it('sinon.spy 监听对象方法', () => {
        const user = {
            setName: function(name){
                this.name = name;
            }
        }
        // 为setName方法创建一个spy
        const setNameSpy = sinon.spy(user, 'setName');
        
        // 现在开始，每次调用这个方法时，相关信息都会被记录下来
        user.setName('tangitan');
        
        // 通过spy对象可以查看这些记录的信息
        expect(setNameSpy.callCount).to.equal(1);
        
        // 重要的最后一步，移除spy
        setNameSpy.restore();
    });

    it('sinon.spy 监听对象属性的更新和赋值', () => {
        const object = {
            get test() {
                return this.property;
            },
            set test(value) {
                this.property = value * 2;
            }
        };
        const spy = sinon.spy(object, "test", ["get", "set"]);
        object.test = 42;
        expect(spy.set.calledOnce).to.be.true;
        expect(object.test).to.equal(84);
        expect(spy.get.calledOnce).to.be.true;
    });
});