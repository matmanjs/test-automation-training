import React from 'react';

import './index.less';

export default function DisplayRule() {
  return (
    <div className="display-rule">
      <div className="section section-1">
        <h2>提现及税费规则</h2>
        <p>1. 规则说明一；</p>
        <p>2. 规则说明二；</p>
        <p>3. 规则说明三；</p>
      </div>

      <div className="section section-2">
        <h2>税费说明</h2>
        <p>这是税费说明。</p>
      </div>

      <div className="section section-3">
        <h2>代缴方案</h2>
        <p>这是代缴方案说明。</p>
      </div>
    </div>
  );
}
