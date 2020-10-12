const { useJquery } = require('web-crawl-util');


/**
 * 列表项信息
 */
function getListTransactionItemInfo(parentSelector) {
  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.name = useJquery.getText('.info .flow-info', parentSelector);
    result.time = useJquery.getText('.info .flow-time', parentSelector);
    result.money = useJquery.getText('.money', parentSelector);
    result.isExpire = useJquery.isExist('.dated-icon', parentSelector);
    result.id = $(parentSelector).attr('data-id');
  }

  return result;
}

/**
 * 列表信息
 */
function getTransactionListInfo() {
  const parentSelector = '#root .display-transaction';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    // 总数
    result.total = useJquery.getTotal('.display-transaction-list .list-item', parentSelector);

    const list = [];

    $('.display-transaction-list .list-item', parentSelector).each(function () {
      list.push(getListTransactionItemInfo($(this)));
    });

    // 列表内容
    result.list = list;

    // 列表为空时的图片
    // result.emptyPic = useJquery.getBackgroundImageUrl('.display-transaction-empty .empty-pic', parentSelector);

    // 列表为空时的文字
    result.emptyWording = useJquery.getText('.display-transaction-empty p', parentSelector);
  }

  return result;
}

module.exports = () => ({
  transactionListInfo: getTransactionListInfo(),
});
