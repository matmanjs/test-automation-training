import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithdrawWalletTips from './withdraw-wallet-tips';
import WithdrawQuotas from './withdraw-quotas';
import WithdrawBalanceTips from './withdraw-balance-tips';
import WithdrawSubmit from './withdraw-submit';

import './index.less';

export default class DisplayWithdraw extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // 最大允许提现金额，提现金额不能够超过用户的红包余额
      maxWithdrawMoney: 0,

      // 当前选择要提现的金额
      withdrawMoney: 0,

      // 税后金额，为实际所得
      afterTaxedMoney: 0,
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    // 可提现的最大值为用户红包的余额值
    if (nextProps.available !== this.props.available) {
      this.initMaxWithdrawMoney(nextProps.available);
    }
  }

  componentDidMount() {
    this.initMaxWithdrawMoney(this.props.available);
  }

  /**
   * 初始化最大可提现金额
   * @param {Number} available 接口返回的用户剩余金额
   */
  initMaxWithdrawMoney(available) {
    this.setState({
      maxWithdrawMoney: available,
    });
  }

  /**
   * 处理提交提现操作的逻辑
   */
  handleWithdrawMoney = () => {
    const { withdrawMoney, afterTaxedMoney, maxWithdrawMoney } = this.state;

    this.props
      .handleWithdrawMoney(withdrawMoney, afterTaxedMoney, maxWithdrawMoney)
      .then((newMaxWithdrawMoney) => {
        this.setState({
          maxWithdrawMoney: newMaxWithdrawMoney,
          withdrawMoney: 0,
          afterTaxedMoney: 0,
        });
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('handleWithdrawMoney err', err);
        }
      });
  };

  /**
   * 处理选择提现金额时的逻辑
   * @param {Number} index 提现额度按钮的序号
   */
  handleSelectQuota = (index) => {
    const { maxWithdrawMoney } = this.state;
    const { quotas } = this.props;
    const quotaValue = quotas[index];

    this.props
      .handleSelectQuota(quotaValue, maxWithdrawMoney)
      .then((result) => {
        this.setState({
          withdrawMoney: result.withdrawMoney,
          afterTaxedMoney: result.afterTaxedMoney,
        });
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.error('handleSelectQuota err', err, quotaValue, maxWithdrawMoney);
        }
      });
  };

  render() {
    const { uid, quotas } = this.props;
    const { maxWithdrawMoney, withdrawMoney, afterTaxedMoney } = this.state;

    return (
      <div className="display-withdraw">
        <WithdrawWalletTips uid={uid} />

        <WithdrawQuotas
          maxWithdrawMoney={maxWithdrawMoney}
          withdrawMoney={withdrawMoney}
          afterTaxedMoney={afterTaxedMoney}
          quotas={quotas}
          selectQuota={this.handleSelectQuota}
        />

        <WithdrawBalanceTips maxWithdrawMoney={maxWithdrawMoney} />

        <WithdrawSubmit disabled={!withdrawMoney} enter={this.handleWithdrawMoney} />
      </div>
    );
  }
}

DisplayWithdraw.propTypes = {
  uid: PropTypes.string,
  available: PropTypes.bool,
  quotas: PropTypes.array,
  handleSelectQuota: PropTypes.func,
  handleWithdrawMoney: PropTypes.func,
};
