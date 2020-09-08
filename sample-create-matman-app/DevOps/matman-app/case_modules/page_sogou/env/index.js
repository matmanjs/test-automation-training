/**
 * mockstar 数据模拟中的基础桩数据设置
 *
 * @type {Object}
 */
const BASIC_QUERY_DATA_MAP = {
  demo_cgi: 'debug',
};

/**
 * 运行爬虫脚本之前的条件
 *
 * @type {Object}
 */
const WAIT = {
  READY: '#btn',
};

/**
 * 页面地址
 * @type {String}
 */
const PAGE_URL = 'https://www.sogou.com/sogou.html';

module.exports = {
  WAIT,
  BASIC_QUERY_DATA_MAP,
  PAGE_URL,
};
