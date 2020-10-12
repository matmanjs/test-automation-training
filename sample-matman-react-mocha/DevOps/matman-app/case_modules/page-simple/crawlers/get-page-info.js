const { useJquery } = require('web-crawl-util');


/**
 * 顶层图片信息
 */
function getTopImageInfo() {
  const parentSelector = '#anchors';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.anchor1 = useJquery.getImageDomUrl('.use-img', parentSelector);
    result.anchor2 = useJquery.getBackgroundImageUrl('.use-background', parentSelector);
  }

  return result;
}

/**
 * 规则说明
 */
function getMiddleRule() {
  const parentSelector = '#rules';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.text = useJquery.getText(parentSelector);
  }

  return result;
}

/**
 * 获取按钮状态
 */
function getButtonCondition() {
  const parentSelector = '.btn-group';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.active_btn = useJquery.getText('.active', parentSelector);
    result.disable_btn = useJquery.getText('.disable', parentSelector);
  }

  return result;
}

/**
 * 获取不能换行的文本
 */
function getOneLineText() {
  const parentSelector = '#tips';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.isOneLine = useJquery.getStyle('div.long-word', parentSelector).isOneLine;
    result.text = useJquery.getText('div.long-word', parentSelector);
  }

  return result;
}

module.exports = () => ({
  topImageInfo: getTopImageInfo(),
  middleRule: getMiddleRule(),
  buttonCondition: getButtonCondition(),
  oneLineText: getOneLineText(),
  remarks: 'Got data by npm package: web-crawl-util',
});
