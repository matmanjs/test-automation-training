const baseCgi = require('../../helpers/base-cgi');

const defaultData = {
  result: 0,

  // 提现额度列表
  quotas: [500, 1500, 3000],

  // 当前还剩余多少金额
  cur_money: 0,
};

/**
 * 获得成功类型的数据
 *
 * @param {Object | Promise} data 可能是plain object，也可能是 Promise
 * @returns {Promise}
 */
function getSuccessData(data = {}) {
  return baseCgi.success(data, defaultData);
}

/**
 * 获得失败类型的数据
 *
 * @param {Number | Promise} errCode 可能是Number，也可能是 Promise
 * @param {String} [errMsg] 错误信息
 * @returns {Promise}
 */
function getErrorData(errCode, errMsg) {
  return baseCgi.error(errCode, errMsg);
}

module.exports = {
  getSuccessData,
  getErrorData,
};
