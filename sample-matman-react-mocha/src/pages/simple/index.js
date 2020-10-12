import React from 'react';

import './index.less';

export default function PageSimple() {
  const anchorPic1 = '//pic.url.cn/hy_personal/33ab1df8c733dfb724654cb8d9b8fe91647fc4ed4ade9ec4002d92f0e8867248/640';
  const anchorPic2 = '//pic.url.cn/hy_personal/e308b9c90742cc3c5c67334b6db49b19f891e8d507212fde3af431b8b8597b02/640';

  return (
    <div id="container">
      <div id="anchors" className="section">
        <img className="use-img" src={anchorPic1} alt="推荐主播1" />

        <div className="use-background" style={{ backgroundImage: `url(${anchorPic2})` }} />
      </div>

      <div id="rules" className="section">
        <h2>规则说明：</h2>

        <p>1.第一条规则；</p>
        <p>2.第二条规则；</p>
        <p>
          3.第三条规则，这条规则很长，会自动换行展示自动换行展示自动换行展示自动换行展示自动换行展示；
        </p>

        <div className="btn-group">
          <div className="btn active">同意</div>
          <div className="btn disable">不同意</div>
        </div>
      </div>

      <div id="tips" className="section">
        <h2>友情提示：</h2>

        <div className="long-word">
          我简单说两句，我很长，但是不能够换行不能够换行不能够换行不能够换行不能够换行不能够换行不能够换行
        </div>
      </div>
    </div>
  );
}
