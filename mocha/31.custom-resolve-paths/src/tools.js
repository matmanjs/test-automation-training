// 常规的写法
// const utils = require('./utils');
// const config = require('./utils/config');

// 配置 resolve 之后的写法
const utils = require('utils');
const config = require('utils/config');

function myTest(x, y) {
    return config.name + ': ' + x + '+' + y + '=' + utils.add(x, y);
}

module.exports = myTest;

