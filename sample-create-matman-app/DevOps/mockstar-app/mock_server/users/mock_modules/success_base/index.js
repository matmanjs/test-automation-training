const { getSuccessData } = require("../../base");
const data = require('./mock.json');

module.exports = function (params) {
  return getSuccessData(data[params.q]);
};
