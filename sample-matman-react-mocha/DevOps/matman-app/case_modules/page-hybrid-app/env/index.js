const { createPageDriver } = require('../../../helpers');

/**
 * 运行爬虫脚本之前的条件
 *
 * @type {Object}
 */
const WAIT = {
  READY: '#root .page-hybrid-app',
};

/**
 * 获取页面的地址
 *
 * @param [isDev]
 * @return {String}
 */
function getPageUrl(isDev) {
  return 'http://now.qq.com/hybrid-app';
}

module.exports = {
  getPageUrl,
  WAIT,
  createPageDriver,
};
