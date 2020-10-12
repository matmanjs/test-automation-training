import React from 'react';

import Button from '../../now-base-button';

import './index.less';

export default function DisplayWithdrawSubmit(props) {
  const { disabled, enter } = props;

  return (
    <div className="withdraw-submit">
      <Button type={2} onClick={enter} style={{ width: '84%' }} disabled={disabled}>
        确定
      </Button>
    </div>
  );
}
