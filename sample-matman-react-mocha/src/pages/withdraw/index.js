import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadedTag from './components/now-highorder-loaded-tag';
import Withdraw from './components/now-highorder-withdraw';
import Rule from './components/now-display-rule';
import Notice from './components/now-display-notice';

import { loadBalanceInfo } from './data/now-data-balance';
import { loadVerifyInfo } from './data/now-data-verify';

import { reportPv } from './report';

import './index.less';

class PageWithdraw extends Component {
  constructor(...props) {
    super(...props);

    reportPv();
  }

  componentDidMount() {
    this.loadRemoteData();
  }

  /**
   * 加载远程数据
   */
  loadRemoteData = () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[withdraw] loadRemoteData()');
    }

    this.fetch()
      .then((data) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('[withdraw] this.fetch() then', data);
        }

        this.handleOnReady(true, data);
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('[withdraw] this.fetch() catch', err);
        }

        this.handleOnReady(false, err);
      });
  };

  /**
   * 调用接口，获得CGI数据，后续的页面渲染和展示，依赖这个CGI的返回
   */
  fetch = () => {
    const fetchPromise = [this.props.loadBalanceInfo(), this.props.loadVerifyInfo()];

    return Promise.all(fetchPromise);
  };

  handleOnReady = () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[withdraw] handleOnReady()');
    }
  };

  render() {
    return (
      <div id="root">
        <LoadedTag />

        <Notice />
        <Withdraw />
        <Rule />
      </div>
    );
  }
}

PageWithdraw.propTypes = {
  loadBalanceInfo: PropTypes.func,
  loadVerifyInfo: PropTypes.func,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    loadBalanceInfo() {
      return dispatch(loadBalanceInfo());
    },

    loadVerifyInfo() {
      return dispatch(loadVerifyInfo());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWithdraw);
