import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

function TransactionListItem(props) {
  const { item } = props;

  return (
        <div
            className={`list-item ${item.isDated ? 'dated' : ''}`}
            data-id={`${item.id}`}
        >

            <div className="info">
                <div className="flow-info">{item.wording}</div>
                <div className="flow-time">{item.dateToShow}</div>
            </div>

            {
                item.isDated ? <div className="dated-icon" /> : null
            }

            <div className="money">
                {
                    item.isReduceType ? (
                        <span className="minus">-</span>
                    ) : (
                        <span className="plus">+</span>
                    )
                }

                {item.moneyToShow}
            </div>

        </div>
  );
}

TransactionListItem.propTypes = {
  item: PropTypes.object,
};


export default function TransactionList(props) {
  const { list } = props;

  return (
        <div className="display-transaction-list">
            {
                list.map((item, index) => (
                        <TransactionListItem key={index} index={index} item={item} />
                ))
            }
        </div>
  );
}

TransactionList.propTypes = {
  list: PropTypes.array,
};
