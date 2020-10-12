import React from 'react';

import './index.less';

export default function DisplayWithdrawBalanceTips(props) {
  const { maxWithdrawMoney } = props;

  if (!maxWithdrawMoney) {
    return null;
  }

  return (
    <div className="withdraw-balance-tips row">
      <span className="value">可提现余额(元)：{maxWithdrawMoney / 100}</span>
    </div>
  );
}
