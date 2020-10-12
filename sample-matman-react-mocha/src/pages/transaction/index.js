import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Transaction from './components/now-highorder-transaction';

import { loadFlow } from './data/now-data-transaction';

import './index.less';

class PageTransaction extends Component {
  componentDidMount() {
    // 请求接口
    this.props.loadFlow();
  }

  render() {
    return (
      <div className="page-transaction">
        <Transaction />
      </div>
    );
  }
}

PageTransaction.propTypes = {
  loadFlow: PropTypes.func,
};

function mapStateToProps(state) {
  const { transactionInfo } = state;

  return {
    isLoaded: transactionInfo.isLoaded,
    list: transactionInfo.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadFlow() {
      return dispatch(loadFlow());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTransaction);
