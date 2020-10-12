import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.less';

class DisplayWithdrawQuatosItem extends PureComponent {
  handleClick = () => {
    const { selectQuota, index, num, maxWithdrawMoney } = this.props;

    // 如果当前金额不足以提现，则不响应其点击
    if (maxWithdrawMoney < num) {
      return;
    }

    selectQuota(index);
  };

  render() {
    const { num, index, withdrawMoney, maxWithdrawMoney } = this.props;

    const className = classnames({
      [`i${index}`]: true,
      item: true,
      available: num <= maxWithdrawMoney,
      active: withdrawMoney === num,
    });

    return (
      <span className={className} onClick={this.handleClick}>
        {' '}
        {`${num / 100}元`}{' '}
      </span>
    );
  }
}

DisplayWithdrawQuatosItem.propTypes = {
  num: PropTypes.number,
  index: PropTypes.number,
  withdrawMoney: PropTypes.number,
  maxWithdrawMoney: PropTypes.number,
  selectQuota: PropTypes.func,
};

export default function DisplayWithdrawQuotas(props) {
  const { maxWithdrawMoney, withdrawMoney, afterTaxedMoney, quotas, selectQuota } = props;

  return (
    <div className="display-withdraw-quotas">
      <span className="title">提现金额(元)</span>

      <div className="selection">
        {quotas.map((item, index) => (
          <DisplayWithdrawQuatosItem
            key={index}
            index={index}
            num={item}
            withdrawMoney={withdrawMoney}
            maxWithdrawMoney={maxWithdrawMoney}
            selectQuota={selectQuota}
          />
        ))}
      </div>

      {afterTaxedMoney ? (
        <p className="tips-taxed">
          实际到账：{afterTaxedMoney / 100}元<br />
          (根据国家税务总局规定收取20%红包个人所得税)
        </p>
      ) : null}
    </div>
  );
}

DisplayWithdrawQuotas.propTypes = {
  quotas: PropTypes.array,
  afterTaxedMoney: PropTypes.number,
  withdrawMoney: PropTypes.number,
  maxWithdrawMoney: PropTypes.number,
  selectQuota: PropTypes.func,
};
