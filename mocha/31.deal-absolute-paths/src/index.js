var tools = require('sub1/tools');
var util = require('./util');

function myTest() {
    return tools.getName() + '=' + util.add(1, 2);
}

module.exports = myTest;

