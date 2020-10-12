const { useJquery } = require('web-crawl-util');

/**
 * 消息提示
 */
function getNoticeInfo() {
  const parentSelector = '#root .display-notice';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.txt = useJquery.getText('.txt', parentSelector);
  }

  return result;
}

/**
 * 提现区域
 */
function getWithdrawInfo() {
  const parentSelector = '#root .display-withdraw';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.walletTips = useJquery.getText('.withdraw-wallet-tips', parentSelector);
    result.quotaTitle = useJquery.getText('.display-withdraw-quotas .title', parentSelector);

    result.quotaCount = useJquery.getTotal(
      '.display-withdraw-quotas .selection .item',
      parentSelector,
    );

    function getQuotaItem(i) {
      const jqDom = $(`.display-withdraw-quotas .selection .item.i${i}`, parentSelector);
      return {
        text: useJquery.getText(jqDom),
        isAvailable: jqDom.hasClass('available'),
        isSelected: jqDom.hasClass('active'),
      };
    }

    result.quota0 = getQuotaItem(0);
    result.quota1 = getQuotaItem(1);
    result.quota2 = getQuotaItem(2);

    result.taxedTips = useJquery.getText('.display-withdraw-quotas .tips-taxed', parentSelector);
    result.balanceTips = useJquery.getText('.withdraw-balance-tips', parentSelector);

    result.submitTxt = useJquery.getText('.withdraw-submit .now-button', parentSelector);
    result.isSubmitActive = !$('.withdraw-submit .now-button', parentSelector)
      .hasClass('disabled');
  }

  return result;
}

/**
 * 规则区域
 */
function getRuleInfo() {
  const parentSelector = '#root .display-rule';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    function getRuleItem(i) {
      const jqDom = $(`.section-${i}`, parentSelector);

      const title = useJquery.getText('h2', jqDom);
      const rules = [];
      $('p', jqDom)
        .each(function () {
          rules.push($.trim($(this)
            .text()));
        });

      return {
        title,
        rules,
      };
    }

    result.count = useJquery.getTotal('.section', parentSelector);

    result.rule0 = getRuleItem(1);
    result.rule1 = getRuleItem(2);
    result.rule2 = getRuleItem(3);
  }

  return result;
}

/**
 * 弹窗提示，某些情况下才可能会出现
 */
function getAlertInfo() {
  const parentSelector = '.base-alert';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.content = useJquery.getText('.dialog-inner .dialog-text .text', parentSelector);
    result.btnTxt = useJquery.getText(
      '.dialog-inner .dialog-buttons .dialog-btn.ok',
      parentSelector,
    );
  }

  return result;
}

/**
 * toast提示，某些情况下才可能会出现
 */
function getToastInfo() {
  const parentSelector = '.now-apptoast';

  const result = {
    isExist: useJquery.isExist(parentSelector),
  };

  if (result.isExist) {
    result.content = useJquery.getText(parentSelector);
  }

  return result;
}

module.exports = () => ({
  noticeInfo: getNoticeInfo(),
  withdrawInfo: getWithdrawInfo(),
  ruleInfo: getRuleInfo(),
  alertInfo: getAlertInfo(),
  toastInfo: getToastInfo(),
});
