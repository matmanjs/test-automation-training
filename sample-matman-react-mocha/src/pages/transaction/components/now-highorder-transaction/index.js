import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DisplayTransaction from '../now-display-transaction';

class HighorderTransaction extends Component {
  render() {
    const { isLoaded, list } = this.props;

    return <DisplayTransaction isLoaded={isLoaded} list={list} />;
  }
}

HighorderTransaction.propTypes = {
  isLoaded: PropTypes.bool,
  list: PropTypes.array,
};

function mapStateToProps(state) {
  const { transactionInfo } = state;

  return {
    isLoaded: transactionInfo.isLoaded,
    list: transactionInfo.list,
  };
}

export default connect(mapStateToProps)(HighorderTransaction);
