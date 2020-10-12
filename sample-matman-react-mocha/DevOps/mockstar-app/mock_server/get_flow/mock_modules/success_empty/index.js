const base = require('../../base');

module.exports = function (params) {
  return base.getSuccessData({
    appid: params.appid,
    flow_type: params.type,
    flow_data: [],
  });
};
