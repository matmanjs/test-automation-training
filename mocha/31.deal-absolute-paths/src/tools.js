const util = require('./util');
const config = require('./util/config');

function myTest(x, y) {
    return config.name + ': ' + x + '+' + y + '=' + util.add(x, y);
}

module.exports = myTest;

