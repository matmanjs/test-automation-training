/**
 * 顶层图片信息
 */
function getTopImageInfo() {
  const parentSelector = '#anchors';

  const result = {
    isExist: $(parentSelector).length > 0,
  };

  if (result.isExist) {
    result.anchor1 = $.trim($('.use-img', parentSelector).attr('src'));
    result.anchor2 = (document.defaultView
      .getComputedStyle($('.use-background', parentSelector)[0])
      .backgroundImage.match(/url\("(.*)"\)/) || [])[1] || '';
  }

  return result;
}

/**
 * 规则说明
 */
function getMiddleRule() {
  const parentSelector = '#rules';

  const result = {
    isExist: $(parentSelector).length > 0,
  };

  if (result.isExist) {
    result.text = $.trim($(parentSelector).text());
  }

  return result;
}

/**
 * 获取按钮状态
 */
function getButtonCondition() {
  const parentSelector = '.btn-group';

  const result = {
    isExist: $(parentSelector).length > 0,
  };

  if (result.isExist) {
    result.active_btn = $.trim($('.active', parentSelector).text());
    result.disable_btn = $.trim($('.disable', parentSelector).text());
  }

  return result;
}

/**
 * 获取不能换行的文本
 */
function getOneLineText() {
  const parentSelector = '#tips';

  const result = {
    isExist: $(parentSelector).length > 0,
  };

  if (result.isExist) {
    const computedStyle = document.defaultView.getComputedStyle($('div.long-word', parentSelector)[0],);
    result.isOneLine = parseInt(computedStyle.height) === parseInt(computedStyle.lineHeight);
    result.text = $.trim($('div.long-word', parentSelector).text());
  }

  return result;
}

module.exports = () => ({
  topImageInfo: getTopImageInfo(),
  middleRule: getMiddleRule(),
  buttonCondition: getButtonCondition(),
  oneLineText: getOneLineText(),
  remarks: 'Got data by native jQuery!',
});
