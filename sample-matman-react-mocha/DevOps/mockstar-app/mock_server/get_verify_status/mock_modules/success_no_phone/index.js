const base = require('../../base');

module.exports = function () {
  return base.getSuccessData({
    id_verify_ts: parseInt(Date.now() / 1000),
    phone_verify_ts: 0,
  });
};
