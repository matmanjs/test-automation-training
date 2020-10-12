import { WITHDRAW_MONEY_REQUEST_FAIL, WITHDRAW_MONEY_REQUEST_SUCCESS } from './action';

/**
 * @type {Object}
 */
const initialState = {
  isLoaded: false,

  // 提现金额
  amount: 0,
};

export default function withdrawMoneyInfo(state = initialState, action) {
  const { transferParam, type } = action;
  const update = {};

  switch (type) {
    case WITHDRAW_MONEY_REQUEST_SUCCESS:
      update.isLoaded = true;
      update.amount = transferParam.amount;
      break;

    case WITHDRAW_MONEY_REQUEST_FAIL:
      update.isLoaded = true;
      break;

    default:
      break;
  }

  return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
