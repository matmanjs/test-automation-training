const path = require('path');
const { expect } = require('chai');

const matman = require('matman');

describe('百度首页：常规检查，使用单文件形式', function () {
    this.timeout(30000);

    it('检查基本信息', function (done) {
        const MATMAN_ROOT_PATH = path.join(__dirname, '../');

        matman

            // 创建 Browser 对象，使用它对浏览器进行设置
            .launch({ show: process.env.SHOW_BROWSER || false })

            // 创建 Page 对象，使用它可以实现对浏览器页面的控制
            .newPage(__filename, {
                show: process.env.SHOW_BROWSER || false,
                doNotCloseBrowser: false,
                useRecorder: true,
                tag: __filename,
                rootPath: MATMAN_ROOT_PATH,
                caseModulesPath: __dirname
            })

            // 设置浏览器参数
            .setDeviceConfig({
                'UA': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua',
                'width': 1250,
                'height': 400
            })

            // 设置截屏
            .setScreenshotConfig(true)

            // 加载页面地址
            .goto('https://www.baidu.com')

            // 需要等待某些条件达成，才开始运行爬虫脚本
            .wait('#su')

            // 爬虫脚本的函数，用于获取页面中的数据
            .evaluate(() => {
                return {
                    title: document.title,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    userAgent: navigator.userAgent,
                    _version: Date.now(),
                    searchBtnTxt: document.querySelector('#su').value
                };
            })

            // 结束，获取结果
            .end()
            .then(function (matmanResult) {
                // console.log(JSON.stringify(matmanResult));
                const { data } = matmanResult;

                // 网站title应该为：百度一下，你就知道
                expect(data.title).to.equal('百度一下，你就知道');

                // 搜索按钮的文字应该为：百度一下
                expect(data.searchBtnTxt).to.equal('百度一下');

                //userAgent应该正确
                expect(data.userAgent).to.equal('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 mycustomua');

                done();
            });
    });
});
