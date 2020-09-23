/**
 * mockstar 数据模拟中的基础桩数据设置
 *
 * @type {Object}
 */
const BASIC_QUERY_DATA_MAP = {
  // 获取用户信息
  users: 'success',
};

/**
 * 运行爬虫脚本之前的条件
 *
 * @type {Object}
 */
const WAIT = {
  READY: '#app .hello',
};

const PAGE_URL = 'https://now.qq.com/index.html';

module.exports = {
  WAIT,
  PAGE_URL,
  BASIC_QUERY_DATA_MAP,
};
