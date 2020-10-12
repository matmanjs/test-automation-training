/**
 * mockstar 数据模拟中的基础桩数据设置
 *
 * @type {Object}
 */
const BASIC_QUERY_DATA_MAP = {
  // 查询余额
  get_balance: 'success_2340',

  // 拉取认证状态
  get_verify_status: 'success_all_ok',

  // 申请提现
  withdraw_money: 'success',
};

/**
 * 运行爬虫脚本之前的条件
 *
 * @type {Object}
 */
const WAIT = {
  READY: '#loaded',
};

module.exports = {
  BASIC_QUERY_DATA_MAP,
  WAIT,
};
