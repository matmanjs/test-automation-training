import sinon from 'sinon';
import { assert } from 'chai';
 
describe('sinon.useFakeTimers 使用示例', () => {
    it('sinon.useFakeTimers 模拟setTimeout和nextTick', () => {
        const clock = sinon.useFakeTimers({
            now: 1483228800000,
            toFake: ['setTimeout', 'nextTick']
        });

        let called = false;

        process.nextTick(function () {
            called = true;
        });

        setTimeout(() => {
            return true;
        }, 1000);

        clock.runAll(); //forces nextTick calls to flush synchronously
        assert(called);
    });
});