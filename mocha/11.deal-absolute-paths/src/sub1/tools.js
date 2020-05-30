var config = require('sub2/config');

function getName() {
    return config.name;
}

module.exports = {
    getName: getName
};