const { expect } = require('chai');
const checkPage = require('../../../DevOps/matman-app/case_modules/users/basic-check-request.js');

/**
 * @author tangitan
 * @priority P1
 * @casetype e2e
 */
describe('端对端测试样例', function() {
    this.timeout(30000);
    let resultData;

    before(async function () {
        resultData = await checkPage({
            show: false,
            useRecorder: true,
            doNotCloseBrowser: true,
            queryDataMap: {
                users: 'success_base'
            }
        });
    });
    it('初始名称为yyx990803', () => {
        expect(resultData.get('init').info.githubName).to.be.equals('yyx990803');
    });

    it('点击按钮后更改为Jinjiang', () => {
        expect(resultData.get('click to change').info.githubName).to.be.equals('Jinjiang');
    });

    it('再次点击名称变回yyx990803', () => {
        expect(resultData.get('click to change again').info.githubName).to.be.equals('yyx990803');
    });
}) 