import React from 'react';

import './index.less';

export default function DisplayWithdrawWalletTips(props) {
  const { uid } = props;

  return (
    <div className="withdraw-wallet-tips row">
      <span className="title">提现到QQ钱包：</span>
      <span className="value">{uid}</span>
    </div>
  );
}
