const util = require('./util');

// 常规的写法
// const config = require('./util/config');

// 配置 resolve 之后的写法
const config = require('util/config');

function myTest(x, y) {
    return config.name + ': ' + x + '+' + y + '=' + util.add(x, y);
}

module.exports = myTest;

