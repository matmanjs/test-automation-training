import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default function TransactionEmpty(props) {
  const { wording = '' } = props;

  return (
    <div className="display-transaction-empty">
      <div className="empty-pic" />
      <p>{wording}</p>
    </div>
  );
}

TransactionEmpty.propTypes = {
  wording: PropTypes.string,
};

