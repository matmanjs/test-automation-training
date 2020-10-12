import React from 'react';
import PropTypes from 'prop-types';

import TransactionList from './transaction-list';
import TransactionEmpty from './transaction-empty';

import './index.less';

export default function DisplayTransaction(props) {
  const { isLoaded, list = [] } = props;

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="display-transaction">
      {
        list.length ? (
          <TransactionList list={list} />
        ) : (
          <TransactionEmpty wording={'暂无流水记录'} />
        )
      }
    </div>
  );
}

DisplayTransaction.propTypes = {
  isLoaded: PropTypes.bool,
  list: PropTypes.array,
};
