import React from 'react';

import './index.less';

export default function PageSimple() {
  const ua = navigator.userAgent;

  return (
    <div id="container">
      <div id="debug-ua" className="section">
        <code className={'ua'}>{ua}</code>
      </div>
    </div>
  );
}
